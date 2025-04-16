import { Contact, FavouritesHero, FavouritesList } from "@/components/shared";

export const Favourites = () => {
  return (
    <main className="bg-foreground">
      <FavouritesHero />
      <FavouritesList />
      <Contact />
    </main>
  );
};
