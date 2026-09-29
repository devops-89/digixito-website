import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";
import { Box, Card, Typography } from "@mui/material";
import React from "react";

export interface FEATURE_CARD_PROPS {
  primary?: string;
  secondary?: string;
}

const KeyFeaturesCard = ({ primary, secondary }: FEATURE_CARD_PROPS) => {
  return (
    <Box>
      <Box
        className="dev-feature-card"
        sx={{
          p: 4,
          bgcolor: "#f9f9f9",
          borderLeft: `3px solid ${COLORS.PRIMARY}`,
          height: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#f0f0f0",
            transform: "translateX(10px)",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: "1.2rem",
            color: "#000000",
            mb: 1.5,
          }}
        >
          {primary}
        </Typography>
        {secondary && (
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              fontSize: "1rem",
              color: "#666666",
              lineHeight: 1.6,
            }}
          >
            {secondary}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default KeyFeaturesCard;
