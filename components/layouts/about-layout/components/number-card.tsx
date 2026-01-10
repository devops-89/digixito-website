import React, { useEffect, useState } from "react";
import { COLORS } from "@/utils/enum";
import { archivo } from "@/utils/fonts";
import { COUNT_UP_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const NumberCard = ({ number, suffix, title }: COUNT_UP_CARD_PROPS) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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
        {/* {mounted ? (
          <CountUp
            end={number}
            start={0}
            duration={2}
            separator=","
            preserveValue
          >
            {({ countUpRef }) => (
              <>
                <span ref={countUpRef} />
                <span style={{ color: COLORS.PRIMARY }}>{suffix}</span>
              </>
            )}
          </CountUp>
        ) : (
          <>
            {number}
            <span style={{ color: COLORS.PRIMARY }}>{suffix}</span>
          </>
        )} */}
        {number}
        <span style={{ color: COLORS.PRIMARY }}>{suffix}</span>
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
