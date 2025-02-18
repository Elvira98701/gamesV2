import React from "react";
import {
  BrowseGames,
  Contact,
  Features,
  GamesSlider,
  Hero,
} from "@/components/shared";

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
