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

export const FavouritesList = ({ className }: FavouritesListProps) => {
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
            <h2 className="title-small text-background pb-10">
              Games ({favourites.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {favourites.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  className="hover-hover:scale-105 transition duration-300 ease-in-out"
                />
              ))}
            </div>
            <div className="pt-7 flex justify-center">
              <Button
                onClick={handleClearFavourites}
                type="button"
                className="bg-primary hover-hover:bg-violet-300"
                variant="secondary"
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
              <Link
                className="underline hover-hover:text-violet-300 transition-colors"
                to={pageConfig.games}
              >
                games
              </Link>
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};
