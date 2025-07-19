import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-[1600px] px-4", className)}>
      {children}
    </div>
  );
};
