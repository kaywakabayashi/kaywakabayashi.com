"use client";
export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="text-center sm:text-3xl p-5">
      &copy;{year} KAYWAKABAYASHI.COM
    </footer>
  );
}
