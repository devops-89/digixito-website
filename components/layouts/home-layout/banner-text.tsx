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
import { COLORS } from "@/utils/enum";
import { useHomepageData } from "@/store/useHomepageData";
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

  const { pageData } = useHomepageData();

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={{ lg: "row", xs: "row" }}
          alignItems={{ lg: "center", xs: "center" }}
          justifyContent={{ lg: "center", xs: "center" }}
          spacing={{ lg: 5, xs: 2 }}
          sx={{ ml: { lg: 8, xs: 0 } }}
        >
          {pageData?.heroSection?.bannerText?.map(
            (val: { heading: string }, i: number) => (
              <React.Fragment key={i}>
                <Typography
                  sx={{
                    fontSize: { lg: 50, xs: 15 },
                    fontWeight: 800,
                    fontFamily: monument.style.fontFamily,
                    color: COLORS.WHITE,
                  }}
                >
                  {val.heading}
                </Typography>
                {text.length - 1 != i && (
                  <Image
                    src={star}
                    alt=""
                    style={{ height: phone ? 30 : "" }}
                  />
                )}
              </React.Fragment>
            )
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Bannertext;
