import React from "react";
import { useParams } from "react-router-dom";
import { Contact, GameDetails, GameHero } from "@/components/shared";
import { useGetGameByIdQuery } from "@/features/games/gamesApi";
import { Loader } from "lucide-react";

export const Game: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetGameByIdQuery(Number(id));

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-foreground text-background">
        <Loader className="animate-spin" />
      </div>
    );

  if (!data || error)
    return (
      <div className="min-h-screen flex justify-center items-center bg-foreground text-background">
        <p>Failed to load game. Please try again later.</p>
      </div>
    );

  return (
    <main className="bg-foreground text-background">
      <GameHero game={data} />
      <GameDetails
        released={data.released}
        rating={data.rating}
        platforms={data.platforms}
        playtime={data.playtime}
        image={data.background_image_additional}
      />
      <Contact />
    </main>
  );
};
