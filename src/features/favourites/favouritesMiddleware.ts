import { createLocalStorageMiddleware } from "../middleware/localStorageMiddleware";

export const FAVOURITES_KEY = "favourites";

export const favouritesMiddleware = createLocalStorageMiddleware({
  key: FAVOURITES_KEY,
  slice: FAVOURITES_KEY,
});
