"use client";
import { BlurText } from "@/components/widgets/BlurText";
import heroImage from "@/homepage/hero.png";
import scroll from "@/homepage/mouse.svg";
import star from "@/icons/white-star.png";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Bannertext from "./banner-text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
          <Box>
            {/* <Typography
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
            </Typography> */}
            <BlurText
              text="Concept to Conquest."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
              sx={{
                fontSize: { lg: 70, xs: 40 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                lineHeight: { lg: "148px", xs: "50px" },
                color: COLORS.WHITE,
                textAlign: "center",
              }}
            />

            {/* <DecryptedText
              text="Concept to Conquest."
              speed={200}
              maxIterations={20}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              animateOn="view"
              sx={{
                fontSize: { lg: 70, xs: 40 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                lineHeight: { lg: "148px", xs: "50px" },
                color: COLORS.WHITE,
                textAlign: "center",
              }}
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
              data-aos="fade-up"
            >
              Engineering 360° digital experiences from concept to conquest
            </Typography>
            <Stack
              direction={{ lg: "row", xs: "column" }}
              alignItems="center"
              justifyContent={"center"}
              spacing={4}
              sx={{ mt: 5 }}
              data-aos="fade-up"
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
              <Image src={scroll} alt="scroll" data-aos="fade-up" />
              {/* <DotLottieReact
                src="/public/images/icons/Scroll-down.json"
                loop
                autoplay
              /> */}
            </Box>
            <Bannertext />
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              data-aos="fade-up"
            >
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
