import { Container, GameCard, SearchInput, Sort } from "@/components/shared";
import { useGetGamesQuery } from "@/features/games/gamesApi";
import { Game } from "@/types/types";
import React from "react";

export const Games: React.FC = () => {
  const { data, error, isLoading } = useGetGamesQuery();

  if (isLoading) return <p>Загрузка слайдера...</p>;
  if (error) return <p>Ошибка загрузки слайдера</p>;

  const games: Game[] = (data && data.results) || [];

  return (
    <main className="py-32 min-h-screen">
      <Container className="flex gap-4">
        <aside className="max-w-72 w-full rounded-2xl border p-4">aside</aside>
        <div className="">
          <header className="min-h-24 w-full rounded-2xl border mb-4 p-4 flex justify-between items-center">
            <SearchInput className="max-w-80" />
            <Sort />
          </header>
          <div className="grid grid-cols-4 gap-4">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};
