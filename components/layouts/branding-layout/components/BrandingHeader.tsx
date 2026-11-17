"use client";
import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import digixitoInitial from "@/logo/digixito_initial.png";
import { Call } from "@mui/icons-material";

const BrandingHeader = () => {
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
        position: { xs: "relative", lg: "absolute" },
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Initial Monogram Box */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                width: { xs: 44, md: 52 },
                height: { xs: 44, md: 52 },
                border: "1.8px solid #111111",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                p: "6px",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                  borderColor: "#000000",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Image
                src={digixitoInitial}
                alt="Digixito"
                width={36}
                height={36}
                style={{
                  objectFit: "contain",
                  filter: "invert(1)",
                }}
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
                boxShadow: "0 6px 20px rgba(0,0,0,0.28)",
              },
            }}
          >
            <Call sx={{ fontSize: { xs: 19, md: 22 } }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandingHeader;
