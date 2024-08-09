"use client";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolledNavbar = [
    "max-w-fit",
    "gap-20",
    "rounded-full",
    "mt-10",
    "bg-primary-500/70",
    "shadow-lg",
    "backdrop-blur-xl",
    "text-primary-800",
    "transition-all",
    "duration-1000",
  ].join(" ");
  return (
    <div className="w-full m-auto fixed z-[999]">
      <div
        className={`mx-auto flex w-full justify-around items-center p-2 ${
          isScrolled ? scrolledNavbar : ""
        }`}
      >
        <div
          className=" text-primary-50 text-2xl md:text-4xl font-bold px-6 py-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MARCO.
        </div>

        <nav className="hidden text-primary-50 text-base font-medium px-6 py-4 md:flex justify-between items-center gap-8">
          <a
            href="#home"
            className="hover:text-primary-200 hover:-translate-y-[2px] transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-primary-200 hover:-translate-y-[2px] transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-primary-200 hover:-translate-y-[2px] transition-all duration-300  "
          >
            Projects
          </a>
          <a
            href="https://github.com/marcoaja"
            className="transition-all duration-300 hover:text-primary-200 hover:-translate-y-[2px]"
          >
            <IoLogoGithub className="text-3xl " />
          </a>
          <a
            href="https://www.linkedin.com/in/yeshuamarco"
            className="transition-all duration-300 hover:text-primary-200 hover:-translate-y-[2px]"
          >
            <IoLogoLinkedin className="text-3xl" />
          </a>
        </nav>

        <div onClick={handleClick} className="block md:hidden">
          {open ? (
            <IoClose size={25} className="text-primary-50 mr-4" />
          ) : (
            <IoMenu size={25} className="text-primary-50 mr-4" />
          )}
        </div>
      </div>

      {/* Smaller Screen Navbar */}
      {open && (
        <div
          className="md:hidden bg-transparent h-screen"
          onClick={handleClick}
        >
          <div className="fixed bottom-0 w-full h-1/2 border-r bg-primary-50 ease-in-out duration-200 text-primary-950">
            <div className="flex flex-col h-full justify-center items-center gap-8 p-8 font-semibold text-2xl">
              <a
                href="#home"
                className="hover:text-primary-300 hover:-translate-y-[2px] transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#skills"
                className="hover:text-primary-300 hover:-translate-y-[2px] transition-all duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-primary-300 hover:-translate-y-[2px] transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="https://github.com/marcoaja"
                className="transition-all duration-300 hover:-translate-y-[2px]"
              >
                <IoLogoGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/yeshuamarco"
                className="transition-all duration-300 hover:-translate-y-[2px]"
              >
                <IoLogoLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
