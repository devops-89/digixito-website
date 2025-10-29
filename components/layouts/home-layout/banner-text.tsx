import { monument } from "@/utils/fonts";
import { Box, Container, Stack, Typography } from "@mui/material";
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
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {text.map((val, i) => (
            <React.Fragment key={i}>
              <Typography
                sx={{
                  fontSize: 62,
                  fontWeight: 800,
                  fontFamily: monument.style.fontFamily,
                }}
              >
                {val.label}
              </Typography>
              {text.length - 1 != i && <Image src={star} alt="" />}
            </React.Fragment>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Bannertext;
