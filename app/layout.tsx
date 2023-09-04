import { Metadata } from "next";
import "./globals.css";
import { Bitter as MainFont } from "next/font/google";

const mainFont = MainFont({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Katsuya Wakabayashi",
    template: "%s | Katsuya Wakabayashi",
  },
  description: "Linguistics and Computer Science Student at UCLA",
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mainFont.className}, dark:text-white dark:bg-[#111010]`}
    >
      <body>{children}</body>
    </html>
  );
}
