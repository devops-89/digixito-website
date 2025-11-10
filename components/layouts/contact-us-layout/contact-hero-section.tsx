import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import hero_image from "@/contact-us/hero-section.png";
import Image from "next/image";
import { monument } from "@/utils/fonts";
const ContactHeroSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"}>
          <Grid size={6}>
            <Image src={hero_image} alt="" />
          </Grid>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 50,
                textTransform: "capitalize",
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
              }}
            >
              Get in touch
            </Typography>
            <Typography
              sx={{
                fontSize: 23,
                fontWeight: 500,
                letterSpacing: "-0.48px",
                lineHeight: "30px",
              }}
            >
              Digital Transformation is the strategic adoption of digital
              technologies to improve business processes,{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHeroSection;
