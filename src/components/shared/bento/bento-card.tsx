import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  src: string;
  title: string;
  description?: string;
}

export const BentoCard = ({
  className,
  src,
  title,
  description,
}: BentoCardProps) => {
  return (
    <div className={cn("relative size-full", className)}>
      <img
        src={src}
        loading="lazy"
        className="absolute left-0 top-0 size-full object-cover object-center"
        alt=""
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-3 sm:p-5">
        <div>
          <h3 className="overflow-hidden text-ellipsis">{title}</h3>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
