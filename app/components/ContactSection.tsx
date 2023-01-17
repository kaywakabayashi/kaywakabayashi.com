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
    <div className="relative  h-screen text-center w-full">
      <div className="absolute top-40 text-9xl sm:text-[14rem] font-bold w-full l-0">
        {title}
      </div>
      <div className="absolute bottom-12 font-bold text-3xl sm:text-5xl w-full l-0 space-y-5">
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
