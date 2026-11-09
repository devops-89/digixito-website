"use client";
import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip, Zoom } from "@mui/material";
import { WhatsApp, KeyboardArrowUp } from "@mui/icons-material";

const UsFloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=918800291352", "_blank");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, md: 28 },
        right: { xs: 20, md: 28 },
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        zIndex: 9999,
      }}
    >
      {/* WhatsApp Floating Button */}
      <Tooltip title="Chat with us on WhatsApp" placement="left">
        <IconButton
          onClick={openWhatsApp}
          sx={{
            width: { xs: 46, md: 52 },
            height: { xs: 46, md: 52 },
            backgroundColor: "#25D366",
            color: "#FFFFFF",
            boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
            "&:hover": {
              backgroundColor: "#20BA5A",
              transform: "scale(1.08)",
            },
            transition: "all 0.25s ease",
          }}
        >
          <WhatsApp sx={{ fontSize: { xs: 26, md: 28 } }} />
        </IconButton>
      </Tooltip>

      {/* Back to top button */}
      <Zoom in={showScrollTop}>
        <IconButton
          onClick={scrollToTop}
          sx={{
            width: { xs: 42, md: 48 },
            height: { xs: 42, md: 48 },
            backgroundColor: "#111111",
            color: "#FFFFFF",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            "&:hover": {
              backgroundColor: "#000000",
              transform: "scale(1.08)",
            },
            transition: "all 0.25s ease",
          }}
        >
          <KeyboardArrowUp sx={{ fontSize: { xs: 24, md: 26 } }} />
        </IconButton>
      </Zoom>
    </Box>
  );
};

export default UsFloatingActions;

