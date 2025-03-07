import React from "react";
import { Game } from "@/types/types";
import { useGamesWithFilters } from "@/hooks";
import { GameCard, GamesPagination } from "@/components/shared";
import { CardSkeleton } from "@/components/ui";

export const GamesList: React.FC = () => {
  const { data, isLoading, isSuccess, isError } = useGamesWithFilters();

  let content: React.ReactNode;

  if (isLoading) {
    content = Array.from({ length: 16 }, (_, i) => <CardSkeleton key={i} />);
  } else if (isSuccess) {
    const games: Game[] = (data && data.results) || [];
    content = games.map((game) => (
      <GameCard
        key={game.id}
        game={game}
        className="hover-hover:scale-105 transition duration-300 ease-in-out"
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
          <GamesPagination count={data.count} />
        </div>
      )}
    </div>
  );
};
