"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold uppercase tracking-wide text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        cta: "rounded-lg bg-cta text-cta-foreground shadow-lg hover:bg-cta-hover hover:scale-105",
        "cta-pulse": "rounded-lg bg-cta text-cta-foreground shadow-lg hover:bg-cta-hover hover:scale-105 animate-pulse-subtle",
        secondary: "rounded-lg bg-navy-deep text-white hover:bg-navy hover:scale-105",
        outline: "rounded-lg border-2 border-border bg-white text-navy shadow-sm hover:bg-off-white hover:scale-105",
        ghost: "rounded-lg border-2 border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:scale-105",
        "nav-cta": "bg-cta text-white hover:bg-cta-hover font-bold",
        // Keep shadcn defaults
        default: "rounded-lg bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-7 py-4",
        sm: "px-5 py-3",
        lg: "px-8 py-4",
        icon: "h-10 w-10",
        nav: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "cta",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
