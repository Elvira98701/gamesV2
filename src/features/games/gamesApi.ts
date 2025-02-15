import { GamesResponse } from "@/types/types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGames: builder.query<GamesResponse, void>({
      query: () => `/games?key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
