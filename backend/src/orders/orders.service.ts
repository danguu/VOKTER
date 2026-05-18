import { Injectable, NotFoundException } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId?: string) {
    const where = userId ? { userId } : {}
    return this.prisma.order.findMany({
      where,
      include: {
        items: { include: { product: { include: { images: true } } } },
        payment: true,
      },
      orderBy: { createdAt: "desc" },
    })
  }

  async findById(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: { include: { product: { include: { images: true } } } },
        payment: true,
      },
    })
    if (!order) throw new NotFoundException("Orden no encontrada")
    return order
  }

  async create(data: {
    userId: string
    items: { productId: string; quantity: number; price: number; variantId?: string }[]
    total: number
    shippingCost: number
  }) {
    return this.prisma.order.create({
      data: {
        userId: data.userId,
        total: data.total,
        shippingCost: data.shippingCost,
        items: { create: data.items },
      },
      include: { items: true },
    })
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.order.update({
      where: { id },
      data: { status: status as any },
    })
  }
}
