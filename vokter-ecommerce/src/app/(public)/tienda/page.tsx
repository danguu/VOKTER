"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, X, SlidersHorizontal, ArrowUpDown, PackageSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CATEGORIES, SORT_OPTIONS } from "@/constants"
import { ProductCard } from "@/components/product"
import { useProductsStore } from "@/stores"

export default function TiendaPage() {
  const products = useProductsStore((s) => s.products)
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q") ?? "")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")

  const filtered = useMemo(() => {
    let result = products

    if (search) {
      const q = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

      const synonyms: Record<string, string[]> = {
        audifono: ["audio", "balaca", "diadema", "cuellera", "parlante", "manos libres"],
        audífono: ["audio", "balaca", "diadema", "cuellera", "parlante", "manos libres"],
        audifonos: ["audio", "balaca", "diadema", "cuellera", "parlante", "manos libres"],
        auricular: ["audio", "balaca", "diadema", "cuellera", "parlante"],
        parlante: ["audio", "parlante"],
        zapato: ["footwear", "sneaker", "running", "training", "streetwear"],
        zapatos: ["footwear", "sneaker", "running", "training", "streetwear"],
        zapatillas: ["footwear", "sneaker", "running", "training", "streetwear"],
        tenis: ["footwear", "sneaker", "running", "training", "streetwear"],
        cable: ["cables", "cargadores", "cables-cargadores"],
        cargador: ["cables", "cargadores", "cables-cargadores", "power bank"],
        cargadores: ["cables", "cargadores", "cables-cargadores"],
        powerbank: ["power bank", "power-banks"],
        computador: ["accesorios", "accesorios pc", "hub", "mouse", "teclado"],
        computadora: ["accesorios", "accesorios pc", "hub", "mouse", "teclado"],
        pc: ["accesorios", "accesorios pc", "hub", "mouse", "teclado"],
        gaming: ["gamer", "mouse", "teclado", "consolas", "entretenimiento"],
        consola: ["consolas", "entretenimiento"],
        sabana: ["hogar", "bedding", "sábanas", "star home"],
        sábanas: ["hogar", "bedding", "star home"],
        ropa: ["apparel", "vestuario", "conjunto deportivo"],
        buzo: ["apparel", "vestuario"],
      }

      const searchTerms = synonyms[q] ?? [q]

      result = result.filter((p) => {
        const name = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const brand = p.brand.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const desc = p.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const cat = p.category.name.toLowerCase()
        const subcat = p.subcategory?.toLowerCase() ?? ""

        return searchTerms.some((term) =>
          name.includes(term) ||
          brand.includes(term) ||
          desc.includes(term) ||
          cat.includes(term) ||
          subcat.includes(term) ||
          (p.specifications && p.specifications.some(
            (s) => s.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term) ||
                 s.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(term)
          ))
        )
      })
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category.slug === selectedCategory)
    }

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price))
        break
      case "price-desc":
        result = [...result].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price))
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        result = [...result].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    }

    return result
  }, [products, search, selectedCategory, sortBy])

  const clearSearch = useCallback(() => setSearch(""), [])

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">Tienda</h1>
          {search && (
            <p className="text-sm text-muted-foreground">
              &ldquo;{search}&rdquo; — {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
          {!search && (
            <p className="text-sm text-muted-foreground">{filtered.length} productos</p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-64 shrink-0">
          <div className="space-y-5">
            <div className="relative md:hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre, marca, categoría..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-9"
              />
              {search && (
                <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground/80">
                <SlidersHorizontal className="h-4 w-4" /> Categorías
              </h3>
              <div className="flex md:flex-col gap-1.5 flex-wrap">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-sm px-3 py-1.5 rounded-md transition-colors text-left ${
                    !selectedCategory ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  Todas
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug === selectedCategory ? null : cat.slug)}
                    className={`text-sm px-3 py-1.5 rounded-md transition-colors text-left ${
                      selectedCategory === cat.slug ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground/80">
                <ArrowUpDown className="h-4 w-4" /> Ordenar
              </h3>
              <div className="flex md:flex-col gap-1.5">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSortBy(opt.value)}
                    className={`text-sm px-3 py-1.5 rounded-md transition-colors text-left ${
                      sortBy === opt.value ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="relative mb-6 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, marca, descripción, categoría, especificaciones..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-9 h-11"
            />
            {search && (
              <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <PackageSearch className="h-12 w-12 text-muted-foreground/40 mb-4" />
              <h3 className="text-lg font-medium mb-1">Sin resultados</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                No encontramos productos para &ldquo;{search}&rdquo;. Probá con otros términos o revisá los filtros.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => { setSearch(""); setSelectedCategory(null) }}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
