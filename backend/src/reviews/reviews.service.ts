import { Injectable, NotFoundException, ConflictException } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async findByProduct(productId: string) {
    return this.prisma.review.findMany({
      where: { productId },
      include: { user: { select: { id: true, name: true, image: true } } },
      orderBy: { createdAt: "desc" },
    })
  }

  async create(data: { productId: string; userId: string; rating: number; comment?: string; image?: string }) {
    const existing = await this.prisma.review.findUnique({
      where: { productId_userId: { productId: data.productId, userId: data.userId } },
    })
    if (existing) throw new ConflictException("Ya has reseñado este producto")

    const review = await this.prisma.review.create({ data })

    const stats = await this.prisma.review.aggregate({
      where: { productId: data.productId },
      _avg: { rating: true },
      _count: true,
    })

    await this.prisma.product.update({
      where: { id: data.productId },
      data: { rating: stats._avg.rating ?? 0 },
    })

    return review
  }
}
