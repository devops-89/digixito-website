"use client";
import { useFetchJson } from "@/components/hooks/useFetchData";
import FaqSection from "@/components/widgets/faq-section";
import SecureConnect from "@/components/widgets/secure-connect";
import SubFooter from "@/components/widgets/subfooter";
import { useHomepageData } from "@/store/useHomepageData";
import { COLORS } from "@/utils/enum";
import { Box, useMediaQuery } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";
import BestService from "./best-services";
import HeroSection3 from "./components/HeroSection3";
import HowitWorks from "./how-it-works";
import OurProjects from "./Our-Projects";
import ServiceSection from "./service-section";
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
    Aos.init({ duration: 1000, mirror: true });
  }, []);

  return (
    <Box>
      <Box sx={{ backgroundColor: COLORS.WHITE }}></Box>

      {/* <SimpleHeroSection /> */}
      <HeroSection3 />

      <BestService />
      <ServiceSection />
      <HowitWorks />
      {/* <BestWorks /> */}
      <OurProjects />
      <FaqSection />
      <SecureConnect />
      <SubFooter />
    </Box>
  );
};

export default HomeLayouts;
