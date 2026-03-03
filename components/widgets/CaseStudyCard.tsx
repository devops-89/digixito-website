import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyProps } from "@/public/locale/case-studies-data";

interface CaseStudyCardProps {
  caseStudy: CaseStudyProps;
}

const CaseStudyCard = ({ caseStudy: study }: CaseStudyCardProps) => {
  return (
    <Box
      component={Link}
      href={`/case-studies/${study.id}`}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: { xs: 4, md: 6 },
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        textDecoration: "none",
        position: "relative",
        transition: "all 0.4s ease",
        "&:hover": {
          "& .hover-image": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1) rotate(-1deg)",
          },
          "& .arrow": {
            opacity: 1,
            transform: "translate(0, -50%)",
          },
          "& .title": {
            transform: "translateX(40px)",
            color: COLORS.BLACK,
          },
          "& .meta-text": {
            color: COLORS.BLACK,
          },
        },
      }}
    >
      {/* Image Reveal Center */}
      <Box
        className="hover-image"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.85) rotate(0deg)",
          width: { xs: "280px", md: "500px" },
          height: { xs: "180px", md: "320px" },
          opacity: 0,
          transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: "none",
          zIndex: 10,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
        }}
      >
        <Image
          src={study.coverImage}
          alt={study.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Left Side: Title & Arrow */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: { xs: 1, md: 0.5 },
          position: "relative",
        }}
      >
        <Typography
          className="arrow"
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: COLORS.BLACK,
            fontSize: 24,
            position: "absolute",
            left: 0,
            top: "50%",
            opacity: 0,
            transform: "translate(-20px, -50%)",
            transition: "all 0.4s ease",
          }}
        >
          &rarr;
        </Typography>
        <Typography
          className="title"
          sx={{
            fontFamily: kessel.style.fontFamily,
            fontSize: { xs: 18, md: 24, lg: 32 },
            fontWeight: 400,
            color: "rgba(0,0,0,0.7)",
            transition: "all 0.4s ease",
          }}
        >
          {study.clientName} &mdash; {study.title}
        </Typography>
      </Box>

      {/* Center / Right: Meta info */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flex: 0.5,
          justifyContent: "space-between",
          alignItems: "center",
          pl: { md: 4, lg: 10 },
        }}
      >
        <Typography
          className="meta-text"
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: "rgba(0,0,0,0.5)",
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: 1,
            transition: "color 0.4s ease",
          }}
        >
          {study.category}
        </Typography>
        <Typography
          className="meta-text"
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: "rgba(0,0,0,0.5)",
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: 1,
            transition: "color 0.4s ease",
          }}
        >
          Tech
        </Typography>
      </Box>
    </Box>
  );
};

export default CaseStudyCard;
