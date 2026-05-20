"use client"

import Link from "next/link"
import { useMemo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star, Zap, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { CATEGORIES } from "@/constants"
import { ProductCard } from "@/components/product"
import { useProductsStore } from "@/stores"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  const products = useProductsStore((s) => s.products)
  const featuredProducts = useMemo(() => products.filter((p) => p.featured), [products])
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(78,207,138,0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.06] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/logo-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 pointer-events-none" />
        <motion.div
          className="container relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-6 px-5 py-1.5 text-xs tracking-[0.2em] uppercase border-primary/40 text-primary">
              Nuevo Drop {new Date().getFullYear()}
            </Badge>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="tracking-[-0.02em]">Rendimiento</span>
            <br />
            <span className="text-primary tracking-[-0.02em] drop-shadow-[0_0_12px_rgba(78,207,138,0.3)]">Tecnología</span>
            <br />
            <span className="tracking-[-0.02em]">Urbano</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Sneakers, gadgets y gear esencial para los que viven al límite.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <Link href="/tienda">
              <Button size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-shadow">
                Explorar Tienda
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/categorias/footwear">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">Footwear</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Strip */}
      <section className="border-y border-border/40 bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02]">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: "Envío Rápido", desc: "24-48 hrs" },
              { icon: Shield, label: "Pago Seguro", desc: "Compra protegida" },
              { icon: Star, label: "Calidad Premium", desc: "100% garantizada" },
              { icon: Truck, label: "Envío Gratis", desc: "Desde $50.000" },
            ].map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <feature.icon className="h-4 w-4 text-primary shrink-0" />
                </div>
                <div>
                  <p className="text-sm font-medium">{feature.label}</p>
                  <p className="text-xs text-muted-foreground/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(78,207,138,0.03),transparent_60%)]" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Categorías</h2>
            <p className="text-muted-foreground">Explora nuestro ecosistema</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.slice(0, 8).map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/categorias/${category.slug}`}>
                  <Card className="group border-border/40 bg-gradient-to-br from-secondary/20 via-card/50 to-transparent hover:from-secondary/30 hover:via-card hover:border-primary/30 transition-all duration-500 h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground/70">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 via-secondary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Destacados</h2>
              <p className="text-muted-foreground">Lo más top de VOKTER</p>
            </div>
            <Link href="/tienda" className="hidden md:inline-flex">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Ver todo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/tienda">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Ver todo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,207,138,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,32,64,0.15),transparent_60%)]" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Bundles</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Combina sneakers + tecnología + accesorios y ahorra
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bundle Running",
                items: "Sneakers + Balaca + Power Bank",
                discount: "15% OFF",
                gradient: "from-primary/15 via-primary/5 to-transparent",
                border: "hover:border-primary/30",
              },
              {
                title: "Bundle Tech",
                items: "Audífonos + Cargador + Cable",
                discount: "20% OFF",
                gradient: "from-secondary/30 via-secondary/10 to-transparent",
                border: "hover:border-secondary/50",
              },
              {
                title: "Bundle Home",
                items: "Sábanas + Protector + Soporte",
                discount: "10% OFF",
                gradient: "from-primary/10 via-secondary/10 to-transparent",
                border: "hover:border-primary/20",
              },
            ].map((bundle) => (
              <motion.div
                key={bundle.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className={`group bg-gradient-to-br ${bundle.gradient} border-border/40 ${bundle.border} transition-all duration-500 h-full`}>
                  <CardContent className="p-6 md:p-8">
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">{bundle.discount}</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{bundle.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{bundle.items}</p>
                    <Link href="/tienda">
                      <Button variant="secondary" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Ver bundle</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(78,207,138,0.06),transparent_60%)]" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Mantente al día</h2>
            <p className="text-muted-foreground/80 mb-8 leading-relaxed">
              Recibe drops exclusivos, lanzamientos y ofertas especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 h-12 rounded-lg border border-primary/20 bg-card/80 px-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button size="lg" className="shadow-lg shadow-primary/30">Suscribirme</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
