"use client";
import React, { useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { OLD_PROJECTS_DATA } from "@/utils/constant";
import ProjectDetailsLayout2 from "@/components/layouts/projects-details-layout2/Index";
import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = OLD_PROJECTS_DATA.find((p) => p.slug === params?.slug);

  const { setProjectDetails } = useProjectDetailsStore();

  if (!project) {
    notFound();
  }

  useEffect(() => {
    if (project) {
      setProjectDetails(project);
    }
  }, [project]);

  return <ProjectDetailsLayout2 />;
}
