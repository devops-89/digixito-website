import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import invertedComma from "@/icons/quoteup.svg";
import { TESTIMONIAL_CARD_PROPS } from "@/utils/types";
import team from "@/homepage/avatar1.jpg";
const TestimonialCard = ({
  name,
  img,
  designation,
  description,
}: TESTIMONIAL_CARD_PROPS) => {
  return (
    <Box
      sx={{
        padding: "24px 40px",
        backgroundColor: "#2A2A2A",
        borderRadius: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignItems: "flex-start",
        width: { lg: 360, xs: 300 },
        margin: { lg: "", xs: "auto" },
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar>
            <Image src={img ? img : team} alt="" width={40} />
          </Avatar>
          <Box>
            <Typography
              sx={{
                color: COLORS.WHITE,
                fontFamily: archivo.style.fontFamily,
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: "#DDD",
                fontFamily: archivo.style.fontFamily,
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              {designation}
            </Typography>
          </Box>
        </Stack>
        <Image src={invertedComma} alt="" />
      </Stack>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: archivo.style.fontFamily,
          fontWeight: 400,
          fontStyle: "italic",
          lineHeight: "34px",
          alignSelf: "stretch",
          color: COLORS.WHITE,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
