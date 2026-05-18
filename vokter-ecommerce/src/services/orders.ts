import { api } from "./api"

export interface OrderInput {
  items: { productId: string; quantity: number; price: number; variantId?: string }[]
  total: number
  shippingCost: number
}

export const ordersService = {
  getAll: (token: string) =>
    api.get<any[]>("/orders", token),

  getById: (id: string, token: string) =>
    api.get<any>(`/orders/${id}`, token),

  create: (data: OrderInput, token: string) =>
    api.post<any>("/orders", data, token),
}
