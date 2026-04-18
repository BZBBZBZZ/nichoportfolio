"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(".hero-button", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[70vh] flex flex-col justify-center items-center text-center"
    >
      <h2 className="hero-text text-xl md:text-2xl font-medium text-gray-500 mb-4 tracking-wide">
        Welcome
      </h2>
      <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Hi, I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
          Nicholas Leroy Kurniawan
        </span>
      </h1>

      <div className="hero-text mb-8 relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-100 dark:ring-gray-900 bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center">
        <Image
          src="/images/PP.jpeg"
          alt="Nicholas Leroy"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <p className="hero-text text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-400 mb-12 font-light">
        I&apos;m an undergraduate Artificial Intelligence student at Universitas
        Ciputra Surabaya who enjoys exploring new things and learning new
        concepts related to technology.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <div className="hero-button">
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 h-14 px-8 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 active:scale-95 transition-transform"
          >
            View My Projects <ArrowRight size={20} />
          </Link>
        </div>
        <div className="hero-button">
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 h-14 px-8 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105 active:scale-95 transition-all"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}
