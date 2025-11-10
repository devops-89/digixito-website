import { Box, Container, Grid } from "@mui/material";
import React from "react";
import hero_image from "@/contact-us/hero-section.png";
import Image from "next/image";
const ContactHeroSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={6}>
            <Image src={hero_image} alt="" />
          </Grid>
          <Grid size={6}>
            {/* < */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHeroSection;
