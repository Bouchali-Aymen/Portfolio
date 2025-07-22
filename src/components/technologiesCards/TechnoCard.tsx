import React from "react";
import Image from "next/image";
import { FC } from "react";
import { techno } from "../../types/interfaces";

interface TechnoCardProps extends techno {}

const TechnoCard: FC<TechnoCardProps> = ({ image, name }) => {
  return (
    <div className={`flex flex-col gap-3 w-[200px] p-9 items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg  shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-gradient-to-br group-hover:from-gray-800/70 group-hover:to-gray-900/70`}>
      <Image src={image} alt={name} className="w-auto h-auto" />
      <h1 className="text-[20px] font-bold truncate w-full text-center">{name}</h1>
    </div>
  );
};

export default TechnoCard;
