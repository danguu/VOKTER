"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, DollarSign, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PagosPage() {
  const [payments] = useState([
    { id: "PAY-001", order: "ORD-001", customer: "Admin Vokter", amount: 2599, method: "Tarjeta", status: "Pagado", date: "2026-05-17" },
    { id: "PAY-002", order: "ORD-002", customer: "Demo User", amount: 4599, method: "Transferencia", status: "Pendiente", date: "2026-05-16" },
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Pasarela de pagos</h1>
          <p className="text-sm text-muted-foreground">Configuración y transacciones</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingresos totales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${(payments.filter(p => p.status === "Pagado").reduce((a, p) => a + p.amount, 0) / 100).toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Transacciones</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{payments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pagadas</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{payments.filter(p => p.status === "Pagado").length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{payments.filter(p => p.status === "Pendiente").length}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Transacciones recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-2 font-medium">ID</th>
                  <th className="text-left py-3 px-2 font-medium">Orden</th>
                  <th className="text-left py-3 px-2 font-medium">Cliente</th>
                  <th className="text-left py-3 px-2 font-medium">Monto</th>
                  <th className="text-left py-3 px-2 font-medium">Método</th>
                  <th className="text-left py-3 px-2 font-medium">Estado</th>
                  <th className="text-left py-3 px-2 font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border/40">
                    <td className="py-3 px-2 font-mono text-xs">{payment.id}</td>
                    <td className="py-3 px-2">{payment.order}</td>
                    <td className="py-3 px-2">{payment.customer}</td>
                    <td className="py-3 px-2">${(payment.amount / 100).toFixed(2)}</td>
                    <td className="py-3 px-2">{payment.method}</td>
                    <td className="py-3 px-2">
                      <Badge variant={payment.status === "Pagado" ? "default" : "secondary"}>
                        {payment.status === "Pagado" ? <CheckCircle2 className="h-3 w-3 mr-1 inline" /> : <XCircle className="h-3 w-3 mr-1 inline" />}
                        {payment.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2">{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Configuración de pagos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Proveedor</label>
              <Input value="Stripe" disabled className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Moneda</label>
              <Input value="MXN" disabled className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Comisión (%)</label>
              <Input value="2.9" disabled className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium">Estatus</label>
              <Input value="Activo" disabled className="mt-1" />
            </div>
          </div>
          <Button variant="outline">Configurar Stripe</Button>
        </CardContent>
      </Card>
    </div>
  )
}
