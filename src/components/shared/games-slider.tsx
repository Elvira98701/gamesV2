import React from "react";
import { CardSkeleton, Carousel } from "../ui";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Container } from "./container";
import { GameCard } from "./game-card";
import { useGetSliderGamesQuery } from "@/features/games/gamesApi";
import { Game } from "@/types/types";

export const GamesSlider: React.FC = () => {
  const { data, error, isLoading } = useGetSliderGamesQuery();

  if (error) return <p>{error.toString()}</p>;

  const games: Game[] = (data && data.results) || [];

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-5/6"
        >
          <CarouselContent>
            {isLoading
              ? Array.from({ length: 4 }, (_, i) => (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                    <div className="p-1 ">
                      <CardSkeleton />
                    </div>
                  </CarouselItem>
                ))
              : games.map((game) => (
                  <CarouselItem
                    key={game.id}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1 ">
                      <GameCard game={game} />
                    </div>
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
};
