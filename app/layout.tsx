import type { Metadata } from "next";
import { Amiri, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tazkiyah AI",
  description: "Purify your heart. Perfect your recitation. Deepen your understanding.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body className="font-sans min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">{children}</main>
      </body>
    </html>
  );
}
