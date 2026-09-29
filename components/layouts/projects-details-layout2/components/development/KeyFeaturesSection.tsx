import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { COLORS } from "@/utils/enum";
import { archivo, kessel_bold } from "@/utils/fonts";
import KeyFeaturesCard from "./components/Key-Features-Card";

interface KeyFeaturesSectionProps {
  features: any;
}

const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({
  features,
}) => {
  if (!features) return null;

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
          {features.heading || "Key Features"}
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

      <Grid container spacing={4} className="dev-features-grid">
        {features.data?.map((feature: any, i: number) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <KeyFeaturesCard
              primary={feature.primary}
              secondary={feature.secondary}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KeyFeaturesSection;
