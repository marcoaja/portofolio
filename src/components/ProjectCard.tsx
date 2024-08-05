"use client";
import Image from "next/image";
type ProjectProps = {
  id: number;
  img: string;
  title: string;
  description: string;
  techImages: string[];
  link: string;
};
export const ProjectCard = ({
  id,
  img,
  title,
  description,
  techImages,
  link,
}: ProjectProps) => {
  return (
    <div
      className="w-3/4 shadow-xl p-4 md:p-8 rounded-xl bg-primary-50 hover:-translate-y-4 transition-all duration-500"
      onClick={() => window.open(link, "_blank")}
    >
      <Image src={img} alt="" width={1920} height={1080} />
      <div className="block md:flex p-4 lg:p-8 gap-8">
        <h2 className="text-primary-900 text-2xl md:text-7xl font-bold my-auto">
          {id}
        </h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-primary-900 text-sm md:text-2xl font-medium">
              {title}
            </p>
            <p className="text-sm md:text-xl text-primary-500">{description}</p>
          </div>
          <div className="flex gap-2 md:gap-8 flex-wrap">
            {techImages.map((tech) => (
              <Image
                key={tech}
                src={`/icon/${tech}.svg`}
                alt={title}
                width={36}
                height={36}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
