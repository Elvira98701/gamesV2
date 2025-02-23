import { z } from "zod";

export const gameSchema = z.object({
  id: z.number(),
  name: z.string(),
  released: z.string(),
  background_image: z.string().url(),
  rating: z.number(),
  platforms: z.array(
    z.object({
      platform: z.object({
        id: z.number(),
        name: z.string(),
      }),
    })
  ),
});

export const gameDetailsSchema = gameSchema.extend({
  background_image_additional: z.string().url().nullable(),
  description_raw: z.string(),
  playtime: z.number(),
  movies_count: z.number(),
  screenshots_count: z.number(),
  website: z.string().url().nullable(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
});

export const gamesResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(gameSchema),
});

export const movieSchema = z.object({
  id: z.number(),
  name: z.string(),
  preview: z.string().url(),
  data: z.object({}),
});

export const moviesResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(movieSchema),
});

export const screenshotSchema = z.object({
  id: z.number(),
  image: z.string().url(),
  width: z.number(),
  height: z.number(),
});

export const screenshotsResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(screenshotSchema),
});

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const genresResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(genreSchema),
});

export const platformSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const platformsResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(platformSchema),
});

export const developerSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const developersResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(developerSchema),
});

export type Game = z.infer<typeof gameSchema>;
export type GameDetails = z.infer<typeof gameDetailsSchema>;
export type GamesResponse = z.infer<typeof gamesResponseSchema>;
export type Movie = z.infer<typeof movieSchema>;
export type MoviesResponse = z.infer<typeof moviesResponseSchema>;
export type Screenshot = z.infer<typeof screenshotSchema>;
export type ScreenshotsResponse = z.infer<typeof screenshotsResponseSchema>;
export type Genre = z.infer<typeof genreSchema>;
export type GenresResponse = z.infer<typeof genresResponseSchema>;
export type Platform = z.infer<typeof platformSchema>;
export type PlatfromsResponse = z.infer<typeof platformsResponseSchema>;
export type Developer = z.infer<typeof developerSchema>;
export type DevelopersResponse = z.infer<typeof developersResponseSchema>;

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Enter the correct email address."),
  message: z.string().min(5, "The message must be at least 5 characters long."),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export interface IPageItem {
  id: number;
  href: string;
  title: string;
}
