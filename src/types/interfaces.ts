import { StaticImageData } from "next/image";

export interface project {
    image:StaticImageData,
    title:string,
    description:string,
    url:string
}

export interface techno{
    image:StaticImageData,
    name:string,
    category:string
}