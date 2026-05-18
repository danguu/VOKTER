"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Trash2, ShoppingBag, ArrowLeft, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { formatPrice } from "@/lib/utils"
import { shippingConfig } from "@/config"

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()
  const total = getTotal()
  const shipping = total >= shippingConfig.freeShippingThreshold ? 0 : shippingConfig.standardShipping
  const grandTotal = total + shipping

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío</h1>
        <p className="text-muted-foreground mb-6">Agrega productos para continuar</p>
        <Link href="/tienda">
          <Button>Ir a la tienda</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/tienda"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Seguir comprando
      </Link>

      <h1 className="text-3xl font-bold mb-8">Carrito ({items.length} productos)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 p-4 rounded-lg border border-border/40 bg-card/30"
            >
              <div className="h-24 w-24 shrink-0 rounded-md bg-secondary/20 relative overflow-hidden">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                    <h3 className="font-medium">{item.product.name}</h3>
                    {item.variant?.size && (
                      <p className="text-xs text-muted-foreground mt-1">Talla: {item.variant.size}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-md border border-input flex items-center justify-center hover:bg-secondary/50"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-md border border-input flex items-center justify-center hover:bg-secondary/50"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-semibold">
                    {formatPrice((item.variant?.price ?? item.product.price) * item.quantity)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border border-border/40 bg-card/30 p-6 space-y-4 sticky top-24">
            <h3 className="font-semibold">Resumen</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío</span>
                <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground">
                  {formatPrice(shippingConfig.freeShippingThreshold - total)} más para envío gratis
                </p>
              )}
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
            <Link href="/checkout">
              <Button className="w-full" size="lg">Ir al checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
