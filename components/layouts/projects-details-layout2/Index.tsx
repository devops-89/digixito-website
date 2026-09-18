import React from "react";
import ProjectHero from "./components/ProjectHero";
import ProjectOverview from "./components/ProjectOverview";
import MoreProjects from "./components/MoreProjects";

import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";
import { PROJECTS_DEPARTMENT } from "@/utils/enum";
import CreativeProjectOverview from "./components/CreativeProjectOverview";
import { Box } from "@mui/material";

const ProjectDetailsLayout2 = () => {
  const { projectDetails } = useProjectDetailsStore();

  console.log("project", projectDetails);

  return (
    <div>
      {projectDetails?.department === PROJECTS_DEPARTMENT.DIGITAL ? (
        <Box>
          <ProjectHero />
          <ProjectOverview />
        </Box>
      ) : projectDetails?.department === PROJECTS_DEPARTMENT.CREATIVE ? (
        <CreativeProjectOverview />
      ) : (
        <ProjectOverview />
      )}
      <MoreProjects currentSlug={projectDetails?.slug || ""} />
    </div>
  );
};

export default ProjectDetailsLayout2;
