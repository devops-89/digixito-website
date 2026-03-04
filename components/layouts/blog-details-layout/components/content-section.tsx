import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";

const ContentSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <Box data-aos="fade-up">
    <Typography
      sx={{
        fontFamily: kessel.style.fontFamily,
        fontWeight: 400,
        fontSize: { xs: 24, md: 32 },
        mb: 4,
        color: COLORS.BLACK,
        lineHeight: 1.2,
      }}
    >
      {title}
    </Typography>

    <Typography
      sx={{
        fontFamily: archivo.style.fontFamily,
        color: "rgba(0,0,0,0.8)",
        fontSize: { xs: 16, md: 18 },
        lineHeight: 1.8,
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </Typography>
  </Box>
);

export default ContentSection;
