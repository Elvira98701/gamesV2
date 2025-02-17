import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "@/components/shared";
import { Favourites, Game, Games, GamesList, Home } from "@/pages";
import { pageConfig } from "./utils/pages.config";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
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
