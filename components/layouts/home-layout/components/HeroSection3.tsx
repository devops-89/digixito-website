import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "@/banners/banner.webp";
import { kessel, kessel_bold, monument, roboto } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
const HeroSection3 = () => {
  const words = ["Innovate", "Inspire", "Create"];

  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundImage: `url(${banner.src})`,
            minHeight: { lg: "100vh", xs: "70vh" },
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              minHeight: { lg: "100vh", xs: "auto" },
              //   backgroundColor: "#00000099",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: { lg: 0, xs: 9 },
            }}
          >
            <Container>
              <Grid container>
                <Grid size={{ lg: 8, xs: 12 }}>
                  <Typography
                    sx={{
                      fontSize: { lg: 70, xs: 30 },
                      fontWeight: 800,
                      fontFamily: kessel_bold.style.fontFamily,
                      color: COLORS.WHITE,
                      letterSpacing: "0.5px",
                      lineHeight: { lg: "85px", xs: 1.3 },
                    }}
                  >
                    Engineering the{" "}
                    <Typography
                      component={"span"}
                      sx={{
                        fontFamily: kessel_bold.style.fontFamily,
                        color: COLORS.PRIMARY,
                        fontSize: { lg: 70, xs: 30 },
                        fontWeight: 800,
                        letterSpacing: "0.5px",
                        lineHeight: { lg: "85px", xs: 1.3 },
                      }}
                    >
                      Future
                    </Typography>{" "}
                    with AI
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { lg: 20, xs: 16 },
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
          <Box
            sx={{
              position: "absolute",
              bottom: { lg: 50, xs: 50 },
              width: "100%",
            }}
          >
            <Container>
              <Grid
                container
                sx={{ alignItems: "flex-end" }}
                spacing={{ lg: 10, xs: 2 }}
              >
                <Grid size={{ lg: 7, xs: 12 }}>
                  <Stack
                    direction={"row"}
                    sx={{
                      alignItems: "center",
                      justifyContent: {
                        lg: "space-between",
                        xs: "space-between",
                      },
                    }}
                    spacing={{ lg: 8, xs: 2 }}
                  >
                    {words.map((val, i) => (
                      <Typography
                        key={i}
                        sx={{
                          color: COLORS.WHITE,
                          fontSize: { lg: 30, xs: 20 },
                          fontFamily: kessel.style.fontFamily,
                          fontWeight: 600,
                        }}
                      >
                        {val}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
                <Grid size={{ lg: 5, xs: 12 }}>
                  <Typography
                    sx={{
                      fontSize: { lg: 30, xs: 20 },
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
                      LinkComponent={Link}
                      href="/projects"
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
                      LinkComponent={Link}
                      href="/contact-us"
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
