const API_BASE = process.env.NEXT_PUBLIC_API_URL || "/api/v1"

interface ApiOptions {
  method?: string
  body?: unknown
  headers?: Record<string, string>
  token?: string
}

async function request<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = "GET", body, headers = {}, token } = options

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  }

  if (token) {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` }
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const res = await fetch(`${API_BASE}${endpoint}`, config)

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }))
    throw new Error(error.message || `Error ${res.status}`)
  }

  return res.json()
}

export const api = {
  get: <T>(endpoint: string, token?: string) => request<T>(endpoint, { token }),
  post: <T>(endpoint: string, body: unknown, token?: string) =>
    request<T>(endpoint, { method: "POST", body, token }),
  put: <T>(endpoint: string, body: unknown, token?: string) =>
    request<T>(endpoint, { method: "PUT", body, token }),
  patch: <T>(endpoint: string, body: unknown, token?: string) =>
    request<T>(endpoint, { method: "PATCH", body, token }),
  delete: <T>(endpoint: string, token?: string) => request<T>(endpoint, { method: "DELETE", token }),
}
