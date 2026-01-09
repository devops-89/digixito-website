import StarCard from "@/components/widgets/star-card";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { BEST_SERVICE_CARD_PROPS } from "@/utils/types";
import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import bgImage1 from "@/homepage/best-service1.png";
import bgImage2 from "@/homepage/best-service2.png";
import { useHomepageData } from "@/store/useHomepageData";
const BestService = () => {
  const { pageData } = useHomepageData();
  return (
    <Container sx={{ pt: { lg: 10, xs: 5 } }}>
      <Grid container spacing={3}>
        <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
          <Typography
            sx={{
              fontFamily: monument.style.fontFamily,
              fontSize: { lg: 28, xs: 22 },
              fontWeight: 400,
              lineHeight: { lg: "42px", xs: "30px" },
            }}
          >
            Driving Conversions with our Creative Edge
          </Typography>
          <Divider sx={{ borderColor: COLORS.BLACK, width: "90%" }} />
        </Grid>
        <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
          <Typography
            sx={{
              fontSize: 19,
              fontWeight: 500,
              lineHeight: "30px",
              fontFamily: kessel.style.fontFamily,
              textAlign: "justify",
            }}
          >
            Our passionate & strategic team builds stronger businesses in a
            digital-first era. With our deep understanding of the ever-evolving
            online landscape, we stay at the forefront of industry trends and
            technologies.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }} spacing={5}>
        <Grid size={{ lg: 7.5, xs: 12, sm: 12 }} data-aos="fade-up">
          <StarCard
            backgroundImage={bgImage1.src}
            iconPosition="top"
            height={{ xs: "40vh", lg: "60vh", sm: "20vh" }}
          />
        </Grid>
        <Grid size={{ lg: 4.5, xs: 12, sm: 12 }} data-aos="fade-down">
          <StarCard
            heading="Genesis to"
            boldHeading="Greatest Creation."
            backgroundImage={bgImage2.src}
            iconPosition="bottom"
            height={{ xs: "40vh", lg: "60vh", sm: "20vh" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BestService;
