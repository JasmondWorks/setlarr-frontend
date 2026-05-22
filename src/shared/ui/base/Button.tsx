import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md! text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 shadow-[0_6px_18px_hsla(248,60%,47%,0.28),0_1px_2px_rgba(30,20,60,0.06)] active:scale-[0.98]",
        primary: "bg-primary-600 text-white hover:bg-primary-700",
        destructive: "bg-error-600 text-white hover:bg-error-700",
        outline: "border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-900",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        ghost: "hover:bg-neutral-100 text-primary-600 hover:text-primary-700",
        link: "text-primary-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[44px] px-4 py-2",
        sm: "h-[38px] px-5 rounded-md text-[14px]",
        lg: "h-[52px] px-7 rounded-lg text-[16px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
