"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ordersService, type OrderInput } from "@/services/orders"
import { toast } from "sonner"

function getToken() {
  return localStorage.getItem("token") ?? ""
}

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => ordersService.getAll(getToken()),
    enabled: !!getToken(),
  })
}

export function useOrder(id: string) {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => ordersService.getById(id, getToken()),
    enabled: !!id && !!getToken(),
  })
}

export function useCreateOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: OrderInput) => ordersService.create(data, getToken()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] })
      toast.success("Pedido creado exitosamente")
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })
}
