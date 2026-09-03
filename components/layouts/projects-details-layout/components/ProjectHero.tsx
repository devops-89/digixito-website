import { COLORS } from "@/utils/enum";
import { Box, Typography, Grid } from "@mui/material";
import { archivo } from "@/utils/fonts";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import BlurText from "@/components/BlurText";

const MotionBox = motion(Box);

interface ProjectHeroProps {
  img: string | StaticImageData;
  title: string;
}

const ProjectHero = ({ img, title }: ProjectHeroProps) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 0, 
        pb: { xs: 6, md: 10 },
        backgroundColor: COLORS.WHITE,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1400px",
          backgroundColor: "#F8F9FA",
          borderRadius: { xs: "0 0 32px 32px", md: "0 0 48px 48px" },
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 10 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        {/* Decorative background element */}
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.PRIMARY}15 0%, transparent 70%)`,
            top: "-100px",
            right: "-100px",
            zIndex: 0,
          }}
        />

        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center" sx={{ zIndex: 1, position: "relative" }}>
          {/* Left Side: Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <Box sx={{ width: "100%", position: "relative", minHeight: "120px", display: "flex", alignItems: "center" }}>
                <BlurText
                  text={title}
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="blur-text-hero"
                />
              </Box>
              <style jsx global>{`
                .blur-text-hero {
                  font-family: "Inter", "Roboto", "Helvetica Neue", sans-serif;
                  font-weight: 800;
                  color: #1F2326;
                  font-size: clamp(2.5rem, 6vw, 4.5rem);
                  text-transform: capitalize;
                  letter-spacing: -0.02em;
                  line-height: 1.1;
                }
              `}</style>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 40, height: 2, backgroundColor: COLORS.PRIMARY }} />
                <Typography
                  sx={{
                    fontFamily: archivo.style.fontFamily,
                    color: COLORS.PRIMARY,
                    fontSize: { xs: 16, md: 20 },
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  by Digixito
                </Typography>
                <Box sx={{ width: 40, height: 2, backgroundColor: COLORS.PRIMARY }} />
              </Box>
            </MotionBox>
          </Grid>

          {/* Right Side: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              sx={{ 
                width: "100%", 
                display: "flex", 
                justifyContent: "center",
                transition: "transform 0.4s ease"
              }}
            >
              <Image
                src={img}
                alt={title}
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "65vh",
                  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))",
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectHero;
