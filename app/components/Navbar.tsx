"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-colors"
    >
      <Link
        href="/"
        className="font-semibold text-lg hover:opacity-70 transition-opacity"
      >
        NK
      </Link>
      <nav className="flex space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={`hover:opacity-70 transition-opacity ${pathname === "/" ? "opacity-100" : "opacity-60"}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`hover:opacity-70 transition-opacity ${pathname.startsWith("/projects") ? "opacity-100" : "opacity-60"}`}
        >
          My Projects
        </Link>
        <Link
          href="/about"
          className={`hover:opacity-70 transition-opacity ${pathname === "/about" ? "opacity-100" : "opacity-60"}`}
        >
          About Me
        </Link>
      </nav>
    </header>
  );
}
