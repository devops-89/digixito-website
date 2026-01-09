import React from "react";
import backgroundImage from "@/homepage/hero-banner-mobile.png";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import heroVectorman from "@/homepage/hero-vector.svg";
import Image from "next/image";
import lineChart from "@/homepage/analytics-graph-line-triple.png";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import arrowRight from "@/homepage/arrow.png";
import Bannertext from "./banner-text";
const MobileHeroSection = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Image src={heroVectorman} alt="" />
          </Box>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Image src={lineChart} alt="" style={{ width: 50, height: 50 }} />
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontFamily: monument.style.fontFamily,
                fontSize: 29,
                lineHeight: "29px",
                letterSpacing: "0.87px",
                fontWeight: 700,
                mt: 3,
              }}
            >
              Concept to
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontFamily: monument.style.fontFamily,
                fontSize: 29,
                lineHeight: "29px",
                letterSpacing: "0.87px",
                fontWeight: 700,
              }}
            >
              Conquest.
              <Image
                src={arrowRight}
                alt=""
                style={{ width: 40, height: 30 }}
              />
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: 20,
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
              letterSpacing: "0.8px",
              textAlign: "center",
              color: COLORS.WHITE,
              mt: 5,
            }}
          >
            Engineering 360° digital experiences from concept to conquest
          </Typography>
          <Box sx={{ mt: 6 }}>
            <Bannertext />
          </Box>
          <Divider sx={{ borderColor: COLORS.WHITE, mt: 6 }} />
        </Container>
      </Box>
    </div>
  );
};

export default MobileHeroSection;
