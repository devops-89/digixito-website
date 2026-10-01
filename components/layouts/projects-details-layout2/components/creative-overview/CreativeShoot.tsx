import { roboto } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

const CreativeShoot = ({ data }: { data: StaticImageData[] | undefined }) => {
  return (
    <Box>
      <Container>
        <Grid container sx={{ mb: 8 }}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 60,
                fontWeight: 600,
                fontFamily: roboto.style.fontFamily,
                letterSpacing: "-1px",
                lineHeight: "70px",
              }}
            >
              Photo Shoot Jacqueline Fernandez for Bella Casa
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {data?.map((val, i) => (
            <Grid size={4} key={i}>
              <Image
                src={val}
                key={i}
                alt={i.toString()}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CreativeShoot;
