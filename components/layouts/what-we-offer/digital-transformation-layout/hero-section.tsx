import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import star from "@/icons/black-star.svg";
import Image from "next/image";
const HeroSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              color: COLORS.BLACK,
              fontSize: 50,
              fontFamily: monument.style.fontFamily,
              fontWeight: 800,
            }}
          >
            What We Offer
          </Typography>
          <Typography
            sx={{
              fontSize: 26,
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
            }}
          >
            Digital transformation
          </Typography>
        </Stack>
        <Divider sx={{ borderColor: "#000" }}>
          <Image src={star} alt="" />
        </Divider>

        <Grid container>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 30,
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
              }}
            >
              AI/ML{" "}
              <Typography
                sx={{
                  fontFamily: monument.style.fontFamily,
                  fontSize: 50,
                  fontWeight: 800,
                }}
              >
                Development
              </Typography>{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 500,
                fontFamily: kessel.style.fontFamily,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sed ex lacus. Morbi ac sem sit amet leo maximus sollicitudin a nec
              mauris. Donec posuere tincidunt eros vel volutpat. Curabitur
              porttitor purus vel pellentesque dignissim. Fusce ac ultrices
              urna. Quisque sit amet congue velit. Duis ultrices diam sed nisi
              convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean sed ex lacus. Morbi ac sem sit amet leo maximus
              sollicitudin a nec mauris. Donec posuere tincidunt eros vel v{" "}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button
                sx={{
                  backgroundColor: COLORS.BLACK,
                  color: COLORS.PRIMARY,
                  padding: "10px 34px",
                  borderRadius: "60px",
                  fontFamily: monument.style.fontFamily,
                  //   width: 203,
                  height: 48,
                }}
              >
                Call to Action
              </Button>
              <Button
                sx={{
                  backgroundColor: COLORS.TRANSPARENT,
                  color: COLORS.BLACK,
                  padding: "10px 34px",
                  borderRadius: "60px",
                  fontFamily: monument.style.fontFamily,
                  //   width: 203,
                  height: 48,
                  border: "1px solid #000",
                }}
              >
                Call to Action
              </Button>
            </Stack>
          </Grid>
          <Grid size={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
