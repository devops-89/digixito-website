"use client";

import { COLORS } from "@/utils/enum";
import { archivo } from "@/utils/fonts";
import { COUNT_UP_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const NumberCard = ({ number, suffix, title }: COUNT_UP_CARD_PROPS) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { lg: 60, xs: 30 },
          fontFamily: archivo.style.fontFamily,
          color: COLORS.WHITE,
          fontWeight: 700,
          lineHeight: "72px",
          letterSpacing: "-2.55px",
          textAlign: "center",
        }}
      >
        <CountUp end={number} start={0}>
          {({ countUpRef }) => (
            <>
              <span ref={countUpRef} />
              <span style={{ color: COLORS.PRIMARY }}>{suffix}</span>
            </>
          )}
        </CountUp>
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: 18, xs: 16 },
          fontFamily: archivo.style.fontFamily,
          color: COLORS.WHITE,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default NumberCard;
