"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Truck, User, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { useCreateOrder } from "@/hooks/useOrders"
import { formatPrice } from "@/lib/utils"
import { shippingConfig } from "@/config"
import { toast } from "sonner"

interface CheckoutForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  department: string
  zipCode: string
  neighborhood: string
}

const initialForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  department: "",
  zipCode: "",
  neighborhood: "",
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const createOrder = useCreateOrder()
  const [form, setForm] = useState<CheckoutForm>(initialForm)
  const [errors, setErrors] = useState<Partial<CheckoutForm>>({})

  const total = getTotal()
  const shipping = total >= shippingConfig.freeShippingThreshold ? 0 : shippingConfig.standardShipping
  const grandTotal = total + shipping

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): boolean => {
    const newErrors: Partial<CheckoutForm> = {}
    if (!form.firstName.trim()) newErrors.firstName = "Requerido"
    if (!form.lastName.trim()) newErrors.lastName = "Requerido"
    if (!form.email.trim()) newErrors.email = "Requerido"
    if (!form.phone.trim()) newErrors.phone = "Requerido"
    if (!form.address.trim()) newErrors.address = "Requerido"
    if (!form.city.trim()) newErrors.city = "Requerido"
    if (!form.department.trim()) newErrors.department = "Requerido"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return

    const orderData = {
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.variant?.price ?? item.product.price,
        variantId: item.variant?.id,
      })),
      total: grandTotal,
      shippingCost: shipping,
    }

    createOrder.mutate(orderData, {
      onSuccess: (order) => {
        clearCart()
        toast.success("Pedido creado con éxito")
        router.push(`/pedido-confirmado/${order.id}`)
      },
      onError: (err) => {
        toast.error(err instanceof Error ? err.message : "Error al crear pedido")
      },
    })
  }

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">No hay productos para checkout</h1>
        <p className="text-muted-foreground mb-6">Agrega productos al carrito primero</p>
        <Link href="/tienda">
          <Button>Ir a la tienda</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/carrito"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Volver al carrito
      </Link>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="rounded-lg border border-border/40 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Información</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Nombre"
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Input
                  placeholder="Apellido"
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
              </div>
              <div className="col-span-2">
                <Input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div className="col-span-2">
                <Input
                  placeholder="Teléfono"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border/40 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Envío</h2>
            </div>
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Dirección"
                  value={form.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  className={errors.address ? "border-destructive" : ""}
                />
                {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Ciudad"
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Departamento"
                    value={form.department}
                    onChange={(e) => updateField("department", e.target.value)}
                    className={errors.department ? "border-destructive" : ""}
                  />
                  {errors.department && <p className="text-xs text-destructive mt-1">{errors.department}</p>}
                </div>
                <Input
                  placeholder="Código postal"
                  value={form.zipCode}
                  onChange={(e) => updateField("zipCode", e.target.value)}
                />
                <Input
                  placeholder="Barrio"
                  value={form.neighborhood}
                  onChange={(e) => updateField("neighborhood", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border/40 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Pago</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Próximamente: Mercado Pago, Stripe, PayPal
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Número de tarjeta" className="col-span-2" disabled />
              <Input placeholder="MM/AA" disabled />
              <Input placeholder="CVC" disabled />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg border border-border/40 p-6 space-y-4 sticky top-24">
            <h3 className="font-semibold">Resumen del pedido</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground truncate mr-2">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="shrink-0">
                    {formatPrice((item.variant?.price ?? item.product.price) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío</span>
                <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={createOrder.isPending}
            >
              {createOrder.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Procesando...
                </>
              ) : (
                `Pagar ${formatPrice(grandTotal)}`
              )}
            </Button>
            {createOrder.isError && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{createOrder.error instanceof Error ? createOrder.error.message : "Error al procesar el pedido"}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
