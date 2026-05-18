"use client"

import { useQuery } from "@tanstack/react-query"
import { productsService } from "@/services/products"

export function useProducts(params?: { category?: string; search?: string; featured?: boolean }) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => productsService.getAll(params),
  })
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => productsService.getBySlug(slug),
    enabled: !!slug,
  })
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => productsService.getCategories(),
  })
}
