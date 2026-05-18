"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { CATEGORIES, SORT_OPTIONS } from "@/constants"
import { ProductCard } from "@/components/product"

export default function TiendaPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")

  let filtered = products
  if (search) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase())
    )
  }
  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category.slug === selectedCategory)
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Tienda</h1>
        <p className="text-muted-foreground">{filtered.length} productos</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-64 shrink-0">
          <div className="space-y-4">
            <Input
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="md:hidden"
            />
            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" /> Categorías
              </h3>
              <div className="flex md:flex-col gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-sm px-3 py-1.5 rounded-md transition-colors text-left ${
                    !selectedCategory ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Todas
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`text-sm px-3 py-1.5 rounded-md transition-colors text-left ${
                      selectedCategory === cat.slug ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Ordenar</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <Input
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="hidden md:flex mb-6"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
