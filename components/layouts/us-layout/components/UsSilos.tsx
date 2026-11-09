"use client";
import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { kessel_bold, kessel } from "@/utils/fonts";

const UsSilos = () => {
  const pills = [
    "Custom AI & Machine Learning",
    "Enterprise Web & Mobile",
    "Cloud Architecture & DevOps",
    "Performance-Driven Marketing",
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#0F0F0F",
        color: "#FFFFFF",
        py: { xs: 8, md: 11 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 6, lg: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT: Eyebrow + Huge Heading */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ maxWidth: 520 }}>
              {/* Eyebrow */}
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 3,
                    backgroundColor: "#FFEF46",
                    borderRadius: "2px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#A3A3A3",
                    fontFamily: kessel_bold.style.fontFamily,
                  }}
                >
                  THE PROBLEM WITH MODERN SCALE
                </Typography>
              </Stack>

              {/* Headline */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 32, sm: 42, md: 50 },
                  fontWeight: 900,
                  lineHeight: { xs: 1.18, md: 1.15 },
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  fontFamily: kessel_bold.style.fontFamily,
                }}
              >
                When technology
                <br />
                and strategy
                <br />
                operate in silos,
                <br />
                growth stalls.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT: Subtitle + Paragraph + 4 Pills */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ maxWidth: 650, ml: { lg: "auto" } }}>
              {/* Lead sentence */}
              <Typography
                sx={{
                  fontSize: { xs: 17, md: 20 },
                  fontWeight: 700,
                  lineHeight: 1.5,
                  color: "#F5F5F5",
                  fontFamily: kessel_bold.style.fontFamily,
                  mb: 2,
                }}
              >
                Disconnected systems, fragmented data, and slow execution drain
                resources and leave your engineering teams behind.
              </Typography>

              {/* Explanatory text */}
              <Typography
                sx={{
                  fontSize: { xs: 14.5, md: 15.5 },
                  lineHeight: 1.65,
                  color: "#9E9E9E",
                  fontFamily: kessel.style.fontFamily,
                  mb: 4,
                }}
              >
                Traditional agencies build and disappear. Fragmented vendors point
                fingers. Meanwhile, your competitors move faster with integrated,
                AI-first systems designed for rapid iteration.
              </Typography>

              {/* 4 Pills Grid */}
              <Grid container spacing={2}>
                {pills.map((pill, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#0F0F0F",
                        borderRadius: "40px",
                        py: 1.6,
                        px: 2.5,
                        textAlign: "center",
                        fontSize: { xs: 13, md: 14 },
                        fontWeight: 700,
                        fontFamily:
                          'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          backgroundColor: "#FFEF46",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {pill}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UsSilos;

