import {
  favouritesCleared,
  selectFavourites,
} from "@/features/favourites/favouritesSlice";
import { useAppDispatch, useAppSelector } from "@/features/hooks";

import React from "react";
import { Container } from "./container";
import { GameCard } from "./game-card";
import { Button } from "../ui";
import { pageConfig } from "@/utils/pages.config";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

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
          <>
            <div className="grid grid-cols-5 gap-5 mt-20">
              {favourites.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
            <div className="flex items-center justify-center py-10">
              <Button onClick={handleClearFavourites}>Clear all</Button>
            </div>
          </>
        ) : (
          <div className="min-h-40 flex justify-center items-center">
            <p className="flex items-center gap-2 text-lg">
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
