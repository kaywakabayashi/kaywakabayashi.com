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
      <div className="h-screen flex flex-col justify-center items-center relative font-bold leading-normal group text-center">
        <h2 className="py-10 text-3xl sm:text-6xl leading-loostext-center">
          {title}
        </h2>
        <div className="xs:visible sm:invisible">
          <div className="group-hover:visible mt-24 sm:text-4xl mx-16 space-y-5 opacity-80 font-thin">
            <p>{description}</p>
            {stack && <p>{stack}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
