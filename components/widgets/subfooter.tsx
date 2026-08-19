"use client";

import { COLORS } from "@/utils/enum";
import { archivo, monument } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

const SubFooter = () => {
  const phone = useMediaQuery("(max-width:600px)");
  const tablet = useMediaQuery("(max-width:1024px)");

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: COLORS.PRIMARY,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            mt: 4,
            fontSize: { lg: 25, xs: 16, sm: 20 },
            fontFamily: monument.style.fontFamily,
            fontWeight: 400,
            lineHeight: "140%",
            letterSpacing: "-0.03em",
            color: COLORS.BLACK,
          }}
        >
          Ready to elevate your story, sharpen your strategy, and get the
          attention you deserve? Let’s turn clarity into momentum.
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <Link href="/contact-us">
            <Button
              sx={{
                mt: 4,
                fontFamily: archivo.style.fontFamily,
                color: COLORS.BLACK,
                borderRadius: "50px",
                border: "1px solid" + COLORS.BLACK,
                padding: "12px 24px",
                fontWeight: 700,
                fontSize: 16,
                textTransform: "capitalize",
                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor: COLORS.BLACK,
                  color: COLORS.PRIMARY,
                  transform: "translateY(-2px)",
                },
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>

        {/* <Grid container sx={{ mt: 6 }} spacing={phone ? 2 : tablet ? 1 : 6}>
          <Grid
            size={{ lg: 6, xs: 12, sm: 6 }}
            sx={{
              textAlign: "center",
              borderRight: { lg: "1px solid #000", xs: "none" },
            }}
          >
            <Image
              src={employLogo}
              alt="employee logo"
              height={phone ? 30 : tablet ? 40 : 50}
            />
          </Grid>

          <Grid
            size={{ lg: 6, xs: 12, sm: 6 }}
            sx={{
              textAlign: "center",
              borderLeft: { lg: "none", xs: "none" },
              px: 7,
            }}
          >
            <Image
              src={ecomLogo}
              alt="employee logo"
              height={phone ? 30 : tablet ? 40 : 50}
            />
          </Grid>
        </Grid> */}

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

        {/* <Box sx={{ mt: { lg: 20, xs: 20 } }}></Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image src={logo} alt="" style={{ width: phone ? 200 : 400 }} />
        </Box> */}
      </Container>
    </Box>
  );
};

export default SubFooter;