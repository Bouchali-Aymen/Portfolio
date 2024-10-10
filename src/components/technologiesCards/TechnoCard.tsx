import React from "react";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import "./style.css";
import { techno } from "../../types/interfaces";

interface TechnoCardProps extends techno {}

const TechnoCard: FC<TechnoCardProps> = ({ image, name }) => {
  return (
    <div className="card">
      <Image src={image} alt={name} className="image" />
      <h1 className="name">{name}</h1>
    </div>
  );
};

export default TechnoCard;
