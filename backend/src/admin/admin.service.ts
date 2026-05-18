import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboard() {
    const [totalProducts, totalOrders, totalUsers, totalRevenue, recentOrders, lowStock, topProducts] = await Promise.all([
      this.prisma.product.count(),
      this.prisma.order.count(),
      this.prisma.user.count(),
      this.prisma.order.aggregate({ _sum: { total: true } }),
      this.prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true, email: true } }, items: { include: { product: { select: { title: true } } } } },
      }),
      this.prisma.product.findMany({ where: { stock: { lte: 5, gt: 0 } }, orderBy: { stock: "asc" }, take: 10 }),
      this.prisma.product.findMany({ orderBy: { rating: "desc" }, take: 5, select: { title: true, rating: true, stock: true } }),
    ])

    return {
      stats: {
        totalProducts,
        totalOrders,
        totalUsers,
        totalRevenue: totalRevenue._sum.total || 0,
      },
      recentOrders,
      lowStock,
      topProducts,
    }
  }

  async getAnalytics() {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    const [totalRevenue, totalOrders, totalUsers, totalProducts, ordersLast30, revenueLast30] = await Promise.all([
      this.prisma.order.aggregate({ _sum: { total: true } }),
      this.prisma.order.count(),
      this.prisma.user.count(),
      this.prisma.product.count(),
      this.prisma.order.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
      this.prisma.order.aggregate({ where: { createdAt: { gte: thirtyDaysAgo } }, _sum: { total: true } }),
    ])

    const avgTicket = totalOrders > 0 ? Math.round((totalRevenue._sum.total || 0) / totalOrders) : 0

    return {
      totalRevenue: totalRevenue._sum.total || 0,
      totalOrders,
      totalUsers,
      totalProducts,
      ordersLast30,
      revenueLast30: revenueLast30._sum.total || 0,
      averageTicket: avgTicket,
    }
  }
}
