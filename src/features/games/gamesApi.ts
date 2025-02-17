import {
  DevelopersResponse,
  GameDetails,
  GamesResponse,
  GenresResponse,
  MoviesResponse,
  PlatfromsResponse,
} from "@/types/types";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IParams {
  genres: number[];
  platforms: number[];
  developers: number[];
}

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGames: builder.query<GamesResponse, IParams>({
      query: ({ genres, platforms, developers }) => {
        const genreParams = genres.length ? `&genres=${genres.join(",")}` : "";
        const platformParams = platforms.length
          ? `&platforms=${platforms.join(",")}`
          : "";
        const developersParams = developers.length
          ? `&developers=${developers.join(",")}`
          : "";

        return `/games?key=${
          import.meta.env.VITE_API_KEY
        }&page_size=16${genreParams}${platformParams}${developersParams}`;
      },
    }),
    getSliderGames: builder.query<GamesResponse, void>({
      query: () =>
        `/games?key=${import.meta.env.VITE_API_KEY}&page_size=10&page=1`,
    }),
    getGameById: builder.query<GameDetails, number>({
      query: (id) => `/games/${id}?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getMoviesById: builder.query<MoviesResponse, number>({
      query: (id) => `/games/${id}/movies?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getGenres: builder.query<GenresResponse, void>({
      query: () => `/genres?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getPlatforms: builder.query<PlatfromsResponse, void>({
      query: () => `/platforms?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getDevelopers: builder.query<DevelopersResponse, void>({
      query: () => `/developers?key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetSliderGamesQuery,
  useGetGameByIdQuery,
  useGetMoviesByIdQuery,
  useGetGenresQuery,
  useGetPlatformsQuery,
  useGetDevelopersQuery,
} = gamesApi;
