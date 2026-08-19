"use client";

import { monument } from "@/utils/fonts";
import { BEST_WORK_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProjectCard = ({
  title,
  skills,
  slug,
  img,
  description,
}: BEST_WORK_CARD_PROPS) => {
  const category = skills?.[0]?.label || "Featured";

  return (
    <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          borderRadius: "16px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
          cursor: "pointer",
          border: "1px solid #e0e0e0",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        {/* Left Side: Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            position: "relative",
            minHeight: { xs: "300px", md: "400px" },
            backgroundColor: "#e0e0e0",
          }}
        >
          {/* Recent Work Tag */}
          <Box
            sx={{
              position: "absolute",
              top: 24,
              left: 24,
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              px: "15px",
              py: 0,
              borderRadius: "29px",
              border: "1px solid #000000",
              backgroundColor: "transparent",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Kessel105W00-Book",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "32px",
                letterSpacing: "0.19px",
                color: "#000000",
              }}
            >
              Recent Work
            </Typography>
          </Box>

          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Right Side: Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Category Tag */}
          <Box
            sx={{
              position: "absolute",
              top: 24,
              right: 24,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              px: "15px",
              py: 0,
              borderRadius: "29px",
              border: "1px solid #000000",
              backgroundColor: "transparent",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Kessel105W00-Book",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "32px",
                letterSpacing: "0.19px",
                color: "#000000",
              }}
            >
              {category}
            </Typography>
          </Box>

          {/* Heading */}
          <Typography
            sx={{
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "24px", md: "28px" },
              lineHeight: "42px",
              letterSpacing: "0%",
              color: "#000000",
              textTransform: "uppercase",
              mb: "8px",
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Kessel105W00-Book",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "180%",
              letterSpacing: "0%",
              color: "#262626",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default FeaturedProjectCard;