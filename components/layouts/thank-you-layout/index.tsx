"use client";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { East, Check, Call } from "@mui/icons-material";
import digixitoLogo from "@/logo/final_black.svg";
import { kessel, kessel_bold } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";
import { COLORS } from "@/utils/enum";
import Aos from "aos";

const ThankYouLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 900, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background Ambient Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "360px", md: "850px" },
          height: { xs: "360px", md: "600px" },
          background:
            "radial-gradient(circle, rgba(255, 239, 70, 0.22) 0%, rgba(250, 247, 242, 0) 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Header Bar - Exactly matching the landing pages */}
      <Box
        component="header"
        sx={{
          width: "100%",
          py: { xs: 2.5, md: 3 },
          position: "relative",
          zIndex: 50,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Digixito Brand Logo */}
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
              aria-label="Digixito Home"
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 46, sm: 54, md: 62 },
                  display: "flex",
                  alignItems: "center",
                  transition: "transform 0.25s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  src={digixitoLogo}
                  alt="Digixito"
                  width={70}
                  height={62}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  priority
                />
              </Box>
            </Link>

            {/* Phone / Call CTA Round Button */}
            <IconButton
              component="a"
              href="tel:+918800291352"
              aria-label="Call Digixito"
              sx={{
                width: { xs: 42, md: 48 },
                height: { xs: 42, md: 48 },
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50%",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                "&:hover": {
                  backgroundColor: "#000000",
                  transform: "scale(1.08)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.28)",
                },
              }}
            >
              <Call sx={{ fontSize: { xs: 19, md: 22 } }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Main Content Container */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          {/* Top Badge & Checkmark */}
          <Stack
            alignItems="center"
            textAlign="center"
            spacing={3}
            sx={{ mb: { xs: 5, md: 6 } }}
            data-aos="fade-down"
          >
            {/* Animated Glow Checkmark */}
            <Box
              sx={{
                width: { xs: 80, md: 96 },
                height: { xs: 80, md: 96 },
                borderRadius: "50%",
                backgroundColor: COLORS.PRIMARY,
                border: "2.5px solid #111111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 36px rgba(255, 239, 70, 0.45)",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: "2px dashed rgba(17, 17, 17, 0.25)",
                  animation: "spinSlow 14s linear infinite",
                },
                "@keyframes spinSlow": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            >
              <Check sx={{ fontSize: { xs: 46, md: 54 }, color: "#111111" }} />
            </Box>

            {/* Title - Using Kessel Bold (Landing Page Font) */}
            <Typography
              component="h1"
              sx={{
                fontFamily: kessel_bold.style.fontFamily,
                fontSize: { xs: 32, sm: 44, md: 54 },
                fontWeight: 900,
                color: "#0F0F0F",
                lineHeight: { xs: 1.18, md: 1.15 },
                letterSpacing: "-0.03em",
                maxWidth: "760px",
              }}
            >
              {renderKesselText("Thank You! We've Received Your Inquiry.")}
            </Typography>

            {/* Subtitle - Using Kessel */}
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontSize: { xs: 15, sm: 16.5, md: 18 },
                color: "#4A4A4A",
                lineHeight: 1.65,
                maxWidth: "640px",
              }}
            >
              Your project details have been successfully shared with our senior
              growth &amp; engineering team. We are reviewing your requirements
              and will get back to you within{" "}
              <Box
                component="span"
                sx={{
                  color: "#0F0F0F",
                  fontWeight: 600,
                  borderBottom: `2px solid ${COLORS.PRIMARY}`,
                  pb: "1px",
                }}
              >
                24 business hours
              </Box>
              .
            </Typography>
          </Stack>

          {/* Action CTA */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              endIcon={<East sx={{ fontSize: 18 }} />}
              sx={{
                minWidth: { xs: "100%", sm: "260px" },
                backgroundColor: COLORS.PRIMARY,
                color: "#0F0F0F",
                fontFamily: kessel_bold.style.fontFamily,
                fontSize: { xs: 14.5, md: 15.5 },
                fontWeight: 800,
                textTransform: "none",
                borderRadius: "50px",
                px: 5,
                py: 1.7,
                boxShadow: "0 6px 18px rgba(255, 239, 70, 0.35)",
                border: "1.5px solid #0F0F0F",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {renderKesselText("Return to Homepage")}
            </Button>
          </Stack>

          {/* Need Urgent Help banner */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              p: { xs: 2.5, md: 3 },
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              borderRadius: "16px",
              border: "1px dashed rgba(17, 17, 17, 0.15)",
              textAlign: "center",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Typography
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontSize: { xs: "13.5px", md: "14.5px" },
                color: "rgba(17, 17, 17, 0.75)",
                lineHeight: 1.6,
              }}
            >
              Need an immediate consultation or have additional documentation?
              <Box
                component="span"
                sx={{
                  display: "block",
                  mt: 0.6,
                }}
              >
                <Box
                  component="a"
                  href="mailto:info@digixito.com"
                  sx={{
                    color: "#0F0F0F",
                    fontWeight: 600,
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  info@digixito.com
                </Box>{" "}
                or call us at{" "}
                <Box
                  component="a"
                  href="tel:+918800291352"
                  sx={{
                    color: "#0F0F0F",
                    fontWeight: 600,
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                  }}
                >
                  +91 88002 91352
                </Box>
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ThankYouLayout;
