import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import star from "@/icons/black-star.svg";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import ImageHeading from "@/components/widgets/image-heading";
import hero_img from "@/about-us/about-hero-updated.jpg";
import PageHeading from "@/components/widgets/page-heading";
const AboutHeroSection = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <PageHeading
          page_name={"About us"}
          page_title={"Evolved by Challenge,Defined by innovation."}
        />

        <Grid container alignItems={"center"} spacing={5} sx={{ mt: 0 }}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 45, xs: 30 },
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
                lineHeight: { lg: "55px", xs: "40px" },
              }}
            >
              Rooted in Excellence, Growing with Innovation
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              mt={3}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: { lg: 40, xs: 30 },
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Our
              </Typography>
              <ImageHeading title="Story" sx={{ width: "100%" }} />
            </Stack>
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
                lineHeight: "30px",
                mt: 3,
              }}
            >
              From passionate digital marketers in 2013 to innovation leaders
              today our journey mirrors the digital revolution itself. We grew
              alongside the e-commerce boom, expanding into web development,
              design, and branding. When AI reshaped the digital landscape, we
              led the charge pioneering virtual resourcing, automation, and
              machine learning solutions. Today, Digixito is a complete 360°
              digital ecosystem: rooted in marketing, branching into e-commerce,
              AI/ML, Python development, and brand transformation. We don't just
              adapt to change we help brands lead it.
            </Typography>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={hero_img}
              alt=""
              style={{ width: "100%", height: "550px", borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutHeroSection;
