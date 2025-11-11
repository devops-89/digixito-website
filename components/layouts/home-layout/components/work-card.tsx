import { COLORS } from "@/utils/enum";
import { Box, Typography } from "@mui/material";
import React from "react";
import work_1 from "@/homepage/work/work-1.png";
import { kessel, monument } from "@/utils/fonts";
import { WORK_CARD_PROPS } from "@/utils/types";
const WorkCard = ({ number, title, description, img }: WORK_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundColor: "#2A2A2A",
        display: "flex",
        flexDirection: "column",
        borderRadius: "56px",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "30px",
        padding: { lg: "40px", xs: "20px" },
        height: 450,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: "300px",
          borderRadius: "32px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: COLORS.WHITE,
              fontFamily: monument.style.fontFamily,
              lineHeight: "36px",
              letterSpacing: "-0.144px",
              fontSize: { lg: 24, xs: 18},
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: 32,
            fontFamily: monument.style.fontFamily,
            color: "#666",
            m: 2,
            position: "absolute",
            top: 0,
          }}
        >
          {number}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: COLORS.GRAY_90,
          fontFamily: kessel.style.fontFamily,
          fontSize: 15,
          lineHeight: "30px",
          letterSpacing: "-0.12px",
          textAlign: "justify",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default WorkCard;
