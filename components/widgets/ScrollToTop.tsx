"use client";
import React, { useState, useEffect } from "react";
import { Box, Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Zoom in={isVisible}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 9999,
        }}
      >
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            boxShadow: "0 4px 14px 0 rgba(253, 235, 57, 0.39)",
            "&:hover": {
              backgroundColor: COLORS.PRIMARY,
              boxShadow: "0 6px 20px 0 rgba(253, 235, 57, 0.6)",
              transform: "translateY(-4px)",
            },
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          }}
        >
          <KeyboardArrowUp sx={{ fontSize: 28 }} />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
