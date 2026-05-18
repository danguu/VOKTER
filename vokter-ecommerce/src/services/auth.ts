import { api } from "./api"

export interface AuthResponse {
  user: { id: string; name: string; email: string; role: string }
  token: string
}

export const authService = {
  login: (email: string, password: string) =>
    api.post<AuthResponse>("/auth/login", { email, password }),

  register: (name: string, email: string, password: string) =>
    api.post<AuthResponse>("/auth/register", { name, email, password }),

  getProfile: (token: string) =>
    api.get<{ id: string; name: string; email: string; role: string }>("/auth/me", token),
}
