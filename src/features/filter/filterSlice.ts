import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FilterState {
  tempGenres: number[];
  tempPlatforms: number[];
  tempDevelopers: number[];
  selectedGenres: number[];
  selectedPlatforms: number[];
  selectedDevelopers: number[];
  currentPage: number;
  searchValue: string;
  order: string;
}

const initialState: FilterState = {
  tempGenres: [],
  tempPlatforms: [],
  tempDevelopers: [],
  selectedGenres: [],
  selectedPlatforms: [],
  selectedDevelopers: [],
  currentPage: 1,
  searchValue: "",
  order: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleGenre(state, action: PayloadAction<number>) {
      state.tempGenres = state.tempGenres.includes(action.payload)
        ? state.tempGenres.filter((id) => id !== action.payload)
        : [...state.tempGenres, action.payload];
    },
    togglePlatform(state, action: PayloadAction<number>) {
      state.tempPlatforms = state.tempPlatforms.includes(action.payload)
        ? state.tempPlatforms.filter((id) => id !== action.payload)
        : [...state.tempPlatforms, action.payload];
    },
    toggleDeveloper(state, action: PayloadAction<number>) {
      state.tempDevelopers = state.tempDevelopers.includes(action.payload)
        ? state.tempDevelopers.filter((id) => id !== action.payload)
        : [...state.tempDevelopers, action.payload];
    },
    applyFilters(state) {
      state.selectedGenres = [...state.tempGenres];
      state.selectedPlatforms = [...state.tempPlatforms];
      state.selectedDevelopers = [...state.tempDevelopers];
    },
    resetFilters(state) {
      state.tempGenres = [];
      state.tempPlatforms = [];
      state.tempDevelopers = [];
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setOrder(state, action: PayloadAction<string>) {
      state.order = action.payload;
    },
  },
});

export const {
  toggleGenre,
  togglePlatform,
  toggleDeveloper,
  applyFilters,
  resetFilters,
  setCurrentPage,
  setSearchValue,
  setOrder,
} = filterSlice.actions;

export default filterSlice.reducer;

export const selectTempGenres = (state: RootState) => state.filter.tempGenres;
export const selectTempPlatforms = (state: RootState) =>
  state.filter.tempPlatforms;
export const selectTempDevelopers = (state: RootState) =>
  state.filter.tempDevelopers;

export const selectSelectedGenres = (state: RootState) =>
  state.filter.selectedGenres;
export const selectSelectedPlatforms = (state: RootState) =>
  state.filter.selectedPlatforms;
export const selectSelectedDevelopers = (state: RootState) =>
  state.filter.selectedDevelopers;

export const selectCurrentPage = (state: RootState) => state.filter.currentPage;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;
export const selectOrder = (state: RootState) => state.filter.order;
