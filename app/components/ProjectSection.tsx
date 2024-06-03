import Image from "next/image";

interface ProjectSectionProps {
  title: string;
  image: string;
  description: string;
  stack?: string;
  link: string;
}

export default function ProjectSection({
  title,
  image,
  description,
  stack,
  link,
}: ProjectSectionProps) {
  return (
    <div>
      <a
        target="_blank"
        href={link}
        rel="noopener noreferrer"
        className="z-50 relative"
      >
        <div className="h-screen flex flex-col justify-center items-center relative font-bold leading-normal group text-center">
          <h2 className="py-10 text-3xl sm:text-6xl leading-loostext-center">
            {title}
          </h2>
          <div className="xs:visible sm:invisible">
            <Image
              alt={`${image} image`}
              src={`/${image}.png`}
              width="480"
              height="480"
              className="group-hover:visible transition-opacity ease-in-out opacity-10 sm:opacity-0 group-hover:opacity-10 delay-75 duration-200 z-0 absolute h-auto w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="group-hover:visible mt-24 sm:text-4xl mx-16 space-y-5 opacity-80 font-thin">
              <p>{description}</p>
              {stack && <p>{stack}</p>}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
