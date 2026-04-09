import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-medium transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "border border-border bg-background",
        secondary: "bg-secondary",
        ghost: "hover:bg-muted",
        destructive: "bg-red-500 text-white",
        link: "underline text-primary",
      },
      size: {
        default: "h-8 px-3",
        sm: "h-7 px-2",
        lg: "h-10 px-4",
        icon: "h-8 w-8 p-0",
        "icon-sm": "h-7 w-7 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ✅ FIXED TYPE
type ButtonProps = React.ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : ButtonPrimitive

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }