"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { ordersService } from "@/services/orders"

export function useOrders() {
  const { data: session } = useSession()
  const token = session?.accessToken

  return useQuery({
    queryKey: ["orders"],
    queryFn: () => ordersService.getAll(token!),
    enabled: !!token,
  })
}

export function useOrder(id: string) {
  const { data: session } = useSession()
  const token = session?.accessToken

  return useQuery({
    queryKey: ["order", id],
    queryFn: () => ordersService.getById(id, token!),
    enabled: !!token && !!id,
  })
}

export function useCreateOrder() {
  const queryClient = useQueryClient()
  const { data: session } = useSession()
  const token = session?.accessToken

  return useMutation({
    mutationFn: (data: { items: { productId: string; quantity: number; price: number; variantId?: string }[]; total: number; shippingCost: number }) =>
      ordersService.create(data, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
    },
  })
}
