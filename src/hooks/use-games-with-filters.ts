import { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

import {
  selectCurrentPage,
  selectOrder,
  selectSelectedDevelopers,
  selectSelectedGenres,
  selectSelectedPlatforms,
} from "@/features/filter/filterSlice";
import { useGetGamesQuery } from "@/features/games/gamesApi";
import { useAppSelector } from "@/features/hooks";

export const useGamesWithFilters = () => {
  const selectedGenres = useAppSelector(selectSelectedGenres);
  const selectedPlatforms = useAppSelector(selectSelectedPlatforms);
  const selectedDevelopers = useAppSelector(selectSelectedDevelopers);
  const currentPage = useAppSelector(selectCurrentPage);
  const order = useAppSelector(selectOrder);

  const [, setSearchParams] = useSearchParams();

  const { data, isLoading, isSuccess, isError } = useGetGamesQuery({
    genres: selectedGenres,
    platforms: selectedPlatforms,
    developers: selectedDevelopers,
    page: currentPage,
    order,
  });

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", String(currentPage));

    const setArrayParam = (key: string, values: number[]) => {
      if (values.length > 0) {
        params.set(key, values.join(","));
      } else {
        params.delete(key);
      }
    };

    setArrayParam("genres", selectedGenres);
    setArrayParam("platforms", selectedPlatforms);
    setArrayParam("developers", selectedDevelopers);

    setSearchParams(params);
  }, [
    currentPage,
    setSearchParams,
    selectedGenres,
    selectedPlatforms,
    selectedDevelopers,
  ]);

  return { data, isLoading, isSuccess, isError };
};
