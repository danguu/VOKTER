"use client"

import { DollarSign, ShoppingBag, Users, TrendingUp, TrendingDown, Package, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { label: "Ingresos totales", value: "$0", icon: DollarSign, change: "+0%", positive: true },
  { label: "Pedidos", value: "0", icon: ShoppingBag, change: "+0%", positive: true },
  { label: "Clientes", value: "2", icon: Users, change: "+0%", positive: true },
  { label: "Ticket promedio", value: "$0", icon: TrendingUp, change: "+0%", positive: true },
  { label: "Productos vendidos", value: "0", icon: Package, change: "—", positive: true },
  { label: "Tasa de conversión", value: "0%", icon: TrendingDown, change: "—", positive: false },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Métricas y rendimiento de la tienda</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {stat.change !== "—" && (
                    stat.positive
                      ? <TrendingUp className="h-3 w-3 text-green-500" />
                      : <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={`text-xs ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Próximamente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <p className="text-sm">Gráficos de ventas, productos más vendidos y abandono de carrito próximamente.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
