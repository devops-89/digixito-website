"use client";
import ImageHeading from "@/components/widgets/image-heading";
import SectionCard from "@/components/widgets/section-card";
import best_work_banner from "@/homepage/best-work-banner.png";
import gridBanner from "@/homepage/grid-banner.jpg";
import { COLORS, VARIANTS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import BestWorkCard from "./components/best-work-card";
const BestWorks = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${gridBanner.src})`,
        height: { lg: "100%", xs: "100%" },
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
              minHeight: { lg: "100vh", xs: "90vh" },
              height: "auto",
              py: { lg: 10, xs: 6 },
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              mt: 5,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "32px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                px: { lg: 5, xs: 2 },
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
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BestWorks;
