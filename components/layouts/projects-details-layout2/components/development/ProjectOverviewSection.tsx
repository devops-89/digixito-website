import React from "react";
import { Box, Container, Typography, Chip, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";

interface ProjectOverviewSectionProps {
  description?: string[];
  techStack?: string[];
  liveLink?: string;
}

const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({
  description,
  techStack,
  liveLink,
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 15 } }}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            className="dev-animate-up"
            sx={{
              fontFamily: kessel_bold.style.fontFamily,
              fontSize: "1.5rem",
              color: COLORS.BLACK,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 4,
              position: "relative",
              "&::after": {
                content: '""',
                display: "block",
                width: "50px",
                height: "3px",
                bgcolor: COLORS.PRIMARY,
                mt: 2,
              },
            }}
          >
            Project Overview
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          {description?.map((desc: string, i: number) => (
            <Typography
              key={i}
              className="dev-animate-up"
              sx={{
                fontFamily: archivo.style.fontFamily,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.8,
                mb: 4,
                color: "#444444",
                fontWeight: 300,
              }}
            >
              {desc}
            </Typography>
          ))}

          {/* TECH STACK & LIVE LINK */}
          {(techStack || liveLink) && (
            <Box className="dev-animate-up" sx={{ mt: 6 }}>
              {techStack && (
                <Box sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      fontFamily: kessel_bold.style.fontFamily,
                      fontSize: "1.1rem",
                      color: "#000000",
                      mb: 2,
                    }}
                  >
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                    {techStack.map((tech: string, index: number) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          bgcolor: COLORS.PRIMARY,
                          color: "#000000",
                          border: `1px solid ${COLORS.PRIMARY}`,
                          fontFamily: archivo.style.fontFamily,
                          fontWeight: "bold",
                          borderRadius: "8px",
                          px: 1,
                          "&:hover": {
                            bgcolor: "#000000",
                            borderColor: "#000000",
                            color: COLORS.PRIMARY,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {liveLink && (
                <Button
                  variant="outlined"
                  href={liveLink}
                  target="_blank"
                  sx={{
                    color: "#000000",
                    borderColor: "rgba(0,0,0,0.2)",
                    fontFamily: kessel_bold.style.fontFamily,
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: COLORS.PRIMARY,
                      borderColor: COLORS.PRIMARY,
                      color: "#fff",
                    },
                  }}
                >
                  View Live Project
                </Button>
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectOverviewSection;
