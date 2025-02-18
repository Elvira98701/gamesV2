import { GameCard, GamesPagination } from "@/components/shared";
import { CardSkeleton } from "@/components/ui";
import {
  selectSelectedDevelopers,
  selectSelectedGenres,
  selectSelectedPlatforms,
} from "@/features/filter/filterSlice";
import { useGetGamesQuery } from "@/features/games/gamesApi";
import { useAppSelector } from "@/features/hooks";
import { Game } from "@/types/types";
import React from "react";

export const GamesList: React.FC = () => {
  const selectedGenres = useAppSelector(selectSelectedGenres);
  const selectedPlatforms = useAppSelector(selectSelectedPlatforms);
  const selectedDevelopers = useAppSelector(selectSelectedDevelopers);

  const { data, isLoading, isSuccess, isError, error } = useGetGamesQuery({
    genres: selectedGenres,
    platforms: selectedPlatforms,
    developers: selectedDevelopers,
  });

  let content: React.ReactNode;

  if (isLoading) {
    content = Array.from({ length: 16 }, (_, i) => <CardSkeleton key={i} />);
  } else if (isSuccess) {
    const games: Game[] = (data && data.results) || [];
    content = games.map((game) => <GameCard key={game.id} game={game} />);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 mb-4">
        {content}
      </div>
      <div className="p-2 sm:p-4 border rounded-2xl">
        <GamesPagination />
      </div>
    </div>
  );
};
