import { cn } from "@/lib/utils";

import { Skeleton } from "./skeleton";

interface CardSkeletonProps {
  className?: string;
}

export const CardSkeleton = ({ className }: CardSkeletonProps) => {
  return <Skeleton className={cn("w-full min-h-80 rounded-xl", className)} />;
};
