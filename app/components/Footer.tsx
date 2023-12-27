"use client";
import { scrollToTop } from "./Circle";
export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="text-center sm:text-3xl p-5">
      <button
        onClick={() => {
          scrollToTop();
        }}
      >
        &copy;{year} KATSUYAWAKABAYASHI.COM
      </button>
    </footer>
  );
}
