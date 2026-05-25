import Link from "next/link"
import Image from "next/image"
import { Camera, Music2 } from "lucide-react"
import { siteConfig } from "@/config"

export function Footer() {
  return (
    <footer className="border-t border-electric-blue/10 bg-gradient-to-b from-deep-black via-deep-black to-metallic-blue/10">
      <div className="container py-12 md:py-16">
        <div className="hud-divider mb-12" />
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
              <span className="text-xl font-bold tracking-[0.15em] gradient-text-cyan">VOKTER</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground/50 max-w-xs leading-relaxed tracking-wide">
              Ecosistema premium de rendimiento y tecnología urbana. Sneakers, gadgets y gear
              esencial.
            </p>
          </div>

          <div>
            <span className="hud-tag mb-4 block">Tienda</span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tienda" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/categorias/footwear" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/categorias/tech-gadgets" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Tech & Gadgets
                </Link>
              </li>
              <li>
                <Link href="/categorias/gear-essentials" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Gear & Essentials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="hud-tag mb-4 block">Ayuda</span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contacto" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/envios" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/faq" className="futuristic-link text-sm text-muted-foreground/60 hover:text-electric-blue transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="hud-tag mb-4 block">Redes</span>
            <div className="flex gap-2">
              <Link href={siteConfig.links.instagram} className="p-2 rounded-sm border border-electric-blue/20 text-muted-foreground/50 hover:text-electric-blue hover:border-electric-blue/60 hover:shadow-[0_0_10px_rgba(0,174,239,0.2)] transition-all duration-200">
                <Camera className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.links.tiktok} className="p-2 rounded-sm border border-electric-blue/20 text-muted-foreground/50 hover:text-electric-blue hover:border-electric-blue/60 hover:shadow-[0_0_10px_rgba(0,174,239,0.2)] transition-all duration-200">
                <Music2 className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6">
              <span className="hud-tag mb-3 block">Newsletter</span>
              <p className="text-xs text-muted-foreground/50 mb-3 leading-relaxed tracking-wide">
                Suscríbete para recibir drops exclusivos.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 h-9 rounded-sm border border-metallic-blue/60 bg-deep-black/80 px-3 text-xs tracking-wider placeholder:text-muted-foreground/30 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/40 focus:shadow-[0_0_8px_rgba(95,233,255,0.2)] transition-all"
                />
                <button className="h-9 px-3 rounded-sm bg-gradient-to-br from-electric-blue/90 to-electric-blue/70 text-deep-black text-xs font-semibold tracking-wider hover:shadow-[0_0_12px_rgba(0,174,239,0.5)] hover:brightness-110 transition-all duration-300">
                  SUSCRIBIR
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hud-divider mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/40 tracking-wider">
            &copy; {new Date().getFullYear()} VOKTER. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground/40">
            <Link href="/privacidad" className="futuristic-link hover:text-electric-blue transition-colors duration-200">
              PRIVACIDAD
            </Link>
            <Link href="/terminos" className="futuristic-link hover:text-electric-blue transition-colors duration-200">
              TÉRMINOS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
