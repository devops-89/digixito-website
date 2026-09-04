import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "@/banners/banner.webp";
import { kessel, kessel_bold, monument, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
const HeroSection3 = () => {
  const words = ["Innovate", "Inspire", "Create"];

  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundImage: `url(${banner.src})`,
            minHeight: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              minHeight: "100vh",
              //   backgroundColor: "#00000099",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container>
              <Grid container>
                <Grid size={8}>
                  <Typography
                    sx={{
                      fontSize: 70,
                      fontWeight: 800,
                      fontFamily: kessel_bold.style.fontFamily,
                      color: COLORS.WHITE,
                      letterSpacing: "0.5px",
                      lineHeight: "85px",
                    }}
                  >
                    Engineering the{" "}
                    <Typography
                      component={"span"}
                      sx={{
                        fontFamily: kessel_bold.style.fontFamily,
                        color: COLORS.PRIMARY,
                        fontSize: 70,
                        fontWeight: 800,
                        letterSpacing: "0.5px",
                        lineHeight: "85px",
                      }}
                    >
                      Future
                    </Typography>{" "}
                    with AI
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      color: COLORS.WHITE,
                      mt: 2,
                      lineHeight: 1.6,
                      fontFamily: kessel.style.fontFamily,
                    }}
                  >
                    A team of strategic thinkers and artists, inspired by the
                    past and driven by the future and committed to deliver only
                    the best to ambitious brands in a competitive landscape.
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box sx={{ position: "absolute", bottom: 50, width: "100%" }}>
            <Container>
              <Grid container sx={{ alignItems: "flex-end" }}>
                <Grid size={7}>
                  <Stack
                    direction={"row"}
                    sx={{ alignItems: "center" }}
                    spacing={8}
                  >
                    {words.map((val, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: COLORS.WHITE,
                          fontSize: 30,
                          fontFamily: kessel.style.fontFamily,
                          fontWeight: 600,
                        }}
                      >
                        {val}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
                <Grid size={5}>
                  <Typography
                    sx={{
                      fontSize: 30,
                      fontWeight: 600,
                      color: COLORS.WHITE,
                      fontFamily: kessel.style.fontFamily,
                    }}
                  >
                    Branding Mobile & Web app design for startups and giants
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{ alignItems: "center", mt: 2 }}
                    spacing={3}
                  >
                    <Button
                      sx={{
                        fontFamily: kessel.style.fontFamily,
                        fontSize: 16,
                        borderRadius: "20px",
                        backgroundColor: COLORS.PRIMARY,
                        color: COLORS.BLACK,
                        p: 1.3,
                        transition: "0.5s ease all",
                        "&:hover": {
                          borderRadius: "5px",
                        },
                        width: 200,
                      }}
                    >
                      View Projects
                    </Button>
                    <Button
                      sx={{
                        fontFamily: kessel.style.fontFamily,
                        fontSize: 16,
                        borderRadius: "20px",
                        backgroundColor: COLORS.TRANSPARENT,
                        color: COLORS.PRIMARY,
                        p: 1.3,
                        transition: "0.5s ease all",
                        "&:hover": {
                          borderRadius: "5px",
                        },
                        border: "1px solid " + COLORS.PRIMARY,
                        width: 200,
                      }}
                    >
                      Reach Out
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection3;
