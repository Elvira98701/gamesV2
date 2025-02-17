import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "@/features/favourites/favouritesSlice";
import filterReducer from "@/features/filter/filterSlice";

import { gamesApi } from "./games/gamesApi";

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    filter: filterReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
