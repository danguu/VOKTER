"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, MoreHorizontal } from "lucide-react"

const clients = [
  { name: "Admin Vokter", email: "admin@vokter.com", role: "Admin", orders: 0, spent: 0 },
  { name: "Demo User", email: "user@vokter.com", role: "Cliente", orders: 3, spent: 285000 },
]

export default function AdminClientesPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Clientes</h1>
        <p className="text-sm text-muted-foreground">Gestiona los usuarios registrados</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Usuarios registrados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Usuario</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Email</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Rol</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Pedidos</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Gastado</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.email} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {client.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{client.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">{client.email}</td>
                    <td className="py-3 px-2 text-center">
                      <Badge variant={client.role === "Admin" ? "default" : "secondary"} className="text-xs">
                        {client.role}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right">{client.orders}</td>
                    <td className="py-3 px-2 text-right">${client.spent.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
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
