"use client";
import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

const challenges = [
  {
    title: "Repetitive Manual Workflows",
    description:
      "Time-consuming tasks reduce operational efficiency and productivity.",
  },
  {
    title: "Disconnected Business Systems",
    description:
      "Fragmented data makes it difficult to access information and coordinate operations.",
  },
  {
    title: "Slow Decision-Making",
    description:
      "Limited access to actionable insights makes business decisions more difficult.",
  },
  {
    title: "Increasing Operational Complexity",
    description:
      "Growing workloads require systems that can adapt and scale.",
  },
];

const UsSilos = () => {
  return (
    <Box
      component="section"
      id="challenges"
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
          spacing={{ xs: 5, lg: 8 }}
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
                  THE CHALLENGE
                </Typography>
              </Stack>

              {/* Headline */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, sm: 38, md: 44, lg: 48 },
                  fontWeight: 900,
                  lineHeight: { xs: 1.18, md: 1.15 },
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  fontFamily: kessel_bold.style.fontFamily,
                }}
              >
                Your Business
                <br />
                Has the Data.
                <br />
                But Is It Using
                <br />
                Intelligence to Its
                <br />
                Full Potential?
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT: Subtitle + 4 Challenge Cards */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ maxWidth: 660, ml: { lg: "auto" } }}>
              {/* Lead sentence */}
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 17 },
                  fontWeight: 600,
                  lineHeight: 1.6,
                  color: "#D4D4D4",
                  fontFamily: kessel.style.fontFamily,
                  mb: 3.5,
                }}
              >
                As businesses grow, manual workflows, disconnected systems and
                inefficient processes can limit their ability to scale.
              </Typography>

              {/* 4 Challenge Cards Grid */}
              <Grid
                container
                spacing={2}
                sx={{
                  rowGap: { xs: "18px", md: 2 },
                  columnGap: { xs: "18px", md: 2 },
                }}
              >
                {challenges.map((item, i) => (
                  <Grid
                    size={{ xs: 12, sm: 6 }}
                    key={i}
                    sx={{
                      display: "flex",
                      mb: { xs: "18px", md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#0F0F0F",
                        borderRadius: "18px",
                        p: { xs: 2.5, md: 2.8 },
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                        transition: "all 0.25s ease",
                        border: "1px solid transparent",
                        boxSizing: "border-box",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          borderColor: "#FFEF46",
                          boxShadow: "0 8px 24px rgba(255, 239, 70, 0.15)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 15, md: 16 },
                          fontWeight: 800,
                          color: "#0F0F0F",
                          fontFamily: kessel_bold.style.fontFamily,
                          mb: 0.8,
                          lineHeight: 1.3,
                        }}
                      >
                        {renderKesselText(item.title)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 12.5,
                          lineHeight: 1.55,
                          color: "#555555",
                          fontFamily: kessel.style.fontFamily,
                        }}
                      >
                        {item.description}
                      </Typography>
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
