import {
  BrowseGames,
  Contact,
  Features,
  GamesSlider,
  Hero,
} from "@/components/shared";

export const Home = () => {
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
