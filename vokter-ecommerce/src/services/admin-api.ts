const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1"

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = typeof window !== "undefined" ? await getToken() : null
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Error del servidor" }))
    throw new Error(error.message || `Error ${res.status}`)
  }
  return res.json()
}

async function getToken(): Promise<string | null> {
  try {
    const { getSession } = await import("next-auth/react")
    const session = await getSession()
    return (session as any)?.accessToken || null
  } catch {
    return null
  }
}

export const adminApi = {
  products: {
    list: (params?: string) => request<any[]>(`/products${params ? `?${params}` : ""}`),
    get: (slug: string) => request<any>(`/products/${slug}`),
    create: (data: any) => request<any>("/products", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: any) => request<any>(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: string) => request<void>(`/products/${id}`, { method: "DELETE" }),
  },
  categories: {
    list: () => request<any[]>("/categories"),
    create: (data: any) => request<any>("/categories", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: any) => request<any>(`/categories/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: string) => request<void>(`/categories/${id}`, { method: "DELETE" }),
  },
  orders: {
    list: () => request<any[]>("/orders"),
    get: (id: string) => request<any>(`/orders/${id}`),
    updateStatus: (id: string, status: string) =>
      request<any>(`/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),
  },
  users: {
    list: () => request<any[]>("/users"),
    get: (id: string) => request<any>(`/users/${id}`),
    update: (id: string, data: any) => request<any>(`/users/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  },
  auth: {
    me: () => request<any>("/auth/me"),
  },
  coupons: {
    list: () => request<any[]>("/coupons"),
    create: (data: any) => request<any>("/coupons", { method: "POST", body: JSON.stringify(data) }),
    update: (id: string, data: any) => request<any>(`/coupons/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: string) => request<void>(`/coupons/${id}`, { method: "DELETE" }),
  },
  analytics: {
    dashboard: () => request<any>("/admin/dashboard"),
  },
}
