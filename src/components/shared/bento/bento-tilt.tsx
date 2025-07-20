import { ReactNode, useRef } from "react";

import { useTouch } from "@/hooks";
import { cn } from "@/lib/utils";

interface BentoTiltProps {
  className?: string;
  children?: ReactNode;
}

export const BentoTilt = ({ className, children }: BentoTiltProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const frameId = useRef<number | null>(null);
  const isTouch = useTouch();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !itemRef.current) return;

    if (frameId.current) cancelAnimationFrame(frameId.current);

    frameId.current = requestAnimationFrame(() => {
      const { left, top, width, height } =
        itemRef.current!.getBoundingClientRect();

      const relativeX = (event.clientX - left) / width;
      const relativeY = (event.clientY - top) / height;

      const tiltX = (relativeY - 1) * 5;
      const tiltY = (relativeX - 1) * -5;

      itemRef.current!.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    });
  };

  const handleMouseLeave = () => {
    if (isTouch || !itemRef.current) return;
    itemRef.current.style.transform = "";
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "transition duration-300 ease-linear overflow-hidden will-change-transform",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
