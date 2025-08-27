import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    dates: z.string(),
    status: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
