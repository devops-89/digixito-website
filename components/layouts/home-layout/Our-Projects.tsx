import { COLORS } from "@/utils/enum";
import { kessel_bold, monument } from "@/utils/fonts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectContainer from "./components/Project-Container";
import Link from "next/link";

const OurProjects = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} sx={{ mb: 3 }}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 60,
                fontFamily: monument.style.fontFamily,
                lineHeight: "80px",
                letterSpacing: "-1.52px",
              }}
            >
              Our Curated{" "}
              <Typography
                sx={{
                  fontSize: 60,
                  fontFamily: monument.style.fontFamily,
                  lineHeight: "80px",
                  letterSpacing: "-1.52px",
                  //   color: COLORS.PRIMARY,
                }}
                component={"span"}
              >
                Projects
              </Typography>
            </Typography>
          </Grid>
          <Grid size={6} sx={{ textAlign: "end" }}>
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
          </Grid>
        </Grid>
        <ProjectContainer />
      </Container>
    </Box>
  );
};

export default OurProjects;
