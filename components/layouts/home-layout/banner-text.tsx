"use client";
import star from "@/icons/star-banner.svg";
import { useHomepageData } from "@/store/useHomepageData";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
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
          dat-aos="fade-up"
        >
          {pageData?.heroSection?.bannerText?.map(
            (val: { heading: string }, i: number) => (
              <React.Fragment key={i}>
                <Typography
                component="h4"
                variant="h4"
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
