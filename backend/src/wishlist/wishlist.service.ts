import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class WishlistService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    return this.prisma.wishlist.findMany({
      where: { userId },
      include: { product: { include: { images: true, category: true } } },
      orderBy: { createdAt: "desc" },
    })
  }

  async toggle(data: { userId: string; productId: string }) {
    const existing = await this.prisma.wishlist.findUnique({
      where: { userId_productId: data },
    })

    if (existing) {
      await this.prisma.wishlist.delete({ where: { id: existing.id } })
      return { added: false }
    }

    await this.prisma.wishlist.create({ data })
    return { added: true }
  }
}
