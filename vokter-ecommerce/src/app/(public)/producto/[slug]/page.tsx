"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Share2, ShoppingBag, Star, Zap, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getProductBySlug } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/stores/cart-store"
import { useWishlistStore } from "@/stores/wishlist-store"
import { notFound } from "next/navigation"

export default function ProductoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)
  const { addItem } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()

  if (!product) notFound()

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/tienda"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Volver a tienda
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square bg-secondary/20 rounded-xl relative overflow-hidden"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
            <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewsCount} reseñas)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">{formatPrice(product.salePrice ?? product.price)}</span>
            {product.salePrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">{formatPrice(product.price)}</span>
                <Badge variant="destructive">
                  -{Math.round((1 - product.salePrice / product.price) * 100)}%
                </Badge>
              </>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-primary" /> Envío rápido</span>
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-primary" /> Compra segura</span>
          </div>

          <Separator />

          {product.variants && product.variants.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Tallas disponibles</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    disabled={v.stock === 0}
                    className="px-4 py-2 text-sm rounded-md border border-input bg-background hover:bg-secondary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => addItem(product)}
            >
              <ShoppingBag className="mr-2 h-5 w-5" /> Agregar al carrito
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => toggleItem(product)}
            >
              <Heart
                className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

          <Tabs defaultValue="specs">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specs">Ficha Técnica</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-4">
              {product.specifications && product.specifications.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-border/40 text-sm">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <p className="text-sm text-muted-foreground">Reseñas de clientes próximamente.</p>
            </TabsContent>
            <TabsContent value="faq" className="mt-4">
              <Accordion>
                <AccordionItem value="shipping">
                  <AccordionTrigger>¿Cuánto tarda el envío?</AccordionTrigger>
                  <AccordionContent>
                    El envío estándar tarda 2-5 días hábiles. Envío exprés 24-48 hrs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>¿Cómo hago una devolución?</AccordionTrigger>
                  <AccordionContent>
                    Tienes 30 días desde la recepción para devolver tu producto en su estado original.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
