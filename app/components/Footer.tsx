"use client";
import { scrollToTop } from "./Circle";
export default function Footer() {
  return (
    <footer className="text-center sm:text-3xl p-5">
      <button
        onClick={() => {
          scrollToTop();
        }}
      >
        &copy;2023 KATSUYAWAKABAYASHI.COM
      </button>
    </footer>
  );
}
