import { GameDetails, GameHero } from "@/components/shared";
import { useGetGameByIdQuery } from "@/features/games/gamesApi";
import React from "react";
import { useParams } from "react-router-dom";

export const Game: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetGameByIdQuery(Number(id));

  if (isLoading) return <p>Loading</p>;
  if (!data || error) return <p>Error</p>;

  return (
    <main className="bg-foreground text-background">
      <GameHero game={data} />
      <GameDetails
        released={data.released}
        rating={data.rating}
        platforms={data.platforms}
        playtime={data.playtime}
      />
    </main>
  );
};
