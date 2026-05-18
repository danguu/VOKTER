"use client"

import { Plus, Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const coupons = [
  { code: "BIENVENIDO10", discount: "10%", type: "Porcentaje", min: "$500", uses: 0, maxUses: 100, active: true },
  { code: "ENVIOFREE", discount: "Envío gratis", type: "Fijo", min: "$1,000", uses: 0, maxUses: 50, active: true },
  { code: "VOKTER25", discount: "25%", type: "Porcentaje", min: "$2,000", uses: 0, maxUses: 30, active: false },
]

export default function AdminCuponesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cupones</h1>
          <p className="text-sm text-muted-foreground">Gestiona descuentos y promociones</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Nuevo cupón
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Cupones activos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Código</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Descuento</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Tipo</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Mínimo</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Usos</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Estado</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => (
                  <tr key={coupon.code} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-2 font-mono font-medium text-primary">{coupon.code}</td>
                    <td className="py-3 px-2">{coupon.discount}</td>
                    <td className="py-3 px-2 text-muted-foreground">{coupon.type}</td>
                    <td className="py-3 px-2 text-muted-foreground">{coupon.min}</td>
                    <td className="py-3 px-2 text-center">{coupon.uses}/{coupon.maxUses}</td>
                    <td className="py-3 px-2 text-center">
                      <Badge variant={coupon.active ? "default" : "secondary"} className="text-xs">
                        {coupon.active ? "Activo" : "Inactivo"}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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
