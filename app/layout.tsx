import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animated Search Bars",
  description: "https://sametcc.me/animated-search-bar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-black h-screen flex justify-center items-center flex-col gap-2">
          {children}
          <footer className="text-white text-center hover:underline">
            <a href="https://sametcc.me/animated-search-bar" target="_blank">
              check out the source code
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
