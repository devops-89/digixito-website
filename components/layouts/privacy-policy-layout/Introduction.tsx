import { kessel, monument } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <Box>
      <Typography
        sx={{ fontSize: 20, fontFamily: monument.style.fontFamily, mt: 5 }}
      >
        1. Introduction
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: kessel.style.fontFamily,
          fontWeight: 500,
          mt: 2,
          textAlign: "justify",
        }}
      >
        Welcome to Digixito . We operate the website{" "}
        <Typography
          component={"a"}
          sx={{
            fontSize: 18,
            fontFamily: kessel.style.fontFamily,
            fontWeight: 500,
            color: "#24262B",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          href="/"
        >
          https://www.digixito.com/
        </Typography>{" "}
        and provide information technology services, including but not limited
        to software development, digital platforms, cloud solutions, system
        integration, and technology-driven consulting.
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: kessel.style.fontFamily,
          fontWeight: 500,
          mt: 2,
          textAlign: "justify",
        }}
      >
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your personal and technical information when you access or
        interact with our website, IT services, applications, platforms, and
        related communications.
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: kessel.style.fontFamily,
          fontWeight: 500,
          mt: 2,
          textAlign: "justify",
        }}
      >
        By accessing or using our website or services, you acknowledge that you
        have read, understood, and agree to the practices described in this
        Privacy Policy. If you do not agree with any part of this policy, you
        should discontinue use of our website and services.
      </Typography>
    </Box>
  );
};

export default Introduction;
