"use client";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import Ourvalues from "./our-values";
import OurMission from "./our-mission";
import ServiceSection from "../home-layout/service-section";
import OurTeams from "./out-teams";
import Testimonials from "@/components/widgets/testimonial";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { kessel, monument } from "@/utils/fonts";
import ecomguru from "@/logo/eComGuru.svg";
import employ from "@/logo/employ_virtual.svg";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { useMediaQuery } from "@mui/material";
const AboutLayout = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ my: 10 }}>
      <AboutHeroSection />
      <Ourvalues />
      <OurMission />
      <ServiceSection />
      <OurTeams />
      <Box sx={{ my: 5 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { lg: 40, xs: 30 },
            fontFamily: monument.style.fontFamily,
            mb: 1,
          }}
        >
          Our Group Companies
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: kessel.style.fontFamily,
          }}
        >
          An integrated group of companies aligned with Digixito’s mission to
          build powerful digital experiences and sustainable growth.
        </Typography>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems={"center"}
            spacing={2}
            justifyContent={"center"}
          >
            <Image src={ecomguru} alt="" style={{ width: phone ? 100 : 250 }} />
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: 100,
                alignSelf: "center",
                borderColor: COLORS.BLACK,
              }}
            />
            <Image src={employ} alt="" style={{ width: phone ? 100 : 250 }} />
          </Stack>
        </Container>
      </Box>
      {/* <Testimonials /> */}
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default AboutLayout;
