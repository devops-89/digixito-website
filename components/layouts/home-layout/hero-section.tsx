import { useHomepageData } from "@/store/useHomepageData";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import ThreeGalaxy from "./components/Galaxy";

const HeroSection = () => {
  const { pageData } = useHomepageData();

  // console.log("hero section data", pageData);
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: monument.style.fontFamily,
            fontSize: 25,
            color: COLORS.WHITE,
            textAlign: "center",
          }}
          data-aos="fade-up"
        >
          {pageData?.heroSection?.heroSectionTitle}
        </Typography>
      </Container>
      <Box>
        <ThreeGalaxy />
      </Box>
    </Box>
  );
};

export default HeroSection;
