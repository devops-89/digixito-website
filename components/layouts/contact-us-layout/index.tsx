import PageHeading from "@/components/widgets/page-heading";
import { Box, Container } from "@mui/material";
import React from "react";
import ContactHeroSection from "./contact-hero-section";

const ContactUsLayout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <PageHeading page_name="Contact Us" />
      </Container>
      <ContactHeroSection />
    </Box>
  );
};

export default ContactUsLayout;
