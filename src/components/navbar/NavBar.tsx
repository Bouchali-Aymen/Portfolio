"use client";
import React, { useState, useEffect } from "react";

import "../../app/globals.css";
import Image from "next/image";
import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";
import { Menu } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Link from "next/link";

export const NavBar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation after component mounts
  useEffect(() => {
    setIsVisible(true); // This will trigger the animation
  }, []);

  return (
    <div
      className={`w-full h-fit relative ${
        isVisible ? "navbar-slide-down" : ""
      }`}
      id="navbar"
      style={{ zIndex: 10 }} // Add z-index to the entire navbar
    >
      <div className="container flex md:flex-row flex-row-reverse justify-between w-full items-center relative md:py-0 py-[20px]">
        {isMobile ? (
          <div className="relative">
            {toggleMenu && (
              <ul
                className="flex flex-col gap-0 rounded-md bg-second absolute right-0 w-[150px] top-[50px]"
                style={{
                  zIndex: 1000, // Ensures the menu appears on top
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  overflow: "visible", // Ensure visibility in case of clipping
                }}
              >
                <li className="p-[20px] text-center">
                  <Link className="hover:text-primary" href={"#projects"}>
                    Projects
                  </Link>
                </li>
                <li className="p-[20px] text-center">
                  <Link className="hover:text-primary" href={"#technologies"}>
                    Technologies
                  </Link>
                </li>
                <li className="p-[20px] text-center">
                  <Link className="hover:text-primary" href={"#contact"}>
                    Contact Me
                  </Link>
                </li>
              </ul>
            )}
            <Menu
              className="cursor-pointer md:hidden"
              onClick={() => setToggleMenu((prevState) => !prevState)}
            />
          </div>
        ) : (
          <ul className="flex justify-center items-center gap-x-[60px] font-bold text-base">
            <Link
              className="py-[50px] px-0 hover:text-primary"
              href={"#projects"}
            >
              Projects
            </Link>
            <Link
              className="py-[50px] px-0 hover:text-primary"
              href={"#technologies"}
            >
              Technologies
            </Link>
            <Link
              className="py-[50px] px-0 hover:text-primary"
              href={"#contact"}
            >
              Contact Me
            </Link>
          </ul>
        )}

        <div className="flex items-center justify-evenly gap-x-[20px]">
          <Link
            href={"https://www.facebook.com/profile.php?id=100008749845516"}
            target="_blank"
          >
            <Image
              src={facebook}
              alt="facebook"
              width={25}
              className="cursor-pointer"
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/aymen-bouchali-890b85263/"}
            target="_blank"
          >
            <Image
              src={linkedin}
              alt="linkedin"
              width={25}
              className="cursor-pointer"
            />
          </Link>
          <Link href={"https://github.com/Bouchali-Aymen"} target="_blank">
            <Image
              src={github}
              alt="twitter"
              width={25}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
