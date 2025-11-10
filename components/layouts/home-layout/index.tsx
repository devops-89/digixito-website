import star from "@/icons/black-star.svg";
import { Box, Container, Divider, Typography } from "@mui/material";
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
const HomeLayouts = () => {
  return (
    <Box>
      <Bannertext />
      <Container>
        <Divider sx={{ borderColor: COLORS.BLACK }}>
          <Image src={star} alt="divider star" />
        </Divider>
      </Container>
      <GridSection />
      <Container sx={{ position: "relative" }}>
        <Image
          src={signDigixito}
          alt=""
          style={{ width: "100%", position: "absolute" }}
        />
        {/* <Typography
          sx={{
            fontSize: 160,
            fontFamily: monument.style.fontFamily,
            textAlign: "center",
            color: COLORS.LIGHT_GRAY,
            letterSpacing: "45px",
            lineHeight: "220px",
          }}
        >
          Digixito
        </Typography> */}
      </Container>
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
