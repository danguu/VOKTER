import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground/70 tracking-wide">Cargando...</p>
      </div>
    </div>
  )
}
