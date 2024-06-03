export default function HeadlineSection({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center h-screen font-bold text-6xl">
        {title.length < 5 ? (
          <p className="sticky top-0 sm:text-[13rem] py-8">{title}</p>
        ) : (
          <p className="sticky top-0 sm:text-[6rem] lg:text-[10rem] xl:text-[13rem] py-8">
            {title}
          </p>
        )}
      </header>
    </div>
  );
}
