import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/writing"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        featuredImage: image().optional(),
        date: z.date(),
        position: z.number(),
    })
})

const certificates = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/certificates"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        featuredImage: image().optional(),
        date: z.date(),
    })
})

const testimonials = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/testimonials"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        featuredImage: image().optional(),
        date: z.date(),
    })
})

export const collections = { writing, certificates, testimonials };
