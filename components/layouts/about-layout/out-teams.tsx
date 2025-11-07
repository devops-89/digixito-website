import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import teams from "@/about-us/teams.png";
import Image from "next/image";
import { monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
const OurTeams = () => {
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
            <Grid size={11} margin="auto">
              <Box sx={{ textAlign: "center" }}>
                <Image src={teams} alt="" width={450} />
                <Typography
                  sx={{
                    fontSize: 48,
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 800,
                    lineHeight: "56px",
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
                    my: 2,
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
