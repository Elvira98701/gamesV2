import { Game } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const loadFromLocalStorage = (): Game[] => {
  try {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  } catch (err) {
    console.error("Error loading data from localStorage:", err);
    return [];
  }
};

const initialState: Game[] = loadFromLocalStorage();

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    favouritesToggled(state, action) {
      const existingIndex = state.findIndex(
        (obj) => obj.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      } else {
        state.push(action.payload);
      }
    },
    favouritesCleared() {
      return [];
    },
  },
});

export const { favouritesToggled, favouritesCleared } = favouritesSlice.actions;
export default favouritesSlice.reducer;

export const selectFavourites = (state: RootState) => state.favourites;
