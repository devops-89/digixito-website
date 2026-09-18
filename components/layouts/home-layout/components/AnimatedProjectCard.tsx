import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_CARD_DATA_PROPS } from "@/utils/types";
import { kessel, monument } from "@/utils/fonts";
import { motion, MotionValue, useTransform } from "motion/react";

const AnimatedProjectCard = ({
  slug,
  projectName,
  department,
  details,
  index,
  total,
  scrollYProgress,
}: PROJECT_CARD_DATA_PROPS & {
  index?: number;
  total?: number;
  scrollYProgress?: MotionValue<number>;
}) => {
  const imageSrc = details?.heroImage;

  // Calculate the center position for this card based on its index
  const centerPosition =
    index !== undefined && total !== undefined && total > 1
      ? index / (total - 1)
      : 0;

  // Use function-based transform to avoid Web Animations API offset bounds errors
  const scale = scrollYProgress
    ? useTransform(scrollYProgress, (val) => {
        const dist = Math.abs(val - centerPosition);
        const progress = Math.min(dist / 0.25, 1); // 0 at center, 1 at edge
        return 1 - 0.25 * progress; // 1 at center, 0.75 at edge
      })
    : 1;

  const opacity = scrollYProgress
    ? useTransform(scrollYProgress, (val) => {
        const dist = Math.abs(val - centerPosition);
        const progress = Math.min(dist / 0.25, 1); // 0 at center, 1 at edge
        return 1 - 0.6 * progress; // 1 at center, 0.4 at edge
      })
    : 1;

  // Title slides up as it enters
  const textY = scrollYProgress
    ? useTransform(scrollYProgress, (val) => {
        const dist = Math.abs(val - centerPosition);
        const progress = Math.min(dist / 0.25, 1);
        return progress * 100; // Starts 100px down, goes to 0
      })
    : 0;

  const parallaxX = scrollYProgress
    ? useTransform(scrollYProgress, (val) => {
        const dist = val - centerPosition;
        const progress = Math.max(-1, Math.min(1, dist / 0.25));
        return progress * -150; // Image moves opposite to scroll
      })
    : 0;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#EFEFEF", // Outer background
        flexShrink: 0,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          scale,
          opacity,
        }}
      >
        {/* Title and Badge Group at Top Left */}
        <motion.div
          style={{
            position: "absolute",
            top: "15%",
            left: "8%",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 16,
            y: textY,
          }}
        >
          {/* Sharp Readable Title */}
          <Box>
            <Typography
              sx={{
                color: "#000000", // Solid black text
                WebkitTextStroke: "2px #ffffff", // White outline guarantees visibility over the dark image
                fontSize: { xs: "40px", md: "70px", lg: "100px" },
                fontWeight: 900,
                fontFamily: monument.style.fontFamily,
                textTransform: "uppercase",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              {projectName}
            </Typography>
          </Box>

          {/* Tag consistently styled without blend mode */}
          <Box
            sx={{
              display: "inline-block",
              padding: "10px 28px",
              borderRadius: "50px",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontFamily: kessel.style.fontFamily,
            }}
          >
            {department}
          </Box>
        </motion.div>

        {/* Main Image Container */}
        <Box
          component={motion.div}
          style={{
            x: parallaxX,
          }}
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "90%", md: "75%", lg: "65%" },
            height: { xs: "55%", md: "70%", lg: "75%" },
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.2)",
            "&:hover .hover-overlay": { opacity: 1 },
            "&:hover .hover-image": { transform: "scale(1.05)" },
          }}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={projectName}
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                // width: "100%",
              }}
              className="hover-image"
            />
          )}

          {/* Hover Overlay */}
          <Link href={`/projects/${slug || ""}`} passHref>
            <Box
              className="hover-overlay"
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.15)", // Lighter overlay for light mode
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.5s ease",
                cursor: "pointer",
              }}
            >
              {/* Premium Glass Button */}
              <Box
                sx={{
                  padding: "16px 48px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                  color: "#000000",
                  fontWeight: 600,
                  fontSize: "18px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                View More
              </Box>
            </Box>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AnimatedProjectCard;
