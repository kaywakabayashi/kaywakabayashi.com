export default function HeaderSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center  ">
      <header className="flex flex-col justify-center items-center gap-10 h-screen ">
        <p className="sticky top-0 text-5xl sm:text-[13rem]  py-32 font-bold">
          {title}
        </p>
      </header>
      <div className="text-3xl sm:text-7xl sm:mx-16">{children}</div>
    </div>
  );
}
