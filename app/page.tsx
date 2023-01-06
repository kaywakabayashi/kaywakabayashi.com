"use client";
import "../styles/Home.modules.scss";
import { Amiri } from "@next/font/google";
import Footer from "./components/Footer";
import Circle from "./components/Circle";
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
      <section className="flex items-center justify-center h-screen">
        <h1 className="sticky top-5 text-9xl font-bold">About</h1>
      </section>
      <section className="flex items-center justify-center h-screen"></section>
      <section className="flex items-center justify-center h-screen"></section>

      <Footer />
    </main>
  );
}
