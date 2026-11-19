"use client";
import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import digixitoLogo from "@/logo/final_black.svg";
import { Phone, Call } from "@mui/icons-material";

const UsHeader = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
            onClick={scrollToContact}
            aria-label="Call or Schedule Consultation"
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
                boxShadow: "0 8px 22px rgba(0,0,0,0.28)",
              },
            }}
          >
            <Call sx={{ fontSize: { xs: 20, md: 22 } }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default UsHeader;

