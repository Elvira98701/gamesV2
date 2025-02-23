import React from "react";
import { Link } from "react-router-dom";
import { Frown } from "lucide-react";
import {
  favouritesCleared,
  selectFavourites,
} from "@/features/favourites/favouritesSlice";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { pageConfig } from "@/utils/pages.config";
import { Container, GameCard } from "@/components/shared";
import { Button } from "@/components/ui";

interface FavouritesListProps {
  className?: string;
}

export const FavouritesList: React.FC<FavouritesListProps> = ({
  className,
}) => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(selectFavourites);

  const handleClearFavourites = () => {
    dispatch(favouritesCleared());
  };

  return (
    <section className={className}>
      <Container>
        {favourites.length > 0 ? (
          <div className="pt-16 lg:pt-28">
            <h3 className="text-background pb-10">
              Games ({favourites.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {favourites.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  className="border border-zinc-900"
                />
              ))}
            </div>
            <div className="pt-7 flex justify-center">
              <Button
                className="bg-primary"
                onClick={handleClearFavourites}
                variant="secondary"
                type="button"
              >
                Clear all
              </Button>
            </div>
          </div>
        ) : (
          <div className="min-h-40 flex justify-center items-center rounded-xl border border-zinc-800">
            <p className="flex items-center gap-2 text-lg text-background">
              <Frown />
              No games found. Add{" "}
              <Link className="underline" to={pageConfig.games}>
                games
              </Link>
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};
