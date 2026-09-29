"use client";
import { useProjectDetailsStore } from "@/store/useProjectDetailsStore";
import { archivo } from "@/utils/fonts";
import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { CreativeOverviewInfo } from "./creative-overview/CreativeOverviewInfo";
import { CreativeChallengeSolution } from "./creative-overview/CreativeChallengeSolution";
import { CreativeProcess } from "./creative-overview/CreativeProcess";
import { CreativeVideo } from "./creative-overview/CreativeVideo";
import { CreativeFeaturedWorks } from "./creative-overview/CreativeFeaturedWorks";
import { CreativeImpact } from "./creative-overview/CreativeImpact";
import { CreativeCTA } from "./creative-overview/CreativeCTA";
import { CreativeLightbox } from "./creative-overview/CreativeLightbox";

gsap.registerPlugin(ScrollTrigger);

const CreativeProjectOverview = () => {
  const { projectDetails } = useProjectDetailsStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const creativeData = projectDetails?.creative;
  const projectInfo = projectDetails?.details;

  useGSAP(
    () => {
      // Reveal animations for text
      const revealElements = gsap.utils.toArray(".reveal-up");
      revealElements.forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Parallax for images
      const images = gsap.utils.toArray(".parallax-img");
      images.forEach((img: any) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Staggered lists
      const listContainers = gsap.utils.toArray(".stagger-list");
      listContainers.forEach((container: any) => {
        const items = container.querySelectorAll(".stagger-item");
        gsap.fromTo(
          items,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  if (!creativeData && !projectInfo) return null;

  return (
    <Box
      ref={containerRef}
      sx={{
        bgcolor: "#FAFAFA", // Clean editorial light background
        color: "#111",
        position: "relative",
        overflow: "hidden",
        fontFamily: archivo.style.fontFamily,
      }}
    >
      <CreativeOverviewInfo creativeData={creativeData} projectInfo={projectInfo} />
      
      <CreativeChallengeSolution projectDetails={projectDetails} projectInfo={projectInfo} />
      
      <CreativeProcess projectInfo={projectInfo} />
      
      <CreativeVideo creativeData={creativeData} />
      
      <CreativeFeaturedWorks 
        creativeData={creativeData} 
        projectInfo={projectInfo} 
        setSelectedImage={setSelectedImage} 
      />
      
      <CreativeImpact projectInfo={projectInfo} />
      
      <CreativeCTA />
      
      <CreativeLightbox 
        selectedImage={selectedImage} 
        setSelectedImage={setSelectedImage} 
      />
    </Box>
  );
};

export default CreativeProjectOverview;
