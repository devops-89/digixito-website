"use client";
import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { East } from "@mui/icons-material";
import Image from "next/image";
import starIcon from "@/icons/gold-star.svg";
import UsRadarSvg from "./UsRadarSvg";
import { kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

interface StepItem {
  number: string;
  title: React.ReactNode;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Strategic Technical Discovery",
    description:
      "We audit your existing tech stack, identify architectural bottlenecks, and map out a clear technical roadmap engineered for immediate business value.",
  },
  {
    number: "02",
    title: (
      <>
        Agile Architecture{" "}
        <span
          style={{
            fontFamily:
              'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: "inherit",
            display: "inline",
          }}
        >
          &amp;
        </span>{" "}
        Development
      </>
    ),
    description:
      "Bi-weekly sprints with full code visibility. Dedicated senior engineering pods shipping production-grade features on predictable timelines.",
  },
  {
    number: "03",
    title: (
      <>
        Continuous Optimization{" "}
        <span
          style={{
            fontFamily:
              'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: "inherit",
            display: "inline",
          }}
        >
          &amp;
        </span>{" "}
        Scale
      </>
    ),
    description:
      "Deployment is just day one. We continuously measure real-world performance, iterate on telemetry data, and scale infrastructure as your volume surges.",
  },
];

const UsProcess = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FAF7F2",
        py: { xs: 8, md: 12 },
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
          {/* LEFT: Radar Graphic */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, md: 4 },
              }}
            >
              <UsRadarSvg />
            </Box>
          </Grid>

          {/* RIGHT: Steps & Banner */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ maxWidth: 640, ml: { lg: "auto" } }}>
              {/* Eyebrow Pill */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#111111",
                  color: "#FFFFFF",
                  borderRadius: "30px",
                  px: 2,
                  py: 0.6,
                  mb: 2.5,
                }}
              >
                <Image src={starIcon} alt="Star" width={14} height={14} />
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: kessel_bold.style.fontFamily,
                  }}
                >
                  HOW WE WORK
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, sm: 38, md: 44 },
                  fontWeight: 900,
                  lineHeight: 1.18,
                  letterSpacing: "-0.03em",
                  color: "#0F0F0F",
                  fontFamily: kessel_bold.style.fontFamily,
                  mb: 1.5,
                }}
              >
                A disciplined process built around your goals.
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: 14.5, md: 16 },
                  lineHeight: 1.6,
                  color: "#5A5A5A",
                  fontFamily: kessel.style.fontFamily,
                  mb: 4,
                }}
              >
                We don&apos;t believe in one-size-fits-all. Every engagement follows a
                battle-tested framework engineered for speed and accountability.
              </Typography>

              {/* 3 Step Cards */}
              <Stack spacing={2} sx={{ mb: 3.5 }}>
                {steps.map((step, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "18px",
                      border: "1px solid #ECEAE4",
                      p: { xs: 2.5, md: 3 },
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2.5,
                      boxShadow: "0 4px 18px rgba(0,0,0,0.02)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateX(4px)",
                        borderColor: "#111111",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                      },
                    }}
                  >
                    {/* Badge */}
                    <Box
                      sx={{
                        width: { xs: 36, md: 42 },
                        height: { xs: 36, md: 42 },
                        minWidth: { xs: 36, md: 42 },
                        borderRadius: "12px",
                        backgroundColor: "#111111",
                        color: "#FFEF46",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: { xs: 13, md: 15 },
                        fontFamily:
                          'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {step.number}
                    </Box>

                    {/* Content */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 16, md: 17 },
                          fontWeight: 800,
                          color: "#0F0F0F",
                          fontFamily: kessel_bold.style.fontFamily,
                          mb: 0.6,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 13.5,
                          lineHeight: 1.6,
                          color: "#5A5A5A",
                          fontFamily: kessel.style.fontFamily,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              {/* Bottom CTA Banner Card */}
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  border: "1px solid #ECEAE4",
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.03)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 14.5, md: 15.5 },
                      fontWeight: 800,
                      color: "#0F0F0F",
                      fontFamily: kessel_bold.style.fontFamily,
                    }}
                  >
                    Need a custom solution for your enterprise?
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12.5,
                      color: "#666666",
                      fontFamily: kessel.style.fontFamily,
                      mt: 0.3,
                    }}
                  >
                    Our architects prepare tailored technical scopes and architecture blueprints.
                  </Typography>
                </Box>

                <Button
                  onClick={scrollToContact}
                  variant="contained"
                  endIcon={<East />}
                  sx={{
                    backgroundColor: "#FFEF46",
                    color: "#0F0F0F",
                    fontSize: 13,
                    fontWeight: 800,
                    fontFamily: kessel_bold.style.fontFamily,
                    textTransform: "none",
                    borderRadius: "30px",
                    px: 2.5,
                    py: 1.2,
                    boxShadow: "0 4px 14px rgba(255, 239, 70, 0.4)",
                    "&:hover": {
                      backgroundColor: "#F5E535",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  Talk to an Architect
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UsProcess;

