import { COLORS } from "@/utils/enum";
import { archivo, monument } from "@/utils/fonts";
import { DEVELOPMENT_PROCESS_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";

const DevelopmentCard = ({
  process_number,
  process_title,
  process_description,
}: DEVELOPMENT_PROCESS_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E5E7EC",
        border: "5px solid #fff",
        padding: "30px 25px",
        borderRadius: "32px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        height: { lg: 200, xs: "100%" },
      }}
    >
      <Typography
        sx={{
          color: COLORS.BLACK,
          fontFamily: monument.style.fontFamily,
          fontSize: 35,
          fontWeight: 400,
        }}
      >
        {" "}
        {process_number}
      </Typography>
      <Typography
        sx={{
          fontFamily: monument.style.fontFamily,
          fontSize: 23,
          fontWeight: 400,
          textTransform: "capitalize",
        }}
      >
        {process_title}
      </Typography>
      <Typography
        sx={{
          fontFamily: archivo.style.fontFamily,
          fontSize: 19,
          fontWeight: 400,
          lineHeight: "30px",
        }}
      >
        {process_description}
      </Typography>
    </Box>
  );
};

export default DevelopmentCard;
