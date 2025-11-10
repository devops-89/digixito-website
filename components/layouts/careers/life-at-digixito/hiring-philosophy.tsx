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
    <Box>
      <Container maxWidth="lg">
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Typography
            sx={{ fontSize: 40, fontFamily: monument.style.fontFamily }}
          >
            our Hiring
          </Typography>
          <ImageHeading title="Philosophy" sx={{ px: 1 }} />
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Image src={star} alt="" />
            <Box
              sx={{
                border: "2px solid #000",
                height: 1,
                width: 450,
                backgroundColor: COLORS.BLACK,
              }}
            ></Box>
          </Stack>
        </Stack>
        <Grid container sx={{ pt: 10 }} spacing={5}>
          <Grid size={5}>
            {philosophy.map((val, i) => (
              <Typography
                sx={{
                  fontSize: 38,
                  fontWeight: 500,
                  textTransform: "55px",
                  letterSpacing: "3.37px",
                  fontFamily: kessel.style.fontFamily,
                }}
              >
                {val.label}
              </Typography>
            ))}
            <Typography
              sx={{
                fontSize: 38,
                fontWeight: 500,
                textTransform: "55px",
                letterSpacing: "3.37px",
                fontFamily: kessel.style.fontFamily,
                mt: 6,
              }}
            >
              Welcome to{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 38,
                  fontWeight: 800,
                  textTransform: "55px",
                  letterSpacing: "3.37px",
                  fontFamily: kessel.style.fontFamily,
                }}
              >
                Digixito.
              </Typography>{" "}
            </Typography>
          </Grid>
          <Grid size={7}>
            <Typography
              sx={{
                textAlign: "justify",
                fontFamily: kessel.style.fontFamily,
                fontSize: 23,
                fontWeight: 500,
                lineHeight: "48px",
                letterSpacing: "-0.48px",
              }}
            >
              We welcome innovators from all backgrounds. Whether you’re an ML
              researcher, a front end developer, or a UI/UX enthusiast what
              matters most is your ability to learn, experiment, and
              problem-solve creatively.
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontFamily: kessel.style.fontFamily,
                fontSize: 23,
                fontWeight: 500,
                lineHeight: "48px",
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
