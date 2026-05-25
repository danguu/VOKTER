import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-electric-blue/70 bg-gradient-to-br from-electric-blue via-electric-blue/90 to-electric-blue/80 text-primary-foreground shadow-[0_0_15px_rgba(0,174,239,0.5)] hover:shadow-[0_0_35px_rgba(0,174,239,0.75)] hover:border-electric-blue hover:brightness-125 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:skew-x-[25deg] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        outline:
          "border-electric-blue/50 bg-transparent text-foreground hover:bg-electric-blue/15 hover:border-electric-blue/80 hover:shadow-[0_0_20px_rgba(0,174,239,0.45)] aria-expanded:bg-electric-blue/15 aria-expanded:border-electric-blue/80",
        secondary:
          "bg-secondary text-secondary-foreground border-metallic-blue/70 hover:bg-secondary hover:shadow-[0_0_20px_rgba(27,63,115,0.6)] hover:border-electric-blue/50 hover:brightness-110 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "border-transparent hover:bg-electric-blue/15 hover:text-foreground hover:shadow-[0_0_20px_rgba(0,174,239,0.35)] aria-expanded:bg-electric-blue/15 dark:hover:bg-electric-blue/8",
        destructive:
          "bg-destructive/10 text-destructive border-destructive/40 hover:bg-destructive/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-electric-blue underline-offset-4 hover:underline hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,174,239,0.6)]",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
