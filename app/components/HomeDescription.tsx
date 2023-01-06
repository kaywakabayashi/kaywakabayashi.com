import React from "react";

interface DescriptionData {
  title: string;
  body?: string;
}

const HomeDescription = ({ title, body }: DescriptionData) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 h-screen text-center">
        <h1 className="sticky top-0 text-9xl font-bold pt-20" id="about">
          {title}
        </h1>
      </div>
      <div className="px-10">
        <h2 className="text-5xl font-bold leading-loose">{body}</h2>
      </div>
    </div>
  );
};

export default HomeDescription;
