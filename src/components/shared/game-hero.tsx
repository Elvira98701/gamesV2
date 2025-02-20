import React from "react";
import { Container } from "./container";
import { BentoTilt } from "./bento-tilt";
import { Button, Logo } from "../ui";
import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  favouritesToggled,
  selectFavourites,
} from "@/features/favourites/favouritesSlice";
import { GameDetails } from "@/types/types";
import { cn } from "@/lib/utils";
import { GameDialog } from "./game-dialog";

interface GameHeroProps {
  game: GameDetails;
}

export const GameHero: React.FC<GameHeroProps> = ({ game }) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(selectFavourites);
  const existingIndex = favourites.findIndex((item) => item.id === game.id);

  const handleToggleFavourites = () => {
    dispatch(favouritesToggled(game));
  };

  return (
    <section className="pb-4 pt-7 md:py-7 overflow-hidden">
      <Container className="h-[80vh] sm:h-[50vh] flex flex-col-reverse sm:flex-row justify-center gap-4 md:gap-7">
        <BentoTilt className="relative rounded-xl flex-1 bg-cover bg-center flex flex-col justify-end items-end">
          <img src={game.background_image} className="object-cover size-full" />
          <div className="absolute bottom-5 left-5 flex items-center gap-2">
            <Button
              size="icon"
              variant="default"
              type="button"
              title="add to favourites"
              onClick={handleToggleFavourites}
            >
              <Heart
                className={cn(
                  existingIndex !== -1 && "fill-red-700 stroke-red-700"
                )}
              />
            </Button>
            <GameDialog description={game.description_raw} />
          </div>
        </BentoTilt>
        <BentoTilt className="rounded-xl flex-1 border border-zinc-800">
          <div className="flex size-full flex-col justify-center bg-foreground text-background p-5">
            <h1 className="title-small">{game.name}</h1>
            <Logo className="absolute right-5 bottom-5 w-16 h-16" />
          </div>
        </BentoTilt>
      </Container>
    </section>
  );
};
