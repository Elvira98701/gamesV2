import { FavouritesList } from "@/components/shared";
import React from "react";

export const Favourites: React.FC = () => {
  return (
    <main className="p-7">
      <section className="h-[50vh] overflow-hidden rounded-2xl">
        <img src="/images/wish.jpg" alt="" className="object-cover" />
      </section>
      <FavouritesList />
    </main>
  );
};
