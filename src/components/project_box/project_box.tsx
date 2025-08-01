import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "../Modal"; // Adjust the import path accordingly
import Link from "next/link";

interface ProjectBoxProps {
  image: StaticImageData;
  url: string;
  title: string;
  description: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  image,
  url,
  description,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="md:w-[450px] md:h-[500px] w-[300px] h-[400px] overflow-hidden rounded-lg shadow transition hover:shadow-lg flex-shrink-0 relative">
      <Image alt="" src={image} className="w-full object-cover h-[50%]" />

      <div className="bg-white p-4 sm:p-6 h-full">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
        </a>

        <p className="mt-2 text-sm text-gray-500 line-clamp-3">{description}</p>
        <div className="flex w-full justify-between">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-500 hover:underline mt-2"
          >
            See more
          </button>

          <Link
            href={url}
            className="text-blue-500 hover:underline mt-2"
            target="_blank"
          >
            Github
          </Link>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
      />
    </article>
  );
};

export default ProjectBox;
