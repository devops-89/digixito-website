import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./hero-section";
import OurServices from "./our-services";
import DevelopmentProcess from "./development-process";

const DetailsLayout = () => {
  return (
    <Box>
      <HeroSection />
      <OurServices />
      <DevelopmentProcess />
    </Box>
  );
};

export default DetailsLayout;
