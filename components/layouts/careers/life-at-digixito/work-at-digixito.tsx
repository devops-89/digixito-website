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
    <Box sx={{ py: { xs: 4, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={{ md: 3, xs: 1 }}
          justifyContent={"flex-start"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                border: "1px solid #000",
                height: "2px",
                width: { lg: 550, md: 350 },
                backgroundColor: COLORS.BLACK,
              }}
            ></Box>
            <Image src={star} alt="" />
          </Stack>
          <Typography
            sx={{
              fontSize: { lg: 32, md: 28, xs: 18 },
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            Work at
          </Typography>
          <ImageHeading title="Digixito" />
        </Stack>
        <Grid
          container
          sx={{ py: { xs: 6, md: 10 }, alignItems: "flex-start" }}
        >
          <Grid
            size={{ lg: 5, xs: 12 }}
            sx={{ position: { lg: "sticky", xs: "static" }, top: 100 }}
          >
            <Stack direction={"column"} spacing={0} sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: { lg: 32, md: 28, xs: 20 },
                  fontFamily: kessel.style.fontFamily,
                  lineHeight: 1.2,
                  letterSpacing: "-0.63px",
                  fontWeight: 500,
                }}
              >
                What we value
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 32, md: 28, xs: 20 },
                  fontFamily: kessel.style.fontFamily,
                  lineHeight: 1.2,
                  letterSpacing: "-0.63px",
                  fontWeight: 500,
                }}
              >
                and how we act
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 18, xs: 16 },
                fontFamily: kessel.style.fontFamily,
                lineHeight: 1.6,
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
