"use client";
import ImageHeading from "@/components/widgets/image-heading";
import SectionCard from "@/components/widgets/section-card";
import { COLORS, VARIANTS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { ArrowBack, ArrowForward, ArrowRightAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import BestWorkCard from "./components/best-work-card";
import { PROJECT_DATA } from "@/assets/data/project-data";

const BestWorks = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0d0d0d", // Deep elegant black
        color: COLORS.WHITE,
        py: { lg: 15, xs: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Accent Graphics */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.PRIMARY}15 0%, transparent 70%)`,
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: `radial-gradient(circle, #4A90E215 0%, transparent 70%)`,
          filter: "blur(100px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SectionCard title="Featured Portfolio" variant={VARIANTS.PRIMARY} />

        <Stack
          direction={{ lg: "row", xs: "column" }}
          alignItems={{ lg: "flex-end", xs: "flex-start" }}
          justifyContent="space-between"
          spacing={4}
          mt={6}
          mb={{ lg: 10, xs: 6 }}
        >
          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 84, md: 60, xs: 40 },
                lineHeight: 1.05,
                color: COLORS.WHITE,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              Crafting <span style={{ color: COLORS.PRIMARY }}>Digital</span>{" "}
              <br /> Experiences
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 20, xs: 16 },
                color: "rgba(255,255,255,0.6)",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              Explore our curated selection of top-tier projects, where
              innovative design meets flawless execution to drive exceptional
              business results.
            </Typography>
          </Box>

          <Button
            endIcon={<ArrowRightAlt sx={{ fontSize: 32 }} />}
            sx={{
              color: COLORS.WHITE,
              fontSize: { lg: 18, xs: 16 },
              fontWeight: 600,
              textTransform: "none",
              pb: 1,
              borderRadius: 0,
              borderBottom: `2px solid ${COLORS.PRIMARY}`,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "transparent",
                color: COLORS.PRIMARY,
                paddingRight: "16px",
              },
            }}
          >
            View All Projects
          </Button>
        </Stack>

        <Box sx={{ position: "relative" }}>
          {/* Custom Navigation */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              position: { lg: "absolute", xs: "relative" },
              top: { lg: "50%", xs: "auto" },
              left: 0,
              right: 0,
              transform: { lg: "translateY(-50%)", xs: "none" },
              justifyContent: { lg: "space-between", xs: "center" },
              mb: { xs: 4, lg: 0 },
              zIndex: 10,
              pointerEvents: "none", // Let clicks pass through except on buttons
            }}
          >
            <IconButton
              className="best-work-prev"
              sx={{
                pointerEvents: "auto",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: COLORS.WHITE,
                width: { lg: 72, xs: 56 },
                height: { lg: 72, xs: 56 },
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                transform: { lg: "translateX(-40px)", xs: "none" },
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.BLACK,
                  transform: {
                    lg: "translateX(-40px) scale(1.1)",
                    xs: "scale(1.1)",
                  },
                  borderColor: COLORS.PRIMARY,
                },
              }}
            >
              <ArrowBack fontSize="large" />
            </IconButton>

            <IconButton
              className="best-work-next"
              sx={{
                pointerEvents: "auto",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: COLORS.WHITE,
                width: { lg: 72, xs: 56 },
                height: { lg: 72, xs: 56 },
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                transform: { lg: "translateX(40px)", xs: "none" },
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.BLACK,
                  transform: {
                    lg: "translateX(40px) scale(1.1)",
                    xs: "scale(1.1)",
                  },
                  borderColor: COLORS.PRIMARY,
                },
              }}
            >
              <ArrowForward fontSize="large" />
            </IconButton>
          </Stack>

          <Box
            sx={{
              mx: { lg: 8, xs: 0 },
              "& .swiper-pagination-bullet": {
                backgroundColor: "rgba(255,255,255,0.5)",
              },
              "& .swiper-pagination-bullet-active": {
                backgroundColor: COLORS.PRIMARY,
              },
            }}
          >
            <Swiper
              modules={[Navigation, EffectCreative, Autoplay, Pagination]}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                  opacity: 0,
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              grabCursor={true}
              loop={true}
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".best-work-prev",
                nextEl: ".best-work-next",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              style={{ paddingBottom: "60px" }}
            >
              {PROJECT_DATA.map((val, i) => (
                <SwiperSlide key={i}>
                  <BestWorkCard
                    img={val.img}
                    title={val.title}
                    description={val.description}
                    skills={val.skills}
                    slug={val.slug}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BestWorks;
