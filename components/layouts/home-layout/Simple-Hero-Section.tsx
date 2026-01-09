"use client";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import heroImage from "@/homepage/hero.png";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import heroVectorMan from "@/homepage/hero_vector.png";
import Image from "next/image";
import analytics from "@/homepage/analytics-graph-line-triple.png";
import arrow from "@/homepage/arrow.png";
import Bannertext from "./banner-text";
import star from "@/icons/white-star.png";
const SimpleHeroSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${heroImage.src})`,
          height: { lg: "90vh", sm: "60vh" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
          pb: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box>
            <Stack
              direction={{ lg: "row", xs: "row" }}
              alignItems={"center"}
              spacing={2}
            >
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: monument.style.fontFamily,
                  fontSize: { lg: 100, xs: 50 },
                  fontWeight: 400,
                  lineHeight: "148px",
                  letterSpacing: "-5.208px",
                }}
              >
                Concept to
              </Typography>
              <Image
                src={heroVectorMan}
                alt="hero vector man"
                style={{
                  marginTop: phone ? 0 : -110,
                  width: phone ? 200 : 250,
                }}
              />
            </Stack>
            <Stack
              direction={{ lg: "row", xs: "row" }}
              alignItems={"center"}
              spacing={4}
              sx={{ ml: {} }}
            >
              <Image src={analytics} alt="analytics" style={{ width: 100 }} />

              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: monument.style.fontFamily,
                  fontSize: { lg: 100, xs: 50 },
                  fontWeight: 400,
                  lineHeight: "148px",
                  letterSpacing: "-5.208px",
                }}
              >
                Conquest.
              </Typography>
              <Image
                src={arrow}
                alt="arrow"
                style={{ width: phone ? 100 : 150 }}
              />
            </Stack>
            <Typography
              sx={{
                color: COLORS.WHITE,
                mt: 2,
                fontSize: { lg: 28, xs: 20 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                letterSpacing: "1.12px",
              }}
            >
              Engineering 360’ digital experiences for the world’s leading
              brands
            </Typography>

            <Box sx={{ mt: { lg: 19, xs: 5 } }}>
              <Bannertext />
            </Box>

            <Container>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Box
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    width: "100%",
                    height: 2,
                  }}
                ></Box>
                <Image src={star} alt="divider star" />
                <Box
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    width: "100%",
                    height: 2,
                  }}
                ></Box>
              </Stack>
            </Container>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SimpleHeroSection;
