"use client";
import React, { useRef } from "react";
import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ProjectHero from "./ProjectHero";
import ProjectOverviewSection from "./ProjectOverviewSection";
import ArchitectureStrategySection from "./ArchitectureStrategySection";
import KeyFeaturesSection from "./KeyFeaturesSection";
import ProjectImagesSection from "./ProjectImagesSection";
import ResultsSection from "./ResultsSection";
import ConclusionSection from "./ConclusionSection";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentOverview: React.FC = () => {
  const { projectDetails } = useProjectDetailsStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const projectInfo = projectDetails?.details;

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".dev-animate-up");
      elements.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const cards = gsap.utils.toArray(".dev-feature-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".dev-features-grid",
              start: "top 80%",
            },
          },
        );
      }
    },
    { scope: containerRef },
  );

  if (!projectInfo) return null;

  return (
    <Box
      ref={containerRef}
      sx={{ bgcolor: "#ffffff", color: "#333333", pb: 15 }}
    >
      <ProjectHero />

      <ProjectOverviewSection
        description={projectInfo.description}
        techStack={projectInfo.techStack}
        liveLink={projectInfo.liveLink}
      />

      <ArchitectureStrategySection strategies={projectInfo.strategies} />

      <KeyFeaturesSection features={projectInfo.features} />

      {/* <ProjectImagesSection images={projectInfo.images} /> */}

      <ResultsSection result={projectInfo.result} />

      <ConclusionSection conclusion={projectInfo.conclusion} />
    </Box>
  );
};

export default DevelopmentOverview;
