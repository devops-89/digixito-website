"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { monument, archivo } from "@/utils/fonts";
import { BEST_WORK_CARD_PROPS } from "@/utils/types";

export const GridProjectCard = ({
  title,
  skills,
  slug,
  img,
  description,
}: BEST_WORK_CARD_PROPS) => {
  const category = skills?.[0]?.label || "Work";

  return (
    <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          backgroundColor: "#d9d9d9",
          borderRadius: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          cursor: "pointer",
          border: "1px solid #e0e0e0",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          height: "100%",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {/* Top: Image */}
        <Box
          sx={{
            width: "100%",
            height: "250px",
            position: "relative",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Bottom: Content */}
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            flexGrow: 1,
            backgroundColor: "#d9d9d9",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: "20px",
                fontWeight: 600,
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: "50px",
                border: "1px solid #666",
              }}
            >
              <Typography
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  fontSize: "10px",
                  color: "#666",
                }}
              >
                {category}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              fontSize: "12px",
              color: "#333",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default GridProjectCard;
