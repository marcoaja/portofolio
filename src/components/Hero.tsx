"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
export const Hero = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Development.", "App Development.", "Cloud Computing."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-72">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center md:px-2">
            <h1 className="text-primary-50 text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide">
              Hello! I&apos;m Marco,
            </h1>
            <h1 className="text-primary-50 text-4xl md:text-5xl lg:text-7xl  font-bold tracking-wide text-left transition-all duration-1000">
              A <span className="hover:line-through">Fullstuck </span>
              <span className="text-indigo-200">College Student</span>
            </h1>

            <h2 className="text-primary-50 text-2xl md:text-4xl lg:text-6xl  mt-8">
              Have strong interest in&nbsp;
              <span ref={el} className="text-yellow-400"></span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
