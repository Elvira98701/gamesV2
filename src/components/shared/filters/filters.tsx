import React from "react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/features/hooks";
import {
  applyFilters,
  resetFilters,
  setCurrentPage,
  setSearchValue,
} from "@/features/filter/filterSlice";
import { Genres } from "./genres";
import { Platforms } from "./platforms";
import { Developers } from "./developers";
import { Button } from "@/components/ui";

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
    dispatch(setCurrentPage(1));
    dispatch(setSearchValue(""));
  };

  return (
    <aside className={cn("", className)}>
      <Genres className="mb-5" />
      <Platforms className="mb-5" />
      <Developers className="mb-5" />
      <div className="flex flex-col gap-2 justify-center items-center">
        <Button
          className="flex-1 w-full"
          type="button"
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
        <Button
          className="flex-1 w-full"
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
