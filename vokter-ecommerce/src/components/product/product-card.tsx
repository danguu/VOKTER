"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        <Card className="group border-border/40 bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden h-full">
          <div className="aspect-square relative overflow-hidden bg-secondary/20">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {product.salePrice && (
              <Badge variant="destructive" className="absolute top-2 left-2 z-10">
                -{Math.round((1 - product.salePrice / product.price) * 100)}%
              </Badge>
            )}
          </div>
          <CardContent className="p-3 md:p-4">
            <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
            <h3 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-sm">{formatPrice(product.salePrice ?? product.price)}</span>
              {product.salePrice && (
                <span className="text-xs text-muted-foreground line-through">
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
