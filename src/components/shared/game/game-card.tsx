import React from "react";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  favouritesToggled,
  selectFavourites,
} from "@/features/favourites/favouritesSlice";
import { Game } from "@/types/types";
import { Button, Card } from "@/components/ui";
import { CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface GameCardProps {
  className?: string;
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ className, game }) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(selectFavourites);
  const existingIndex = favourites.findIndex((item) => item.id === game.id);

  const handleToggleFavourites = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    dispatch(favouritesToggled(game));
  };

  return (
    <Card className={cn("text-background overflow-hidden relative", className)}>
      <Link to={`/game/${game.id}`} className="game-card block min-h-80">
        <CardContent className="p-0">
          <img
            src={game.background_image}
            alt={game.name}
            className="size-full object-cover absolute top-0 left-0"
            loading="lazy"
          />
          <div className="p-4 z-10 absolute bottom-0 left-0 w-full">
            <div className="flex justify-between">
              <h3 className="text-lg">{game.name}</h3>
              <span className="inline-flex items-center gap-1">
                <Star color="#FBFF1A" className="fill-primary" size={16} />{" "}
                <span className="font-bold">{game.rating}</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
      <Button
        type="button"
        title="add to favourites"
        onClick={handleToggleFavourites}
        className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background"
      >
        <Heart
          className={cn(existingIndex !== -1 && "fill-red-700 stroke-red-700")}
        />
      </Button>
    </Card>
  );
};
