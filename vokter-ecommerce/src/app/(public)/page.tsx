"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Zap, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getFeaturedProducts } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { CATEGORIES } from "@/constants"
import { ProductCard } from "@/components/product"

const featuredProducts = getFeaturedProducts()

const reviews = [
  { name: "Carlos M.", text: "Los sneakers llegaron antes de lo esperado. Calidad premium 100%.", rating: 5 },
  { name: "Andrea G.", text: "El audífono de conducción ósea es una maravilla. Súper recomendado.", rating: 5 },
  { name: "Miguel R.", text: "Compré el combo gamer y la relación calidad-precio es increíble.", rating: 4 },
  { name: "Sofia L.", text: "Las sábanas Star Home son divinas. 100% algodón, se notan.", rating: 5 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,200,120,0.08),transparent_60%)]" />
        <motion.div
          className="container relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs tracking-widest uppercase">
              Nuevo Drop {new Date().getFullYear()}
            </Badge>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Rendimiento
            <br />
            <span className="text-primary">Tecnología</span>
            <br />
            Urbano
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Sneakers, gadgets y gear esencial para los que viven al límite.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <Link href="/tienda">
              <Button size="lg">
                Explorar Tienda
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/categorias/footwear">
              <Button size="lg" variant="outline">Footwear</Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Strip */}
      <section className="border-y border-border/40">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: "Envío Rápido", desc: "24-48 hrs" },
              { icon: Shield, label: "Pago Seguro", desc: "Compra protegida" },
              { icon: Star, label: "Calidad Premium", desc: "100% garantizada" },
              { icon: Truck, label: "Envío Gratis", desc: "Desde $50.000" },
            ].map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <feature.icon className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium">{feature.label}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
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
                  <Card className="group border-border/40 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-secondary/20">
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
              <Button variant="outline">
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
              <Button variant="outline">
                Ver todo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="py-16 md:py-24">
        <div className="container">
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
                color: "from-primary/20 to-transparent",
              },
              {
                title: "Bundle Tech",
                items: "Audífonos + Cargador + Cable",
                discount: "20% OFF",
                color: "from-blue-500/20 to-transparent",
              },
              {
                title: "Bundle Home",
                items: "Sábanas + Protector + Soporte",
                discount: "10% OFF",
                color: "from-purple-500/20 to-transparent",
              },
            ].map((bundle) => (
              <Card key={bundle.title} className={`bg-gradient-to-br ${bundle.color} border-border/40`}>
                <CardContent className="p-6 md:p-8">
                  <Badge className="mb-4">{bundle.discount}</Badge>
                  <h3 className="text-xl font-bold mb-2">{bundle.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{bundle.items}</p>
                  <Link href="/tienda">
                    <Button variant="secondary" size="sm">Ver bundle</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Mantente al día</h2>
            <p className="text-muted-foreground mb-8">
              Recibe drops exclusivos, lanzamientos y ofertas especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 h-12 rounded-lg border border-input bg-background px-4 text-sm"
              />
              <Button size="lg">Suscribirme</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
