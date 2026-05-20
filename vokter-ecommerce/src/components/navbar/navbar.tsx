"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useCallback } from "react"
import { useSession, signOut } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Search, Heart, ShoppingBag, User, LogOut, Settings, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useCartStore } from "@/stores/cart-store"
import { useWishlistStore } from "@/stores/wishlist-store"
import { useHydrated } from "@/hooks/use-hydrated"
import { NAV_LINKS } from "@/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const { getItemCount } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()
  const hydrated = useHydrated()

  const userInitials = session?.user?.name
    ? session.user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo-main.png"
            alt="VOKTER"
            width={32}
            height={32}
            className="h-8 w-auto group-hover:opacity-80 transition-opacity"
          />
          <span className="text-xl font-bold tracking-tight">VOKTER</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full shadow-[0_0_6px_rgba(78,207,138,0.5)]" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
              {hydrated && wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/carrito">
            <Button variant="ghost" size="icon" className="relative" aria-label="Carrito">
              <ShoppingBag className="h-5 w-5" />
              {hydrated && getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Button>
          </Link>

          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none" render={<Button variant="ghost" size="icon" className="rounded-full" aria-label="Perfil" />}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-primary/20 text-primary">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{session.user.name}</span>
                      <span className="text-xs text-muted-foreground font-normal">{session.user.email}</span>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/perfil")} className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" /> Mi perfil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/perfil")} className="cursor-pointer">
                  <Package className="mr-2 h-4 w-4" /> Mis pedidos
                </DropdownMenuItem>
                {session.user.role === "ADMIN" && (
                  <DropdownMenuItem onClick={() => router.push("/admin/dashboard")} className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" /> Admin
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" /> Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="icon" aria-label="Iniciar sesión">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden" aria-label="Menú" render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                {session?.user ? (
                  <>
                    <hr className="border-border/40" />
                    <Link href="/perfil" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Mi perfil
                    </Link>
                    <button
                      onClick={() => { setIsOpen(false); signOut() }}
                      className="text-left text-lg font-medium text-destructive"
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    <hr className="border-border/40" />
                    <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Iniciar sesión
                    </Link>
                    <Link href="/registro" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Registrarse
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border/40 overflow-hidden"
          >
            <div className="container py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos..."
                  className="pl-10 h-12 text-base"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchQuery.trim()) {
                      setIsSearchOpen(false)
                      router.push(`/tienda?q=${encodeURIComponent(searchQuery.trim())}`)
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
