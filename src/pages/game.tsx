import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import {
  Contact,
  GameDetails,
  GameHero,
  Requirements,
  Screenshots,
} from "@/components/shared";
import { useGetGameByIdQuery } from "@/features/games/gamesApi";

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

  const pcPlatform = data.platforms.find((item) => item.platform.name === "PC");

  return (
    <main className="bg-foreground text-background">
      <GameHero game={data} />
      <GameDetails
        released={data.released}
        rating={data.rating}
        platforms={data.platforms}
        playtime={data.playtime}
        image={data.background_image_additional}
        description={data.description_raw}
        genres={data.genres}
        developers={data.developers}
      />
      {pcPlatform && Object.keys(pcPlatform.requirements).length > 0 && (
        <Requirements requirements={pcPlatform.requirements} />
      )}
      {data.screenshots_count > 0 && <Screenshots id={data.id} />}
      <Contact />
    </main>
  );
};
