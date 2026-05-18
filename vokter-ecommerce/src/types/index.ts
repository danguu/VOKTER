export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: Category
  subcategory?: string
  brand: string
  price: number
  salePrice?: number
  stock: number
  images: string[]
  featured: boolean
  rating: number
  reviewsCount: number
  variants?: Variant[]
  specifications?: Specification[]
  createdAt: string
}

export interface Variant {
  id: string
  productId: string
  size?: string
  color?: string
  sku: string
  stock: number
  price?: number
  image?: string
}

export interface Specification {
  label: string
  value: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  subcategories?: string[]
}

export interface CartItem {
  id: string
  product: Product
  variant?: Variant
  quantity: number
}

export interface WishlistItem {
  id: string
  product: Product
  variant?: Variant
  addedAt: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
  image?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  status: OrderStatus
  total: number
  paymentStatus: PaymentStatus
  shippingStatus: ShippingStatus
  createdAt: string
}

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded"
export type ShippingStatus = "pending" | "preparing" | "in_transit" | "delivered"
