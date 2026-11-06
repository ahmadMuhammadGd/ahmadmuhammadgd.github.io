import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),

    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .optional(),
  }),
});

const writing = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/writing",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = {
  projects,
  writing,
};
