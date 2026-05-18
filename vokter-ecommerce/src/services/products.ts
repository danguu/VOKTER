import { api } from "./api"
import type { Product, Category } from "@/types"

export const productsService = {
  getAll: (params?: { category?: string; search?: string; featured?: boolean }) => {
    const query = new URLSearchParams()
    if (params?.category) query.set("category", params.category)
    if (params?.search) query.set("search", params.search)
    if (params?.featured) query.set("featured", "true")
    const qs = query.toString()
    return api.get<Product[]>(`/products${qs ? `?${qs}` : ""}`)
  },

  getBySlug: (slug: string) =>
    api.get<Product>(`/products/${slug}`),

  getCategories: () =>
    api.get<Category[]>("/categories"),
}

export type { Product, Category }
