import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import gridPattern from "@/homepage/grid-banner.jpg";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
import Image from "next/image";
import star from "@/icons/gold-star.svg";
import slideBanner from "@/homepage/best-work-banner.png";
import DevelopmentCard from "./components/development-card";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
const DevelopmentProcess = () => {
  const { data } = useDetailsStore();

  const developmentData = data as DETAILS_PAGE_PROPS;
  return (
    <Box sx={{ mt: 20 }}>
      <Box
        sx={{
          backgroundImage: `url(${gridPattern.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          py: 10,
          borderTop: "1px solid #ECECEC",
          borderBottom: "1px solid #ECECEC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            spacing={1}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
              flexWrap={"wrap"}
            >
              <Typography
                sx={{
                  fontSize: { lg: 40, xs: 20, sm: 25 },
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                Our Development Process
              </Typography>
              {/* <Typography
                sx={{
                  fontSize: { lg: 40, xs: 16, sm: 25 },
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Development
              </Typography> */}
              {/* <ImageHeading
                title="Development"
                sx={{
                  width: "100%",
                  px: 1,
                  fontSize: { xs: 16, sm: 25, lg: 40 },
                }}
              /> */}
              {/* <Typography
                sx={{
                  fontSize: { lg: 40, xs: 16, sm: 25 },
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                  pl: 2,
                }}
              >
                Process
              </Typography> */}
            </Stack>
            <Image src={star} alt="" width={40} />
          </Stack>
          <Typography
            sx={{
              fontSize: 19,
              fontFamily: kessel.style.fontFamily,
              lineHeight: "24px",
              textAlign: "center",
              width: { lg: "772px", xs: "100%" },
              margin: "auto",
              my: 5,
            }}
          >
            Our proven ML workflow ensures transparency, collaboration, and
            measurable results:
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(${slideBanner.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "auto",
              display: "flex",
              alignItems: "center",
              py: 10,
              position: "relative",
              mt: 20,
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={{ lg: 4, xs: 12 }} sx={{ mt: -20 }}>
                {developmentData?.development_process.map((val, i) => (
                  <Grid size={{ lg: 4, xs: 12, sm: 6 }} key={i}>
                    <DevelopmentCard
                      process_number={val.process_number}
                      process_title={val.process_title}
                      process_description={val.process_description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DevelopmentProcess;
