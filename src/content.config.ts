import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/news" }),
});
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/works" }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/events" }),
});

const config = defineCollection({
  loader: file("./src/contents/config/data.json"),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.array(z.string()),
    }),
    socials: z.array(
      z.object({
        icon: z.string(),
        url: z.string(),
      })
    ),
    header: z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string().optional(),
      socials: z.boolean(),
      nav: z.array(
        z.object({
          title: z.string(),
          link: z.string(),
          childs: z
            .array(
              z.object({
                title: z.string(),
                link: z.string(),
              })
            )
            .optional()
            .nullable(),
        })
      ),
    }),
    footer: z.object({
      title: z.string(),
      image: z.string(),
      rows: z.array(
        z.object({
          id: z.number(),
          sections: z.array(
            z.object({
              title: z.string(),
              links: z
                .array(
                  z.object({
                    title: z.string(),
                    url: z.string(),
                  })
                )
                .nullable()
                .optional(),
              texts: z.array(z.string()).nullable().optional(),
              socials: z.boolean().nullable().optional(),
            })
          ),
        })
      ),
    }),
  }),
});

export const collections = { news, works, events, config };
