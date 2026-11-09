"use client";
import React, { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { East } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import starIcon from "@/icons/gold-star.svg";
import { kessel_bold, kessel } from "@/utils/fonts";

interface CaseStudy {
  id: string;
  tag: string;
  tagColor: string;
  borderColor: string;
  subtitle: string;
  description: string;
  architecture: string;
  statNumber: string;
  statLabel: string;
  category: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "fintech",
    tag: "FINTECH",
    tagColor: "#FF6B4A",
    borderColor: "#FF6B4A",
    subtitle: "Enterprise Risk & Trade Intelligence Platform",
    description:
      "Designed and built an enterprise-grade algorithmic risk analysis and trade intelligence platform. Replaced legacy monolithic systems with microservices, cutting trade latency and processing millions of daily transactions with zero downtime.",
    architecture:
      "Architecture Details: Python, PyTorch, AWS Lambda, EventBridge, PostgreSQL, React, Next.js, WebSockets.",
    statNumber: "94.6% Accuracy Rate",
    statLabel: "Predictive risk detection",
    category: "AI & AUTOMATION",
  },
  {
    id: "haute-baby",
    tag: "HAUTE BABY",
    tagColor: "#C084FC",
    borderColor: "#C084FC",
    subtitle: "Omni-Channel Retail & Commerce Infrastructure",
    description:
      "Architected a high-converting omni-channel e-commerce experience. Re-engineered backend inventory sync, payment gateways, and modern checkout pipelines to maximize conversion rates and scale global operations seamlessly.",
    architecture:
      "Architecture Details: Next.js, Headless Shopify, Node.js, GraphQL, AWS CloudFront, TailwindCSS, Redis Caching.",
    statNumber: "185% Sales Growth",
    statLabel: "4.8x Return on ad spend",
    category: "RETAIL & E-COMMERCE",
  },
];

const categories = [
  "AI & AUTOMATION",
  "FINTECH & PLATFORMS",
  "RETAIL & E-COMMERCE",
  "SAAS ARCHITECTURE",
];

const UsCaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("AI & AUTOMATION");

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
        {/* Section Header */}
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            {/* Left Header */}
            <Grid size={{ xs: 12, md: 7 }}>
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
                  PROVEN TRACK RECORD
                </Typography>
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 30, sm: 38, md: 46 },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0F0F0F",
                  fontFamily: kessel_bold.style.fontFamily,
                  mb: 1.5,
                }}
              >
                Real partners. Real
                <br />
                platforms. Measurable
                <br />
                impact.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 14.5, md: 16 },
                  lineHeight: 1.6,
                  color: "#5A5A5A",
                  fontFamily: kessel.style.fontFamily,
                  maxWidth: 480,
                }}
              >
                A close look at some of the systems we&apos;ve engineered and the
                tangible outcomes they delivered.
              </Typography>
            </Grid>

            {/* Right Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #ECEAE4",
                  p: { xs: 3, md: 3.5 },
                  boxShadow: "0 6px 24px rgba(0,0,0,0.03)",
                  maxWidth: 440,
                  ml: { md: "auto" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#888888",
                    fontFamily: kessel_bold.style.fontFamily,
                    mb: 0.8,
                  }}
                >
                  EXPLORE OUR WORK
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: 800,
                    color: "#0F0F0F",
                    fontFamily: kessel_bold.style.fontFamily,
                    mb: 1,
                  }}
                >
                  Enterprise-grade solutions built for scale.
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    lineHeight: 1.55,
                    color: "#666666",
                    fontFamily: kessel.style.fontFamily,
                    mb: 2.5,
                  }}
                >
                  Discover how we help ambitious brands transform ideas into
                  production-ready platforms.
                </Typography>

                <Link href="/projects" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<East />}
                    sx={{
                      backgroundColor: "#FFEF46",
                      color: "#0F0F0F",
                      fontSize: 12.5,
                      fontWeight: 800,
                      fontFamily: kessel_bold.style.fontFamily,
                      textTransform: "none",
                      borderRadius: "30px",
                      px: 2.5,
                      py: 1,
                      boxShadow: "0 4px 14px rgba(255, 239, 70, 0.4)",
                      "&:hover": {
                        backgroundColor: "#F5E535",
                      },
                    }}
                  >
                    VIEW ALL CASE STUDIES
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Filter Pills */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            mb: 4,
            overflowX: "auto",
            pb: 1,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <Box
                key={i}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  backgroundColor: isActive ? "#15161A" : "#FFFFFF",
                  color: isActive ? "#FFEF46" : "#555555",
                  border: isActive
                    ? "1px solid #FFEF46"
                    : "1px solid #E0DED9",
                  borderRadius: "30px",
                  px: 2.5,
                  py: 1,
                  fontSize: 12,
                  fontWeight: 800,
                  fontFamily: kessel_bold.style.fontFamily,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#15161A",
                    color: isActive ? "#FFEF46" : "#111111",
                  },
                }}
              >
                {cat}
              </Box>
            );
          })}
        </Stack>

        {/* 2 Dark Case Study Cards */}
        <Grid container spacing={3.5}>
          {caseStudiesData.map((item, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={index}>
              <Box
                onClick={scrollToContact}
                sx={{
                  backgroundColor: "#15161A",
                  borderRadius: "22px",
                  p: { xs: 3, md: 4 },
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
                    borderColor: "rgba(255,239,70,0.3)",
                    "& .case-arrow-btn": {
                      transform: "scale(1.1)",
                      backgroundColor: "#F5E535",
                    },
                  },
                }}
              >
                {/* Top Info */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 900,
                      color: item.tagColor,
                      fontFamily: kessel_bold.style.fontFamily,
                      letterSpacing: "0.08em",
                      mb: 0.5,
                    }}
                  >
                    {item.tag}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 700,
                      color: "#A2A6B0",
                      fontFamily: kessel_bold.style.fontFamily,
                      mb: 2,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "#C8CBD2",
                      fontFamily: kessel.style.fontFamily,
                      mb: 3,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Architecture Box */}
                  <Box
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      borderLeft: `3px solid ${item.borderColor}`,
                      borderRadius: "0 10px 10px 0",
                      p: 2,
                      mb: 3.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 12,
                        lineHeight: 1.55,
                        color: "#9CA1AD",
                        fontFamily: kessel.style.fontFamily,
                      }}
                    >
                      {item.architecture}
                    </Typography>
                  </Box>
                </Box>

                {/* Footer Stat Row */}
                <Box
                  sx={{
                    pt: 2.5,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 18, md: 22 },
                        fontWeight: 900,
                        color: "#FFEF46",
                        fontFamily:
                          'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.statNumber}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "#7E8391",
                        fontFamily: kessel.style.fontFamily,
                        mt: 0.3,
                      }}
                    >
                      {item.statLabel}
                    </Typography>
                  </Box>

                  <Box
                    className="case-arrow-btn"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#FFEF46",
                      color: "#111111",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <East sx={{ fontSize: 18 }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Carousel Indicator Dots */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Box
            sx={{
              width: 24,
              height: 4,
              backgroundColor: "#FFEF46",
              borderRadius: "2px",
            }}
          />
          <Box
            sx={{
              width: 6,
              height: 4,
              backgroundColor: "#D6D3CC",
              borderRadius: "2px",
            }}
          />
          <Box
            sx={{
              width: 6,
              height: 4,
              backgroundColor: "#D6D3CC",
              borderRadius: "2px",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default UsCaseStudies;

