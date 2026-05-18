"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useWishlistStore } from "@/stores/wishlist-store"
import { useCartStore } from "@/stores/cart-store"
import { formatPrice } from "@/lib/utils"

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore()
  const { addItem } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-2xl font-bold mb-2">Tu wishlist está vacía</h1>
        <p className="text-muted-foreground mb-6">Guarda tus productos favoritos</p>
        <Link href="/tienda">
          <Button>Explorar productos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Wishlist ({items.length})</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="border-border/40 bg-card/30">
            <Link href={`/producto/${item.product.slug}`}>
              <div className="aspect-square relative bg-secondary/20 overflow-hidden">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Link>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{item.product.brand}</p>
              <h3 className="font-medium text-sm">{item.product.name}</h3>
              <p className="font-semibold mt-1">{formatPrice(item.product.salePrice ?? item.product.price)}</p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="flex-1" onClick={() => addItem(item.product)}>
                  <ShoppingBag className="h-4 w-4 mr-1" /> Carrito
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
