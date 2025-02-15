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

export const gamesResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(gameSchema),
});

export type Game = z.infer<typeof gameSchema>;
export type GamesResponse = z.infer<typeof gamesResponseSchema>;

export interface IPageItem {
  id: number;
  href: string;
  title: string;
}
