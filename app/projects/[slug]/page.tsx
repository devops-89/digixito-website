"use client";
import React from "react";
import ProjectDetailsLayout from "@/components/layouts/projects-details-layout";
import { notFound, useParams } from "next/navigation";
import { OLD_PROJECTS_DATA } from "@/utils/constant";

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = OLD_PROJECTS_DATA.find((p) => p.slug === params?.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsLayout project={project} />;
}
