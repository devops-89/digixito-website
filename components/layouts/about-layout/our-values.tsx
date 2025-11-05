import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import borderTop from "@/homepage/primary-rotatable-border.png";
import borderDown from "@/homepage/primary-rotatable-border-down.png";
import star from "@/icons/gold-star.svg";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
const Ourvalues = () => {
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
            <Grid container>
              <Grid size={12}>
                <Stack direction={"row"} alignItems={"flex-start"} spacing={2}>
                  <Typography
                    sx={{
                      color: COLORS.WHITE,
                      fontSize: 48,
                      fontFamily: kessel.style.fontFamily,
                    }}
                  >
                    The values that drive everything we do{" "}
                  </Typography>
                  <Image src={star} alt="" width={50} />
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Typography
                      sx={{
                        fontSize: 40,
                        fontFamily: monument.style.fontFamily,
                        color: COLORS.WHITE,
                      }}
                    >
                      our
                    </Typography>
                    <ImageHeading title="values" />
                  </Stack>
                </Stack>
              </Grid>
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

export default Ourvalues;
