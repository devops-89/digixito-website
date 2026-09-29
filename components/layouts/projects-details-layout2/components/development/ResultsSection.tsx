import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";

interface ResultsSectionProps {
  result: any;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) => {
  if (!result) return null;

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 15 } }}>
      <Grid container spacing={8}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            className="dev-animate-up"
            sx={{ position: { md: "sticky" }, top: { md: 120 } }}
          >
            <Typography
              sx={{
                fontFamily: kessel_bold.style.fontFamily,
                fontSize: "1.5rem",
                color: COLORS.BLACK,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                mb: 4,
              }}
            >
              {result.details?.heading || "Results"}
            </Typography>
            {result.description?.map((desc: string, i: number) => (
              <Typography
                key={i}
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  fontSize: "1.1rem",
                  color: "#444444",
                  mb: 2,
                  lineHeight: 1.7,
                }}
              >
                {desc}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box className="dev-animate-up">
            {result.details?.data?.map((item: any, i: number) => (
              <Box
                key={i}
                sx={{
                  py: 3,
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  display: "flex",
                  gap: 3,
                  "&:first-of-type": {
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                  },
                }}
              >
                {item.primary && item.secondary && (
                  <Typography
                    sx={{
                      fontFamily: kessel_bold.style.fontFamily,
                      fontSize: "1.5rem",
                      color: COLORS.PRIMARY,
                      minWidth: "40px",
                    }}
                  >
                    {item.primary}
                  </Typography>
                )}
                {item.secondary && (
                  <Typography
                    sx={{
                      fontFamily: archivo.style.fontFamily,
                      fontSize: "1.2rem",
                      color: "#000000",
                      fontWeight: 400,
                      alignSelf: "center",
                    }}
                  >
                    {item.secondary}
                  </Typography>
                )}
                {!item.secondary && item.primary && (
                  <>
                    <Box
                      sx={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        bgcolor: COLORS.PRIMARY,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000",
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: archivo.style.fontFamily,
                        fontSize: "1.2rem",
                        color: "#000000",
                        fontWeight: 400,
                        alignSelf: "center",
                      }}
                    >
                      {item.primary}
                    </Typography>
                  </>
                )}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultsSection;
