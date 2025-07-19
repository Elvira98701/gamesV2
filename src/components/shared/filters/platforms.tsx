import { useState } from "react";

import { Button, Checkbox, FilterSkeleton, Label } from "@/components/ui";
import { selectTempPlatforms, togglePlatform } from "@/features/filter";
import { useGetPlatformsQuery } from "@/features/games/gamesApi";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { Platform } from "@/types/types";

interface PlatformsProps {
  className?: string;
}

export const Platforms = ({ className }: PlatformsProps) => {
  const dispatch = useAppDispatch();
  const tempPlatforms = useAppSelector(selectTempPlatforms);
  const [showAll, setShowAll] = useState(false);
  const { data, error, isLoading } = useGetPlatformsQuery();

  if (error)
    return (
      <p className="text-red-600 py-4">
        Failed to load Platforms. Please try again later.
      </p>
    );

  const platforms: Platform[] = (data && data.results) || [];
  const platformsItems = showAll
    ? platforms.slice(0, 17)
    : platforms.slice(0, 6);

  const handleCheckedChange = (id: number) => {
    dispatch(togglePlatform(id));
  };

  return (
    <div className={className}>
      <h3 className="text-xl mb-2">Platforms</h3>
      <ul>
        {isLoading
          ? Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <FilterSkeleton className="flex items-center gap-2 mb-2" />
              </li>
            ))
          : platformsItems.map((platform) => (
              <li key={platform.id} className="flex items-center gap-2 mb-2">
                <Checkbox
                  id={`${platform.id}-${platform.name}`}
                  onCheckedChange={() => handleCheckedChange(platform.id)}
                  checked={tempPlatforms.includes(platform.id)}
                />
                <Label
                  htmlFor={`${platform.id}-${platform.name}`}
                  className="leading-none cursor-pointer flex-1 font-medium text-[15px]"
                >
                  {platform.name}
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
