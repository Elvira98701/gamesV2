import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center font-bold uppercase justify-center gap-2 whitespace-nowrap rounded-3xl text-sm transition-all focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none active:translate-y-1 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow hover-hover:bg-primary/90 hover-hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover-hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover-hover:bg-accent hover-hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover-hover:bg-secondary/80",
        ghost: "hover-hover:bg-accent hover-hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover-hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-3xl px-3 text-xs",
        lg: "h-10 rounded-3xl px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
