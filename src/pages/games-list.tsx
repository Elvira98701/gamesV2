import { GameCard, GamesPagination } from "@/components/shared";
import { CardSkeleton } from "@/components/ui";
import {
  selectCurrentPage,
  selectOrder,
  selectSearchValue,
  selectSelectedDevelopers,
  selectSelectedGenres,
  selectSelectedPlatforms,
} from "@/features/filter/filterSlice";
import { useGetGamesQuery } from "@/features/games/gamesApi";
import { useAppSelector } from "@/features/hooks";
import { Game } from "@/types/types";
import { Frown } from "lucide-react";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const GamesList: React.FC = () => {
  const selectedGenres = useAppSelector(selectSelectedGenres);
  const selectedPlatforms = useAppSelector(selectSelectedPlatforms);
  const selectedDevelopers = useAppSelector(selectSelectedDevelopers);
  const currentPage = useAppSelector(selectCurrentPage);
  const searchValue = useAppSelector(selectSearchValue);
  const order = useAppSelector(selectOrder);

  const [, setSearchParams] = useSearchParams();

  const { data, isLoading, isSuccess, isError } = useGetGamesQuery({
    genres: selectedGenres,
    platforms: selectedPlatforms,
    developers: selectedDevelopers,
    page: currentPage,
    search: searchValue,
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
    content =
      games.length > 0 ? (
        games.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <p className="flex gap-2 items-center">
          <Frown /> No games found.
        </p>
      );
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
        <div className="p-2 sm:p-4 border rounded-2xl">
          <GamesPagination
            count={data.count}
            setSearchParams={setSearchParams}
          />
        </div>
      )}
    </div>
  );
};
