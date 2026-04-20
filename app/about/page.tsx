"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Briefcase, Phone } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-element", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto min-h-[60vh]">
      <h1 className="about-element text-4xl md:text-6xl font-bold tracking-tight mb-8">
        About Me
      </h1>

      <div className="about-element prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-16">
        <p className="text-xl md:text-2xl mb-6">
          Hi! I am{" "}
          <strong className="font-semibold text-black dark:text-white">
            Nicholas Leroy Kurniawan
          </strong>
          .
        </p>
        <p>
          I am currently a 4th-semester undergraduate student pursuing a Bachelor&apos;s degree in Informatics – Artificial Intelligence (IMT-AI) at Universitas Ciputra Surabaya. I have a strong interest in continuously learning new things, especially in technology, and I enjoy building websites and developing applications.
        </p>
        <br />
        <p>
          Beyond academics, I am an active member of the chess club and a regular gym enthusiast, which help me build discipline, focus, and consistency. I enjoy social activities, including playing esports, participating in team sports like soccer and basketball, and spending fun time with friends, which strengthen my ability to collaborate and adapt in team environments. These experiences reflect my ability to work both independently and as part of a team.
        </p>
      </div>

      <div className="about-element">
        <h2 className="text-2xl font-semibold mb-6 tracking-tight">
          Connect with me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:nicholasleroy83@gmail.com"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 hover:scale-[1.02] transition-transform"
          >
            <div className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-500">Email</p>
              <p className="font-semibold">nicholasleroy83@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/6281326899898"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 hover:scale-[1.02] transition-transform"
          >
            <div className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-500">WhatsApp</p>
              <p className="font-semibold">+62 081326899898</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/nicholas-leroy-kurniawan-a85530319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 hover:scale-[1.02] transition-transform"
          >
            <div className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-full">
              <Briefcase size={20} />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-500">LinkedIn</p>
              <p className="font-semibold">Nicholas Leroy Kurniawan</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/nicho_lkurniawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 hover:scale-[1.02] transition-transform"
          >
            <div className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-full flex items-center justify-center w-11 h-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-500">Instagram</p>
              <p className="font-semibold">@nicho_lkurniawan</p>
            </div>
          </a>

          <a
            href="https://github.com/BZBBZBZZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-100 dark:bg-gray-900 hover:scale-[1.02] transition-transform"
          >
            <div className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-full flex items-center justify-center w-11 h-11">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-500">GitHub</p>
              <p className="font-semibold">BZBBZBZZ</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
