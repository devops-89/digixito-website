"use client";

import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Prevent scrolling when 404 page is active
    const originalOverflowBody = document.body.style.overflow;
    const originalOverflowHtml = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflowBody;
      document.documentElement.style.overflow = originalOverflowHtml;
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        background: `radial-gradient(circle at 85% 15%, rgba(255, 239, 70, 0.12) 0%, transparent 45%),
                     radial-gradient(circle at 15% 85%, rgba(255, 239, 70, 0.08) 0%, transparent 45%),
                     #0a0a0a`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        px: 2,
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/homepage/hero.png"
        alt="Background"
        fill
        priority
        quality={100}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.85,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          width: "900px",
          height: "597px",
          maxWidth: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.37)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "94px",
          px: {
            xs: 3,
            sm: 6,
            md: 8,
          },
        }}
      >
        {/* ERROR 404 */}
        <Typography
          sx={{
            fontFamily: monument.style.fontFamily,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "106.67px",
            lineHeight: "124.3%",
            letterSpacing: "-3%",
            textAlign: "center",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Box component="span" sx={{ color: "#FFFFFF" }}>
            Error
          </Box>

          <Box component="span" sx={{ color: COLORS.PRIMARY }}>
            404
          </Box>
        </Typography>

        {/* PARAGRAPH */}
        <Typography
          sx={{
            width: "489px",
            maxWidth: "100%",
            fontFamily: kessel.style.fontFamily,
            opacit:"60%",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "0.19px",
            textAlign: "center",
            color: "rgba(255,255,255,0.75)",
            mt: "-70px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </Typography>

        {/* BUTTON */}
        <Button
          component={Link}
          href="/"
          variant="contained"
          endIcon={
            <ArrowForwardIcon
              sx={{
                width: "14.17px",
                height: "15px",
                color: COLORS.BLACK,
                transition: "transform 0.3s ease",
              }}
            />
          }
          sx={{
            width: "241px",
            height: "50px",
            minWidth: "241px",
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            borderRadius: "41px",
            px: "22px",
            py: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            textTransform: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 14px rgba(255, 239, 70, 0.25)",
            "&:hover": {
              backgroundColor: COLORS.PRIMARY,
              transform: "translateY(-3px) scale(1.02)",
              boxShadow: "0 10px 24px rgba(255, 239, 70, 0.4)",
              "& .MuiButton-endIcon svg": {
                transform: "translateX(4px)",
              },
            },
            "&:active": {
              transform: "scale(0.98)",
            },
            "& .MuiButton-endIcon": {
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: kessel.style.fontFamily,
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "124.3%",
              letterSpacing: "-3%",
              color: COLORS.BLACK,
              transition: "all 0.3s ease",
            }}
          >
            Return To Homepage
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}