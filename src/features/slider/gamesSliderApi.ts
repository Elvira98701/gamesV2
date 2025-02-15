import { GamesResponse } from "@/types/types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesSliderApi = createApi({
  reducerPath: "gamesSliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSliderGames: builder.query<GamesResponse, void>({
      query: () =>
        `/games?key=${import.meta.env.VITE_API_KEY}&page_size=10&page=1`,
    }),
  }),
});

export const { useGetSliderGamesQuery } = gamesSliderApi;
