"use client";
import React, { useEffect, useState } from "react";

import "../../app/globals.css";
import Image from "next/image";
import me from "../../../public/me.jpg";

export const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rightIsVisible, setRightIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // This will trigger the animation
    setRightIsVisible(true);
  }, []);
  return (
    <div className={`w-full md:h-[100vh] h-fit py-section_padding`}>
      <div className="container flex items-center w-full md:flex-row flex-col-reverse">
        <div
          className={`flex flex-col items-center md:items-start md:gap-y-[30px] gap-y[20px] relative transition-all duration-1000 ${
            isVisible ? "-left-0" : " -left-full"
          }`}
        >
          <h1 className="sm:text-[60px] text-[30px] text-primary m-0">
            Hello, I&apos;am Aymen
          </h1>
          <h2 className="sm:text-[60px] text-[30px] m-0">
            Full Stack Developer
          </h2>
          <p className="text-gray-400 md:text-start text-center my-5 md:my-0">
            I&apos;m Aymne Bouchali, a 20-year-old full-stack developer
            passionate about building innovative solutions. I&apos;m actively
            seeking new opportunities to enhance my skills and collaborate on
            exciting projects that push the boundaries of software development.
          </p>
          <a
            href="/resume/Resume.pdf"
            download={"resume.pdf"}
            className="w-fit px-[30px] py-[20px] rounded-lg font-bold bg-primary cursor-pointer"
          >
            Download CV
          </a>
        </div>
        <div
          className={`flex items-center justify-center w-1/2 h-fit relative  transition-all duration-1000 ${
            rightIsVisible ? "-right-0" : "-right-full"
          }`}
        >
          <div className="w-[300px] h-[300px] bg-transparent rounded-full">
            <Image
              src={me}
              alt=""
              className="max-w-full object-contain rounded-full grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
