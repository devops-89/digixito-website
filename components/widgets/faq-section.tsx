import { COLORS } from "@/utils/enum";
import { archivo, kessel, monument } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FaqQuestionCard from "./common/faq-question-card";
import { FAQ_DATA } from "@/assets/data/generic-array";

const FaqSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        height: { lg: "100vh", xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
            <Typography
              sx={{
                fontSize: { lg: 38, xs: 25, sm: 30 },
                fontFamily: monument.style.fontFamily,
                textTransform: "capitalize",
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontSize: 18,
                mt: 4,
              }}
            >
              Still you have any questions? Contact our Team via
              hello@digixito.com
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              spacing={4}
              sx={{ mt: 5 }}
            >
              <Button
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  borderRadius: "50px",
                  border: "1px solid #010205",
                  padding: "17px",
                  width: "176px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  fontSize: 16,
                  color: COLORS.BLACK,
                }}
              >
                Contact Us
              </Button>
              {/* <Button
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  borderRadius: "50px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  fontSize: 16,
                  color: COLORS.BLACK,
                  textDecoration: "underline",
                }}
              >
                Contact Us
              </Button> */}
            </Stack>
          </Grid>
          <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
            <FaqQuestionCard data={FAQ_DATA} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FaqSection;
