import { project } from "../types/interfaces";
import e_com from "../../public/projects/e-commerce.png";
import portfolio from "../../public/projects/portfolio.png";
import ocean from "../../public/projects/ocean.png";
import ldrsi from "../../public/projects/ildrs.png";
import grinding from "../../public/projects/grinding.png";
import weather from "../../public/projects/weather.png";
import farm from "../../public/projects/farm.png";

export const projects: project[] = [
  {
    image: e_com,
    title: "Portfolio",
    description:
      "A web application to present my skills, the projects I have worked on, and more information about me.Built using TypeScript,Nextjs,Pure CSS",
    url: "https://github.com/Bouchali-Aymen/E-commerce-website",
  },
  {
    image: portfolio,
    title: "Shopin",
    description:
      "An e-commerce website for stylish and affordable clothing, featuring easy navigation and friendly user interface,with admine panel.Built using Nextjs,Pure CSS for frontend and Nodejs,Expressjs,MongoDB for backend",
    url: "https://github.com/Bouchali-Aymen/Portfolio ",
  },
  {
    image: ocean,
    title: "Ocean",
    description:
      "A visually engaging landing page showcasing the services and details of Ocean Company. Built with TypeScript, Next.js, and Tailwind CSS, the page delivers a clean, responsive design with smooth user interactions, ensuring an optimal browsing experience for visitors.",
    url: "https://github.com/Bouchali-Aymen/Landing-Page",
  },
  {
    image: ldrsi,
    title: "LRDSI",
    description:
      "Dynamic website to present the LRDSI research laboratory of the Computer Science department,as well as its products and scientific activities,I was responsible of the backend.Built using HTML,CSS,JS for frontend and PHP,MySQL for backend",
    url: "https://github.com/Bouchali-Aymen/LRDSI",
  },
  {
    image: grinding,
    title: "Grinding",
    description:
      "Grinding is an online platform designed to sell digital courses across various categories, offering seamless online payments through the Stripe gateway. The platform is built with a modern tech stack, utilizing Next.js and Tailwind CSS for a responsive and intuitive frontend, while Strapi CMS powers the backend for flexible content management. For secure and streamlined user authentication, Clerk is integrated, providing a robust login experience.",
    url: "https://github.com/Bouchali-Aymen/Grinding",
  },
  {
    image: weather,
    title: "Weather App",
    description:
      "A weather web app built using Next.js, TypeScript, and pure CSS, using the OpenWeatherMap API to display real-time weather data for different locations.",
    url: "https://github.com/Bouchali-Aymen/Weather-Web-Application",
  },
  {
    image: farm,
    title: "Mazraati",
    description:
      "Developed an end-to-end web application solution to help a client firm efficiently manage their farm operations. Built using Next.js,CSS for forntend and Node.js and Express.js and MySQL for backend ",
    url: "https://github.com/Bouchali-Aymen/Weather-Web-Application",
  },
];
