import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";

const CallToAction = () => (
  <Box
    data-aos="fade-up"
    sx={{
      backgroundColor: COLORS.BLACK,
      color: COLORS.WHITE,
      p: { xs: 4, md: 8 },
      borderRadius: "24px",
      mt: 10,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
    }}
  >
    <Typography
      sx={{
        fontFamily: kessel.style.fontFamily,
        fontWeight: 400,
        fontSize: { xs: 24, md: 36 },
        color: COLORS.WHITE,
        maxWidth: "600px",
        lineHeight: 1.2,
      }}
    >
      Ready to implement these insights?
    </Typography>
    <Typography
      sx={{
        fontFamily: archivo.style.fontFamily,
        fontSize: { xs: 16, md: 18 },
        color: "rgba(255,255,255,0.7)",
        maxWidth: "500px",
      }}
    >
      Let's discuss how Digixito can help transform your organization's digital
      architecture today.
    </Typography>
    <Box
      component="a"
      href="/contact-us"
      sx={{
        fontFamily: archivo.style.fontFamily,
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
        px: 4,
        py: 1.5,
        borderRadius: "50px",
        fontWeight: 600,
        textDecoration: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 10px 20px rgba(255,255,255,0.2)",
        },
      }}
    >
      Start a Conversation
    </Box>
  </Box>
);

export default CallToAction;
