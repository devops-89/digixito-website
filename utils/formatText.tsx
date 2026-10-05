import React from "react";
import { Box } from "@mui/material";
import { archivo } from "./fonts";

/**
 * Replaces characters that have demo watermarks in the trial font-bold.otf (& and ')
 * with a clean sans-serif/archivo fallback so no "DEMO" badge is rendered.
 */
// Regex to match any character that is watermarked with the DEMO badge in font-bold.otf.
// Safe characters in font-bold.otf: A-Z, a-z, 0-3, 5-9, whitespace, and basic punctuation: . , : ; ?
// Everything else (such as -, &, ', ", !, #, $, %, 4, etc.) has the DEMO watermark in the trial font.
const DEMO_CHARS_REGEX = /([^a-zA-Z0-35-9\s.,:;?]+)/g;

export const renderKesselText = (text: React.ReactNode): React.ReactNode => {
  if (typeof text === "number") text = String(text);
  if (typeof text !== "string") return text;
  if (!text) return text;

  if (!/[^a-zA-Z0-35-9\s.,:;?]/.test(text)) return text;

  const parts = text.split(DEMO_CHARS_REGEX);
  return parts.map((part, index) => {
    if (!part) return null;
    if (/[^a-zA-Z0-35-9\s.,:;?]/.test(part)) {
      return (
        <Box
          key={index}
          component="span"
          sx={{
            fontFamily: `${archivo.style.fontFamily}, sans-serif`,
            fontWeight: 800,
            display: "inline",
          }}
        >
          {part}
        </Box>
      );
    }
    return part;
  });
};
