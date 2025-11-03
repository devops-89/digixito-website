"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import testimonialBanner from "@/banners/testimonial-banner.png";
import topPrimary from "@/homepage/primary-rotatable-border.png";
import bottomPrimary from "@/homepage/primary-rotatable-border-down.png";
import Image from "next/image";
import SectionCard from "./section-card";
import { COLORS, VARIANTS } from "@/utils/enum";
import star from "@/icons/white-star.png";
import ImageHeading from "./image-heading";
import { kessel, monument } from "@/utils/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./common/testimonial-card";
import { TESTIMONIAL_CARD_DATA } from "@/assets/data/generic-array";
const Testimonials = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: `url(${testimonialBanner.src})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: 2,
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
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  justifyContent={"center"}
                >
                  <ImageHeading title="Testimonials" />
                  <Typography
                    sx={{
                      fontSize: 40,
                      fontFamily: monument.style.fontFamily,
                      color: COLORS.WHITE,
                    }}
                  >
                    that
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: 40,
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
                    fontSize: 20,
                    fontFamily: kessel.style.fontFamily,
                    fontWeight: 500,
                    lineHeight: "34px",
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
        <Swiper slidesPerView={3} >
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
      </Box>
      {/* <Box sx={{ position: "absolute", bottom: -20, width: "100%" }}>
        <Image src={bottomPrimary} alt="" style={{ width: "100%" }} />
      </Box> */}
    </Box>
  );
};

export default Testimonials;
