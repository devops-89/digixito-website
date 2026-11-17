"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import DigitalMarketingHeader from "./components/DigitalMarketingHeader";
import DigitalMarketingHero from "./components/DigitalMarketingHero";
import DigitalMarketingSilos from "./components/DigitalMarketingSilos";
import DigitalMarketingSolutions from "./components/DigitalMarketingSolutions";
import DigitalMarketingProcess from "./components/DigitalMarketingProcess";
import DigitalMarketingTestimonials from "./components/DigitalMarketingTestimonials";
import UsLogos from "@/components/layouts/us-layout/components/UsLogos";
import DigitalMarketingContactForm from "./components/DigitalMarketingContactForm";
import UsFloatingActions from "@/components/layouts/us-layout/components/UsFloatingActions";

const DigitalMarketingLayout = () => {
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
      <DigitalMarketingHeader />

      {/* 2. Hero Section */}
      <DigitalMarketingHero />

      {/* 3. Section 2: Challenges */}
      <DigitalMarketingSilos />

      {/* 4. Section 3: Four Core Solutions */}
      <DigitalMarketingSolutions />

      {/* 5. Section 4: Process / How We Work */}
      <DigitalMarketingProcess />

      {/* 6. Section 5: Client Testimonials */}
      <DigitalMarketingTestimonials />

      {/* 7. Section 6: Client Logos */}
      <UsLogos />

      {/* 8. Section 7: Yellow Lead Generation & Contact Form */}
      <DigitalMarketingContactForm />

      {/* 9. Floating WhatsApp and Navigation */}
      <UsFloatingActions />
    </Box>
  );
};

export default DigitalMarketingLayout;
