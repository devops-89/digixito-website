"use client";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import Ourvalues from "./our-values";
import OurMission from "./our-mission";
import ServiceSection from "../home-layout/service-section";

import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { kessel, monument } from "@/utils/fonts";
import ecomguru from "@/logo/eComGuru.svg";
import employ from "@/logo/employ_virtual.svg";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { useMediaQuery } from "@mui/material";
import { motion } from "motion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const AboutLayout = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ my: 10 }}>
      <AboutHeroSection />
      <Ourvalues />
      <OurMission />
      <ServiceSection />
      {/* <OurTeams /> */}
      <Box
        sx={{
          my: 12,
          py: 10,
          background: "linear-gradient(to bottom, #ffffff 0%, #fcfcfc 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              sx={{
                fontSize: { lg: 48, xs: 32 },
                fontFamily: monument.style.fontFamily,
                fontWeight: "bold",
                color: COLORS.BLACK,
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              Our Group Companies
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                maxWidth: 650,
                mx: "auto",
                color: "rgba(0,0,0,0.55)",
                fontFamily: kessel.style.fontFamily,
                lineHeight: 1.6,
              }}
            >
              An integrated powerhouse of companies dedicated to building
              premium digital experiences and sustainable growth.
            </Typography>
          </Box>

          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={4}
            justifyContent="center"
          >
            {[
              {
                src: ecomguru,
                alt: "eComGuru",
                title: "eComGuru",
                tag: "E-Commerce",
                desc: "Specializing in high-performance digital retail infrastructure and conversion optimization.",
              },
              {
                src: employ,
                alt: "Employ Virtual",
                title: "Employ Virtual",
                tag: "Remote Staffing",
                desc: "Connecting global talent with enterprise needs through managed virtual ecosystems.",
              },
            ].map((company, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  maxWidth: { md: 500, xs: "100%" },
                  p: 5,
                  borderRadius: 6,
                  backgroundColor: COLORS.WHITE,
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  "&:hover": {
                    borderColor: COLORS.PRIMARY,
                    transform: "translateY(-4px)",
                    boxShadow: "0 24px 48px rgba(0,0,0,0.06)",
                    "& .company-desc": {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                    "& .logo-container": {
                      filter: "grayscale(0%)",
                      opacity: 1,
                    },
                    "& .learn-more-text": {
                      color: COLORS.BLACK,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.3)",
                    fontFamily: kessel.style.fontFamily,
                    mb: 3,
                  }}
                >
                  {company.tag}
                </Typography>

                <Box
                  className="logo-container"
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    mb: 3,
                    filter: "grayscale(100%)",
                    opacity: 0.6,
                    transition: "all 0.5s ease",
                  }}
                >
                  <Image
                    src={company.src}
                    alt={company.alt}
                    style={{
                      width: "220px",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Typography
                  className="company-desc"
                  sx={{
                    fontSize: 16,
                    color: "rgba(0,0,0,0.6)",
                    fontFamily: kessel.style.fontFamily,
                    lineHeight: 1.5,
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.4s ease",
                    mb: 3,
                  }}
                >
                  {company.desc}
                </Typography>

                {/* <Box
                  sx={{
                    mt: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    opacity: 0.8,
                  }}
                >
                  <Typography
                    className="learn-more-text"
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      fontFamily: kessel.style.fontFamily,
                      color: "rgba(0,0,0,0.4)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    LEARN MORE
                  </Typography>
                  <ArrowForwardIcon
                    sx={{ fontSize: 16, color: COLORS.PRIMARY }}
                  />
                </Box> */}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
      {/* <Testimonials /> */}
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default AboutLayout;
