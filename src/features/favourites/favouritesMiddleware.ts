import { createLocalStorageMiddleware } from "../middleware/localStorageMiddleware";

export const favouritesMiddleware = createLocalStorageMiddleware({
  key: "favourites",
  slice: "favourites",
});
