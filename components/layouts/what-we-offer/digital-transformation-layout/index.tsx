import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./hero-section";
import OurServices from "./our-services";
import DevelopmentProcess from "./development-process";
import FeaturedProjects from "./featured-projects";

const DetailsLayout = () => {
  return (
    <Box>
      <HeroSection />
      <OurServices />
      <DevelopmentProcess />
      <FeaturedProjects />
    </Box>
  );
};

export default DetailsLayout;
