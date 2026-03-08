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
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        py: { xs: 4, md: 6 },
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        textDecoration: "none",
        position: "relative",
        transition: "all 0.4s ease",
        "&:hover": {
          "& .hover-image": {
            opacity: 1,
            transform: {
              xs: "none",
              md: "translate(-50%, -50%) scale(1) rotate(-1deg)",
            },
          },
          "& .arrow": {
            opacity: 1,
            transform: "translate(0, -50%)",
          },
          "& .title": {
            transform: { xs: "none", md: "translateX(40px)" },
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
          position: { xs: "relative", md: "absolute" },
          top: { xs: "auto", md: "50%" },
          left: { xs: "auto", md: "50%" },
          transform: {
            xs: "none",
            md: "translate(-50%, -50%) scale(0.85) rotate(0deg)",
          },
          width: { xs: "100%", md: "500px" },
          height: { xs: "220px", md: "320px" },
          opacity: { xs: 1, md: 0 },
          transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
          pointerEvents: "none",
          zIndex: 10,
          borderRadius: { xs: "12px", md: "16px" },
          overflow: "hidden",
          boxShadow: {
            xs: "0 10px 30px rgba(0,0,0,0.1)",
            md: "0 20px 50px rgba(0,0,0,0.8)",
          },
          mb: { xs: 3, md: 0 },
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
          flex: { xs: "none", md: 0.5 },
          position: "relative",
          width: { xs: "100%", md: "auto" },
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
            display: { xs: "none", md: "block" },
          }}
        >
          &rarr;
        </Typography>
        <Typography
          className="title"
          sx={{
            fontFamily: kessel.style.fontFamily,
            fontSize: { xs: 18, md: 24, lg: 32 },
            lineHeight: { xs: 1.2, md: 1.4 },
            fontWeight: { xs: 500, md: 400 },
            color: { xs: COLORS.BLACK, md: "rgba(0,0,0,0.7)" },
            transition: "all 0.4s ease",
          }}
        >
          {study.clientName} &mdash; {study.title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flex: { xs: "none", md: 0.5 },
          width: { xs: "100%", md: "auto" },
          justifyContent: "space-between",
          alignItems: "center",
          pl: { xs: 0, md: 4, lg: 10 },
          mt: { xs: 2.5, md: 0 },
        }}
      >
        <Typography
          className="meta-text"
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: "rgba(0,0,0,0.5)",
            fontSize: { xs: 12, md: 16 },
            textTransform: "uppercase",
            letterSpacing: 1.5,
            transition: "color 0.4s ease",
          }}
        >
          {study.category}
        </Typography>
        <Typography
          className="meta-text"
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: { xs: COLORS.PRIMARY, md: "rgba(0,0,0,0.5)" },
            fontSize: { xs: 12, md: 16 },
            textTransform: "uppercase",
            letterSpacing: 1,
            transition: "color 0.4s ease",
            fontWeight: { xs: 600, md: 400 },
          }}
        >
          View Case Study &rarr;
        </Typography>
      </Box>
    </Box>
  );
};

export default CaseStudyCard;
