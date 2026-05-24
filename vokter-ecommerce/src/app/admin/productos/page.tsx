"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Edit, Trash2, X, Save, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

import { useProductsStore } from "@/stores"
import { formatPrice } from "@/lib/utils"
import type { Product, Category } from "@/types"
import { CATEGORIES } from "@/constants"

const emptyProduct = {
  id: "", name: "", slug: "", description: "", brand: "", price: 0, stock: 0,
  category: { id: "", name: "", slug: "", description: "", image: "" },
  images: [""], featured: false, rating: 0, reviewsCount: 0,
  specifications: [], variants: [], createdAt: new Date().toISOString().split("T")[0],
}

export default function AdminProductosPage() {
  const { products, loading, error, fetchProducts, addProduct, updateProduct, deleteProduct } = useProductsStore()
  const [search, setSearch] = useState("")
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [isNew, setIsNew] = useState(false)
  const [form, setForm] = useState<Product>({ ...emptyProduct } as Product)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
  )

  function openEdit(product: Product) {
    setEditProduct(product)
    setForm({ ...product })
    setIsNew(false)
  }

  function openNew() {
    const id = String(Date.now())
    const newProduct = { ...emptyProduct, id, slug: `nuevo-${id}` } as Product
    setEditProduct(newProduct)
    setForm(newProduct)
    setIsNew(true)
  }

  function save() {
    if (!form.name || !form.brand || !form.price) return
    if (isNew) {
      addProduct({ ...form, id: String(Date.now()) })
    } else if (editProduct) {
      updateProduct(editProduct.id, form)
    }
    setEditProduct(null)
  }

  function remove(id: string) {
    if (confirm("¿Eliminar este producto?")) deleteProduct(id)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Productos</h1>
          <p className="text-sm text-muted-foreground">{filtered.length} productos en catálogo</p>
        </div>
        <Button onClick={openNew}>
          <Plus className="h-4 w-4 mr-2" /> Nuevo producto
        </Button>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-4 rounded-md bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {loading ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      ) : (
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
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(product)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => remove(product.id)}>
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
      )}

      <Dialog open={!!editProduct} onOpenChange={(open) => { if (!open) setEditProduct(null) }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{isNew ? "Nuevo producto" : "Editar producto"}</DialogTitle>
            <DialogDescription>
              {isNew ? "Agrega un nuevo producto al catálogo" : `Editando: ${editProduct?.name}`}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Nombre</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Marca</label>
                <Input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Descripción</label>
              <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Precio</label>
                <Input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Stock</label>
                <Input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Rating</label>
                <Input type="number" min="0" max="5" value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Categoría</label>
                <select
                  value={form.category?.slug ?? ""}
                  onChange={(e) => {
                    const cat = CATEGORIES.find((c) => c.slug === e.target.value)
                    if (cat) setForm({ ...form, category: cat as Category })
                  }}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Imagen</label>
                <Input value={form.images[0] ?? ""} onChange={(e) => setForm({ ...form, images: [e.target.value] })} />
              </div>
            </div>
            {form.specifications && (
              <div className="space-y-1.5">
                <label className="text-xs font-medium">Especificaciones (label: valor)</label>
                <div className="space-y-2">
                  {form.specifications.map((spec, i) => (
                    <div key={i} className="flex gap-2">
                      <Input
                        placeholder="Label"
                        value={spec.label}
                        onChange={(e) => {
                          const specs = [...(form.specifications ?? [])]
                          specs[i] = { ...specs[i], label: e.target.value }
                          setForm({ ...form, specifications: specs })
                        }}
                        className="flex-1"
                      />
                      <Input
                        placeholder="Valor"
                        value={spec.value}
                        onChange={(e) => {
                          const specs = [...(form.specifications ?? [])]
                          specs[i] = { ...specs[i], value: e.target.value }
                          setForm({ ...form, specifications: specs })
                        }}
                        className="flex-1"
                      />
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={() => setForm({
                    ...form,
                    specifications: [...(form.specifications ?? []), { label: "", value: "" }]
                  })}>
                    + Agregar especificación
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setEditProduct(null)}>
              <X className="h-4 w-4 mr-1" /> Cancelar
            </Button>
            <Button onClick={save}>
              <Save className="h-4 w-4 mr-1" /> Guardar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
