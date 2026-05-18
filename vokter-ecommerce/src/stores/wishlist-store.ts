import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product, Variant, WishlistItem } from "@/types"

interface WishlistState {
  items: WishlistItem[]
  addItem: (product: Product, variant?: Variant) => void
  removeItem: (itemId: string) => void
  isInWishlist: (productId: string) => boolean
  toggleItem: (product: Product, variant?: Variant) => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant) => {
        set((state) => {
          if (state.items.some((item) => item.product.id === product.id)) {
            return state
          }
          return {
            items: [
              ...state.items,
              {
                id: `${product.id}-${variant?.id ?? "default"}`,
                product,
                variant,
                addedAt: new Date().toISOString(),
              },
            ],
          }
        })
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }))
      },
      isInWishlist: (productId) => {
        return get().items.some((item) => item.product.id === productId)
      },
      toggleItem: (product, variant) => {
        const exists = get().isInWishlist(product.id)
        if (exists) {
          const item = get().items.find((i) => i.product.id === product.id)
          if (item) get().removeItem(item.id)
        } else {
          get().addItem(product, variant)
        }
      },
    }),
    { name: "vokter-wishlist" }
  )
)
