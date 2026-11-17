"use client";
import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { East } from "@mui/icons-material";
import Image from "next/image";
import starIcon from "@/icons/gold-star.svg";
import UsRadarSvg from "@/components/layouts/us-layout/components/UsRadarSvg";
import { kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Brand Discovery & Research",
    description:
      "Understand your business, audience, competition and current brand perception.",
  },
  {
    number: "02",
    title: "Strategy & Creative Development",
    description:
      "Define brand positioning and translate it into visual and communication concepts.",
  },
  {
    number: "03",
    title: "Implementation & Brand Evolution",
    description:
      "Apply the identity consistently across relevant touchpoints and support its evolution.",
  },
];

const BrandingProcess = () => {
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
                  {renderKesselText("HOW WE WORK")}
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, sm: 38, md: 44 },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0F0F0F",
                  fontFamily: kessel_bold.style.fontFamily,
                  mb: 4,
                }}
              >
                From Brand Vision to a
                <br />
                Distinctive Market Presence.
              </Typography>

              {/* 3 Step Cards */}
              <Stack spacing={2.5} sx={{ mb: 4.5 }}>
                {steps.map((step, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "18px",
                      p: { xs: 2.5, md: 3 },
                      border: "1px solid #ECEAE4",
                      boxShadow: "0 4px 18px rgba(0,0,0,0.02)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: { xs: 2, md: 2.5 },
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateX(4px)",
                        borderColor: "#111111",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                      },
                    }}
                  >
                    {/* Number Badge */}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        backgroundColor: "#FFEF46",
                        color: "#0F0F0F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 900,
                        fontFamily: kessel_bold.style.fontFamily,
                        flexShrink: 0,
                      }}
                    >
                      {step.number}
                    </Box>

                    {/* Text */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: 16, md: 17 },
                          fontWeight: 800,
                          color: "#0F0F0F",
                          fontFamily: kessel_bold.style.fontFamily,
                          mb: 0.6,
                        }}
                      >
                        {renderKesselText(step.title)}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: "#666666",
                          fontFamily: kessel.style.fontFamily,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              {/* Bottom White Action Card */}
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
                    {renderKesselText(
                      "Need a custom brand strategy for your business?"
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12.5,
                      color: "#666666",
                      fontFamily: kessel.style.fontFamily,
                      mt: 0.3,
                    }}
                  >
                    Our creative directors prepare tailored brand blueprints and visual identity roadmaps.
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
                  {renderKesselText("Talk to a Brand Strategist")}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrandingProcess;
