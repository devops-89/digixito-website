import StarCard from "@/components/widgets/star-card";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { BEST_SERVICE_CARD_PROPS } from "@/utils/types";
import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import bgImage1 from "@/homepage/best-service1.png";
import bgImage2 from "@/homepage/best-service2.png";
const BestService = () => {
  return (
    <Container sx={{ pt: 50 }}>
      <Grid container spacing={3}>
        <Grid size={6}>
          <Typography
            sx={{
              fontFamily: monument.style.fontFamily,
              fontSize: 28,
              fontWeight: 400,
              lineHeight: "42px",
            }}
          >
            Provide the best service with out of the box ideas
          </Typography>
          <Divider sx={{ borderColor: COLORS.BLACK, width: "90%" }} />
        </Grid>
        <Grid size={6}>
          <Typography
            sx={{
              fontSize: 19,
              fontWeight: 500,
              lineHeight: "30px",
              fontFamily: kessel.style.fontFamily,
            }}
          >
            we are a passionate team of enthusiasts dedicated to helping
            businesses succeed in the digital world. With years of experience
            and a deep understanding of the ever evolving online landscape, we
            stay at the forefront of industry trends and technologies.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }} spacing={5}>
        <Grid size={7.5}>
          <StarCard backgroundImage={bgImage1.src} iconPosition="top" />
        </Grid>
        <Grid size={4.5}>
          <StarCard
            heading="Genesis to"
            boldHeading="Greatest Creation."
            backgroundImage={bgImage2.src}
            iconPosition="bottom"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BestService;
