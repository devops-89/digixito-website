"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import teams from "@/about-us/teams.png";
import Image from "next/image";
import { monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
const OurTeams = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ lg: 11, xs: 12 }} margin="auto">
              <Box sx={{ textAlign: "center" }}>
                <Image src={teams} alt="" width={phone ? 350 : 450} />
                <Typography
                  sx={{
                    fontSize: { lg: 48, xs: 30 },
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 800,
                    lineHeight: { lg: "56px", xs: "35px" },
                    mt: 3,
                  }}
                >
                  Join Our Team of Creators, Builders, and Thinkers
                </Typography>
                <Typography
                  sx={{
                    fontSize: 19,
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 300,
                    lineHeight: "24px",
                    my: 4,
                  }}
                >
                  We’re always looking for curious minds and passionate hearts
                  to grow with us. If you’re ready to make an impact and be part
                  of something meaningful, we’d love to hear from you.
                </Typography>

                <Button
                  sx={{
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius: "14px",
                    padding: "18px 39px",
                    fontFamily: monument.style.fontFamily,
                    lineHeight: "20px",
                    fontWeight: 400,
                    color: COLORS.BLACK,
                  }}
                >
                  Join our team
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default OurTeams;
