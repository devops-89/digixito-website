import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { kessel, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { ArrowForward } from "@mui/icons-material";
import { BEST_WORK_CARD_PROPS } from "@/utils/types";

const BestWorkCard = ({
  title,
  skills,
  description,
  slug,
  img,
}: BEST_WORK_CARD_PROPS) => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "40px",
        overflow: "hidden",
        width: "100%",
        height: { lg: 600, md: 500, xs: 450 },
        transform: "translateZ(0)", // Force GPU acceleration
        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "&:hover": {
          "& .card-image": {
            transform: "scale(1.08)",
          },
          "& .card-overlay": {
            opacity: 0.85,
          },
          "& .card-content": {
            transform: "translateY(0)",
            opacity: 1,
          },
          "& .icon-btn": {
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            transform: "rotate(0deg) scale(1.1)",
          },
        },
      }}
    >
      {/* Background Image */}
      <Box
        className="card-image"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
          zIndex: 1,
        }}
      >
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "contain", backgroundColor: "#fff" }}
          priority
        />
      </Box>

      {/* Dark Overlay Gradient */}
      <Box
        className="card-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)",
          zIndex: 2,
          opacity: 0.7,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: { lg: 6, md: 4, xs: 3 },
          zIndex: 3,
        }}
      >
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-between"
          spacing={2}
        >
          <Box sx={{ flex: 1 }}>
            {/* Title */}
            <Typography
              component="h3"
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 48, md: 36, xs: 28 },
                fontWeight: 400,
                color: COLORS.WHITE,
                textTransform: "uppercase",
                letterSpacing: "1px",
                mb: 1,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {title}
            </Typography>

            {/* Hidden initial content that slides up */}
            <Box
              className="card-content"
              sx={{
                transform: "translateY(20px)",
                opacity: 0,
                transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                transitionDelay: "0.1s",
              }}
            >
              <Typography
                sx={{
                  fontFamily: kessel.style.fontFamily,
                  fontSize: { lg: 16, xs: 14 },
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  maxWidth: "90%",
                  mb: 3,
                }}
              >
                {description}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {skills.map((val, i) => (
                  <Chip
                    key={i}
                    label={val.label}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: COLORS.WHITE,
                      border: "1px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(4px)",
                      fontFamily: kessel.style.fontFamily,
                      fontSize: { lg: 12, xs: 10 },
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Action Button */}
          <IconButton
            className="icon-btn"
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: COLORS.WHITE,
              border: "1px solid rgba(255,255,255,0.2)",
              width: { lg: 64, xs: 48 },
              height: { lg: 64, xs: 48 },
              transform: "rotate(-45deg)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <ArrowForward sx={{ fontSize: { lg: 32, xs: 24 } }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default BestWorkCard;
