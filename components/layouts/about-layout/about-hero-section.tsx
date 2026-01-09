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
import hero_img from "@/about-us/about-us.jpg";
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
              What began in 2013 as a small team of passionate digital marketers
              has grown into a powerhouse of innovation. As the e-commerce wave
              surged with Amazon, we evolved expanding our expertise into web
              development, design, and branding. When the AI revolution reshaped
              the digital landscape, we embraced it early pioneering virtual
              resourcing, automation, and machine learning–driven solutions.
              Today, Digixito stands as a complete 360° digital ecosystem rooted
              in marketing, branching into every domain from e-commerce and
              AI/ML to Python development and brand transformation. We don’t
              just adapt to change we help brands lead it.
            </Typography>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={hero_img}
              alt=""
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutHeroSection;
