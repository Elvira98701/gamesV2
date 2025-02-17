import React from "react";
import { Skeleton } from "./skeleton";

interface FilterSkeletonProps {
  className?: string;
}

export const FilterSkeleton: React.FC<FilterSkeletonProps> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Skeleton className="h-5 w-5 rounded-sm" />
      <Skeleton className="h-5 w-28 rounded-sm" />
    </div>
  );
};
