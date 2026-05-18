"use client"

import { use } from "react"
import Link from "next/link"
import { CheckCircle, Package, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOrder } from "@/hooks/useOrders"
import { formatPrice } from "@/lib/utils"

export default function PedidoConfirmadoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { data: order, isLoading } = useOrder(id)

  if (isLoading) {
    return (
      <div className="container py-20 text-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto" />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold">Pedido no encontrado</h1>
        <Link href="/perfil">
          <Button>Ir a mis pedidos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12 max-w-2xl mx-auto text-center space-y-8">
      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Pedido confirmado</h1>
        <p className="text-muted-foreground mt-2">
          Gracias por tu compra. Te enviaremos un email con los detalles.
        </p>
      </div>

      <Card className="text-left">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Package className="h-4 w-4" /> Pedido #{order.id?.slice(0, 8)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {order.items?.map((item: any) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {item.product?.name ?? "Producto"} x{item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className="border-t border-border/40 pt-3 flex justify-between font-bold">
            <span>Total</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Link href="/perfil">
          <Button className="w-full">Ver mis pedidos</Button>
        </Link>
        <Link href="/tienda">
          <Button variant="outline" className="w-full">
            <ArrowLeft className="h-4 w-4 mr-2" /> Seguir comprando
          </Button>
        </Link>
      </div>
    </div>
  )
}
