import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req

  if (nextUrl.pathname === "/login" && req.auth?.user) {
    if (req.auth.user.role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin/dashboard", nextUrl))
    }
    return NextResponse.redirect(new URL("/", nextUrl))
  }
})

export const config = {
  matcher: ["/login"],
}
