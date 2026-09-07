"use client";
import BlurText from "@/components/BlurText";
import { COLORS } from "@/utils/enum";
import { Box, Container, Grid } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import CallToAction from "@/components/layouts/case-study-details-layout/components/call-to-action";
import { PROJECT_CARD_DATA_PROPS } from "@/utils/types";
import MoreProjects from "./components/MoreProjects";
import ProjectOverview from "./components/ProjectOverview";

import ProjectHero from "./components/ProjectHero";

const MotionBox = motion(Box);

interface Props {
  project: PROJECT_CARD_DATA_PROPS;
}

const ProjectDetailsLayout = ({ project }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectTitle = project.details?.title || project.projectName;
  const overviewText = project.details?.description || project.description || [];
  const approachText = "";

  let challenges = "";
  let strategy = project.details?.strategies?.label || "";
  let results = "";

  const strategyData = project.details?.strategies?.data || [];
  if (strategyData.length > 0) {
    const firstDesc = strategyData[0].description;
    const secondDesc = strategyData.length > 1 ? strategyData[1].description : "";
    if (firstDesc.startsWith("Challenge:")) {
      challenges = firstDesc.replace("Challenge: ", "");
    } else {
      challenges = firstDesc;
    }
    
    if (secondDesc.startsWith("Result:")) {
      results = secondDesc.replace("Result: ", "");
    } else {
      results = secondDesc;
    }
  }

  // Use heroImage or img or details.images[0] or logo as a fallback
  const heroImage = project.details?.heroImage || project.img || (project.details?.images && project.details.images[0]) || project.logo || "";

  return (
    <Box
      sx={{ backgroundColor: COLORS.WHITE, minHeight: "100vh", pb: 10, pt: 0 }}
    >
      <ProjectHero img={heroImage} title={projectTitle} />
      
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 6, md: 10 },
          }}
        >
          <ProjectOverview
            projectTitle={projectTitle}
            overviewText={overviewText}
            approachText={approachText}
            challenges={challenges}
            strategy={strategy}
            results={results}
            img={project.img}
            industry={project.department}
            service={project.department}
            videoUrls={[project.details?.videoUrl1, project.details?.videoUrl2, project.details?.videoUrl3]}
            images={project.details?.images}
          />
        </Box>
      </Container>

      {/* Full Width Dark Section for More Projects */}
      <MoreProjects currentSlug={project.slug || ""} />

      <Container maxWidth="xl">
        <Box mt={{ xs: 10, md: 15 }}>
          <CallToAction
            onAction={() => (window.location.href = "/contact-us")}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetailsLayout;
