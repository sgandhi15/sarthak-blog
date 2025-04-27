import type { CollectionEntry } from "astro:content";

const getSortedProjects = (projects: CollectionEntry<"projects">[]) => {
  return projects.sort((a, b) => {
    const dateA = a.data.modDatetime ?? a.data.pubDatetime ?? new Date(0);
    const dateB = b.data.modDatetime ?? b.data.pubDatetime ?? new Date(0);
    return (
      Math.floor(new Date(dateB).getTime() / 1000) -
      Math.floor(new Date(dateA).getTime() / 1000)
    );
  });
};

export default getSortedProjects;
