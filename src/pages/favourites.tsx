import React from "react";
import { Contact, FavouritesHero, FavouritesList } from "@/components/shared";

export const Favourites: React.FC = () => {
  return (
    <main className="bg-foreground">
      <FavouritesHero />
      <FavouritesList />
      <Contact />
    </main>
  );
};
