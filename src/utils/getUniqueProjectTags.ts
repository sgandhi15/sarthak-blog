import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

interface Tag {
  tag: string;
  tagName: string;
}

const getUniqueProjectTags = (projects: CollectionEntry<"projects">[]) => {
  console.log("Projects:", projects);
  const tags: Tag[] = projects
    .flatMap(project => {
      console.log("Project tags:", project.data.tags);
      return project.data.tags || [];
    })
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  console.log("Final tags:", tags);
  return tags;
};

export default getUniqueProjectTags;
