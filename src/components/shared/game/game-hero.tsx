import React from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  favouritesToggled,
  selectFavourites,
} from "@/features/favourites/favouritesSlice";
import { GameDetails } from "@/types/types";
import { Container } from "@/components/shared";
import { Button, ButtonLink } from "@/components/ui";

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
    <section className="pb-4 pt-7 md:py-12">
      <Container>
        <div className="rounded-3xl overflow-hidden">
          <div className="game-card min-h-[80vh] flex size-full flex-col gap-2 sm:gap-4 justify-end text-background p-5 relative">
            <h1 className="title-small z-10 relative max-w-max">{game.name}</h1>
            <div className="flex items-center z-10 relative">
              {game.website && (
                <ButtonLink href={game.website} target="_blank">
                  Website
                </ButtonLink>
              )}
              <Button
                size="icon"
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
            </div>
            <img
              src={game.background_image}
              className="object-cover object-center size-full absolute top-0 left-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
