import Image from "next/image";

export default function ProjectSection({
  title,
  image,
  description,
  stack,
  link,
}: {
  title: string;
  image: string;
  description: string;
  stack?: string;
  link: string;
}) {
  return (
    <div>
      <a
        target="_blank"
        href={link}
        rel="noopener noreferrer"
        className="z-50 relative"
      >
        <div className="h-screen w-screen flex flex-col justify-center items-center relative font-bold leading-normal group text-center px-10">
          <h2 className="py-10 text-3xl sm:text-7xl leading-loostext-center">
            {title}
          </h2>
          <div className="invisible">
            <Image
              alt={`${image} image`}
              src={`/${image}.png`}
              width="480"
              height="480"
              className="group-hover:visible transition-opacity ease-in-out opacity-0 group-hover:opacity-10 delay-75 duration-200 z-0 absolute h-auto w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="group-hover:visible mt-24 sm:text-4xl mx-16 space-y-5 opacity-80 font-thin">
              <p>{description}</p>
              <p>({stack})</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
