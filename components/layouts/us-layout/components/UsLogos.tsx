"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { kessel_bold } from "@/utils/fonts";

interface LogoItem {
  id: string;
  name: string;
  src: string;
  height: number;
}

const partners: LogoItem[] = [
  {
    id: "mytreks",
    name: "MyTreks",
    src: "/testimonials/mytreks.png",
    height: 48,
  },
  {
    id: "hscore",
    name: "hScore",
    src: "/testimonials/hscore.svg",
    height: 42,
  },
  {
    id: "hautebaby",
    name: "Haute Baby",
    src: "/testimonials/haute-baby-logo.png",
    height: 46,
  },
  {
    id: "discoverstem",
    name: "DiscoverSTEM",
    src: "/testimonials/discoverstem.png",
    height: 46,
  },
  {
    id: "slater-matsil",
    name: "Slater Matsil",
    src: "/testimonials/slater-matsil.png",
    height: 38,
  },
  {
    id: "stacy-montessori",
    name: "Stacy Montessori",
    src: "/testimonials/stacy-montessori.webp",
    height: 98,
  },
  {
    id: "tyi",
    name: "TYI",
    src: "/testimonials/TYI-Logo.png",
    height: 48,
  },
];

// Duplicate partners for seamless, continuous infinite marquee
const marqueePartners = [...partners, ...partners, ...partners, ...partners];

const UsLogos = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FAF7F2",
        pt: { xs: 5, md: 7 },
        pb: { xs: 6, md: 8 },
        borderTop: "1px solid #DEDAD0",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Label with yellow dots */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          mb: { xs: 3.5, md: 4.5 },
          px: 2,
        }}
      >
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#FFEF46",
            border: "1px solid #111111",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <Typography
          component="span"
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: "11px",
            fontWeight: 800,
            color: "#66625C",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          TRUSTED BY AMBITIOUS TECH & US BUSINESSES
        </Typography>
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#FFEF46",
            border: "1px solid #111111",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
      </Box>

      {/* Marquee Infinite Slider Container */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          py: 1,
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          "&:hover .marquee-track": {
            animationPlayState: "paused",
          },
        }}
      >
        <Box
          className="marquee-track"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "44px", md: "64px" },
            width: "max-content",
            animation: "logoMarqueeScroll 32s linear infinite",
            "@keyframes logoMarqueeScroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {marqueePartners.map((partner, index) => (
            <Box
              key={`${partner.id}-${index}`}
              title={partner.name}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 1.5, md: 2.25 },
                py: 1.2,
                borderRadius: "12px",
                background: "transparent",
                border: "none",
                opacity: 0.95,
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                flexShrink: 0,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-2px) scale(1.06)",
                  filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))",
                  background: "rgba(0, 0, 0, 0.025)",
                },
              }}
            >
              <Box
                component="img"
                src={partner.src}
                alt={partner.name}
                sx={{
                  height: {
                    xs: Math.round(partner.height * 0.9),
                    sm: partner.height,
                    md: partner.height,
                  },
                  width: "auto",
                  maxWidth: { xs: 240, sm: 260, md: 300 },
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UsLogos;
