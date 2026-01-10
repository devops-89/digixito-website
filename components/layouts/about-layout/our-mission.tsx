import StarCard from "@/components/widgets/star-card";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import mission from "@/about-us/about-us.jpeg";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
const OurMission = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={10}
          flexDirection={{ lg: "row", xs: "row-reverse" }}
          alignItems={"center"}
        >
          <Grid size={{ lg: 5, xs: 12 }}>
            <StarCard
              iconPosition="top"
              backgroundImage={mission.src}
              height={"80vh"}
            />
          </Grid>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 40, xs: 30 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                lineHeight: "55px",
              }}
            >
              Beyond Digital.
              <br /> Beyond Expectations.
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{ my: 3 }}
            >
              <Typography
                sx={{
                  fontFamily: monument.style.fontFamily,
                  fontSize: { lg: 40, xs: 30 },
                  fontWeight: 400,
                }}
              >
                Our
              </Typography>
              <ImageHeading title="Mission" />
            </Stack>
            <Typography
              sx={{
                fontSize: 19,
                textAlign: "justify",
                fontFamily: kessel.style.fontFamily,
                fontWeight: 500,
                lineHeight: { lg: "40px", xs: "30px" },
              }}
            >
              To orchestrate the perfect symphony of strategy, creativity, and
              technology that transforms ambitious brands into market leaders.
              We push beyond conventional boundaries, integrating art with
              algorithms, design with data, and innovation with execution. Every
              solution we craft is a masterpiece of precision, making your brand
              not just visible but unforgettable in the digital universe.{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMission;
