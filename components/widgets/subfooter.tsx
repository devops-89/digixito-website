import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "@/logo/Digixito_Logo.svg";
import Image from "next/image";
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
        </Typography>
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
