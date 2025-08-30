import { Metadata } from "next";
import "./globals.css";
import "../styles/source-sans-pro.css";
import { Bitter as MainFont } from "next/font/google";
import { FULL_NAME } from "./constants";

const mainFont = MainFont({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: FULL_NAME,
    template: `%s | ${FULL_NAME}`,
  },
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
      className={`${mainFont.className} dark:text-white dark:bg-[#111010]`}
    >
      <body>{children}</body>
    </html>
  );
}
