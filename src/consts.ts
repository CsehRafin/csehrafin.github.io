import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ishtiaque Ahmed Rafin",
  EMAIL: "csehrafin@csehrafin.cloudns.nz",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Root",
  DESCRIPTION: "Cybersecurity Specialist, PKI Engineer & Architect (ePassports, eID, eMRTDs), International Law Specialist & Analyst and a Researcher",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "A collection of my publications and research work.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const CERTIFICATIONS: Metadata = {
  TITLE: "Certifications",
  DESCRIPTION: "A collection of my certifications.",
};


export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/csehrafin"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/csehrafin/",
  }
];
