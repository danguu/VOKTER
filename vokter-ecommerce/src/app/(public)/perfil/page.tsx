"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ShoppingBag, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useOrders } from "@/hooks/useOrders"
import { formatPrice } from "@/lib/utils"

const menuItems = [
  { icon: Heart, label: "Wishlist", desc: "Productos guardados", href: "/wishlist" },
  { icon: MapPin, label: "Direcciones", desc: "Gestiona tus direcciones", href: "#" },
  { icon: CreditCard, label: "Métodos de pago", desc: "Tarjetas y cuentas", href: "#" },
  { icon: ShoppingBag, label: "Ir a la tienda", desc: "Explorar productos", href: "/tienda" },
  { icon: Settings, label: "Configuración", desc: "Preferencias de cuenta", href: "#" },
]

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  PENDING: { label: "Pendiente", variant: "outline" },
  CONFIRMED: { label: "Confirmado", variant: "secondary" },
  PROCESSING: { label: "Procesando", variant: "secondary" },
  SHIPPED: { label: "Enviado", variant: "default" },
  DELIVERED: { label: "Entregado", variant: "default" },
  CANCELLED: { label: "Cancelado", variant: "destructive" },
}

export default function PerfilPage() {
  const { data: session } = useSession()
  const { data: orders, isLoading } = useOrders()
  const user = session?.user

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U"

  return (
    <div className="container py-8 md:py-12 space-y-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="text-lg bg-primary/20 text-primary">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{user?.name || "Mi Cuenta"}</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
          {user?.role === "ADMIN" && (
            <span className="text-xs text-primary font-medium">Administrador</span>
          )}
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Package className="h-4 w-4" /> Mis pedidos
          </CardTitle>
          {orders && orders.length > 0 && (
            <span className="text-xs text-muted-foreground">{orders.length} pedidos</span>
          )}
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
            </div>
          ) : orders && orders.length > 0 ? (
            <div className="space-y-3">
              {orders.map((order: any) => {
                const status = statusLabels[order.status] ?? { label: order.status, variant: "outline" }
                return (
                  <Link key={order.id} href={`/pedido-confirmado/${order.id}`}>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-border/40 hover:bg-secondary/20 transition-colors">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          #{order.id.slice(0, 8)} — {new Date(order.createdAt).toLocaleDateString("es-MX")}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant={status.variant} className="text-xs">{status.label}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {order.items?.length ?? 0} producto(s)
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold">{formatPrice(order.total)}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8 space-y-3">
              <Package className="h-8 w-8 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No tienes pedidos aún</p>
              <Link href="/tienda">
                <Button size="sm">Explorar productos</Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Card className="border-border/40 bg-card/30 hover:bg-card transition-colors cursor-pointer h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <item.icon className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Button variant="outline" className="text-destructive hover:text-destructive" onClick={() => signOut()}>
        <LogOut className="h-4 w-4 mr-2" /> Cerrar sesión
      </Button>
    </div>
  )
}
