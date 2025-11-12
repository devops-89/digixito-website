import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import services_banner from "@/banners/our-services-banner.png";
import Image from "next/image";
import whiteStar from "@/icons/white-star.png";
import headingStar from "@/icons/heading-star.png";
import { kessel, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import ImageHeading from "@/components/widgets/image-heading";
import OurServiceCard from "./components/our-service-card";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
import borderTop from "@/homepage/primary-rotatable-border.png";
import borderDown from "@/homepage/primary-rotatable-border-down.png";
const OurServices = () => {
  const { data } = useDetailsStore();
  const service_data = data as DETAILS_PAGE_PROPS;
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
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "end" }}>
              <Image src={whiteStar} alt="" />
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"start"}
              spacing={2}
              sx={{ position: "relative" }}
            >
              <Stack
                direction={{ lg: "row", xs: "column" }}
                alignItems={"center"}
                spacing={2}
              >
                <Typography
                  sx={{
                    fontSize: { lg: 40, xs: 30 },
                    fontFamily: monument.style.fontFamily,
                    color: COLORS.WHITE,
                  }}
                >
                  Our
                </Typography>
                <ImageHeading
                  title={service_data?.ourServices?.heading}
                  sx={{ width: { lg: "100%", xs: 380 } }}
                />
              </Stack>
            </Stack>

            <Typography
              sx={{
                fontSize: "19",
                fontFamily: kessel.style.fontFamily,
                color: COLORS.WHITE,
                fontWeight: 300,
                textAlign: "center",
                mt: 2,
              }}
            >
              {service_data?.ourServices?.description}
            </Typography>
            <Grid container sx={{ mt: 4 }} spacing={5}>
              {service_data?.ourServices?.services_data.map((val, i) => (
                <Grid size={{ lg: 4, xs: 12 }} key={i}>
                  <OurServiceCard
                    service_name={val.service_name}
                    service_description={val.service_description}
                  />
                </Grid>
              ))}
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

export default OurServices;
