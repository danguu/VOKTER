import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Product, Variant } from "@/types"

interface CartState {
  items: CartItem[]
  addItem: (product: Product, variant?: Variant, quantity?: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.product.id === product.id && item.variant?.id === variant?.id
          )
          if (existingIndex > -1) {
            const updated = [...state.items]
            updated[existingIndex].quantity += quantity
            return { items: updated }
          }
          return {
            items: [
              ...state.items,
              {
                id: `${product.id}-${variant?.id ?? "default"}`,
                product,
                variant,
                quantity,
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
      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }))
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + (item.variant?.price ?? item.product.price) * item.quantity,
          0
        )
      },
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    { name: "vokter-cart" }
  )
)
