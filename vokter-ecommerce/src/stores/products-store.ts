import { create } from "zustand"
import { persist } from "zustand/middleware"
import { products as mockProducts } from "@/data/products"
import type { Product } from "@/types"

interface ProductsState {
  products: Product[]
  getProductBySlug: (slug: string) => Product | undefined
  getFeaturedProducts: () => Product[]
  getProductsByCategory: (slug: string) => Product[]
  getProductsByCategoryGroup: (slug: string) => Product[]
  searchProducts: (query: string) => Product[]
  addProduct: (product: Product) => void
  updateProduct: (id: string, data: Partial<Product>) => void
  deleteProduct: (id: string) => void
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set, get) => ({
      products: mockProducts,

      getProductBySlug: (slug) => {
        return get().products.find((p) => p.slug === slug)
      },

      getFeaturedProducts: () => {
        return get().products.filter((p) => p.featured)
      },

      getProductsByCategory: (categorySlug) => {
        return get().products.filter((p) => p.category.slug === categorySlug)
      },

      getProductsByCategoryGroup: (slug) => {
        const categoryGroups: Record<string, string[]> = {
          "tech-gadgets": ["audio", "cables-cargadores", "power-banks", "accesorios", "consolas-entretenimiento"],
          "gear-essentials": ["apparel", "hogar"],
        }
        const slugs = categoryGroups[slug]
        if (!slugs) return get().getProductsByCategory(slug)
        return get().products.filter((p) => slugs.includes(p.category.slug))
      },

      searchProducts: (query) => {
        const q = query.toLowerCase()
        return get().products.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.name.toLowerCase().includes(q)
        )
      },

      addProduct: (product) => {
        set((state) => ({ products: [...state.products, product] }))
      },

      updateProduct: (id, data) => {
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        }))
      },

      deleteProduct: (id) => {
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        }))
      },
    }),
    { name: "vokter-products" }
  )
)
