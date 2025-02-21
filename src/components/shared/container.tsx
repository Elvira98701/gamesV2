import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1600px] px-4", className)}>
      {children}
    </div>
  );
};
