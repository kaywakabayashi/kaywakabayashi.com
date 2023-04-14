export default function HeaderSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center h-screen font-bold text-6xl ">
        {title.length < 8 ? (
          <p className="sticky top-0 sm:text-[13rem] py-8">{title}</p>
        ) : (
          <p className="sticky top-0 sm:text-[6rem] lg:text-[11rem] xl:text-[13rem] py-8">
            {title}
          </p>
        )}
      </header>

      {children && (
        <div className="text-3xl sm:text-7xl sm:mx-16 h-screen flex flex-col justify-center items-center">
          {children}
        </div>
      )}
    </div>
  );
}
