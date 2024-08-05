import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      img: "/porto1.png",
      title: "A simple personal Bio Link.",
      description: "Made with HTML, CSS, and CodeSandBox",
      techImages: ["html", "css"],
      link: "https://h6c8j3.csb.app/",
    },
    {
      id: 2,
      img: "/porto2.png",
      title: "A simple online store with search feature.",
      description: "Made with HTML, CSS, Javascript, and CodeSandBox",
      techImages: ["html", "css", "javascript"],
      link: "https://l9c858.csb.app/",
    },
    {
      id: 3,
      img: "/porto3.png",
      title:
        "A working Restaurant App with admin menu, customer menu, and login page.",
      description: "Made with Java and CSS",
      techImages: ["java", "css"],
      link: "",
    },
    {
      id: 4,
      img: "/porto4.png",
      title: "A simple money manager app",
      description: "Made with NextJS and TailwindCSS",
      techImages: ["nextjs", "tailwindcss"],
      link: "https://money-manager-crd.vercel.app",
    },
    {
      id: 5,
      img: "/porto5.png",
      title:
        "A platform designed to assist students in practicing and reviewing questions.",
      description:
        "Made with NextJS, TailwindCSS, OpenAI, Prisma, PostgreSQL, Cloudflare R2",
      techImages: ["nextjs", "tailwindcss", "openai", "postgres", "prisma"],
      link: "https://quizpal.vercel.app",
    },
  ];
  return (
    <section id="projects" className="pt-36 pb-16 w-full">
      <div className="container">
        <div className="flex justify-center items-center p-4 mb-8">
          <h1 className="font-bold text-4xl text-primary-50 mb-2">PROJECTS</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-48 lg:gap-y-72">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              techImages={project.techImages}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
