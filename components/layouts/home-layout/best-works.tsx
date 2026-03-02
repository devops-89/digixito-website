"use client";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import gridBanner from "@/homepage/grid-banner.jpg";
import SectionCard from "@/components/widgets/section-card";
import { COLORS, VARIANTS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import best_work_banner from "@/homepage/best-work-banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import BestWorkCard from "./components/best-work-card";
const BestWorks = () => {
  const chipData = [
    {
      label: "UX Research",
    },
    {
      label: "Wireframe",
    },
    {
      label: "Visual Design",
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: `url(${gridBanner.src})`,
        height: { lg: "100vh", xs: "100%" },
        py: { lg: 20, xs: 6 },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SectionCard title="Portfolio" variant={VARIANTS.PRIMARY} />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Typography
                  sx={{
                    fontFamily: monument.style.fontFamily,
                    fontSize: { lg: 40, xs: 30 },
                    color: "#222",
                  }}
                >
                  Our
                </Typography>
                <ImageHeading title="Best Works" sx={{ px: { xs: 1 } }} />
              </Stack>
              <Typography
                sx={{
                  fontSize: { lg: 40, xs: 30 },
                  fontFamily: monument.style.fontFamily,
                  color: "#222",
                }}
              >
                for unique needs
              </Typography>
            </Box>
            <Button
              endIcon={<ArrowForward />}
              sx={{
                border: "1px solid #000",
                color: COLORS.BLACK,
                borderRadius: "27px",
                width: 150,
                height: 55,
              }}
            >
              See More
            </Button>
          </Stack>

          <Box
            sx={{
              backgroundImage: `url(${best_work_banner.src})`,
              height: { lg: "100vh", xs: "90vh" },

              //   py: 4,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              mt: 5,
              backgroundRepeat: "no-repeat",
              //   p:5
            }}
          >
            <Box
              sx={{
                width: "100%",
                px: { lg: 5, xs: 2 },
                position: "absolute",
                top: 0,
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={4}
                px={4}
              >
                <IconButton
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    color: COLORS.BLACK,
                    width: 50,
                    height: 50,
                    ":hover": {
                      backgroundColor: COLORS.WHITE,
                    },
                    display: { lg: "flex", xs: "none" },
                  }}
                >
                  <ArrowBack />
                </IconButton>
                <Swiper
                  breakpoints={{
                    600: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1300: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SwiperSlide key={i}>
                      <BestWorkCard />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <IconButton
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    color: COLORS.BLACK,
                    width: 50,
                    height: 50,

                    ":hover": {
                      backgroundColor: COLORS.WHITE,
                    },
                    display: { lg: "flex", xs: "none" },
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </Stack>

              <Stack
                direction={{ lg: "row", xs: "row" }}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
                mt={4}
                sx={{ flexWrap: "wrap", gap: 2 }}
              >
                {chipData.map((val, i) => (
                  <Chip
                    sx={{
                      padding: "6px 12px",
                      backgroundColor: "#F0F0F0",
                      borderRadius: "32px",
                      fontFamily: kessel.style.fontFamily,
                      color: "#888",
                      fontSize: 16,
                      letterSpacing: "-0.18px",
                      mt: 2,
                    }}
                    label={val.label}
                    key={i}
                  />
                ))}
              </Stack>

              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                justifyContent={"center"}
                mt={2}
              >
                <Typography
                  sx={{
                    fontFamily: monument.style.fontFamily,
                    fontSize: { lg: 32, xs: 20 },
                    fontWeight: 400,
                    letterSpacing: "-0.32px",
                    textAlign: "center",
                    color: COLORS.WHITE,
                  }}
                >
                  Intelligent Experience
                </Typography>
                <IconButton
                  sx={{
                    backgroundColor: COLORS.PRIMARY,
                    color: COLORS.BLACK,
                    rotate: "-45deg",
                    ":hover": {
                      backgroundColor: COLORS.PRIMARY,
                    },
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </Stack>

              <Typography
                sx={{
                  fontSize: { lg: 25, xs: 16 },
                  textAlign: "center",
                  fontFamily: kessel.style.fontFamily,
                  lineHeight: { lg: "45px", xs: "30px" },
                  letterSpacing: "-0.28px",
                  fontWeight: 400,
                  color: COLORS.WHITE,
                  px: { lg: 3, xs: 1 },
                  my: 2,
                }}
              >
                We start every project by decoding our client’s goals,
                challenges, and users. For Coca, our process combined research
                and strategy to design a landing experience that’s both
                functional and visually engaging — built to convert insight into
                impact.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BestWorks;
