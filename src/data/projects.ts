export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  github?: string;
  live?: string;
  pubDatetime: string;
}

export const projects: Project[] = [
  {
    title: "Personal Blog",
    description:
      "A modern blog built with Astro, featuring a clean design and dark mode support.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/yourusername/your-blog",
    image: "https://picsum.photos/600/300",
    github: "https://github.com/yourusername/your-blog",
    live: "https://your-blog.com",
    pubDatetime: "2023-11-01T10:00:00.000Z",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration and inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    href: "https://github.com/yourusername/ecommerce",
    image: "https://picsum.photos/600/300",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce.com",
    pubDatetime: "2022-07-15T15:30:00.000Z",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app for managing tasks and projects with team collaboration features.",
    tags: ["Vue.js", "Firebase", "PWA"],
    href: "https://github.com/yourusername/task-manager",
    image: "https://picsum.photos/600/300",
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-task-manager.com",
    pubDatetime: "2021-03-20T09:00:00.000Z",
  },
];
