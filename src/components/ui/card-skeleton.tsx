import React from "react";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface CardSkeletonProps {
  className?: string;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ className }) => {
  return <Skeleton className={cn("w-full min-h-80 rounded-xl", className)} />;
};
