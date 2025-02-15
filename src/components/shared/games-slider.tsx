import React from "react";
import { Carousel } from "../ui";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Container } from "./container";
import { GameCard } from "./game-card";
import { useGetSliderGamesQuery } from "@/features/slider/gamesSliderApi";
import { Game } from "@/types/types";

export const GamesSlider: React.FC = () => {
  const { data, error, isLoading } = useGetSliderGamesQuery();

  if (isLoading) return <p>Загрузка слайдера...</p>;
  if (error) return <p>Ошибка загрузки слайдера</p>;

  const games: Game[] = (data && data.results) || [];

  return (
    <section className="py-20">
      <Container className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-5/6"
        >
          <CarouselContent>
            {games.map((game) => (
              <CarouselItem key={game.id} className="md:basis-1/2 lg:basis-1/4">
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
