import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { kessel_bold } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";

interface ProjectImagesSectionProps {
  images?: any[];
}

const ProjectImagesSection: React.FC<ProjectImagesSectionProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 15 } }}>
      <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
        <Typography
          className="dev-animate-up"
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#000000",
            mb: 2,
          }}
        >
          Project Gallery
        </Typography>
        <Box
          className="dev-animate-up"
          sx={{
            width: "60px",
            height: "3px",
            bgcolor: COLORS.PRIMARY,
            mx: "auto",
          }}
        />
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        {images.map((imgUrl: any, idx: number) => {
          const src = typeof imgUrl === "string" ? imgUrl : imgUrl?.src;
          return (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Box
                className="dev-animate-up"
                sx={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  bgcolor: "#f9f9f9",
                  "&:hover": {
                    "& .parallax-img": { transform: "scale(1.02)" },
                  },
                }}
              >
                <Box
                  className="parallax-img"
                  component="img"
                  src={src}
                  alt={`Project image ${idx + 1}`}
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    transform: "scale(1.0)",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ProjectImagesSection;
