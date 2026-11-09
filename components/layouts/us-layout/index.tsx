"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Aos from "aos";
import UsHeader from "./components/UsHeader";
import UsHero from "./components/UsHero";
import UsSilos from "./components/UsSilos";
import UsSolutions from "./components/UsSolutions";
import UsProcess from "./components/UsProcess";
import UsCaseStudies from "./components/UsCaseStudies";
import UsTestimonials from "./components/UsTestimonials";
import UsLogos from "./components/UsLogos";
import UsContactForm from "./components/UsContactForm";
import UsFloatingActions from "./components/UsFloatingActions";

const UsLayout = () => {
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
      <UsHeader />

      {/* 2. Hero Section */}
      <UsHero />

      {/* 3. Section 2: Silos & The Problem with Modern Scale */}
      <UsSilos />

      {/* 4. Section 3: Four Core Solutions */}
      <UsSolutions />

      {/* 5. Section 4: Disciplined Process & Radar Architecture */}
      <UsProcess />

      {/* 6. Section 5: Real Partners / Case Studies (Commented out for now) */}
      {/* <UsCaseStudies /> */}

      {/* 7. Section 6: Client Testimonials & Proof */}
      <UsTestimonials />

      {/* 8. Section 7: Client Logos */}
      <UsLogos />

      {/* 8. Section 7: Yellow Lead Generation & Contact Form */}
      <UsContactForm />

      {/* 9. Floating WhatsApp and Navigation */}
      <UsFloatingActions />
    </Box>
  );
};

export default UsLayout;

