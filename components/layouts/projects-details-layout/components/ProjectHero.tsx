import { Box, Typography, Container } from "@mui/material";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

const MotionBox = motion(Box);

interface ProjectHeroProps {
  img: string | StaticImageData;
  title: string;
}

const ProjectHero = ({ img, title }: ProjectHeroProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 4, md: 8 },
        pb: { xs: 2, md: 4 },
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            pb: 2,
            mb: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#1F2326",
                fontWeight: 600,
                fontSize: { xs: "2rem", md: "3rem" },
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {title}
            </Typography>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                color: "#FFEF46",
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: 600,
                textShadow: "0px 1px 2px rgba(0,0,0,0.1)", // Add subtle shadow for readability on light bg
              }}
            >
              Project Details
            </Typography>
          </MotionBox>
        </Box>

        {/* Hero Mockup Image Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: { xs: "24px", md: "48px" },
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          {/* Yellow Curtain Reveal Animation */}
          <MotionBox
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 239, 70, 0.4)", // Very light semi-transparent yellow
              zIndex: 2,
            }}
          />

          <MotionBox
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            sx={{ display: "flex", width: "100%", height: "100%" }}
          >
            <Image
              src={img || "/images/projects/heroimg.jpg"}
              alt={`${title} Hero Background`}
              width={1400}
              height={900}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
              priority
            />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectHero;

