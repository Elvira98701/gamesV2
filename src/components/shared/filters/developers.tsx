import React, { useState } from "react";
import { useGetDevelopersQuery } from "@/features/games/gamesApi";
import { Developer } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  selectTempDevelopers,
  toggleDeveloper,
} from "@/features/filter/filterSlice";
import { Button, Checkbox, FilterSkeleton, Label } from "@/components/ui";

interface DevelopersProps {
  className?: string;
}

export const Developers: React.FC<DevelopersProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const tempDevelopers = useAppSelector(selectTempDevelopers);
  const [showAll, setShowAll] = useState(false);
  const { data, error, isLoading } = useGetDevelopersQuery();

  if (error)
    return (
      <p className="text-red-600 py-4">
        Failed to load Developers. Please try again later.
      </p>
    );

  const developers: Developer[] = (data && data.results) || [];
  const developersItems = showAll ? developers : developers.slice(0, 6);

  const handleCheckedChange = (id: number) => {
    dispatch(toggleDeveloper(id));
  };

  return (
    <div className={className}>
      <h3 className="text-xl mb-2">Developers</h3>
      <ul>
        {isLoading
          ? Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <FilterSkeleton className="flex items-center gap-2 mb-2" />
              </li>
            ))
          : developersItems.map((developer) => (
              <li key={developer.id} className="flex items-center gap-2 mb-2">
                <Checkbox
                  id={`${developer.id}-${developer.name}`}
                  onCheckedChange={() => handleCheckedChange(developer.id)}
                  checked={tempDevelopers.includes(developer.id)}
                />
                <Label
                  htmlFor={`${developer.id}-${developer.name}`}
                  className="leading-none cursor-pointer flex-1 font-medium text-[15px]"
                >
                  {developer.name}
                </Label>
              </li>
            ))}
      </ul>
      <Button onClick={() => setShowAll(!showAll)} size="sm" type="button">
        {showAll ? "- Hide" : "+ Show all"}
      </Button>
    </div>
  );
};
