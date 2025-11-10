import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import digixitoSign from "@/banners/digixito-sign.png";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
const HerosectionLife = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${digixitoSign.src})`,
          height: "80vh",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={10} margin="auto">
              <Typography
                sx={{
                  fontFamily: kessel.style.fontFamily,
                  fontSize: 56,
                  fontWeight: 700,
                  lineHeight: "75px",
                  letterSpacing: "-1.51px",
                  textAlign: "center",
                }}
              >
                A Culture of
              </Typography>
              <Typography
                sx={{
                  fontFamily: monument.style.fontFamily,
                  textAlign: "center",
                  fontSize: 56,
                  fontWeight: 700,
                  lineHeight: "75px",
                  letterSpacing: "-1.51px",
                }}
              >
                Constant Learning
              </Typography>
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: 500,
                  fontFamily: kessel.style.fontFamily,
                  lineHeight: "48px",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                At Digixito, we believe innovation begins with people curious
                minds, creative thinkers, and passionate builders who want to
                shape the digital future responsibly. From building AI-powered
                systems to designing seamless experiences, our team thrives on
                curiosity, collaboration, and constant learning.
              </Typography>
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button
                  sx={{
                    backgroundColor: COLORS.BLACK,
                    borderRadius: "12px",
                    color: COLORS.WHITE,
                    fontFamily: kessel.style.fontFamily,
                    fontSize: 14,
                    textTransform: "inherit",
                    p: 1.5,
                    width: 150,
                  }}
                >
                  See open roles
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HerosectionLife;
