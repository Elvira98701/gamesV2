import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  src: string;
  title: string;
  description?: string;
  isComingSoon: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  className,
  src,
  title,
  description,
  isComingSoon,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className={cn("relative size-full", className)}>
      <img
        src={src}
        loading="lazy"
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div>
          <h3>{title}</h3>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-foreground px-5 py-2 text-xs uppercase text-background"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #C4B5FD88, #00000026)`,
              }}
            />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};
