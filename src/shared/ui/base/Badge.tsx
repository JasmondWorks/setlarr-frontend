import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1.5 shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary-600 text-white hover:bg-primary-700",
        secondary:
          "border-transparent bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
        destructive:
          "border-transparent bg-error-600 text-white hover:bg-error-700",
        outline: "border-neutral-200 text-neutral-800 bg-white",
        "primary-neutral": "text-primary-600 bg-white",
        success: "bg-success-50 text-success-600 border-success-100/50",
        warning: "bg-warning-50 text-warning-600 border-warning-100/50",
        error: "bg-error-50 text-error-600 border-error-100/50",
        primary: "bg-primary-50 text-primary-600 border-primary-100/50",
        neutral: "bg-neutral-50 text-neutral-600 border-neutral-150",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
