import Link from "next/link";

export default function ContactSection({
  title,
  phone,
  email,
  linkedin,
  github,
  resume,
}: {
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
}) {
  return (
    <div className="h-screen text-center w-full flex flex-col justify-evenly font-bold">
      <div className="text-7xl sm:text-[13rem]">{title}</div>

      <div className="text-3xl sm:text-5xl flex flex-col gap-10">
        <p>
          <Link href={`tel:${phone}`}>{phone}</Link>
        </p>
        <p>
          <Link href={`mailto:${email}`}>{email}</Link>
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
