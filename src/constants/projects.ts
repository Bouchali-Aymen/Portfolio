import { project } from "../types/interfaces";
import e_com from "../../public/projects/e-commerce.png";
import portfolio from "../../public/projects/portfolio.png";
import ocean from "../../public/projects/ocean.png";
import ldrsi from "../../public/projects/ildrs.png";
import grinding from "../../public/projects/grinding.png";
import weather from "../../public/projects/weather.png";
import farm from "../../public/projects/farm.png";
import eventers from "../../public/projects/eventers.png";
import connected from "../../public/projects/connected.png";
import buildprompt from "../../public/projects/buildprompt.png";
import zedLanding from "../../public/projects/zedacademy-landing.png";
import zedPlatform from "../../public/projects/zedacademy-platform.png";
import dataprep from "../../public/projects/dataprep.png";

/**
 * Personal / open-source style projects shown in the portfolio.
 */
export const projects: project[] = [
  {
    image: dataprep,
    title: "DataPrep",
    description:
      "Image annotation workspace for computer-vision datasets — review detections, draw and correct bounding boxes, and export labels for training. Next.js frontend with a FastAPI backend running a custom YOLO detector for livestock imagery.",
    url: "",
    tags: ["Next.js", "FastAPI", "YOLO", "Computer Vision"],
  },
  {
    image: grinding,
    title: "Grinding",
    description:
      "Course marketplace with Stripe checkout, Strapi-managed content, and Clerk authentication — a complete learning commerce experience on Next.js and Tailwind CSS.",
    url: "https://github.com/Bouchali-Aymen/Grinding",
    tags: ["Next.js", "Tailwind", "Strapi", "Stripe", "Clerk"],
  },
  {
    image: e_com,
    title: "Shopin",
    description:
      "Apparel e-commerce storefront with an admin panel for catalog and order management. Next.js on the client; Node.js, Express, and MongoDB on the server.",
    url: "https://github.com/Bouchali-Aymen/E-commerce-website",
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
  },
  {
    image: ocean,
    title: "Ocean",
    description:
      "Corporate marketing site for Ocean Company — a responsive TypeScript and Next.js landing experience styled with Tailwind CSS.",
    url: "https://github.com/Bouchali-Aymen/Landing-Page",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    image: ldrsi,
    title: "LRDSI",
    description:
      "Institutional website for a university research laboratory. Owned the PHP and MySQL backend powering publications, products, and scientific activities.",
    url: "https://github.com/Bouchali-Aymen/LRDSI",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    image: weather,
    title: "Weather App",
    description:
      "Location-based weather client built with Next.js and TypeScript, integrating the OpenWeatherMap API for live conditions.",
    url: "https://github.com/Bouchali-Aymen/Weather-Web-Application",
    tags: ["Next.js", "TypeScript", "API"],
  },
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "This site — a personal showcase of experience, projects, and technical focus, implemented with Next.js, TypeScript, and Tailwind CSS.",
    url: "https://github.com/Bouchali-Aymen/Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

/**
 * Client / company projects from professional roles.
 */
export const pro_projects: project[] = [
  {
    image: zedPlatform,
    title: "Zed Academy Platform",
    description:
      "Production learning platform serving baccalaureate students nationwide: catalog, enrollment, payments, and administrative tools on Next.js with Firebase Auth, Firestore, Cloud Functions, and Storage.",
    url: "https://web.zedacademy.net",
    tags: ["Next.js", "Firebase", "TypeScript", "EdTech"],
  },
  {
    image: zedLanding,
    title: "Zed Academy Landing",
    description:
      "Public-facing site for Zed Academy — an RTL Arabic marketing experience that presents the product, outcomes, and conversion flows. Implemented with Next.js and Tailwind CSS.",
    url: "https://zedacademy.net",
    tags: ["Next.js", "Tailwind CSS", "RTL"],
  },
  {
    image: buildprompt,
    title: "BuildPrompt",
    description:
      "Frontend contribution to an AI SaaS that turns documents into actionable insights. Built responsive interfaces in Next.js and Nuxt.js with Tailwind CSS.",
    url: "",
    tags: ["Next.js", "Nuxt.js", "Tailwind", "AI"],
  },
  {
    image: connected,
    title: "Connected Algeria",
    description:
      "National event platform for the Ministry of Telecommunications: multilingual registration, programming, and stakeholder networking for Connected Algeria 2025.",
    url: "https://connectedalgeria.dz/",
    tags: ["Next.js", "Multilingual", "Events"],
  },
  {
    image: eventers,
    title: "Eventers",
    description:
      "Platform for organizing events, managing contracts, and supporting real-time collaboration. Contributed across the frontend and backend feature set.",
    url: "",
    tags: ["Full Stack", "Realtime", "Events"],
  },
  {
    image: farm,
    title: "Mazraati",
    description:
      "Operations system for a commercial farm — inventory, workflows, and day-to-day management — with a Next.js client and a Node.js, Express, and MySQL backend.",
    url: "https://github.com/Bouchali-Aymen/Mazraati",
    tags: ["Next.js", "Node.js", "Express", "MySQL"],
  },
];
