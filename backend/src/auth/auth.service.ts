import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcryptjs"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(email: string, password: string, name: string) {
    const existing = await this.prisma.user.findUnique({ where: { email } })
    if (existing) {
      throw new UnauthorizedException("El email ya está registrado")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.prisma.user.create({
      data: { email, password: hashedPassword, name },
    })

    const token = this.jwtService.sign({ id: user.id, email: user.email, role: user.role })
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (!user) {
      throw new UnauthorizedException("Credenciales inválidas")
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      throw new UnauthorizedException("Credenciales inválidas")
    }

    const token = this.jwtService.sign({ id: user.id, email: user.email, role: user.role })
    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token }
  }

  async validateUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) throw new UnauthorizedException("Usuario no encontrado")
    return { id: user.id, name: user.name, email: user.email, role: user.role }
  }
}
