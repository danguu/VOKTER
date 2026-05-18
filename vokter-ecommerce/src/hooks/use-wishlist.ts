"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { wishlistService } from "@/services/wishlist"
import { toast } from "sonner"

function getToken() {
  return localStorage.getItem("token") ?? ""
}

export function useWishlistItems() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () => wishlistService.getAll(getToken()),
    enabled: !!getToken(),
  })
}

export function useToggleWishlist() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productId: string) => wishlistService.toggle(productId, getToken()),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] })
      toast.success(data.added ? "Agregado a wishlist" : "Eliminado de wishlist")
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })
}
