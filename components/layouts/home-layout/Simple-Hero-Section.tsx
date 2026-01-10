"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import heroImage from "@/homepage/hero.png";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import heroVectorMan from "@/homepage/hero_vector.png";
import Image from "next/image";
import analytics from "@/homepage/analytics-graph-line-triple.png";
import arrow from "@/homepage/arrow.png";
import Bannertext from "./banner-text";
import star from "@/icons/white-star.png";
import scroll from "@/homepage/mouse.svg";
import Link from "next/link";
import DecryptedText from "@/components/widgets/Decrypted-Text";
const SimpleHeroSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${heroImage.src})`,
          height: { lg: "90vh", sm: "60vh", xs: "100%" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: { lg: 10, xs: 20 },
          pb: { lg: 2, xs: 1 },
        }}
      >
        <Container maxWidth="lg">
          {/* <Box>
            <Stack
              direction={{ lg: "row", xs: "row" }}
              alignItems={"center"}
              spacing={2}
            >
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: monument.style.fontFamily,
                  fontSize: { lg: 100, xs: 50 },
                  fontWeight: 400,
                  lineHeight: "148px",
                  letterSpacing: "-5.208px",
                }}
              >
                Concept to
              </Typography>
              <Image
                src={heroVectorMan}
                alt="hero vector man"
                style={{
                  marginTop: phone ? 0 : -110,
                  width: phone ? 200 : 250,
                }}
              />
            </Stack>
            <Stack
              direction={{ lg: "row", xs: "row" }}
              alignItems={"center"}
              spacing={4}
              sx={{ ml: {} }}
            >
              <Image src={analytics} alt="analytics" style={{ width: 100 }} />

              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontFamily: monument.style.fontFamily,
                  fontSize: { lg: 100, xs: 50 },
                  fontWeight: 400,
                  lineHeight: "148px",
                  letterSpacing: "-5.208px",
                }}
              >
                Conquest.
              </Typography>
              <Image
                src={arrow}
                alt="arrow"
                style={{ width: phone ? 100 : 150 }}
              />
            </Stack>
            <Typography
              sx={{
                color: COLORS.WHITE,
                mt: 2,
                fontSize: { lg: 28, xs: 20 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                letterSpacing: "1.12px",
              }}
            >
              Engineering 360’ digital experiences for the world’s leading
              brands
            </Typography>

            <Box sx={{ mt: { lg: 19, xs: 5 } }}>
              <Bannertext />
            </Box>

            <Container>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Box
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    width: "100%",
                    height: 2,
                  }}
                ></Box>
                <Image src={star} alt="divider star" />
                <Box
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    width: "100%",
                    height: 2,
                  }}
                ></Box>
              </Stack>
            </Container>
          </Box> */}
          <Box>
            <Typography
              sx={{
                fontSize: { lg: 70, xs: 40 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                lineHeight: { lg: "148px", xs: "50px" },
                color: COLORS.WHITE,
                textAlign: "center",
              }}
            >
              Concept to Conquest.
            </Typography>
            {/* <DecryptedText
              text="Concept to Conquest."
              speed={50}
              maxIterations={10}
              sequential={false}
              revealDirection="start"
              useOriginalCharsOnly={false}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
              className=""
              parentClassName=""
              encryptedClassName=""
              animateOn="hover"
            /> */}
            <Typography
              sx={{
                fontSize: { lg: 35, xs: 20 },
                fontWeight: 500,
                fontFamily: kessel.style.fontFamily,
                textAlign: "center",
                color: COLORS.WHITE,
                mt: 3,
              }}
            >
              Engineering 360° digital experiences from concept to conquest
            </Typography>
            <Stack
              direction={{ lg: "row", xs: "column" }}
              alignItems="center"
              justifyContent={"center"}
              spacing={4}
              sx={{ mt: 5 }}
            >
              <Button
                component={Link}
                href="/about-us"
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  width: 250,
                  color: COLORS.BLACK,
                  fontFamily: kessel.style.fontFamily,
                  textTransform: "capitalize",
                  fontSize: 16,
                  borderRadius: "160px",
                  p: 2,
                }}
              >
                Know more about us
              </Button>
              <Button
                component={Link}
                href="/contact-us"
                sx={{
                  width: 250,
                  color: COLORS.PRIMARY,
                  fontFamily: kessel.style.fontFamily,
                  textTransform: "capitalize",
                  fontSize: 16,
                  borderRadius: "160px",
                  p: 2,
                  border: `1px solid ${COLORS.PRIMARY}`,
                }}
              >
                Connect With Us
              </Button>
            </Stack>
            <Box sx={{ textAlign: "center", my: 7 }}>
              <Image src={scroll} alt="scroll" />
            </Box>
            <Bannertext />
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Box
                sx={{
                  backgroundColor: COLORS.WHITE,
                  width: "100%",
                  height: 2,
                }}
              ></Box>
              <Image src={star} alt="divider star" />
              <Box
                sx={{
                  backgroundColor: COLORS.WHITE,
                  width: "100%",
                  height: 2,
                }}
              ></Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SimpleHeroSection;
