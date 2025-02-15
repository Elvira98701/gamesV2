interface IPageConfig {
  home: string;
  favourites: string;
  games: string;
}

class PageConfig implements IPageConfig {
  home = "/";
  favourites = "/favourites";
  games = "/games";
  game = "/game/:id";
}

export const pageConfig = new PageConfig();
