import { COLORS } from "@/utils/enum";
import { archivo, kessel, monument } from "@/utils/fonts";
import { VALUE_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const ValueCard = ({ number, title, description }: VALUE_CARD_PROPS) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          width: 350,
          height: 380,
          borderRadius: "32px",
          border: "1px solid rgba(0, 0, 0, 0.00)",
          backdropFilter: "blur(13px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          p: 3,
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            color: COLORS.PRIMARY,
            fontFamily: monument.style.fontFamily,
            fontSize: 67,
            lineHeight: "84px",
            fontWeight: 400,
          }}
        >
          {number}
        </Typography>
        <Typography
          sx={{
            color: COLORS.WHITE,
            fontFamily: archivo.style.fontFamily,
            fontSize: 26,
            fontWeight: 700,
            lineHeight: "34px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
            fontFamily: kessel.style.fontFamily,
            fontWeight: 400,
            lineHeight: "34px",
            color: COLORS.WHITE,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ValueCard;
