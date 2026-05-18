"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

export default function AdminConfiguracionPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Configuración</h1>
        <p className="text-sm text-muted-foreground">Ajustes generales de la tienda</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Información de la tienda</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre de la tienda</Label>
            <Input id="name" defaultValue="VOKTER Studio" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email de contacto</Label>
            <Input id="email" type="email" defaultValue="hola@vokterstudio.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Moneda</Label>
            <Input id="currency" defaultValue="MXN" />
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" /> Guardar cambios
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Envío</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="freeShipping">Envío gratis a partir de</Label>
            <Input id="freeShipping" type="number" defaultValue="999" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="shippingCost">Costo de envío estándar</Label>
            <Input id="shippingCost" type="number" defaultValue="99" />
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" /> Guardar cambios
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
