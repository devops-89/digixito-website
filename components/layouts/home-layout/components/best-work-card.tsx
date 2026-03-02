import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import dhurmaati from "@/projects/DHURMAATI.jpg";
const BestWorkCard = () => {
  return (
    <Box
      sx={{
        border: "8px solid #ffffff",
        borderRadius: "32px",
        backgroundColor: "#E5E7EC",
        boxShadow: "0 6px 24px 0 rgba(0, 0, 0, 0.08)",
        width: { lg: "90%", xs: 220 },
        height: { lg: 300, xs: 120 },
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Image
        src={dhurmaati}
        alt="dhurmaati"
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default BestWorkCard;
