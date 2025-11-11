"use client";
import { TESTIMONIAL_CARD_DATA } from "@/assets/data/generic-array";
import testimonialBanner from "@/banners/testimonial-banner.png";
import star from "@/icons/white-star.png";
import { COLORS, VARIANTS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./common/testimonial-card";
import ImageHeading from "./image-heading";
import SectionCard from "./section-card";
const Testimonials = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${testimonialBanner.src})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 2,
          py: { lg: 10, xs: 8 },
        }}
      >
        <SectionCard title="Testimonials" variant={VARIANTS.DARK} />
        <Container maxWidth="lg" sx={{ pt: 5 }}>
          <Box sx={{ textAlign: "end" }}>
            <Image src={star} alt="" />
          </Box>
          <Grid container>
            <Grid size={10} margin={"auto"}>
              <Box>
                <Stack
                  direction={{ lg: "row", xs: "column" }}
                  alignItems={"center"}
                  spacing={2}
                  justifyContent={"center"}
                >
                  <ImageHeading title="Testimonials" sx={{ px: 1 }} />
                  <Typography
                    sx={{
                      fontSize: { lg: 40, xs: 30 },
                      fontFamily: monument.style.fontFamily,
                      color: COLORS.WHITE,
                    }}
                  >
                    that
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: { lg: 40, xs: 30 },
                    fontFamily: monument.style.fontFamily,
                    color: COLORS.WHITE,
                    textAlign: "center",
                  }}
                >
                  Speak to Our Results
                </Typography>

                <Typography
                  sx={{
                    color: "#AAA",
                    fontSize: { lg: 20, xs: 16 },
                    fontFamily: kessel.style.fontFamily,
                    fontWeight: 500,
                    lineHeight: { lg: "34px", xs: "20px" },
                    mt: 3,
                    textAlign: "center",
                  }}
                >
                  Read through our testimonials to see why our clients love
                  working with us and how we can help you achieve your business
                  goals through creative and effective design.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ mt: 4 }}>
          <Swiper
            loop
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              650: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {TESTIMONIAL_CARD_DATA.map((val, i) => (
              <SwiperSlide>
                <TestimonialCard
                  name={val.name}
                  designation={val.designation}
                  description={val.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={4}
            sx={{ mt: 4 }}
          >
            <IconButton sx={{ border: "1px solid #fff", color: COLORS.WHITE }}>
              <ArrowBack />
            </IconButton>
            <IconButton sx={{ border: "1px solid #fff", color: COLORS.WHITE }}>
              <ArrowForward />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      {/* <Box sx={{ position: "absolute", bottom: -20, width: "100%" }}>
        <Image src={bottomPrimary} alt="" style={{ width: "100%" }} />
      </Box> */}
    </Box>
  );
};

export default Testimonials;
