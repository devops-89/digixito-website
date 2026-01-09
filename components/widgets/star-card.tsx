import { Box, Typography } from "@mui/material";
import React from "react";
import bgImage from "@/homepage/best-service2.png";
import Image from "next/image";
import star from "@/icons/star-banner.svg";
import { monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { BEST_SERVICE_CARD_PROPS } from "@/utils/types";
const StarCard = ({
  heading,
  boldHeading,
  iconPosition,
  backgroundImage,
  height,
  isStar,
}: BEST_SERVICE_CARD_PROPS) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
      }}
      data-aos="fade-up"
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          height: height || "60vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          ":hover": {
            transform: "scale(1.1)",
          },
          transition: "0.5s ease all",
        }}
      >
        {heading && boldHeading && (
          <Box
            sx={{
              background: "rgba(0,0,0,0.3)",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: { lg: 30, xs: 20, sm: 25 },
                  fontWeight: 400,
                  fontFamily: monument.style.fontFamily,
                  color: COLORS.WHITE,
                }}
              >
                {heading} {boldHeading}
              </Typography>
              {/* <Typography
                sx={{
                  fontSize: 35,
                  fontWeight: 400,
                  fontFamily: monument.style.fontFamily,
                  color: COLORS.WHITE,
                }}
              ></Typography> */}
            </Box>
          </Box>
        )}
      </Box>
      {isStar && (
        <Box
          sx={{
            position: "absolute",
            top: iconPosition === "bottom" ? "" : -20,
            left: iconPosition === "bottom" ? "" : -20,
            transform: "rotate(-37deg)",
            right: iconPosition === "bottom" ? -20 : "",
            bottom: iconPosition === "bottom" ? -20 : "",
          }}
        >
          <Image src={star} alt="" />
        </Box>
      )}
    </Box>
  );
};

export default StarCard;
