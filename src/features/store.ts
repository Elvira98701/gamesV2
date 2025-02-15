import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "@/features/favourites/favouritesSlice";

import { gamesSliderApi } from "./slider/gamesSliderApi";
import { gamesApi } from "./games/gamesApi";

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    [gamesSliderApi.reducerPath]: gamesSliderApi.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(gamesSliderApi.middleware)
      .concat(gamesApi.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
