import { Injectable, NotFoundException, ConflictException } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class CouponsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.coupon.findMany({ orderBy: { createdAt: "desc" } })
  }

  async findById(id: string) {
    const coupon = await this.prisma.coupon.findUnique({ where: { id } })
    if (!coupon) throw new NotFoundException("Cupón no encontrado")
    return coupon
  }

  async findByCode(code: string) {
    return this.prisma.coupon.findUnique({ where: { code } })
  }

  async create(data: { code: string; discount: number; type?: string; maxUses?: number; expiresAt?: string }) {
    const existing = await this.prisma.coupon.findUnique({ where: { code: data.code } })
    if (existing) throw new ConflictException("El código de cupón ya existe")
    return this.prisma.coupon.create({
      data: {
        code: data.code,
        discount: data.discount,
        type: data.type || "percentage",
        maxUses: data.maxUses,
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : undefined,
      },
    })
  }

  async update(id: string, data: { code?: string; discount?: number; type?: string; maxUses?: number; expiresAt?: string; isActive?: boolean }) {
    const coupon = await this.findById(id)
    return this.prisma.coupon.update({
      where: { id },
      data: {
        ...(data.code ? { code: data.code } : {}),
        ...(data.discount ? { discount: data.discount } : {}),
        ...(data.type ? { type: data.type } : {}),
        ...(data.maxUses !== undefined ? { maxUses: data.maxUses } : {}),
        ...(data.expiresAt ? { expiresAt: new Date(data.expiresAt) } : {}),
        ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
      },
    })
  }

  async delete(id: string) {
    await this.findById(id)
    await this.prisma.coupon.delete({ where: { id } })
  }

  async validate(code: string, purchaseAmount?: number) {
    const coupon = await this.prisma.coupon.findUnique({ where: { code } })
    if (!coupon) throw new NotFoundException("Cupón no válido")
    if (!coupon.isActive) throw new NotFoundException("Cupón desactivado")
    if (coupon.expiresAt && new Date() > coupon.expiresAt) throw new NotFoundException("Cupón expirado")
    if (coupon.maxUses && coupon.usedCount >= coupon.maxUses) throw new NotFoundException("Cupón agotado")
    return coupon
  }
}
