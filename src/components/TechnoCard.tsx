import React from "react";
import Image from "next/image";
import { FC } from "react";
import { techno } from "../types/interfaces";

interface TechnoCardProps extends techno {}

const TechnoCard: FC<TechnoCardProps> = ({ image, name }) => {
  return (
    <div className={`flex flex-col gap-3 w-[200px] p-9 items-center bg-theme-card-bg border border-theme-card-border rounded-lg shadow-xl hover:shadow-2xl hover:shadow-theme-accent/10 transition-all duration-300 group-hover:border-theme-accent/50`}>
      
      <Image src={image} alt={name} className="w-auto h-auto" width={65} height={65}/>
      <h1 className="text-[20px] font-bold truncate w-full text-center text-theme-text-primary">{name}</h1>
    </div>
  );
};

export default TechnoCard;


