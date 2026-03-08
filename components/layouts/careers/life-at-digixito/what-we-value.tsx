import React from "react";
import borderTop from "@/homepage/primary-rotatable-border.png";
import borderDown from "@/homepage/primary-rotatable-border-down.png";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { monument } from "@/utils/fonts";
import ImageHeading from "@/components/widgets/image-heading";
import { COLORS } from "@/utils/enum";
import star from "@/icons/gold-star.svg";
import WhatWeValueCard from "./components/whar-we-value-card";
import { WHAT_WE_VALUE_CARD_PROPS } from "@/assets/data/generic-array";
const WhatweValue = () => {
  return (
    <div>
      <Box sx={{ position: "relative", mt: { xs: 6, md: 10 } }}>
        <Image
          src={borderTop}
          alt=""
          style={{
            width: "100%",
            position: "absolute",
            top: -20,
            zIndex: 0,
            height: 50,
          }}
        />

        <Box
          sx={{
            backgroundColor: "#222222",
            height: "100%",
            width: "100%",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 6, md: 10 },
          }}
        >
          <Container maxWidth="lg">
            <Stack direction={"row"} alignItems={"flex-start"} spacing={5}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                spacing={3}
              >
                <Typography
                  sx={{
                    fontFamily: monument.style.fontFamily,
                    fontSize: { lg: 40, xs: 28 },
                    fontWeight: 400,
                    color: COLORS.WHITE,
                  }}
                >
                  What
                </Typography>
                <ImageHeading title="We value" />
              </Stack>
              <Image
                src={star}
                alt="gold star"
                style={{ width: 30, alignSelf: "flex-start", marginTop: -20 }}
              />
            </Stack>
            {WHAT_WE_VALUE_CARD_PROPS.map((val, i) => (
              <Box key={i} sx={{ my: 5 }}>
                <WhatWeValueCard
                  data={val.data}
                  img={val.img}
                  objPath={val.objPath}
                  isReverse={val.isReverse}
                />
              </Box>
            ))}
          </Container>
        </Box>
        <Image
          src={borderDown}
          alt=""
          style={{
            width: "100%",
            position: "absolute",
            bottom: -20,
            zIndex: 0,
            height: 50,
          }}
        />
      </Box>
    </div>
  );
};

export default WhatweValue;
