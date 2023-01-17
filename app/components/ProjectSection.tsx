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
        <div className="h-screen w-full flex justify-center items-center">
          <div className="relative font-bold leading-normal group text-center w-full h-1/3">
            <h2 className="py-10 text-4xl sm:text-7xl">{title}</h2>
            <div className="invisible">
              <Image
                alt={`${image} image`}
                src={`/${image}.png`}
                width="480"
                height="480"
                className="group-hover:visible transition-opacity ease-in-out opacity-0 group-hover:opacity-20 delay-75 duration-200 z-0 absolute h-auto w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="group-hover:visible opacity-80 mt-24 text-4xl">
                <p>{description}</p>
                <p>({stack})</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
