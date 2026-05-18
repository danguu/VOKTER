"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Tag,
  Settings,
  ArrowLeft,
  ShieldOff,
  Megaphone,
  CreditCard,
  Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Catálogo", href: "/admin/productos", icon: Layers },
  { label: "Pedidos", href: "/admin/pedidos", icon: ShoppingCart },
  { label: "Clientes", href: "/admin/clientes", icon: Users },
  { label: "Marketing", href: "/admin/marketing", icon: Megaphone },
  { label: "Cupones", href: "/admin/cupones", icon: Tag },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Pagos", href: "/admin/pagos", icon: CreditCard },
  { label: "Configuración", href: "/admin/configuracion", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()
  const isAdmin = session?.user?.role === "ADMIN"

  useEffect(() => {
    if (status === "authenticated" && !isAdmin) {
      router.push("/")
    }
  }, [status, isAdmin, router])

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  if (status === "unauthenticated") {
    router.push("/login")
    return null
  }

  if (status === "authenticated" && !isAdmin) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <ShieldOff className="h-12 w-12 mx-auto text-destructive" />
          <h2 className="text-xl font-bold">Acceso denegado</h2>
          <p className="text-muted-foreground">No tienes permisos de administrador.</p>
          <Link href="/">
            <Button>Volver a tienda</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex w-64 flex-col border-r border-border/40 bg-card/30">
        <div className="p-6 border-b border-border/40">
          <Link href="/admin/dashboard" className="text-lg font-bold tracking-tight">
            VOKTER Admin
          </Link>
          <p className="text-xs text-muted-foreground mt-1">{session?.user?.email}</p>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-border/40 space-y-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver a tienda
            </Button>
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-14 border-b border-border/40 flex items-center px-6 md:hidden">
          <p className="font-bold text-sm">VOKTER Admin</p>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
