import { Injectable, NotFoundException } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: { category?: string; search?: string; featured?: boolean; brand?: string; minPrice?: number; maxPrice?: number }) {
    const where: any = {}

    if (query.category) where.category = { slug: query.category }
    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: "insensitive" } },
        { brand: { contains: query.search, mode: "insensitive" } },
      ]
    }
    if (query.featured) where.featured = true
    if (query.brand) where.brand = query.brand
    if (query.minPrice || query.maxPrice) {
      where.price = {}
      if (query.minPrice) where.price.gte = query.minPrice
      if (query.maxPrice) where.price.lte = query.maxPrice
    }

    return this.prisma.product.findMany({
      where,
      include: { images: true, category: true, variants: true },
      orderBy: { createdAt: "desc" },
    })
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug },
      include: {
        images: true,
        variants: true,
        specifications: true,
        category: true,
        reviews: { include: { user: { select: { id: true, name: true, image: true } } } },
      },
    })
    if (!product) throw new NotFoundException("Producto no encontrado")
    return product
  }

  async findById(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { images: true, variants: true, specifications: true, category: true },
    })
    if (!product) throw new NotFoundException("Producto no encontrado")
    return product
  }

  async create(data: {
    title: string
    slug: string
    description?: string
    categoryId: string
    brand: string
    price: number
    salePrice?: number
    stock?: number
    featured?: boolean
  }) {
    return this.prisma.product.create({ data })
  }

  async update(id: string, data: any) {
    return this.prisma.product.update({ where: { id }, data })
  }

  async delete(id: string) {
    return this.prisma.product.delete({ where: { id } })
  }
}
