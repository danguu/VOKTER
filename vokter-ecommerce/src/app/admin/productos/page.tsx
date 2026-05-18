"use client"

import { useState } from "react"
import { Plus, Search, Edit, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"

export default function AdminProductosPage() {
  const [search, setSearch] = useState("")

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Productos</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} productos en catálogo</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Nuevo producto
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Producto</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Marca</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Categoría</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Precio</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Stock</th>
                  <th className="text-center py-3 px-2 font-medium text-muted-foreground">Estado</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr key={product.id} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-secondary/30 flex items-center justify-center text-[8px] text-muted-foreground overflow-hidden">
                          <span className="text-center leading-tight px-1">{product.name.slice(0, 20)}</span>
                        </div>
                        <span className="font-medium truncate max-w-[200px]">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-muted-foreground">{product.brand}</td>
                    <td className="py-3 px-2 text-muted-foreground">{product.category.name}</td>
                    <td className="py-3 px-2 text-right font-medium">{formatPrice(product.salePrice ?? product.price)}</td>
                    <td className="py-3 px-2 text-right">{product.stock}</td>
                    <td className="py-3 px-2 text-center">
                      <Badge variant={product.stock > 0 ? "default" : "destructive"} className="text-xs">
                        {product.stock > 0 ? "Activo" : "Agotado"}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
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
