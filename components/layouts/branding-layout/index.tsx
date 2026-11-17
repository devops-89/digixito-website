"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import BrandingHeader from "./components/BrandingHeader";
import BrandingHero from "./components/BrandingHero";
import BrandingSilos from "./components/BrandingSilos";
import BrandingSolutions from "./components/BrandingSolutions";
import BrandingProcess from "./components/BrandingProcess";
import BrandingTestimonials from "./components/BrandingTestimonials";
import UsLogos from "@/components/layouts/us-layout/components/UsLogos";
import BrandingContactForm from "./components/BrandingContactForm";
import UsFloatingActions from "@/components/layouts/us-layout/components/UsFloatingActions";

const BrandingLayout = () => {
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
      <BrandingHeader />

      {/* 2. Hero Section */}
      <BrandingHero />

      {/* 3. Section 2: Challenges */}
      <BrandingSilos />

      {/* 4. Section 3: Four Core Solutions */}
      <BrandingSolutions />

      {/* 5. Section 4: Process / How We Work */}
      <BrandingProcess />

      {/* 6. Section 5: Client Testimonials */}
      <BrandingTestimonials />

      {/* 7. Section 6: Client Logos */}
      <UsLogos />

      {/* 8. Section 7: Yellow Lead Generation & Contact Form */}
      <BrandingContactForm />

      {/* 9. Floating WhatsApp and Navigation */}
      <UsFloatingActions />
    </Box>
  );
};

export default BrandingLayout;
