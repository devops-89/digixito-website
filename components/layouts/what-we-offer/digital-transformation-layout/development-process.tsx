import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import gridPattern from "@/homepage/grid-banner.jpg";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
import Image from "next/image";
import star from "@/icons/gold-star.svg";
import slideBanner from "@/homepage/best-work-banner.png";
const DevelopmentProcess = () => {
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
            >
              <Typography
                sx={{
                  fontSize: 40,
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                Our
              </Typography>
              <ImageHeading title="Development" sx={{ width: "100%", px: 1 }} />
              <Typography
                sx={{
                  fontSize: 40,
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                  pl: 2,
                }}
              >
                Process
              </Typography>
            </Stack>
            <Image src={star} alt="" width={40} />
          </Stack>
          <Typography
            sx={{
              fontSize: 19,
              fontFamily: kessel.style.fontFamily,
              lineHeight: "24px",
              textAlign: "center",
              width: "772px",
              margin: "auto",
              mt: 2,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean{" "}
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(${slideBanner.src})`,
              height: "100%",
              display: "flex",
              alignItems: "center",
              py: 10,
              position: "relative",
            }}
          >

            
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DevelopmentProcess;
