import Link from "next/link"
import Image from "next/image"
import { Camera, Music2, ExternalLink } from "lucide-react"
import { siteConfig } from "@/config"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-main.png"
                alt="VOKTER"
                width={28}
                height={28}
                className="h-7 w-auto"
              />
              <span className="text-xl font-bold tracking-tight">VOKTER</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Ecosistema premium de rendimiento y tecnología urbana. Sneakers, gadgets y gear
              esencial.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Tienda</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tienda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/categorias/footwear" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/categorias/tech-gadgets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tech & Gadgets
                </Link>
              </li>
              <li>
                <Link href="/categorias/gear-essentials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gear & Essentials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <Link href={siteConfig.links.instagram} className="text-muted-foreground hover:text-foreground transition-colors">
                <Camera className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.links.tiktok} className="text-muted-foreground hover:text-foreground transition-colors">
                <Music2 className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Suscríbete para recibir drops exclusivos.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-xs"
                />
                <button className="h-9 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VOKTER. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacidad" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-foreground transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
