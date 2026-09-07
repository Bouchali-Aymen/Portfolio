import html from "../../public/html.png";
import css from "../../public/css-3.png";
import js from "../../public/js.png";
import node from "../../public/node-js.png";
import express from "../../public/express.png";
import react from "../../public/physics.png";
import mongo from "../../public/icons8-mongo-db-64.png";
import mysql from "../../public/mysql.png";
import php from "../../public/php.png";
import postgre from "../../public/postgre.png";
import github from "../../public/github.png";
import git from "../../public/gitDark.png";
import laravel from "../../public/laravel.png";
import python from "../../public/python.png";
import { techno } from "../types/interfaces";

/**
 * Core technology icons shown in the Skills section.
 */
export const technologies: techno[] = [
  { image: html, name: "HTML", category: "frontend" },
  { image: css, name: "CSS", category: "frontend" },
  { image: js, name: "JavaScript", category: "frontend" },
  { image: react, name: "React", category: "frontend" },
  { image: node, name: "Node.js", category: "backend" },
  { image: express, name: "Express.js", category: "backend" },
  { image: laravel, name: "Laravel", category: "backend" },
  { image: php, name: "PHP", category: "backend" },
  { image: python, name: "Python", category: "backend" },
  { image: mongo, name: "MongoDB", category: "database" },
  { image: mysql, name: "MySQL", category: "database" },
  { image: postgre, name: "PostgreSQL", category: "database" },
  { image: git, name: "Git", category: "tools" },
  { image: github, name: "GitHub", category: "tools" },
];

/**
 * Grouped skills — polished labels, no conversational phrasing.
 */
export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Nuxt.js",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "FastAPI",
      "Laravel",
      "PHP",
      "Python",
      "Firebase",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firestore",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Computer Vision",
      "Object Detection",
      "YOLO",
      "Convolutional Neural Networks",
      "Object Recognition",
      "Supervised Learning",
      "Self-Supervised Learning",
      "Reinforcement Learning",
      "Federated Learning",
      "Deep Learning",
      "Data Annotation",
      "Data Preprocessing",
    ],
  },
  {
    title: "Networks & Cybersecurity",
    skills: [
      "Computer Networking",
      "Routing & Switching",
      "VPN & DNS",
      "Web Security",
      "Binary Analysis",
      "Reverse Engineering",
      "Digital Forensics",
      "CTF Competition Design",
      "Linux Administration",
    ],
  },
  {
    title: "Practices",
    skills: ["Git / GitHub", "REST APIs", "Agile Delivery", "UI / UX"],
  },
];
