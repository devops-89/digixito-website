import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./hero-section";
import OurServices from "./our-services";
import DevelopmentProcess from "./development-process";
import FeaturedProjects from "./featured-projects";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";

const DetailsLayout = () => {
  return (
    <Box>
      <HeroSection />
      <OurServices />
      <DevelopmentProcess />
      <FeaturedProjects />
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default DetailsLayout;
