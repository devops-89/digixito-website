import { archivo, kessel } from "@/utils/fonts";
import { WORK_AT_DIGIXITO_CARD_PROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const WorkatDigixitoCard = ({
  serial_number,
  heading,
  description,
}: WORK_AT_DIGIXITO_CARD_PROPS) => {
  return (
    <Box>
      <Stack
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        spacing={2}
      >
        <Typography
          sx={{
            fontSize: 27,
            fontFamily: archivo.style.fontFamily,
            fontWeight: 500,
            lineHeight: "25px",
            letterSpacing: "-0.48px",
          }}
        >
          {serial_number}
        </Typography>
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 700,
            lineHeight: "33px",
            letterSpacing: "-0.63px",
            fontFamily: kessel.style.fontFamily,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: 19,
            fontWeight: 500,
            lineHeight: "30px",
            letterSpacing: "-0.40px",
            fontFamily: kessel.style.fontFamily,
            textAlign: "justify",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default WorkatDigixitoCard;
