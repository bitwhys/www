import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

const articles = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    summary: z.string().optional(),
  }),
})

export const collections = { articles }
