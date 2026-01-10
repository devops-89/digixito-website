import heroImage1 from "@/banners/details_hero_Section1.png";
import PageHeading from "@/components/widgets/page-heading";
import StarCard from "@/components/widgets/star-card";
import heroImage2 from "@/homepage/best-service2.png";
import { useDetailsStore } from "@/store/useDetailsStore";
import { kessel, monument } from "@/utils/fonts";
import { DETAILS_PAGE_PROPS } from "@/utils/types";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const ServicesLayoutHeroSection = ({
  title,
  heading,
  description,
  quote1simple,
  quote2simple,
  quote1bold,
  quote2bold,
}: {
  title: string;
  heading: string;
  description: string;
  quote1simple: string;
  quote2simple: string;
  quote1bold: string;
  quote2bold: string;
}) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <PageHeading page_name="What we offer" page_title={title} />

        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
            <Typography
              sx={{
                fontSize: { lg: 50, xs: 20, sm: 20 },
                fontFamily: monument.style.fontFamily,
                fontWeight: 800,
                mb: 3,
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 19, xs: 15, sm: 15 },
                fontWeight: 500,
                fontFamily: kessel.style.fontFamily,
                lineHeight: { lg: "35px", xs: "25px", sm: "25px" },
                whiteSpace: "pre-line",
              }}
            >
              {description}
            </Typography>
            {/* <Stack
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
            </Stack> */}
          </Grid>
          <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
            <Stack spacing={4}>
              <StarCard
                backgroundImage={heroImage1.src}
                height={{ lg: "250px", xs: "200px", sm: "200px" }}
                heading={quote1simple}
                boldHeading={quote1bold}
              />

              <StarCard
                backgroundImage={heroImage2.src}
                isStar={true}
                iconPosition="bottom"
                height={{ lg: "250px", xs: "200px", sm: "200px" }}
                heading={quote2simple}
                boldHeading={quote2bold}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesLayoutHeroSection;
