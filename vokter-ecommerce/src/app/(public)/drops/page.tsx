"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product"

const sortedProducts = [...products].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
).slice(0, 30)

export default function DropsPage() {
  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Volver
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold">Drops</h1>
        </div>
        <p className="text-muted-foreground">Los lanzamientos más recientes</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {sortedProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  )
}
