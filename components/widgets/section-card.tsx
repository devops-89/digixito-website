import { COLORS, VARIANTS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { SECTION_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const SectionCard = ({ variant, title }: SECTION_CARD_PROPS) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          left: -60,
          top: 80,
          transform: "rotate(-90deg )",
          padding: "16px 24px",
          backgroundColor: variant === VARIANTS.DARK ? "#333" : COLORS.PRIMARY,
          zIndex: 4,
          display: {lg:"flex",xs:"none"},
          alignItems: "center",
          justifyContent: "center",
          // height: 10,
        }}
      >
        <Typography
          sx={{
            color: variant === VARIANTS.DARK ? COLORS.WHITE : COLORS.BLACK,
            fontFamily: kessel.style.fontFamily,
            fontSize: 16,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionCard;
