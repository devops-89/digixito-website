import PageHeading from "@/components/widgets/page-heading";
import { Box, Container, Grid } from "@mui/material";
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
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container>
          <Grid size={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0571913445856!2d77.38446907580234!3d28.628047975667148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffa88e98f81%3A0x891aa1c65f178a8d!2sDigixito%20Media%20Private%20Limited!5e0!3m2!1sen!2sin!4v1762796473728!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0", borderRadius: 20 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsLayout;
