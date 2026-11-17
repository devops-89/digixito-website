"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import WebsiteDevelopmentHeader from "./components/WebsiteDevelopmentHeader";
import WebsiteDevelopmentHero from "./components/WebsiteDevelopmentHero";
import WebsiteDevelopmentSilos from "./components/WebsiteDevelopmentSilos";
import WebsiteDevelopmentSolutions from "./components/WebsiteDevelopmentSolutions";
import WebsiteDevelopmentProcess from "./components/WebsiteDevelopmentProcess";
import WebsiteDevelopmentTestimonials from "./components/WebsiteDevelopmentTestimonials";
import UsLogos from "@/components/layouts/us-layout/components/UsLogos";
import WebsiteDevelopmentContactForm from "./components/WebsiteDevelopmentContactForm";
import UsFloatingActions from "@/components/layouts/us-layout/components/UsFloatingActions";

const WebsiteDevelopmentLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FAF7F2",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* 1. Dedicated Header */}
      <WebsiteDevelopmentHeader />

      {/* 2. Hero Section */}
      <WebsiteDevelopmentHero />

      {/* 3. Section 2: Challenges */}
      <WebsiteDevelopmentSilos />

      {/* 4. Section 3: Four Core Solutions */}
      <WebsiteDevelopmentSolutions />

      {/* 5. Section 4: Process / How We Work */}
      <WebsiteDevelopmentProcess />

      {/* 6. Section 5: Client Testimonials */}
      <WebsiteDevelopmentTestimonials />

      {/* 7. Section 6: Client Logos */}
      <UsLogos />

      {/* 8. Section 7: Yellow Lead Generation & Contact Form */}
      <WebsiteDevelopmentContactForm />

      {/* 9. Floating WhatsApp and Navigation */}
      <UsFloatingActions />
    </Box>
  );
};

export default WebsiteDevelopmentLayout;
