"use client";
import { SkillMarquee } from "./SkillMarquee";
export const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-48 pt-12 pb-16 bg-primary-50 shadow-inner scroll-mt-32"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h3 className="font-bold text-4xl text-primary-950 mb-2">Skills</h3>
          </div>
        </div>
        <div className="w-full overflow-x-hidden">
          <SkillMarquee />
        </div>
      </div>
    </section>
  );
};
