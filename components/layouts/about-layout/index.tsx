import { Box } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import Ourvalues from "./our-values";
import OurMission from "./our-mission";
import ServiceSection from "../home-layout/service-section";
import OurTeams from "./out-teams";
import Testimonials from "@/components/widgets/testimonial";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";

const AboutLayout = () => {
  return (
    <Box>
      <AboutHeroSection />
      <Ourvalues />
      <OurMission />
      <ServiceSection />
      <OurTeams />
      <Testimonials />
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default AboutLayout;
