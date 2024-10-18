"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";
import Link from "next/link";
import { ContactEmailProps } from "../../types/interfaces";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const animationRef = useRef<HTMLDivElement>(null); // Separate ref for animation trigger
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactEmailProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const notify = (code: boolean) => {
    if (code) {
      toast.success("Email sent successfully", {
        position: "top-center",
        style: {
          marginTop: "10vh",
          zIndex: 9999,
        },
      });
    } else {
      toast.error("There was a problem sending email. Please try again!", {
        position: "top-center",
        style: {
          marginTop: "10vh",
          zIndex: 9999,
        },
      });
    }
  };

  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      console.log("Full Name, Email, and Message are required fields");
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name, // Send fullName
          email: formData.email,
          subject: formData.subject, // Send subject
          message: formData.message,
        }),
      });

      if (response.ok) {
        // console.log("Email Sent Successfully!");
        notify(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        //console.log("There was a problem sending email. Please try again!");
        notify(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      notify(false);
    } finally {
      setIsSending(false);
    }
  };
  // Intersection Observer to detect when the Projects section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when visible
          }
        });
      },
      { threshold: 0.1 } // 10% of the element must be visible to trigger the callback
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`pt-section_padding pb-[50px] md:mb-0 w-full flex flex-col items-center gap-[100px] projects-slide-in ${
        isVisible ? "projects-visible" : ""
      }`}
      ref={animationRef}
      id="contact"
    >
      <h1 className="sections-header">Contact Me</h1>
      <div className="container flex flex-col gap-y-7 w-full text-start">
        <div className="w-full flex md:flex-row gap-x-12 flex-col-reverse">
          <div className="md:w-1/2 w-full  flex flex-col gap-y-7 md:h-[600px]">
            <h2 className="text-[50px] m-0 text-primary">
              Let&apos;s Ge In Touch
            </h2>
            <p className="max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              consectetur, omnis nemo inventore animi commodi, labore
              perferendis ab libero suscipit corrupti mollitia voluptates
              expedita quas maxime assumenda delectus soluta a.
            </p>
            <h2 className="text-[40px] m-0 font-semibold">Follow Me</h2>
            <div className="flex gap-x-7">
              <Link
                href={"https://www.facebook.com/profile.php?id=100008749845516"}
                target="_blank"
              >
                <Image
                  src={facebook}
                  alt="facebook"
                  width={40}
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
                  width={40}
                  className="cursor-pointer"
                />
              </Link>
              <Link href={"https://github.com/Bouchali-Aymen"} target="_blank">
                <Image
                  src={github}
                  alt="twitter"
                  width={40}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-[600px]">
            <form
              action=""
              className="w-full flex flex-col gap-y-3"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-y-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  className="p-3  rounded-sm bg-second outline-none"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className="p-3  rounded-sm bg-second outline-none"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id=""
                  className="p-3  rounded-sm bg-second outline-none w-full"
                  rows={8}
                  placeholder="Message"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
              <input
                type="submit"
                value="Send"
                className="py-2 px-5 bg-primary text-white md:w-fit text-lg font-semibold cursor-pointer rounded-sm mt-4 "
              />
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact;
