import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import star from "@/icons/black-star.svg";
import Image from "next/image";
import heroImage1 from "@/banners/details_hero_Section1.png";
import StarCard from "@/components/widgets/star-card";
import heroImage2 from "@/homepage/best-service2.png";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
import PageHeading from "@/components/widgets/page-heading";

const HeroSection = () => {
  const { data } = useDetailsStore();
  const heroData = data as DETAILS_PAGE_PROPS | null;

  if (!heroData) {
    return null;
  }

  // Split heading by "&" to maintain the visual style with bold emphasis
  const headingParts = heroData.heroSection.heading.split(" & ");
  const hasAmpersand = headingParts.length > 1;
  return (
    <Box>
      <Container maxWidth="lg">
        <PageHeading page_name="What we offer" page_title={heroData.title} />

        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: hasAmpersand ? 30 : 50,
                fontFamily: monument.style.fontFamily,
                fontWeight: hasAmpersand ? 400 : 800,
              }}
            >
              {hasAmpersand ? (
                <>
                  {headingParts[0]}{" "}
                  <Typography
                    sx={{
                      fontFamily: monument.style.fontFamily,
                      fontSize: 50,
                      fontWeight: 800,
                    }}
                    component={"span"}
                  >
                    & {headingParts[1]}
                  </Typography>
                </>
              ) : (
                heroData.heroSection.heading
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 500,
                fontFamily: kessel.style.fontFamily,
                lineHeight: "35px",
                whiteSpace: "pre-line",
              }}
            >
              {heroData.heroSection.description}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button
                sx={{
                  backgroundColor: COLORS.BLACK,
                  color: COLORS.PRIMARY,
                  padding: "10px 34px",
                  borderRadius: "60px",
                  fontFamily: monument.style.fontFamily,
                  //   width: 203,
                  height: 48,
                }}
              >
                Call to Action
              </Button>
              <Button
                sx={{
                  backgroundColor: COLORS.TRANSPARENT,
                  color: COLORS.BLACK,
                  padding: "10px 34px",
                  borderRadius: "60px",
                  fontFamily: monument.style.fontFamily,
                  //   width: 203,
                  height: 48,
                  border: "1px solid #000",
                }}
              >
                Call to Action
              </Button>
            </Stack>
          </Grid>
          <Grid size={6}>
            <Stack spacing={4}>
              <StarCard
                backgroundImage={heroImage1.src}
                height="250px"
                heading="Enhance customer"
                boldHeading="Experiences"
              />

              <StarCard
                backgroundImage={heroImage2.src}
                isStar={true}
                iconPosition="bottom"
                height="250px"
                heading="Reduce human "
                boldHeading="error"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
