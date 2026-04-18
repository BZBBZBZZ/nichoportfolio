"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      },
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-12 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 mt-20"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>
          &copy; {new Date().getFullYear()} Nicholas Leroy Kurniawan. All rights
          reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="/"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            My Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </footer>
  );
}
