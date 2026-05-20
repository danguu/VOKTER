import Link from "next/link"
import Image from "next/image"
import { Camera, Music2, ExternalLink, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/config"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-background via-background to-secondary/5">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo-main.png"
                alt="VOKTER"
                width={28}
                height={28}
                className="h-7 w-auto group-hover:opacity-80 transition-opacity"
              />
              <span className="text-xl font-bold tracking-tight">VOKTER</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground/70 max-w-xs leading-relaxed">
              Ecosistema premium de rendimiento y tecnología urbana. Sneakers, gadgets y gear
              esencial.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground/80 tracking-wide">Tienda</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tienda" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/categorias/footwear" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/categorias/tech-gadgets" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Tech & Gadgets
                </Link>
              </li>
              <li>
                <Link href="/categorias/gear-essentials" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Gear & Essentials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground/80 tracking-wide">Ayuda</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground/80 tracking-wide">Síguenos</h3>
            <div className="flex gap-2">
              <Link href={siteConfig.links.instagram} className="p-2 rounded-full border border-border/40 text-muted-foreground/70 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                <Camera className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.links.tiktok} className="p-2 rounded-full border border-border/40 text-muted-foreground/70 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                <Music2 className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-foreground/80">Newsletter</h4>
              <p className="text-xs text-muted-foreground/70 mb-3 leading-relaxed">
                Suscríbete para recibir drops exclusivos.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 h-9 rounded-lg border border-border/40 bg-card/50 px-3 text-xs placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                <button className="h-9 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} VOKTER. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground/60">
            <Link href="/privacidad" className="hover:text-foreground/80 transition-colors duration-200">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-foreground/80 transition-colors duration-200">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
