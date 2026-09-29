import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { archivo, kessel_bold } from "@/utils/fonts";

interface ConclusionSectionProps {
  conclusion: any;
}

const ConclusionSection: React.FC<ConclusionSectionProps> = ({ conclusion }) => {
  if (!conclusion) return null;

  return (
    <Box
      sx={{
        mt: { xs: 8, md: 15 },
        pt: 8,
        borderTop: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          className="dev-animate-up"
          align="center"
          sx={{
            fontFamily: kessel_bold.style.fontFamily,
            fontSize: "1.2rem",
            color: "#555555",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            mb: 4,
          }}
        >
          Conclusion
        </Typography>
        {conclusion.description?.map((desc: string, i: number) => (
          <Typography
            key={i}
            className="dev-animate-up"
            align="center"
            sx={{
              fontFamily: archivo.style.fontFamily,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#000000",
              lineHeight: 1.6,
              mb: 4,
              fontWeight: 300,
            }}
          >
            {desc}
          </Typography>
        ))}
      </Container>
    </Box>
  );
};

export default ConclusionSection;
