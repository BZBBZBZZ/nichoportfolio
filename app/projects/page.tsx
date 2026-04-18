"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../../data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Globe, Video } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.set(".project-card", { y: 40, opacity: 0 });

      ScrollTrigger.batch(".project-card", {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center"
      >
        My Work
      </h1>

      <div className="flex flex-col gap-24">
        {projectsData.map((project, index) => (
          <div
            key={project.slug}
            className="project-card flex flex-col md:flex-row gap-8 md:gap-16 items-center"
          >
            <div
              className={`w-full md:w-1/2 aspect-video bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg relative ${index % 2 === 1 ? "md:order-last" : ""}`}
            >
              <Image
                src={
                  project.image.startsWith("/")
                    ? project.image
                    : `/${project.image}`
                }
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8 text-sm font-medium">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <Code size={16} /> GitHub
                  </a>
                )}
                {project.githubLink2 && (
                  <a
                    href={project.githubLink2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <Code size={16} /> GitHub 2
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <Globe size={16} /> Website
                  </a>
                )}
                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <Video size={16} /> Video
                  </a>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-2 text-black dark:text-white font-medium border-b border-black dark:border-white pb-1 hover:opacity-70 transition-opacity"
              >
                Project Details{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
