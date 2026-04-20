"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Project } from "../../../data/projects";
import Image from "next/image";
import { Code, Globe, Video } from "lucide-react";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".detail-element", {
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
    <div ref={containerRef}>
      <h1 className="detail-element text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
        {project.title}
      </h1>
      <p className="detail-element text-lg text-gray-600 dark:text-gray-400 mb-8 font-light leading-relaxed">
        {project.shortDescription}
      </p>

      <div className="detail-element flex flex-wrap gap-4 mb-16 text-sm font-medium">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Code size={18} /> Source Code
          </a>
        )}
        {project.githubLink2 && (
          <a
            href={project.githubLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Code size={18} /> Source Code 2
          </a>
        )}
        {project.websiteLink && (
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black rounded-full transition-colors"
          >
            <Globe size={18} /> Live Website
          </a>
        )}
        {project.videoLink && (
          <a
            href={project.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Video size={18} /> Watch Video
          </a>
        )}
      </div>

      <div className="detail-element w-full aspect-video relative bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl mb-16 flex flex-col items-center justify-center text-gray-500 font-medium">
        <Image
          src={
            project.image.startsWith("/") ? project.image : `/${project.image}`
          }
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="detail-element">
        <h2 className="text-2xl font-semibold mb-6 tracking-tight">
          Project Reflection
        </h2>
        <div className="prose prose-lg dark:prose-invert font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-24 max-w-none">
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Project Summary</h3>
            <p>{project.projectSummary}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Project Type</h3>
            <p>{project.projectType}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Role</h3>
            <p>{project.role}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Impact</h3>
            <p>{project.impact}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">What I Learned</h3>
            <p>{project.whatILearned}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
