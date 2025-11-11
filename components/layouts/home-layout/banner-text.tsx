"use client";
import { monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import star from "@/icons/star-banner.svg";
import Image from "next/image";
const Bannertext = () => {
  const text = [
    {
      label: "Innovate",
    },
    {
      label: "Inspire",
    },
    {
      label: "Create",
    },
  ];

  const phone = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          {text.map((val, i) => (
            <React.Fragment key={i}>
              <Typography
                sx={{
                  fontSize: { lg: 62, xs: 18 },
                  fontWeight: 800,
                  fontFamily: monument.style.fontFamily,
                }}
              >
                {val.label}
              </Typography>
              {text.length - 1 != i && (
                <Image src={star} alt="" style={{ height: phone ? 30 : "" }} />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Bannertext;
