"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  East,
  Star,
  Campaign,
  Bolt,
} from "@mui/icons-material";
import Image from "next/image";
import heroMan from "@/us/hero-man.jpg";
import avatar1 from "@/homepage/avatar1.jpg";
import avatar2 from "@/homepage/avatar2.jpg";
import avatar3 from "@/homepage/avatar3.jpg";
import starIcon from "@/icons/gold-star.svg";
import { monument, kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

const BrandingHero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSolutions = () => {
    const el = document.getElementById("solutions");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 2, lg: 9 },
        pb: { xs: 8, lg: 4 },
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 5, lg: 3 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT COLUMN: Headings & CTAs */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ maxWidth: 540 }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "30px",
                  px: 2,
                  py: 0.8,
                  mb: 3,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    boxShadow: "0 0 10px #10B981",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: 11, md: 12 },
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#1A1A1A",
                    fontFamily: kessel_bold.style.fontFamily,
                  }}
                >
                  {renderKesselText("ENTERPRISE TECH & GROWTH PARTNER")}
                </Typography>
              </Box>

              {/* Main Headline */}
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 34, sm: 44, md: 52, lg: 58 },
                  fontWeight: 900,
                  lineHeight: { xs: 1.15, md: 1.12 },
                  letterSpacing: "-0.03em",
                  color: "#0F0F0F",
                  fontFamily: kessel_bold.style.fontFamily,
                }}
              >
                Build a Brand
                <br />
                That{" "}
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "#FFEF46",
                    color: "#0F0F0F",
                    px: { xs: 1, md: 1.5 },
                    py: 0.2,
                    borderRadius: "6px",
                    display: "inline-block",
                    mt: 0.5,
                  }}
                >
                  {renderKesselText("Stands Out")}
                </Box>
                <br />
                and Connects with
                <br />
                Your Audience.
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16.5 },
                  lineHeight: 1.65,
                  color: "#4A4A4A",
                  fontFamily: kessel.style.fontFamily,
                  mt: 3,
                  mb: 4,
                  maxWidth: 490,
                }}
              >
                Create a stronger brand presence through strategic positioning,
                distinctive visual identity and consistent digital experiences.
                We help businesses translate their vision into meaningful brand
                experiences.
              </Typography>

              {/* Action Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ alignItems: { xs: "stretch", sm: "center" } }}
              >
                <Button
                  onClick={scrollToContact}
                  variant="contained"
                  endIcon={<East />}
                  sx={{
                    backgroundColor: "#FFEF46",
                    color: "#0F0F0F",
                    fontSize: 14,
                    fontWeight: 800,
                    fontFamily: kessel_bold.style.fontFamily,
                    textTransform: "none",
                    borderRadius: "30px",
                    px: 3.5,
                    py: 1.6,
                    boxShadow: "0 4px 14px rgba(255, 239, 70, 0.45)",
                    "&:hover": {
                      backgroundColor: "#F5E535",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(255, 239, 70, 0.6)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  {renderKesselText("Talk With Our Team")}
                </Button>

                <Button
                  onClick={scrollToSolutions}
                  variant="outlined"
                  endIcon={<East />}
                  sx={{
                    borderColor: "rgba(0,0,0,0.15)",
                    color: "#111111",
                    fontSize: 14,
                    fontWeight: 800,
                    fontFamily: kessel_bold.style.fontFamily,
                    textTransform: "none",
                    borderRadius: "30px",
                    px: 3,
                    py: 1.6,
                    backgroundColor: "#FFFFFF",
                    "&:hover": {
                      borderColor: "#000000",
                      backgroundColor: "#FFFFFF",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  {renderKesselText("Explore Our Solutions")}
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* CENTER COLUMN: Jumping Man & Micro-badges */}
          <Grid
            size={{ xs: 12, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              py: { xs: 4, lg: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 280, sm: 340, md: 380 },
                height: { xs: 340, sm: 400, md: 450 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Giant Faint Outline Text Watermark */}
              <Typography
                sx={{
                  position: "absolute",
                  top: "12%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: { xs: 70, md: 95 },
                  fontWeight: 900,
                  fontFamily: monument.style.fontFamily,
                  color: "rgba(0,0,0,0.035)",
                  letterSpacing: "4px",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  zIndex: 1,
                }}
              >
                FUTURE
              </Typography>

              {/* Jumping Man Image */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={heroMan}
                  alt="Dynamic Modern Scale"
                  fill
                  priority
                  style={{
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                  }}
                />
              </Box>

              {/* Floating Badge 1 (Top-Left: Orange Megaphone) */}
              <Box
                sx={{
                  position: "absolute",
                  top: "16%",
                  left: "6%",
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "#FF5E36",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 24px rgba(255, 94, 54, 0.35)",
                  zIndex: 4,
                  animation: "float1 3.5s ease-in-out infinite",
                  "@keyframes float1": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-8px)" },
                  },
                }}
              >
                <Campaign sx={{ color: "#FFFFFF", fontSize: 24 }} />
              </Box>

              {/* Floating Badge 2 (Top-Right: Black with Star) */}
              <Box
                sx={{
                  position: "absolute",
                  top: "8%",
                  right: "12%",
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
                  zIndex: 4,
                  animation: "float2 4s ease-in-out infinite",
                  "@keyframes float2": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(8px)" },
                  },
                }}
              >
                <Image src={starIcon} alt="Star" width={20} height={20} />
              </Box>

              {/* Floating Badge 3 (Bottom-Right: Green Bolt) */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  right: "4%",
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "#10B981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 24px rgba(16, 185, 129, 0.35)",
                  zIndex: 4,
                  animation: "float3 4.5s ease-in-out infinite",
                  "@keyframes float3": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-6px)" },
                  },
                }}
              >
                <Bolt sx={{ color: "#FFFFFF", fontSize: 24 }} />
              </Box>
            </Box>
          </Grid>

          {/* RIGHT COLUMN: Social Proof & Metrics Cards */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <Stack spacing={2.5} sx={{ maxWidth: 360, mx: { xs: "auto", lg: 0 } }}>
              {/* Card 1: CSAT & Leadership */}
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  p: { xs: 2.5, md: 3 },
                  boxShadow: "0 12px 35px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {/* Stars and Rating Pill */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mb: 1.5 }}
                >
                  <Stack direction="row" spacing={0.3}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} sx={{ color: "#FFB800", fontSize: 16 }} />
                    ))}
                  </Stack>
                  <Box
                    sx={{
                      backgroundColor: "#FFF8D6",
                      color: "#A47300",
                      fontSize: 11,
                      fontWeight: 800,
                      px: 1,
                      py: 0.3,
                      borderRadius: "6px",
                      fontFamily: kessel_bold.style.fontFamily,
                    }}
                  >
                    {renderKesselText("4.9/5 Rating")}
                  </Box>
                </Stack>

                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#111111",
                    fontFamily: kessel_bold.style.fontFamily,
                    mb: 0.5,
                  }}
                >
                  Enterprise Technical Leadership
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "#666666",
                    fontFamily: kessel.style.fontFamily,
                    mb: 2,
                  }}
                >
                  Trusted by fast-growing startups &amp; enterprise platforms.
                </Typography>

                {/* Avatars Stack */}
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={avatar1.src}
                      alt="Client"
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "2px solid #FFFFFF",
                        objectFit: "cover",
                        zIndex: 3,
                      }}
                    />
                    <Box
                      component="img"
                      src={avatar2.src}
                      alt="Client"
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "2px solid #FFFFFF",
                        objectFit: "cover",
                        marginLeft: "-8px",
                        zIndex: 2,
                      }}
                    />
                    <Box
                      component="img"
                      src={avatar3.src}
                      alt="Client"
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "2px solid #FFFFFF",
                        objectFit: "cover",
                        marginLeft: "-8px",
                        zIndex: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#111111",
                      fontFamily: kessel_bold.style.fontFamily,
                    }}
                  >
                    {renderKesselText("450+ Verified Reviews")}
                  </Typography>
                </Stack>
              </Box>

              {/* Card 2: 3.8x Faster */}
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  p: { xs: 2, md: 2.5 },
                  boxShadow: "0 12px 35px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 45px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    backgroundColor: "#111111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Image src={starIcon} alt="Star" width={22} height={22} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 17,
                      fontWeight: 900,
                      color: "#111111",
                      fontFamily: kessel_bold.style.fontFamily,
                      lineHeight: 1.2,
                    }}
                  >
                    {renderKesselText("3.8x Faster")}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#666666",
                      fontFamily: kessel.style.fontFamily,
                      mt: 0.3,
                    }}
                  >
                    Concept to Production Scale
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrandingHero;
