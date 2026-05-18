"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"

const orders = [
  { id: "ORD-001", customer: "Carlos M.", date: "15 May 2025", total: 185000, status: "Entregado", payment: "Pagado" },
  { id: "ORD-002", customer: "Andrea G.", date: "14 May 2025", total: 52000, status: "En tránsito", payment: "Pagado" },
  { id: "ORD-003", customer: "Miguel R.", date: "13 May 2025", total: 45000, status: "Procesando", payment: "Pagado" },
  { id: "ORD-004", customer: "Sofia L.", date: "12 May 2025", total: 149000, status: "Pendiente", payment: "Pendiente" },
]

const statusColors: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Entregado: "default",
  "En tránsito": "secondary",
  Procesando: "outline",
  Pendiente: "destructive",
}

export default function AdminPedidosPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pedidos</h1>
        <p className="text-sm text-muted-foreground">Gestiona las órdenes de clientes</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Últimos pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Orden</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Cliente</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Fecha</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Total</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Estado</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Pago</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-2 font-medium">{order.id}</td>
                    <td className="py-3 px-2 text-muted-foreground">{order.customer}</td>
                    <td className="py-3 px-2 text-muted-foreground">{order.date}</td>
                    <td className="py-3 px-2 text-right">${order.total.toLocaleString()}</td>
                    <td className="py-3 px-2 text-center">
                      <Badge variant={statusColors[order.status]} className="text-xs">
                        {order.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Badge variant={order.payment === "Pagado" ? "default" : "secondary"} className="text-xs">
                        {order.payment}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
