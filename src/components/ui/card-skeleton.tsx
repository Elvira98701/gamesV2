import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface CardSkeletonProps {
  className?: string;
}

export const CardSkeleton = ({ className }: CardSkeletonProps) => {
  return <Skeleton className={cn("w-full min-h-80 rounded-xl", className)} />;
};
