// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content"

// 2. Import loader(s)
import { glob, file } from "astro/loaders"

// 3. Import Zod
import { z } from "astro/zod"

// 4. Define your collection(s)
const articles = defineCollection({
  /* ... */
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
})
const guides = defineCollection({
  /* TODO: these are slides.js  */
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { articles }
