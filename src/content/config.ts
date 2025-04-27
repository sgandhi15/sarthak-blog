import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    modDatetime: z.date().optional(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
    editPost: z
      .object({
        URL: z.string().url(),
        text: z.string(),
      })
      .optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDatetime: z.date(),
    modDatetime: z.date().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    ogImage: z.union([z.string(), z.object({ src: z.string() })]).optional(),
    canonicalURL: z.string().optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
