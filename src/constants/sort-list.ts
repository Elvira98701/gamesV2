import { SortOrder } from "@/types/types";

export const sortList = [
  { id: 1, name: "-added", title: "Popularity", order: SortOrder.Desc },
  { id: 2, name: "added", title: "Popularity", order: SortOrder.Asc },
  { id: 3, name: "-name", title: "Name", order: SortOrder.Desc },
  { id: 4, name: "name", title: "Name", order: SortOrder.Asc },
  { id: 5, name: "-rating", title: "Rating", order: SortOrder.Desc },
  { id: 6, name: "rating", title: "Rating", order: SortOrder.Asc },
  { id: 7, name: "-released", title: "Released", order: SortOrder.Desc },
  { id: 8, name: "released", title: "Released", order: SortOrder.Asc },
];
