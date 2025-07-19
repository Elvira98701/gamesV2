import {
  BrowseGames,
  Contact,
  Features,
  Hero,
  GamesSlider,
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
