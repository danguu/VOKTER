"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import type { Product } from "@/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <Link href={`/producto/${product.slug}`}>
        <Card className="group border-0 bg-card/20 hover:bg-card/60 hover:shadow-[0_0_40px_rgba(0,174,239,0.35)] transition-all duration-500 h-full">
          <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-metallic-blue/30 to-deep-black">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {product.salePrice && (
              <Badge variant="destructive" className="absolute top-2 left-2 z-10 rounded-sm shadow-lg shadow-destructive/20 tracking-wider uppercase text-[10px]">
                -{Math.round((1 - product.salePrice / product.price) * 100)}%
              </Badge>
            )}
            {product.rating > 4 && (
              <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-deep-black/80 backdrop-blur-sm rounded-sm px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-electric-blue/20">
                <Star className="h-3 w-3 text-electric-blue fill-electric-blue" />
                <span className="text-[10px] font-mono font-medium text-electric-blue">{product.rating}</span>
              </div>
            )}
            {product.stock <= 5 && product.stock > 0 && (
              <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 flex-1 bg-deep-black/80 rounded-sm overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-electric-blue to-neon-cyan" style={{ width: `${(product.stock / 10) * 100}%` }} />
                </div>
                <span className="text-[9px] font-mono text-electric-blue/80 tracking-wider">{product.stock} UNID.</span>
              </div>
            )}
          </div>
          <CardContent className="p-3 md:p-4">
            <span className="hud-tag text-[9px] mb-1.5">{product.brand}</span>
            <h3 className="font-heading font-medium text-sm tracking-wider uppercase group-hover:text-electric-blue transition-colors duration-300">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-mono font-semibold text-sm text-electric-blue">{formatPrice(product.salePrice ?? product.price)}</span>
              {product.salePrice && (
                <span className="text-[10px] text-muted-foreground/50 line-through font-mono">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
