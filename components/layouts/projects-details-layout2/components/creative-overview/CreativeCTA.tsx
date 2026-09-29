"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { kessel_bold } from "@/utils/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const CreativeCTA = () => {
  return (
    <Box
      sx={{ py: { xs: 15, md: 25 }, textAlign: "center", bgcolor: "#FAFAFA" }}
    >
      <Container maxWidth="md">
        <Typography
          className="reveal-up"
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: { xs: "3rem", md: "5rem", lg: "6rem" },
            lineHeight: 1,
            textTransform: "uppercase",
            color: "#111",
            mb: 4,
            letterSpacing: "-2px",
          }}
        >
          Let's create something remarkable.
        </Typography>
        <Typography
          className="reveal-up"
          sx={{ fontSize: "1.2rem", color: "#666", mb: 8 }}
        >
          Have a project in mind? We'd love to hear about it.
        </Typography>
        <Box className="reveal-up">
          <Button
            href="/contact-us"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#111",
              color: "#fff",
              px: 6,
              py: 2.5,
              borderRadius: "50px",
              fontSize: "1.1rem",
              fontFamily: kessel_bold.style.fontFamily,
              textTransform: "uppercase",
              "&:hover": {
                bgcolor: COLORS.PRIMARY,
                transform: "translateY(-5px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Start a Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
