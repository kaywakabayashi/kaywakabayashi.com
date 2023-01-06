"use client";
import "../styles/Home.modules.scss";
import { Amiri } from "@next/font/google";
import Footer from "./components/Footer";
import Circle from "./components/Circle";
import Link from "next/link";
import HomeDescription from "./components/HomeDescription";
const amiri = Amiri({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${amiri.className}`}>
      <section className="relative h-screen w-full flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <Circle />
        </div>
        <div className="sticky top-4 text-5xl">kw</div>
      </section>
      <section>
        <HomeDescription title="Hello" />
      </section>
      <section>
        <HomeDescription
          title="I am..."
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          voluptas inventore quis dolores iusto incidunt autem totam esse
          eligendi, itaque aspernatur dolor, saepe unde ut quaerat dignissimos,
          temporibus ipsum error."
          id="about"
        />
      </section>
      <section>
        <HomeDescription
          title="I've done..."
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          voluptas inventore quis dolores iusto incidunt autem totam esse
          eligendi, itaque aspernatur dolor, saepe unde ut quaerat dignissimos,
          temporibus ipsum error."
          id="experience"
        />
      </section>

      <section className="flex flex-col justify-center items-center gap-10 h-screen text-center">
        <h1 className="sticky top-0 text-9xl font-bold pt-10" id="contact">
          Let's talk
        </h1>
      </section>
      <section className="px-10">
        <h2 className="font-bold p-10 leading-normal">
          <p className="text-center">
            <Link href="mailto:katsuya@wakabayashi.com">
              katsuya@wakabayashi.com
            </Link>
          </p>
          <p className="text-center">
            <Link href="https://linkedin.com/in/katsuyawakabayashi">
              Linkedin
            </Link>
            /<Link href="https://github.com/katsuyawakabayashi">GitHub</Link>/
            <Link href="https://github.com/katsuyawakabayashi">Resume</Link>
          </p>
        </h2>
      </section>

      <Footer />
    </main>
  );
}
