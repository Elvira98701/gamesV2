import { Route, Routes } from "react-router-dom";
import { pageConfig } from "./utils/pages.config";
import ScrollToTop from "./utils/scroll-to-top";
import { Footer, Header } from "@/components/shared";
import { Favourites, Game, Games, GamesList, Home } from "@/pages";

export const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path={pageConfig.favourites} element={<Favourites />} />
        <Route path={pageConfig.games} element={<Games />}>
          <Route index element={<GamesList />} />
        </Route>
        <Route path={pageConfig.game} element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
};
