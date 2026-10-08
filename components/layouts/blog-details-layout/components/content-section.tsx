import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import Link from "next/link";

export function renderFormattedText(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    const isInternal = url.startsWith("/") || url.includes("digixito.com");

    parts.push(
      <Box
        component={Link}
        key={`${match.index}-${url}`}
        href={url}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        sx={{
          color: COLORS.BLACK,
          fontWeight: 600,
          textDecoration: "underline",
          textDecorationColor: "#FFD000",
          textDecorationThickness: "2px",
          textUnderlineOffset: "4px",
          display: "inline",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 239, 70, 0.4)",
            borderRadius: "2px",
          },
        }}
      >
        {label}
      </Box>,
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

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
      component="div"
      sx={{
        fontFamily: archivo.style.fontFamily,
        color: "rgba(0,0,0,0.8)",
        fontSize: { xs: 16, md: 18 },
        lineHeight: 1.8,
        whiteSpace: "pre-wrap",
      }}
    >
      {renderFormattedText(content)}
    </Typography>
  </Box>
);

export default ContentSection;
