import { projectsData } from "../../../data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto min-h-[70vh]">
      <Link
        href="/projects"
        className="inline-flex items-center justify-center gap-2 mb-12 text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <ProjectDetailClient project={project} />
    </div>
  );
}
