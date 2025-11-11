import { Box } from "@mui/material";
import React from "react";

const BestWorkCard = () => {
  return (
    <Box
      sx={{
        border: "8px solid #ffffff",
        borderRadius: "32px",
        backgroundColor: "#E5E7EC",
        boxShadow: "0 6px 24px 0 rgba(0, 0, 0, 0.08)",
        width: { lg: 400, xs: 150 },
        height: { lg: 300, xs: 120 },
        margin: "auto",
      }}
    ></Box>
  );
};

export default BestWorkCard;
