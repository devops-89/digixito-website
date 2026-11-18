"use client";
import React from "react";
import { Box, Container, Grid, Stack, Typography, IconButton } from "@mui/material";
import { NorthEast, East } from "@mui/icons-material";
import Image from "next/image";
import starIcon from "@/icons/gold-star.svg";
import { kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

interface SolutionItem {
  number: string;
  title: string;
  description: string;
  focus?: string;
  link?: string;
}

const solutions: SolutionItem[] = [
  {
    number: "01",
    title: "AI Automation",
    description:
      "Automate repetitive tasks and business workflows to reduce manual effort and improve operational efficiency.",
    link: "/ai-transformation",
  },
  {
    number: "02",
    title: "AI Chatbots & Conversational AI",
    description:
      "Develop intelligent conversational experiences to support customer interactions, information retrieval and business communication.",
    link: "/ai-transformation",
  },
  {
    number: "03",
    title: "Custom AI & Machine Learning",
    description:
      "Build AI-powered applications and machine learning solutions tailored to specific business challenges.",
    link: "/ai-transformation",
  },
  {
    number: "04",
    title: "Data Intelligence & Integration",
    description:
      "Connect business data and technology systems to support better information access, analysis and decision-making.",
    link: "/ai-transformation",
  },
];

const UsSolutions = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="solutions"
      component="section"
      sx={{
        backgroundColor: "#FAF7F2",
        py: { xs: 8, md: 12 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
              {renderKesselText("THE DIGIXITO SOLUTION")}
            </Typography>
          </Box>

          <Grid container spacing={3} alignItems="flex-end" justifyContent="space-between">
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, sm: 38, md: 46 },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0F0F0F",
                  fontFamily: kessel_bold.style.fontFamily,
                }}
              >
                Transform Business Processes
                <br />
                with Intelligent AI Solutions.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: 14.5, md: 16 },
                  lineHeight: 1.65,
                  color: "#5A5A5A",
                  fontFamily: kessel.style.fontFamily,
                  maxWidth: 460,
                  ml: { md: "auto" },
                }}
              >
                We combine technology, strategy and engineering to develop AI
                capabilities around your business requirements.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* 4 Cards Grid */}
        <Grid
          container
          spacing={3}
          sx={{
            rowGap: { xs: "18px", md: 3 },
            columnGap: { xs: "18px", md: 3 },
          }}
        >
          {solutions.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              key={index}
              sx={{
                display: "flex",
                mb: { xs: "18px", lg: 0 },
              }}
            >
              <Box
                onClick={scrollToContact}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "22px",
                  p: { xs: 3, md: 3.5 },
                  height: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid #ECEAE4",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
                    borderColor: "#111111",
                    "& .solution-arrow": {
                      backgroundColor: "#FFEF46",
                      color: "#111111",
                      transform: "scale(1.1)",
                    },
                    "& .solution-cta-btn": {
                      backgroundColor: "#FFEF46",
                    },
                  },
                }}
              >
                {/* Top Row: Number & Icon */}
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: "#888888",
                        fontFamily:
                          'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {item.number}
                    </Typography>

                    <Box
                      className="solution-arrow"
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        border: "1px solid #E5E3DC",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#111111",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <NorthEast sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: { xs: 20, md: 22 },
                      fontWeight: 800,
                      color: "#0F0F0F",
                      fontFamily: kessel_bold.style.fontFamily,
                      mb: 1.5,
                      lineHeight: 1.25,
                    }}
                  >
                    {renderKesselText(item.title)}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: "#5A5A5A",
                      fontFamily: kessel.style.fontFamily,
                      mb: item.focus ? 2.5 : 3.5,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Focus pill (if present) */}
                  {item.focus && (
                    <Box
                      sx={{
                        backgroundColor: "#FAF8F3",
                        border: "1px solid #EFECE6",
                        borderRadius: "10px",
                        p: 1.5,
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          color: "#888888",
                          fontFamily:
                            'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          mb: 0.4,
                        }}
                      >
                        Key Focus:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: "#1A1A1A",
                          fontFamily:
                            'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {item.focus}
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Bottom Row */}
                <Box
                  sx={{
                    pt: 2,
                    borderTop: "1px solid #F0EEE8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#0F0F0F",
                      fontFamily: kessel_bold.style.fontFamily,
                    }}
                  >
                    Explore solutions
                  </Typography>

                  <Box
                    className="solution-cta-btn"
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      backgroundColor: "#111111",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <East sx={{ fontSize: 14 }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UsSolutions;

