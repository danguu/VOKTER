import { api } from "./api"

export const wishlistService = {
  getAll: (token: string) =>
    api.get<any[]>("/wishlist", token),

  toggle: (productId: string, token: string) =>
    api.post<{ added: boolean }>("/wishlist", { productId }, token),
}
