import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import dhurmaati from "@/projects/DHURMAATI.jpg";
import { kessel, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { ArrowForward } from "@mui/icons-material";
const BestWorkCard = () => {
  const chipData = [
    {
      label: "UX Research",
    },
    {
      label: "Wireframe",
    },
    {
      label: "Visual Design",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          border: "8px solid #ffffff",
          borderRadius: "32px",
          backgroundColor: "#E5E7EC",
          boxShadow: "0 6px 24px 0 rgba(0, 0, 0, 0.08)",
          width: { lg: "90%", xs: 220 },
          height: { lg: 500, xs: 120 },
          margin: "auto",
          overflow: "hidden",
        }}
      >
        <Image
          src={dhurmaati}
          alt="dhurmaati"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Stack
        direction={{ lg: "row", xs: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        mt={4}
        sx={{ flexWrap: "wrap", gap: 2 }}
      >
        {chipData.map((val, i) => (
          <Chip
            sx={{
              padding: "6px 12px",
              backgroundColor: "#F0F0F0",
              borderRadius: "32px",
              fontFamily: kessel.style.fontFamily,
              color: "#888",
              fontSize: 16,
              letterSpacing: "-0.18px",
              mt: 2,
            }}
            label={val.label}
            key={i}
          />
        ))}
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={1}
        justifyContent={"center"}
        mt={2}
      >
        <Typography
          sx={{
            fontFamily: monument.style.fontFamily,
            fontSize: { lg: 32, xs: 20 },
            fontWeight: 400,
            letterSpacing: "-0.32px",
            textAlign: "center",
            color: COLORS.WHITE,
          }}
        >
          Intelligent Experience
        </Typography>
        <IconButton
          sx={{
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            rotate: "-45deg",
            ":hover": {
              backgroundColor: COLORS.PRIMARY,
            },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Stack>

      <Typography
        sx={{
          fontSize: { lg: 25, xs: 16 },
          textAlign: "center",
          fontFamily: kessel.style.fontFamily,
          lineHeight: { lg: "45px", xs: "30px" },
          letterSpacing: "-0.28px",
          fontWeight: 400,
          color: COLORS.WHITE,
          px: { lg: 3, xs: 1 },
          my: 2,
        }}
      >
        We start every project by decoding our client’s goals, challenges, and
        users. For Coca, our process combined research and strategy to design a
        landing experience that’s both functional and visually engaging — built
        to convert insight into impact.
      </Typography>
    </Box>
  );
};

export default BestWorkCard;
