"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Users, MousePointerClick, TrendingUp, Plus } from "lucide-react"
import { toast } from "sonner"

export default function MarketingPage() {
  const [campaigns] = useState([
    { id: "1", name: "Bienvenida nuevos usuarios", type: "email", status: "Activa", sent: 45, clicked: 12 },
    { id: "2", name: "Ofertas de temporada", type: "email", status: "Borrador", sent: 0, clicked: 0 },
    { id: "3", name: "Recordatorio carrito abandonado", type: "email", status: "Activa", sent: 28, clicked: 8 },
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Marketing</h1>
          <p className="text-sm text-muted-foreground">Campañas y comunicación con clientes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nueva campaña
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Campañas activas</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{campaigns.filter(c => c.status === "Activa").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total enviados</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{campaigns.reduce((a, c) => a + c.sent, 0)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasa de clics</CardTitle>
            <MousePointerClick className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {campaigns.reduce((a, c) => a + c.sent, 0) > 0
                ? Math.round(campaigns.reduce((a, c) => a + c.clicked, 0) / campaigns.reduce((a, c) => a + c.sent, 0) * 100)
                : 0}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Suscriptores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Campañas de email</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 border border-border/40 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{campaign.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {campaign.type === "email" ? "Email" : campaign.type} — {campaign.sent} enviados, {campaign.clicked} clics
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    campaign.status === "Activa" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-muted text-muted-foreground"
                  }`}>
                    {campaign.status}
                  </span>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Enviar notificación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Asunto</label>
              <Input placeholder="Asunto del mensaje" />
            </div>
            <div>
              <label className="text-sm font-medium">Mensaje</label>
              <Textarea placeholder="Escribe el mensaje..." rows={4} />
            </div>
            <Button>
              <Send className="mr-2 h-4 w-4" /> Enviar a todos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
