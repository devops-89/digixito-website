import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import star from "@/icons/black-star.svg";
import { kessel, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import ImageHeading from "@/components/widgets/image-heading";
import WorkatDigixitoCard from "./components/work-at-digixito-card";
import { WORK_AT_DIGIXITO_CARD_DATA } from "@/assets/data/generic-array";
const WorkatDigixito = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={"center"}
          spacing={{ lg: 3, xs: 5 }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Box
              sx={{
                border: "2px solid #000",
                height: 1,
                width: { lg: 550, xs: 350 },
                backgroundColor: COLORS.BLACK,
              }}
            ></Box>
            <Image src={star} alt="" />
          </Stack>
          <Typography
            sx={{
              fontSize: 40,
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
            }}
          >
            Work at
          </Typography>
          <ImageHeading title="Digixito" />
        </Stack>
        <Grid container sx={{ py: 10 }}>
          <Grid size={{ lg: 5, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 40, xs: 30 },
                fontFamily: kessel.style.fontFamily,
                lineHeight: "33px",
                letterSpacing: "-0.63px",
                fontWeight: 500,
              }}
            >
              What we value
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 40, xs: 30 },
                fontFamily: kessel.style.fontFamily,
                lineHeight: "33px",
                letterSpacing: "-0.63px",
                fontWeight: 500,
              }}
            >
              and how we act
            </Typography>
          </Grid>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontSize: 23,
                fontFamily: kessel.style.fontFamily,
                lineHeight: "30px",
                letterSpacing: "-0.48px",
                fontWeight: 500,
                textAlign: "justify",
              }}
            >
              Every day, we design, build, and innovate to redefine how
              technology empowers people and businesses. Creating meaningful
              digital products powered by AI, design, and data is both our
              passion and responsibility. Our work culture encourages open
              collaboration, constant learning, and fearless creativity. We take
              pride in how we show up for one another, for our clients, and for
              the future we’re building together.
            </Typography>

            <Grid container spacing={5} sx={{ mt: 10 }}>
              {WORK_AT_DIGIXITO_CARD_DATA.map((val, i) => (
                <Grid size={{ lg: 6, xs: 12 }} key={i}>
                  <WorkatDigixitoCard
                    serial_number={val.serial_number}
                    heading={val.heading}
                    description={val.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkatDigixito;
