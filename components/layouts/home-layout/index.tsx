import star from "@/icons/black-star.svg";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Bannertext from "./banner-text";
import { COLORS } from "@/utils/enum";
import GridSection from "./grid-section";
import { monument } from "@/utils/fonts";
import BestService from "./best-services";
import ServiceSection from "./service-section";
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
      <Container>
        <Typography
          sx={{
            fontSize: 180,
            fontFamily: monument.style.fontFamily,
            textAlign: "center",
            color: COLORS.LIGHT_GRAY,
            letterSpacing: "43.56px",
            lineHeight: "220px",
          }}
        >
          Digixito
        </Typography>
      </Container>
      <BestService />
      <ServiceSection />
    </Box>
  );
};

export default HomeLayouts;
