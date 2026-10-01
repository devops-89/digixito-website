import { COLORS } from "@/utils/enum";
import { kessel_bold } from "@/utils/fonts";
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
          py: 10,
          bgcolor: "#fff",
          borderRadius: "16px",
          height: "300px",
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
          0{idx + 1}
        </Typography>
        <Typography
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: "1.2rem",
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          {primary}
        </Typography>
        <Typography sx={{ color: "#666" }}>{secondary}</Typography>
      </Box>
    </div>
  );
};

export default CreativeProcessCard;
