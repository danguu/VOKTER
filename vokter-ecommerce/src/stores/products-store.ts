import { create } from "zustand"
import { persist } from "zustand/middleware"
import { products as mockProducts } from "@/data/products"
import { adminApi } from "@/services/admin-api"
import type { Product } from "@/types"

interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  getProductBySlug: (slug: string) => Product | undefined
  getFeaturedProducts: () => Product[]
  getProductsByCategory: (slug: string) => Product[]
  getProductsByCategoryGroup: (slug: string) => Product[]
  searchProducts: (query: string) => Product[]
  addProduct: (product: Product) => Promise<void>
  updateProduct: (id: string, data: Partial<Product>) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
}

function mapBackendToFrontend(bp: any): Product {
  return {
    id: bp.id,
    name: bp.title || "",
    slug: bp.slug || "",
    description: bp.description || "",
    category: {
      id: bp.category?.id || bp.categoryId || "",
      name: bp.category?.name || "",
      slug: bp.category?.slug || "",
      description: bp.category?.description || "",
      image: bp.category?.image || "",
    },
    brand: bp.brand || "",
    price: bp.price || 0,
    salePrice: bp.salePrice ?? undefined,
    stock: bp.stock ?? 0,
    images: bp.images?.length > 0
      ? bp.images.map((img: any) => img.url)
      : [],
    featured: bp.featured ?? false,
    rating: bp.rating ?? 0,
    reviewsCount: bp._count?.reviews ?? 0,
    variants: bp.variants?.map((v: any) => ({
      id: v.id,
      productId: v.productId,
      size: v.size,
      color: v.color,
      sku: v.sku,
      stock: v.stock,
      price: v.price ?? undefined,
      image: v.image ?? undefined,
    })) || [],
    specifications:
      bp.specifications?.map((s: any) => ({
        label: s.label,
        value: s.value,
      })) || [],
    createdAt: bp.createdAt
      ? new Date(bp.createdAt).toISOString().split("T")[0]
      : "",
  }
}

function mapFrontendToBackend(product: Partial<Product>) {
  return {
    title: product.name || "",
    slug: product.slug || "",
    description: product.description || "",
    categoryId: product.category?.id || "",
    brand: product.brand || "",
    price: product.price || 0,
    salePrice: product.salePrice ?? undefined,
    stock: product.stock ?? 0,
    featured: product.featured ?? false,
    rating: product.rating ?? 0,
  }
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set, get) => ({
      products: mockProducts,
      loading: false,
      error: null,

      fetchProducts: async () => {
        set({ loading: true, error: null })
        try {
          const data = await adminApi.products.list()
          const mapped = data.map(mapBackendToFrontend)
          set({ products: mapped, loading: false })
        } catch {
          set({ loading: false })
        }
      },

      getProductBySlug: (slug) => {
        return get().products.find((p) => p.slug === slug)
      },

      getFeaturedProducts: () => {
        return get().products.filter((p) => p.featured)
      },

      getProductsByCategory: (categorySlug) => {
        return get().products.filter(
          (p) => p.category.slug === categorySlug
        )
      },

      getProductsByCategoryGroup: (slug) => {
        const categoryGroups: Record<string, string[]> = {
          "tech-gadgets": [
            "audio",
            "cables-cargadores",
            "power-banks",
            "accesorios",
            "consolas-entretenimiento",
          ],
          "gear-essentials": ["apparel", "hogar"],
        }
        const slugs = categoryGroups[slug]
        if (!slugs) return get().getProductsByCategory(slug)
        return get().products.filter((p) =>
          slugs.includes(p.category.slug)
        )
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

      addProduct: async (product) => {
        set({ error: null })
        try {
          const created = await adminApi.products.create(
            mapFrontendToBackend(product)
          )
          const mapped = mapBackendToFrontend(created)
          set((state) => ({ products: [...state.products, mapped] }))
        } catch (e: any) {
          set((state) => ({
            products: [...state.products, product],
            error: e.message || "Error al crear producto",
          }))
        }
      },

      updateProduct: async (id, data) => {
        set({ error: null })
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        }))
        try {
          await adminApi.products.update(id, mapFrontendToBackend(data))
        } catch {
          const current = get().products.find((p) => p.id === id)
          if (current) {
            set((state) => ({
              products: state.products.map((p) =>
                p.id === id ? current : p
              ),
              error: "Error al actualizar en el servidor",
            }))
          }
        }
      },

      deleteProduct: async (id) => {
        set({ error: null })
        const previous = get().products
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        }))
        try {
          await adminApi.products.delete(id)
        } catch {
          set({
            products: previous,
            error: "Error al eliminar en el servidor",
          })
        }
      },
    }),
    { name: "vokter-products-v2" }
  )
)
