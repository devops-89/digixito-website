import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AnimatedProjectContainer from "./components/AnimatedProjectContainer";
import Link from "next/link";

const OurProjects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: { xs: 40, md: 60 },
                fontFamily: monument.style.fontFamily,
                lineHeight: { xs: "50px", md: "80px" },
                letterSpacing: "-1.52px",
              }}
            >
              Our Curated{" "}
              <Typography
                sx={{
                  fontSize: { xs: 40, md: 60 },
                  fontFamily: monument.style.fontFamily,
                  lineHeight: { xs: "50px", md: "80px" },
                  letterSpacing: "-1.52px",
                }}
                component={"span"}
              >
                Projects
              </Typography>
            </Typography>
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: "left", md: "end" }, mt: { xs: 2, md: 0 } }}>
            <Link href="/projects">
              <Button
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  borderRadius: "20px",
                  px: 2,
                  py: 2,
                  color: COLORS.BLACK,
                }}
              >
                View All Projects
              </Button>
            </Link>
          </Grid> */}
        </Grid>
      </Container>

      {/* Full width animated scroll container */}
      <AnimatedProjectContainer />
    </Box>
  );
};

export default OurProjects;
