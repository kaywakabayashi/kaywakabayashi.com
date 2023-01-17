export default function HeaderSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center px-5">
      <header className="flex flex-col justify-center items-center gap-10 h-screen ">
        <p className="sticky top-0 text-6xl sm:text-[13rem] font-bold pt-20 pb-16 ">
          {title}
        </p>
      </header>
      <div className="text-5xl sm:text-7xl font-bold">{children}</div>
    </div>
  );
}
