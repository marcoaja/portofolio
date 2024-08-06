import Image from "next/image";
import { motion } from "framer-motion";
export const SkillMarquee = () => {
  const skillsImage = [
    "/icon/html.svg",
    "/icon/css.svg",
    "/icon/javascript.svg",
    "/icon/tailwindcss.svg",
    "/icon/python.svg",
    "/icon/nodejs.svg",
    "/icon/webpack.svg",
    "/icon/git.svg",
    "/icon/nextjs.svg",
    "/icon/java.svg",
    "/icon/vercel.svg",
  ];

  return (
    <div className="flex customGradient">
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {skillsImage.map((skill, index) => {
          return (
            <Image
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mr-20"
              src={skill}
              alt=""
              width={240}
              height={240}
              key={index}
            />
          );
        })}
      </motion.div>
      <motion.div
        className="flex flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {skillsImage.map((skill, index) => {
          return (
            <Image
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]  mr-20"
              src={skill}
              alt=""
              width={240}
              height={240}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};
