import PageHeading from "@/components/widgets/page-heading";
import { Box, Container } from "@mui/material";
import React from "react";
import ContactHeroSection from "./contact-hero-section";
import ContactForm from "./contact-form";

const ContactUsLayout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <PageHeading page_name="Contact Us" />
      </Container>
      <ContactHeroSection />
      <ContactForm />
    </Box>
  );
};

export default ContactUsLayout;
