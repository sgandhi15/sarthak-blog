import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sarthak.page/", // replace this with your deployed domain
  author: "Sarthak Gandhi",
  profile: "https://www.linkedin.com/in/sarthakgandhi1/",
  desc: "Software developer and a passionate learner",
  title: "Sarthak's Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/sgandhi15/sarthak-blog/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sgandhi15",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/sgandhi15/sarthak-blog",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/sgandhi15/sarthak-blog",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sarthakgandhi1/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:gandhi.sarthak15@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/sarthak_xp",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://github.com/sgandhi15/sarthak-blog",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
];
