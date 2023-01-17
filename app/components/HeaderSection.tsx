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
        <p className="sticky top-0 text-7xl sm:text-8xl font-bold pt-20 pb-16 ">
          {title}
        </p>
      </header>
      <div className="text-3xl sm:text-5xl font-bold">{children}</div>
    </div>
  );
}
