import { cn } from "@/lib/utils";
import React from "react";
import { Genres } from "./genres";
import { Platforms } from "./platforms";
import { Developers } from "./developers";
import { Button } from "../ui";
import { useAppDispatch } from "@/features/hooks";
import { applyFilters, resetFilters } from "@/features/filter/filterSlice";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleApplyFilters = () => {
    dispatch(applyFilters());
  };

  return (
    <aside className={cn("", className)}>
      <Genres className="mb-5" />
      <Platforms className="mb-5" />
      <Developers className="mb-5" />
      <div className="flex gap-2 justify-center items-center">
        <Button className="flex-1" type="button" onClick={handleApplyFilters}>
          Apply
        </Button>
        <Button
          className="flex-1"
          type="button"
          variant="outline"
          onClick={handleResetFilters}
        >
          Reset
        </Button>
      </div>
    </aside>
  );
};
