import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "@/logo/Digixito_Logo.svg";
import Image from "next/image";
import employLogo from "@/logo/employ_virtual.svg";
import ecomLogo from "@/logo/eComGuru.svg";
const SubFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.PRIMARY,
        position: "relative",
        height: "40vh",
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
            fontSize: 25,
            fontFamily: monument.style.fontFamily,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </Typography>

        {/* <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={5}
          sx={{ mt: 4 }}
        >
          <Image src={employLogo} alt="employee logo" height={80} />
          <Divider
          orientation="vertical"
          flexItem
          sx={{ height: 100, borderColor: COLORS.BLACK }}
          />
          <Image src={ecomLogo} alt="ecom logo" height={80} />
          </Stack> */}

        <Grid container sx={{ mt: 4 }}>
          <Grid
            size={6}
            sx={{ textAlign: "center", borderRight: "1px solid #000" }}
          >
            <Image src={employLogo} alt="employee logo" height={80} />
          </Grid>
          <Grid
            size={6}
            sx={{ textAlign: "center", borderLeft: "1px solid #000", px: 7 }}
          >
            <Image src={ecomLogo} alt="employee logo" height={80} />
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
