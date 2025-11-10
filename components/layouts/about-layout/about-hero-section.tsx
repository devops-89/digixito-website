import { kessel, monument } from "@/utils/fonts";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import star from "@/icons/black-star.svg";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import ImageHeading from "@/components/widgets/image-heading";
import hero_img from "@/about-us/hero.png";
import PageHeading from "@/components/widgets/page-heading";
const AboutHeroSection = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <PageHeading
          page_name={"About us"}
          page_title={"Evolved by Challenge,Defined by innovation."}
        />

        <Grid container alignItems={"center"} spacing={5} sx={{ mt: 5 }}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 45,
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
                lineHeight: "55px",
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
                  fontSize: 40,
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
                fontSize: 19,
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
                lineHeight: "48px",
                mt: 3,
              }}
            >
              Started as a small team of dreamers in digital marketing (2013).
              Scaled with Amazon's e-commerce explosion, adding development,
              design, and branding. When AI transformed everything, we pioneered
              virtual resourcing and ML solutions. Today, Digixito is a digital
              ecosystem, with roots in marketing, branches spanning every
              domain, from e-commerce to AI/ML, Python to brand building.
              complete 360° solutions.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Image src={hero_img} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutHeroSection;
