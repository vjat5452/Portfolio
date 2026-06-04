import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40",
  {
    variants: {
      variant: {
        default:
          "border-border bg-surface/40 text-muted hover:border-accent hover:text-accent hover:bg-accent/5",
        accent:
          "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20",
        solid:
          "border-transparent bg-white text-bg hover:bg-accent hover:text-white",
        outline:
          "border-border text-muted hover:border-white hover:text-white",
        glow:
          "border-accent/30 bg-gradient-to-r from-accent/10 to-transparent text-white shadow-[0_0_18px_-6px_rgba(124,92,255,0.6)]",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
