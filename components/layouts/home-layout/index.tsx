"use client";
import { useFetchJson } from "@/components/hooks/useFetchData";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import Testimonials from "@/components/widgets/testimonial";
import star from "@/icons/black-star.svg";
import { useHomepageData } from "@/store/useHomepageData";
import { COLORS } from "@/utils/enum";
import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import Bannertext from "./banner-text";
import BestService from "./best-services";
import BestWorks from "./best-works";
import GridSection from "./grid-section";
import HowitWorks from "./how-it-works";
import ServiceSection from "./service-section";
import SimpleHeroSection from "./Simple-Hero-Section";
import MobileHeroSection from "./Mobile-Hero-Section";
const HomeLayouts = () => {
  const phone = useMediaQuery("(max-width:600px)");

  const { pageData, setPageData, cleanPageData } = useHomepageData();
  const { data, error, loading } = useFetchJson("/locale/homepage.json");

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
      <Box sx={{ backgroundColor: COLORS.WHITE }}>
        {/* <Bannertext /> */}
        {/* <Container>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              sx={{ backgroundColor: COLORS.BLACK, width: "100%", height: 2 }}
            ></Box>
            <Image src={star} alt="divider star" />
            <Box
              sx={{ backgroundColor: COLORS.BLACK, width: "100%", height: 2 }}
            ></Box>
          </Stack>
        </Container> */}
      </Box>
      {/* <GridSection />
      {phone ? <MobileHeroSection /> : <SimpleHeroSection />} */}
      <SimpleHeroSection />
      {/* <ScrollParticles /> */}
      <BestService />
      <ServiceSection />
      <HowitWorks />
      {/* <BestWorks />
      <Testimonials /> */}
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default HomeLayouts;
