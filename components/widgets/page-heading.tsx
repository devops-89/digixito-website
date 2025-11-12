import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import star from "@/icons/black-star.svg";
const PageHeading = ({
  page_name,
  page_title,
}: {
  page_name: string;
  page_title?: string;
}) => {
  return (
    <div>
      <Stack
        direction={{ lg: "row", xs: "column" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{
            color: COLORS.BLACK,
            fontSize: { lg: 50, xs: 35 },
            fontFamily: monument.style.fontFamily,
            fontWeight: 800,
          }}
        >
          {page_name}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: 25, xs: 18 },
            fontFamily: monument.style.fontFamily,
            fontWeight: 400,
          }}
        >
          {page_title}
        </Typography>
      </Stack>
      <Divider sx={{ borderColor: "#000" }}>
        <Image src={star} alt="" />
      </Divider>
    </div>
  );
};

export default PageHeading;
