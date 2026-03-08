import ImageHeading from "@/components/widgets/image-heading";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import star from "@/icons/black-star.svg";
import Image from "next/image";
const HiringPhilosophy = () => {
  const philosophy = [
    {
      label: "Innovators.",
    },
    {
      label: "Dreamers.",
    },
    {
      label: "Builders.",
    },
  ];
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={"center"}
          spacing={2}
        >
          <Typography
            sx={{
              fontSize: { lg: 40, xs: 28 },
              fontFamily: monument.style.fontFamily,
              textAlign: "center",
            }}
          >
            our Hiring
          </Typography>
          <ImageHeading title="Philosophy" sx={{ px: 1 }} />
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Image src={star} alt="" />
            <Box
              sx={{
                border: "1px solid #000",
                height: "2px",
                width: { lg: 450, md: 350 },
                backgroundColor: COLORS.BLACK,
              }}
            ></Box>
          </Stack>
        </Stack>
        <Grid container sx={{ pt: { xs: 6, md: 10 } }} spacing={5}>
          <Grid size={{ lg: 5, xs: 12 }}>
            {philosophy.map((val, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: { lg: 32, xs: 24 },
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "3.37px",
                  fontFamily: kessel.style.fontFamily,
                }}
              >
                {val.label}
              </Typography>
            ))}
            <Typography
              sx={{
                fontSize: { lg: 32, xs: 24 },
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: "3.37px",
                fontFamily: kessel.style.fontFamily,
                mt: 6,
              }}
            >
              Welcome to{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: { lg: 32, xs: 24 },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: "3.37px",
                  fontFamily: kessel.style.fontFamily,
                }}
              >
                Digixito.
              </Typography>{" "}
            </Typography>
          </Grid>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                textAlign: "justify",
                fontFamily: kessel.style.fontFamily,
                fontSize: { lg: 18, xs: 16 },
                fontWeight: 500,
                lineHeight: 1.6,
                letterSpacing: "-0.48px",
              }}
            >
              We welcome innovators from all backgrounds. Whether you’re an ML
              research researcher, a front end developer, or a UI/UX enthusiast
              what matters most is your ability to learn, experiment, and
              problem-solve creatively.
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontFamily: kessel.style.fontFamily,
                fontSize: { lg: 18, xs: 16 },
                fontWeight: 500,
                lineHeight: 1.6,
                letterSpacing: "-0.48px",
                mt: 3,
              }}
            >
              Our interviews are collaborative and transparent. You’ll get to
              discuss real-world challenges, share your ideas, and see how your
              thinking aligns with our process. We care about how you approach
              problems not just how fast you solve them.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HiringPhilosophy;
