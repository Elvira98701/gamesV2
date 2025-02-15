import {
  BrowseGames,
  Contact,
  Features,
  GamesSlider,
  Hero,
} from "@/components/shared";
import React from "react";

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BrowseGames />
      <GamesSlider />
      <Features />
      <Contact />
    </main>
  );
};
