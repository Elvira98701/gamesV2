import { ReactNode, useRef, useState } from "react";

import { useTouch } from "@/hooks";
import { cn } from "@/lib/utils";

interface BentoTiltProps {
  className?: string;
  children?: ReactNode;
}

export const BentoTilt = ({ className, children }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);
  const isTouch = useTouch();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;

    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 1) * 5;
    const tiltY = (relativeX - 1) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;

    setTransformStyle("");
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
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
