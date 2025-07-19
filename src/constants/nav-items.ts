import { IPageItem } from "@/types/types";

import { pageConfig } from "./pages-config";

export const navItems: IPageItem[] = [
  {
    id: 1,
    href: pageConfig.favourites,
    title: "Favourites",
  },
  {
    id: 2,
    href: pageConfig.games,
    title: "Games",
  },
];
