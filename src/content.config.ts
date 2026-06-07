import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    author: z.object({
      name: z.string(),
      image: z.string(),
      facebookUrl: z.string().optional(),
      twitterUrl: z.string().optional(),
      linkedinUrl: z.string().optional(),
    }),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
