import { StaticImageData } from "next/image";

export interface project {
  image: StaticImageData;
  title: string;
  description: string;
  url: string;
}

export interface techno {
  image: StaticImageData;
  name: string;
  category: string;
}

export interface ContactEmailProps {
  name?: string; // Optional
  email: string;
  subject?: string; // Optional
  message: string;
}
