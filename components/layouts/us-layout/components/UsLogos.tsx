"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logoTutic from "@/us/logo-tutic.png";
import logoHscore from "@/us/logo-hscore.png";
import logoHauteBaby from "@/us/logo-haute-baby.png";
import logoTimeslot from "@/us/logo-timeslot.png";
import logoSlater from "@/us/logo-slater.png";
import { kessel_bold } from "@/utils/fonts";

const logos = [
  { name: "tutic", src: logoTutic, height: 26 },
  { name: "hScore", src: logoHscore, height: 28 },
  { name: "Haute Baby", src: logoHauteBaby, height: 32 },
  { name: "time-SLOT", src: logoTimeslot, height: 26 },
  { name: "slater", src: logoSlater, height: 26 },
];

const UsLogos = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FAF7F2",
        py: { xs: 6, md: 8 },
        borderTop: "1px solid rgba(0,0,0,0.04)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Uppercase Header */}
      <Typography
        sx={{
          fontSize: { xs: 11, md: 12 },
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#8E8A82",
          textAlign: "center",
          fontFamily: kessel_bold.style.fontFamily,
          mb: { xs: 4, md: 5 },
          px: 2,
        }}
      >
        TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
      </Typography>

      {/* Marquee Infinite Slider Container */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          maskImage: {
            xs: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            md: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          },
          WebkitMaskImage: {
            xs: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            md: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          },
          "&:hover .marquee-track": {
            animationPlayState: "paused",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
          }}
        >
          {/* Track 1 */}
          <Box
            className="marquee-track"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 6, sm: 8, md: 10, lg: 12 },
              pr: { xs: 6, sm: 8, md: 10, lg: 12 },
              flexShrink: 0,
              animation: "marqueeScroll 28s linear infinite",
              "@keyframes marqueeScroll": {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-100%)" },
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box
                key={`track1-${index}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  height={logo.height}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "36px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Track 2 (Identical for seamless infinite loop) */}
          <Box
            className="marquee-track"
            aria-hidden="true"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 6, sm: 8, md: 10, lg: 12 },
              pr: { xs: 6, sm: 8, md: 10, lg: 12 },
              flexShrink: 0,
              animation: "marqueeScroll 28s linear infinite",
              "@keyframes marqueeScroll": {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-100%)" },
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box
                key={`track2-${index}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  height={logo.height}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "36px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UsLogos;
