"use client"

import { use } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getProductsByCategoryGroup } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { CATEGORIES } from "@/constants"
import { ProductCard } from "@/components/product"
import { notFound } from "next/navigation"

export default function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const category = CATEGORIES.find((c) => c.slug === slug)
  if (!category) notFound()

  const categoryProducts = getProductsByCategoryGroup(slug)

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/tienda"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Volver a tienda
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categoryProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground mb-4">No hay productos en esta categoría aún.</p>
          <Link href="/tienda">
            <Button>Explorar tienda</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
