import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const linkVariants = cva(
  "group relative overflow-hidden uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input text-background bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-background text-foreground hover:text-background",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  href: string;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant = "default",
      size,
      asChild = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : Link;
    return (
      <Comp
        to={href}
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
              {
                "bg-background": variant == "default",
                "bg-foreground": variant == "secondary",
              }
            )}
          ></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="absolute inset-0 flex translate-x-12 items-center justify-center gap-1 opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </Comp>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { ButtonLink, linkVariants };
