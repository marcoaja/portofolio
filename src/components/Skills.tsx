import Image from "next/image";
export const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-48 pt-12 pb-16 bg-primary-50 shadow-inner"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h3 className="font-bold text-4xl text-primary-950 mb-2">Skills</h3>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="p-4 flex gap-24 lg:gap-36 mx-auto animate-loop-scroll">
            <Image src="/icon/html.svg" alt="" width={100} height={100} />
            <Image src="/icon/css.svg" alt="" width={100} height={100} />
            <Image src="/icon/javascript.svg" alt="" width={100} height={100} />
            <Image
              src="/icon/tailwindcss.svg"
              alt=""
              width={100}
              height={100}
            />
            <Image src="/icon/java.svg" alt="" width={100} height={100} />
            <Image src="/icon/python.svg" alt="" width={100} height={100} />
            <Image src="/icon/nodejs.svg" alt="" width={100} height={100} />
            <Image src="/icon/react.svg" alt="" width={100} height={100} />
            <Image src="/icon/npm.svg" alt="" width={100} height={100} />
            <Image src="/icon/webpack.svg" alt="" width={100} height={100} />
            <Image src="/icon/git.svg" alt="" width={100} height={100} />
            <Image src="/icon/vercel.svg" alt="" width={100} height={100} />

            <Image src="/icon/html.svg" alt="" width={100} height={100} />
            <Image src="/icon/css.svg" alt="" width={100} height={100} />
            <Image src="/icon/javascript.svg" alt="" width={100} height={100} />
            <Image
              src="/icon/tailwindcss.svg"
              alt=""
              width={100}
              height={100}
            />
            <Image src="/icon/java.svg" alt="" width={100} height={100} />
            <Image src="/icon/python.svg" alt="" width={100} height={100} />
            <Image src="/icon/nodejs.svg" alt="" width={100} height={100} />
            <Image src="/icon/react.svg" alt="" width={100} height={100} />
            <Image src="/icon/npm.svg" alt="" width={100} height={100} />
            <Image src="/icon/webpack.svg" alt="" width={100} height={100} />
            <Image src="/icon/git.svg" alt="" width={100} height={100} />
            <Image src="/icon/vercel.svg" alt="" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};
