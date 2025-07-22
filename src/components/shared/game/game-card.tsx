import type { MouseEvent } from "react";

import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Button, Card, CardContent } from "@/components/ui";
import {
  favouritesToggled,
  selectFavouriteGameById,
} from "@/features/favourites";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { cn } from "@/lib/utils";
import { Game } from "@/types/types";

interface GameCardProps {
  className?: string;
  game: Game;
}

export const GameCard = ({ className, game }: GameCardProps) => {
  const dispatch = useAppDispatch();
  const existingGame = useAppSelector((state) =>
    selectFavouriteGameById(state, game.id)
  );

  const handleToggleFavourites = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(favouritesToggled(game));
  };

  return (
    <Card className={cn("text-background overflow-hidden relative", className)}>
      <Link to={`/game/${game.id}`} className="game-card block min-h-80">
        <CardContent className="p-0">
          <img
            src={game.background_image || "/images/game.jpg"}
            alt={game.name}
            className="size-full object-cover absolute top-0 left-0"
            loading="lazy"
            width={306.66}
            height={320}
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
        title="Add to favourites"
        aria-label="Add to favourites"
        onClick={handleToggleFavourites}
        className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-background text-foreground hover-hover:bg-foreground hover-hover:text-background"
      >
        <Heart className={cn(existingGame && "fill-red-700 stroke-red-700")} />
      </Button>
    </Card>
  );
};
