"use client";
import ProjectCard2 from "@/components/layouts/home-layout/components/ProjectCard2";
import { OLD_PROJECTS_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "motion/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MotionBox = motion(Box);

interface Props {
  currentSlug: string;
}

const MoreProjects = ({ currentSlug }: Props) => {
  const moreProjects = OLD_PROJECTS_DATA.filter((p) => p.slug !== currentSlug);

  if (!moreProjects || moreProjects.length === 0) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 8, md: 12 },
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
              fontWeight: 700,
              color: "#111111",
              mb: 2,
              fontSize: { xs: 32, md: 48 },
              letterSpacing: "-0.02em",
            }}
          >
            More Projects
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              backgroundColor: COLORS.PRIMARY,
              mx: "auto",
              borderRadius: 2,
            }}
          />
        </MotionBox>

        <Box sx={{ width: "100%", pb: 4 }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              900: { slidesPerView: 2.2 },
              1200: { slidesPerView: 3 },
            }}
            grabCursor={true}
            style={{ paddingBottom: "60px", paddingTop: "20px" }}
          >
            {moreProjects.map((project, idx) => (
              <SwiperSlide key={project.slug}>
                <ProjectCard2 {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default MoreProjects;
