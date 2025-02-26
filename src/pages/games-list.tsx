import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GameCard, GamesPagination } from "@/components/shared";
import { CardSkeleton } from "@/components/ui";
import {
  selectCurrentPage,
  selectOrder,
  selectSelectedDevelopers,
  selectSelectedGenres,
  selectSelectedPlatforms,
} from "@/features/filter/filterSlice";
import { useGetGamesQuery } from "@/features/games/gamesApi";
import { useAppSelector } from "@/features/hooks";
import { Game } from "@/types/types";

export const GamesList: React.FC = () => {
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
    setSearchParams(params);
  }, [currentPage, setSearchParams]);

  let content: React.ReactNode;

  if (isLoading) {
    content = Array.from({ length: 16 }, (_, i) => <CardSkeleton key={i} />);
  } else if (isSuccess) {
    const games: Game[] = (data && data.results) || [];
    content = games.map((game) => (
      <GameCard
        key={game.id}
        game={game}
        className="hover:scale-105 transition duration-300 ease-in-out"
      />
    ));
  } else if (isError) {
    content = (
      <div className="text-red-600">
        Failed to load games. Please try again later.
      </div>
    );
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 mb-4">
        {content}
      </div>

      {data && data.count > 0 && (
        <div className="py-2 sm:p-4 border rounded-2xl bg-muted">
          <GamesPagination
            count={data.count}
            setSearchParams={setSearchParams}
          />
        </div>
      )}
    </div>
  );
};
