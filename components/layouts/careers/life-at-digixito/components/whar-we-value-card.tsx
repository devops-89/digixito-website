import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import globe from "@/banners/Globe.png";
import { kessel } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { VALUE_LIST_PROPS } from "@/utils/types";
const WhatWeValueCard = ({ data, img, isReverse }: VALUE_LIST_PROPS) => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={10}
          flexDirection={isReverse ? "row-reverse" : "row"}
        >
          <Grid size={6}>
            <Image src={img} alt="" style={{ width: "100%", height: 500 }} />
          </Grid>
          <Grid size={6}>
            {data.map((val, i) => (
              <React.Fragment key={i}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={3}
                  sx={{ mb: 1 }}
                >
                  <Typography
                    sx={{
                      fontFamily: kessel.style.fontFamily,
                      fontSize: 27,
                      fontWeight: 700,
                      lineHeight: "25px",
                      letterSpacing: "-0.48px",
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.serial_number}.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: kessel.style.fontFamily,
                      fontSize: 27,
                      fontWeight: 700,
                      lineHeight: "25px",
                      letterSpacing: "-0.48px",
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.heading}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontFamily: kessel.style.fontFamily,
                    fontSize: 19,
                    fontWeight: 500,
                    lineHeight: "30px",
                    letterSpacing: "-0.4px",
                    mt: 2,
                    color: COLORS.WHITE,
                    mb: 4,
                  }}
                >
                  {val.description}
                </Typography>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeValueCard;
