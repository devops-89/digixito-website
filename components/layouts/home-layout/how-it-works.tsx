import { COLORS, VARIANTS } from "@/utils/enum";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import borderTop from "@/homepage/primary-rotatable-border.png";
import borderDown from "@/homepage/primary-rotatable-border-down.png";
import Image from "next/image";
import SectionCard from "@/components/widgets/section-card";
import star from "@/icons/white-star.png";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
import WorkCard from "./components/work-card";
import { WORK_CARD_DATA } from "@/assets/data/generic-array";
const HowitWorks = () => {
  return (
    <Box sx={{ position: "relative" }}>
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
      <SectionCard title="How it works" variant={VARIANTS.DARK} />
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
        <Container maxWidth="lg">
          <Image src={star} alt="" />
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems={{ lg: "center", xs: "flex-start" }}
            spacing={2}
            justifyContent={{ lg: "center", xs: "flex-start" }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: COLORS.WHITE,
                fontSize: { lg: 40, xs: 30 },
                fontFamily: monument.style.fontFamily,
              }}
            >
              why choose
            </Typography>
            <ImageHeading title="Digixito." />
          </Stack>
          <Typography
            sx={{
              color: COLORS.GRAY_90,
              fontSize: 18,
              fontFamily: kessel.style.fontFamily,
              lineHeight: "24px",
              letterSpacing: "-0.114px",
              mt: 3,
            }}
          >
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </Typography>
          <Grid container sx={{ mt: 3 }} spacing={3}>
            {WORK_CARD_DATA.map((val, i) => (
              <Grid size={{ lg: 6, xs: 12 }} key={i}>
                <WorkCard
                  title={val.title}
                  description={val.description}
                  img={val.img}
                  number={val.number}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "end", mt: 4 }}>
            <Image src={star} alt="" />
          </Box>
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
  );
};

export default HowitWorks;
