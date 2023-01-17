import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth ">
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
