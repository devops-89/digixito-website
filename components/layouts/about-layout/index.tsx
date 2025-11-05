import { Box } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import Ourvalues from "./our-values";

const AboutLayout = () => {
  return (
    <Box>
      <AboutHeroSection />
      <Ourvalues />
    </Box>
  );
};

export default AboutLayout;
