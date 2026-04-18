import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nichoportfolio",
  description:
    "Portfolio of Nicholas Leroy Kurniawan, an undergraduate major in Artificial Intelligence at Universitas Ciputra Surabaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col min-h-screen selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors`}
      >
        <Navbar />
        <main className="flex-grow pt-32 pb-12 w-full max-w-5xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
