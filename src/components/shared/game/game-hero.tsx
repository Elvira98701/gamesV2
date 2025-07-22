import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Heart } from "lucide-react";

import { Container } from "@/components/shared";
import { Button, ButtonLink } from "@/components/ui";
import {
  favouritesToggled,
  selectFavouriteGameById,
} from "@/features/favourites";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { cn } from "@/lib/utils";
import { GameDetails } from "@/types/types";

interface GameHeroProps {
  game: GameDetails;
}

gsap.registerPlugin(ScrollTrigger);

export const GameHero = ({ game }: GameHeroProps) => {
  const dispatch = useAppDispatch();
  const existingGame = useAppSelector((state) =>
    selectFavouriteGameById(state, game.id)
  );

  useGSAP(() => {
    gsap.to("#hero-frame", {
      scale: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const handleToggleFavourites = () => {
    dispatch(favouritesToggled(game));
  };

  return (
    <section className="pb-4 pt-7 md:py-12" aria-labelledby="game-title">
      <Container>
        <div className="rounded-3xl overflow-hidden">
          <div className="game-card min-h-[80vh] flex size-full flex-col gap-2 sm:gap-4 justify-end text-background p-5 relative">
            <h1 className="title-small z-10 relative max-w-max" id="game-title">
              {game.name}
            </h1>
            <div className="flex items-center z-10 relative">
              {game.website && (
                <ButtonLink
                  href={game.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </ButtonLink>
              )}
              <Button
                size="icon"
                type="button"
                title="Add to favourites"
                aria-label="Add to favourites"
                onClick={handleToggleFavourites}
              >
                <Heart
                  className={cn(existingGame && "fill-red-700 stroke-red-700")}
                />
              </Button>
            </div>
            <img
              id="hero-frame"
              src={game.background_image || "/images/game.jpg"}
              alt={game.name}
              className="object-cover object-center size-full absolute top-0 left-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
