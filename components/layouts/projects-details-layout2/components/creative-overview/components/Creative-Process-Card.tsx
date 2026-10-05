import { COLORS } from "@/utils/enum";
import { kessel_bold } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";
import { Box, Typography } from "@mui/material";
import React from "react";

interface CREATIVE_PROCESS_CARD_PROPS {
  idx: number;
  primary: string;
  secondary: string;
}

const CreativeProcessCard = ({
  idx,
  primary,
  secondary,
}: CREATIVE_PROCESS_CARD_PROPS) => {
  return (
    <div>
      <Box
        className="stagger-item"
        sx={{
          py: { lg: 10, xs: 5 },
          bgcolor: "#fff",
          borderRadius: "16px",
          height: { lg: "300px", xs: "auto" },
          border: "1px solid rgba(0,0,0,0.05)",
          px: 4,
        }}
      >
        <Typography
          sx={{
            color: COLORS.PRIMARY,
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: "2rem",
            mb: 2,
          }}
        >
          {renderKesselText(`0${idx + 1}`)}
        </Typography>
        <Typography
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: "1.2rem",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          {renderKesselText(primary)}
        </Typography>
        <Typography sx={{ color: "#666" }}>{secondary}</Typography>
      </Box>
    </div>
  );
};

export default CreativeProcessCard;
