import React from "react";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  favouritesToggled,
  selectFavourites,
} from "@/features/favourites/favouritesSlice";
import { Game } from "@/types/types";
import { Button, ButtonLink, Card } from "@/components/ui";
import { CardContent } from "@/components/ui/card";

interface GameCardProps {
  className?: string;
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ className, game }) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(selectFavourites);
  const existingIndex = favourites.findIndex((item) => item.id === game.id);

  const handleToggleFavourites = () => {
    dispatch(favouritesToggled(game));
  };

  return (
    <Card
      className={cn(
        "bg-foreground text-background overflow-hidden min-h-[400px] relative",
        className
      )}
    >
      <CardContent className="p-0">
        <img
          src={game.background_image}
          alt={game.name}
          className="size-full h-60 object-cover"
          loading="lazy"
        />
        <div className="px-2 py-6">
          <div className="flex justify-between">
            <h3 className="text-lg">{game.name}</h3>
            <span className="inline-flex items-center gap-1">
              <Star /> <span>{game.rating}</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 absolute bottom-6 left-0 w-full">
            <ButtonLink href={`/game/${game.id}`} variant="secondary">
              Show more
            </ButtonLink>
            <Button
              size="icon"
              variant="secondary"
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
        </div>
      </CardContent>
    </Card>
  );
};
