import { Route, Routes } from "react-router-dom";

import { Footer, Header } from "@/components/shared";
import { pageConfig } from "@/constants";
import { Favourites, Game, Games, GamesList, Home } from "@/pages";
import { ScrollToTop } from "@/utils";

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
