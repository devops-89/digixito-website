"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import borderTop from "@/homepage/primary-rotatable-border.png";
import borderDown from "@/homepage/primary-rotatable-border-down.png";
import star from "@/icons/gold-star.svg";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
import { Swiper, SwiperSlide } from "swiper/react";
import ValueCard from "./components/value-card";
import {
  COUNTER_CARD_DATA,
  VALUE_CARD_DATA,
} from "@/assets/data/generic-array";
import { Autoplay } from "swiper/modules";
import NumberCard from "./components/number-card";
const Ourvalues = () => {
  return (
    <div>
      <Box sx={{ position: "relative", mt: 10 }}>
        <Image
          src={borderTop}
          alt=""
          style={{
            width: "100%",
            position: "absolute",
            top: -20,
            zIndex: 0,
            height: 50,
          }}
        />

        <Box
          sx={{
            backgroundColor: "#222222",
            height: "100%",
            width: "100%",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 10,
          }}
        >
          <Container maxWidth="xl">
            <Container maxWidth="lg">
              <Grid container>
                <Grid size={12}>
                  <Stack
                    direction={{ lg: "row", xs: "column" }}
                    alignItems={"flex-start"}
                    spacing={2}
                  >
                    <Typography
                      sx={{
                        color: COLORS.WHITE,
                        fontSize: { lg: 48, xs: 30 },
                        fontFamily: kessel.style.fontFamily,
                      }}
                    >
                      The values that drive everything we do{" "}
                    </Typography>
                    <Image src={star} alt="" width={50} />
                  </Stack>
                  <Stack
                    direction={{ lg: "row", xs: "column" }}
                    alignItems={{ lg: "center", xs: "flex-start" }}
                    justifyContent={"space-between"}
                    spacing={{ xs: 2 }}
                    sx={{ mt: 5 }}
                  >
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      <Typography
                        sx={{
                          fontSize: { lg: 40, xs: 30 },
                          fontFamily: monument.style.fontFamily,
                          color: COLORS.WHITE,
                        }}
                      >
                        our
                      </Typography>
                      <ImageHeading title="values" sx={{ px: 1 }} />
                    </Stack>
                    <Button
                      sx={{
                        backgroundColor: COLORS.PRIMARY,
                        color: COLORS.BLACK,
                        fontSize: 19,
                        fontFamily: monument.style.fontFamily,
                        fontWeight: 400,
                        lineHeight: "20.25px",
                        padding: "18px 39px",
                      }}
                    >
                      Join our team
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
            <Box sx={{ mt: 4 }}>
              <Swiper
                breakpoints={{
                  600: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 400,
                  },
                }}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                }}
                loop
                centeredSlides
              >
                {VALUE_CARD_DATA.map((val, i) => (
                  <SwiperSlide key={i}>
                    <ValueCard
                      title={val.title}
                      description={val.description}
                      number={val.number}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Grid container sx={{ mt: 5 }}>
              <Grid size={{ lg: 8, xs: 12 }} margin={"auto"}>
                <Typography
                  sx={{
                    fontSize: {lg:38,xs:30},
                    fontFamily: kessel.style.fontFamily,
                    color: "#FFC228",
                    fontWeight: 500,
                    lineHeight: "19px",
                    textAlign: "center",
                  }}
                >
                  Our numbers
                </Typography>
                <Typography
                  sx={{
                    fontSize: {lg:37,xs:30},
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 400,
                    lineHeight: "55px",
                    textAlign: "center",
                    color: COLORS.WHITE,
                    mt: 3,
                  }}
                >
                  We have impactful results
                </Typography>
                <Grid container sx={{ mt: 3 }}>
                  {COUNTER_CARD_DATA.map((val, i) => (
                    <Grid size={{lg:3,xs:6}} key={i}>
                      <NumberCard
                        number={val.number}
                        suffix={val.suffix}
                        title={val.title}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Image
          src={borderDown}
          alt=""
          style={{
            width: "100%",
            position: "absolute",
            bottom: -20,
            zIndex: 0,
            height: 50,
          }}
        />
      </Box>
    </div>
  );
};

export default Ourvalues;
