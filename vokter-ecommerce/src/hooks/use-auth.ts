"use client"

import { useMutation } from "@tanstack/react-query"
import { authService } from "@/services/auth"
import { toast } from "sonner"

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.login(email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      toast.success("Inicio de sesión exitoso")
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })
}

export function useRegister() {
  return useMutation({
    mutationFn: ({ name, email, password }: { name: string; email: string; password: string }) =>
      authService.register(name, email, password),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      toast.success("Registro exitoso")
    },
    onError: (error: Error) => {
      toast.error(error.message)
    },
  })
}

export function useLogout() {
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/"
  }
  return { logout }
}
