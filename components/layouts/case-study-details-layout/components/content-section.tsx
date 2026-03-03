import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, monument } from "@/utils/fonts";

interface ContentSectionProps {
  title: string;
  content: string;
}

const ContentSection = ({ title, content }: ContentSectionProps) => (
  <Box data-aos="fade-up">
    <Typography
      sx={{
        fontFamily: monument.style.fontFamily,
        fontWeight: 800,
        fontSize: 28,
        mb: 3,
        color: COLORS.BLACK,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontFamily: archivo.style.fontFamily,
        color: "#4B5563",
        fontSize: 18,
        lineHeight: 1.8,
      }}
    >
      {content}
    </Typography>
  </Box>
);

export default ContentSection;
