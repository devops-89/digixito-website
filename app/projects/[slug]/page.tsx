"use client";
import React from "react";
import ProjectDetailsLayout from "@/components/layouts/projects-details-layout";
import { PROJECT_DATA } from "@/assets/data/project-data";
import { notFound, useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = PROJECT_DATA.find((p) => p.slug === params?.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsLayout project={project} />;
}
