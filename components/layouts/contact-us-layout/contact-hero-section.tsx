"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import hero_image from "@/contact-us/hero-section.png";
import Image from "next/image";
import { monument } from "@/utils/fonts";
const ContactHeroSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} spacing={{ lg: 20, xs: 5 }}>
          <Grid size={{ lg: 6, xs: 12 }} sx={{ order: { xs: 2, lg: 1 } }}>
            <Image
              src={hero_image}
              alt=""
              style={{ width: phone ? "100%" : "" }}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }} sx={{ order: { xs: 1, lg: 2 } }}>
            <Typography
              sx={{
                fontSize: { lg: 50, xs: 35 },
                textTransform: "capitalize",
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
              }}
            >
              Get in touch
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 23, xs: 19 },
                fontWeight: 500,
                letterSpacing: "-0.48px",
                lineHeight: "30px",
                mt: 2,
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
