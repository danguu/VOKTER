"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { DollarSign, ShoppingBag, Users, Package, TrendingUp, ArrowRight, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { adminApi } from "@/services/admin-api"

interface DashboardData {
  stats: { totalProducts: number; totalOrders: number; totalUsers: number; totalRevenue: number }
  recentOrders: any[]
  lowStock: any[]
  topProducts: { title: string; rating: number; stock: number }[]
}

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminApi.analytics.dashboard()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  const stats = data ? [
    { label: "Productos", value: String(data.stats.totalProducts), icon: Package, change: "En catálogo", href: "/admin/productos" },
    { label: "Pedidos", value: String(data.stats.totalOrders), icon: ShoppingBag, change: "Totales", href: "/admin/pedidos" },
    { label: "Clientes", value: String(data.stats.totalUsers), icon: Users, change: "Registrados", href: "/admin/clientes" },
    { label: "Ingresos", value: `$${(data.stats.totalRevenue / 100).toFixed(2)}`, icon: DollarSign, change: "Totales", href: "/admin/analytics" },
  ] : []

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Panel de administración VOKTER</p>
        </div>
        <Link href="/">
          <Button variant="outline" size="sm">
            Ver tienda <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.label} href={stat.href}>
              <Card className="hover:bg-secondary/20 transition-colors cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Stock bajo</CardTitle>
            <Badge variant="destructive" className="text-xs">{data?.lowStock.length || 0} productos</Badge>
          </CardHeader>
          <CardContent>
            {data?.lowStock && data.lowStock.length > 0 ? (
              <div className="space-y-3">
                {data.lowStock.map((product: any) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-destructive shrink-0" />
                      <span className="text-sm truncate max-w-[200px]">{product.title}</span>
                    </div>
                    <span className="text-sm font-medium text-destructive">{product.stock} uds</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No hay productos con stock bajo.</p>
            )}
            <Link href="/admin/productos">
              <Button variant="link" size="sm" className="mt-4 px-0">Gestionar inventario <ArrowRight className="ml-1 h-3 w-3" /></Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Acceso rápido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/admin/productos">
              <Button className="w-full justify-start" variant="outline">
                <Package className="mr-2 h-4 w-4" /> Gestionar productos
              </Button>
            </Link>
            <Link href="/admin/pedidos">
              <Button className="w-full justify-start" variant="outline">
                <ShoppingBag className="mr-2 h-4 w-4" /> Ver pedidos
              </Button>
            </Link>
            <Link href="/admin/analytics">
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" /> Ver analytics
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
