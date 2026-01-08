"use client";
import star from "@/icons/white-star.png";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Bannertext from "./banner-text";
import { COLORS } from "@/utils/enum";
import GridSection from "./grid-section";
import { monument } from "@/utils/fonts";
import BestService from "./best-services";
import ServiceSection from "./service-section";
import HowitWorks from "./how-it-works";
import BestWorks from "./best-works";
import Testimonials from "@/components/widgets/testimonial";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import signDigixito from "@/banners/digixito-sign.png";
import ScrollParticles from "./components/particles-morph";
import HeroSection from "./hero-section";
import { useEffect, useEffectEvent } from "react";
import Aos from "aos";
import { useHomepageData } from "@/store/useHomepageData";
import { useFetchJson } from "@/components/hooks/useFetchData";
const HomeLayouts = () => {
  const phone = useMediaQuery("(maxWidth:600px)");

  const { pageData, setPageData, cleanPageData } = useHomepageData();
  const { data, error, loading } = useFetchJson("/locale/homepage.json");

  console.log("homepage data", data);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [setPageData, data]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Box sx={{ backgroundColor: COLORS.BLACK }}>
        <Bannertext />

        <Container>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              sx={{ backgroundColor: COLORS.WHITE, width: "100%", height: 2 }}
            ></Box>
            <Image src={star} alt="divider star" />
            <Box
              sx={{ backgroundColor: COLORS.WHITE, width: "100%", height: 2 }}
            ></Box>
          </Stack>
        </Container>
      </Box>
      <GridSection />

      {/* <ScrollParticles /> */}
      <BestService />
      <ServiceSection />
      <HowitWorks />
      <BestWorks />
      <Testimonials />
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default HomeLayouts;
