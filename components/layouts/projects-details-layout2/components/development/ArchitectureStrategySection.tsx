import React from "react";
import { Box, Container, Typography, Paper, Card, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";
import StrategyCard from "./components/StrategyCard";

interface ArchitectureStrategySectionProps {
  strategies: any;
}

const ArchitectureStrategySection: React.FC<
  ArchitectureStrategySectionProps
> = ({ strategies }) => {
  if (!strategies) return null;

  return (
    <Box
      sx={{
        bgcolor: "#f9f9f9",
        py: { xs: 8, md: 12 },
        mt: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          className="dev-animate-up"
          align="center"
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#000000",
            mb: 2,
          }}
        >
          {strategies.details?.heading || "Architecture & Strategy"}
        </Typography>
        {strategies.description && (
          <Typography
            className="dev-animate-up"
            align="center"
            sx={{
              fontFamily: archivo.style.fontFamily,
              fontSize: "1.1rem",
              color: "#555555",
              maxWidth: "800px",
              mx: "auto",
              mb: 8,
            }}
          >
            {strategies.description?.join(" ")}
          </Typography>
        )}

        {strategies.details?.data && (
          <Grid container spacing={5} className="dev-features-grid">
            {strategies.details?.data?.map((item: any, i: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <StrategyCard
                  title={item.primary}
                  description={item.secondary}
                  serialNumber={i + 1}
                />
              </Grid>
            ))}
          </Grid>
        )}

        {strategies.details?.endDescription && (
          <Box
            className="dev-animate-up"
            sx={{
              bgcolor: "rgba(0,0,0,0.03)",
              borderLeft: `4px solid ${COLORS.PRIMARY}`,
              p: 4,
              mt: 8,
              mx: "auto",
              maxWidth: "900px",
              borderRadius: "0 16px 16px 0",
            }}
          >
            <Typography
              align="center"
              sx={{
                fontFamily: archivo.style.fontFamily,
                fontSize: "1.1rem",
                color: "#333333",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "{strategies.details.endDescription}"
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ArchitectureStrategySection;
