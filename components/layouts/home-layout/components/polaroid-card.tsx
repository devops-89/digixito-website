"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { monument, archivo } from "@/utils/fonts";
import { BEST_WORK_CARD_PROPS } from "@/utils/types";

interface PolaroidCardProps extends BEST_WORK_CARD_PROPS {
  isActive?: boolean;
}

const PolaroidCard = ({
  title,
  skills,
  slug,
  img,
  isActive = true,
}: PolaroidCardProps) => {
  // Use the first skill label as the project category/type (e.g. "Education", "Mobile Application", etc.)
  const category = skills?.[0]?.label || "Creative Work";

  return (
    <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          p: "18px",
          pb: "28px",
          width: "100%",
          height: "100%",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease",
          position: "relative",
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
            "& .card-img": {
              transform: "scale(1.08)",
            },
            "& .card-hover-overlay": {
              opacity: 0.25,
            },
            "& .view-project-btn": {
              opacity: 1,
              transform: "translate(-50%, -50%) scale(1)",
            },
          },
        }}
      >
        {/* Photo Container (Square) */}
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1/1",
            position: "relative",
            overflow: "hidden",
            borderRadius: "4px",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Image */}
          <Box
            className="card-img"
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <Image
              src={img}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          {/* Hover Dark Overlay */}
          <Box
            className="card-hover-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#000000",
              opacity: 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Hover Button "(View Project)" */}
          <Box
            className="view-project-btn"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(0.8)",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "1px solid #000000",
              borderRadius: "50px",
              px: 3,
              py: 1,
              zIndex: 3,
              opacity: 0,
              transition: "opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              (View Project)
            </Typography>
          </Box>
        </Box>

        {/* Polaroid Bottom Band */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mt: 3,
            px: 0.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              color: "#000000",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              fontWeight: 400,
            }}
          >
            {category}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default PolaroidCard;
