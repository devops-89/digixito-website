import { Box, Container, Stack, Typography } from "@mui/material";
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
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${heroImage.src})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
        }}
      >
        <Box>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontFamily: monument.style.fontFamily,
                fontSize: 112,
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
              style={{ marginTop: -110 }}
            />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={4}
            sx={{ ml: 20 }}
          >
            <Image src={analytics} alt="analytics" />

            <Typography
              sx={{
                color: COLORS.WHITE,
                fontFamily: monument.style.fontFamily,
                fontSize: 112,
                fontWeight: 400,
                lineHeight: "148px",
                letterSpacing: "-5.208px",
              }}
            >
              Conquest.
            </Typography>
            <Image src={arrow} alt="arrow" />
          </Stack>
          <Typography
            sx={{
              color: COLORS.WHITE,
              mt: 2,
              fontSize: 28,
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
              letterSpacing: "1.12px",
            }}
          >
            Engineering 360° digital experiences from concept to conquest
          </Typography>

          <Box sx={{ mt: 19 }}>
            <Bannertext />
          </Box>

          <Container>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Box
                sx={{ backgroundColor: COLORS.WHITE, width: "100%", height: 2 }}
              ></Box>
              <Image src={star} alt="divider star" />
              <Box
                sx={{ backgroundColor: COLORS.WHITE, width: "100%", height: 2 }}
              ></Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default SimpleHeroSection;
