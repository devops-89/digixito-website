"use client";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import logo from "@/logo/Digixito_Logo.svg";
import Image from "next/image";
import employLogo from "@/logo/employ_virtual.svg";
import ecomLogo from "@/logo/eComGuru.svg";
const SubFooter = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        backgroundColor: COLORS.PRIMARY,
        position: "relative",
        height: { lg: "40vh", xs: "100%" },
        py: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: monument.style.fontFamily,
            fontSize: { lg: 38, xs: 30 },
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Thank you for your Interest in Digixito.
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            mt: 4,
            fontSize: { lg: 25, xs: 20 },
            fontFamily: monument.style.fontFamily,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </Typography>

        <Grid container sx={{ mt: 4 }} spacing={4}>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{
              textAlign: "center",
              borderRight: { lg: "1px solid #000", xs: "none" },
            }}
          >
            <Image
              src={employLogo}
              alt="employee logo"
              height={phone ? 60 : 80}
            />
          </Grid>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{
              textAlign: "center",
              borderLeft: { lg: "1px solid #000", xs: "none" },
              px: 7,
            }}
          >
            <Image
              src={ecomLogo}
              alt="employee logo"
              height={phone ? 40 : 80}
            />
          </Grid>
        </Grid>

        {/* <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: 26, xs: 20 },
            fontFamily: kessel.style.fontFamily,
            fontWeight: 500,
            lineHeight: "39px",
            letterSpacing: "-0.156px",
            mt: 4,
          }}
        >
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </Typography> */}
        {/* <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image src={logo} alt="" />
        </Box> */}
      </Container>
    </Box>
  );
};

export default SubFooter;
