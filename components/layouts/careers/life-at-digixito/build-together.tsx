import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import career from "@/banners/career-second.png";
import Image from "next/image";
import { kessel, monument } from "@/utils/fonts";
const BuildTogether = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={career}
              alt=""
              style={{ width: "100%", height: 300, borderRadius: 10 }}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 45, xs: 30 },
                fontWeight: 500,
                lineHeight: "55px",
                letterSpacing: "-1.516px",
              }}
            >
              Building the Future Together
            </Typography>
            <Typography
              sx={{
                fontSize: 19,
                fontFamily: kessel.style.fontFamily,
                lineHeight: "35px",
                fontWeight: 500,
                letterSpacing: "-0.4px",
                mt: 3,
              }}
            >
              We’re a collective of engineers, designers, and strategists driven
              by a single purpose: to make technology more human smarter,
              simpler, and scalable. Our culture celebrates ownership,
              experimentation, and a bias toward meaningful impact.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BuildTogether;
