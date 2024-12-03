import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
    loader: glob({ pattern: "**\/*.md", base: "./src/data/writing"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        featuredImage: z.string(),
    })
})

export const collections = { writing };
