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
});

export const collections = { news, works, events, config };
