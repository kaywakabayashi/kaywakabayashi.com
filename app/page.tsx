"use client";
import "../styles/Home.modules.scss";
import Link from "next/link";
import { Amiri } from "@next/font/google";
const amiri = Amiri({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${amiri.className}`}>
      <section className="h-screen w-full flex flex-col">
        <div className="font-thin h-full">
          <div className="h-1/6 relative">
            <div className="absolute top-6 right-6">
              <svg
                className="w-7 h-7 text-gray-600"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="butt"
                  stroke-linejoin="butt"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
          </div>
          <div className="h-2/3">
            <div className="circleText">
              <svg
                className=" h-10 w-10 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
              >
                <defs>
                  <path
                    id="textPath"
                    d="M 250 500 A 250,250 0 1 1 250 500.0001"
                    fill="transparent"
                  />
                </defs>

                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className="animate-pulse fill-current text-stone-700 text-5xl"
                >
                  <textPath
                    href="#textPath"
                    startOffset="50%"
                    letterSpacing="50"
                  >
                    <Link href="/about"> about </Link>
                    <Link href="/projects"> projects </Link>
                    <Link href="/contact"> contact </Link>
                  </textPath>
                </text>
              </svg>
              <h1 className="animate-flicker-5 text-stone-600 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                kw
              </h1>
            </div>
          </div>
          <div className="h-1/6"></div>
          <div className="fixed bottom-0 inset-x-0 text-center text-stone-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="h-screen w-full flex flex-col">
        <div className="h-full"></div>
      </section>
      <footer className="text-center">&copy;2023 KATSUYAWAKABAYASHI.COM</footer>
    </main>
  );
}
