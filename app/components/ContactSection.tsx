import Link from "next/link";

export default function ContactSection({
  title,
  email,
  linkedin,
  github,
  resume,
}: {
  title: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
}) {
  return (
    <div className="h-screen text-center w-full flex flex-col justify-evenly font-bold">
      <div className="text-7xl xs:text-[8rem] sm:text-[10rem] md:text-[13rem]">
        {title}
      </div>

      <div className="text-2xl xs:text-4xl sm:text-5xl flex flex-col gap-10 font-thin">
        <p>
          <Link
            href={`mailto:${email}`}
            className="hover:underline underline-offset-2"
          >
            {email}
          </Link>
        </p>
        <p>
          <Link className="hover:underline underline-offset-2" href={linkedin}>
            Linkedin
          </Link>
          /
          <Link className="hover:underline underline-offset-2" href={github}>
            GitHub
          </Link>
          /
          <Link className="hover:underline underline-offset-2" href={resume}>
            Resume
          </Link>
        </p>
      </div>
    </div>
  );
}
