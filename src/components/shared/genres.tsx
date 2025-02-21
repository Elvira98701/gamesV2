import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { selectTempGenres, toggleGenre } from "@/features/filter/filterSlice";
import { useGetGenresQuery } from "@/features/games/gamesApi";
import { Genre } from "@/types/types";
import { Button, Checkbox, FilterSkeleton, Label } from "../ui";

interface GenresProps {
  className?: string;
}

export const Genres: React.FC<GenresProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const [showAll, setShowAll] = useState(false);
  const tempGenres = useAppSelector(selectTempGenres);
  const { data, error, isLoading } = useGetGenresQuery();

  if (error)
    return (
      <p className="text-red-600 py-4">
        Failed to load Genres. Please try again later.
      </p>
    );

  const genres: Genre[] = (data && data.results) || [];
  const genresItems = showAll ? genres : genres.slice(0, 6);

  const handleCheckedChange = (id: number) => {
    dispatch(toggleGenre(id));
  };

  return (
    <div className={className}>
      <h3 className="text-xl mb-2">Genres</h3>
      <ul>
        {isLoading
          ? Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <FilterSkeleton className="flex items-center gap-2 mb-2" />
              </li>
            ))
          : genresItems.map((genre) => (
              <li key={genre.id} className="flex items-center gap-2 mb-2">
                <Checkbox
                  id={`${genre.id}-${genre.name}`}
                  onCheckedChange={() => handleCheckedChange(genre.id)}
                  checked={tempGenres.includes(genre.id)}
                />
                <Label
                  htmlFor={`${genre.id}-${genre.name}`}
                  className="leading-none cursor-pointer flex-1 font-medium text-[15px]"
                >
                  {genre.name}
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
