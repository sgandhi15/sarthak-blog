import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

interface Tag {
  tag: string;
  tagName: string;
}

const getUniqueProjectTags = (projects: CollectionEntry<"projects">[]) => {
  const tags: Tag[] = projects
    .flatMap(project => {
      return project.data.tags || [];
    })
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueProjectTags;
