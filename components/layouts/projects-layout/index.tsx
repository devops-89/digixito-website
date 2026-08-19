"use client";

import { PROJECT_DATA } from "@/assets/data/project-data";
import { archivo, monument } from "@/utils/fonts";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FeaturedProjectCard from "./components/featured-project-card";
import GridProjectCard from "./components/grid-project-card";

const CATEGORIES = ["All", "E-commerce Operations", "Web Development", "Mobile Application", "Digital Marketing"];

const ProjectsLayout = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects
  const filteredProjects = PROJECT_DATA.filter((project) => {
    if (activeCategory === "All") return true;
    
    // Check if any of the project's skills match the active category
    // This is a simple case-insensitive match
    const projectCategories = project.skills?.map(s => s.label.toLowerCase()) || [];
    return projectCategories.some(cat => cat.includes(activeCategory.toLowerCase()));
  });

  const featuredProject = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <Box sx={{ 
      width: "100%", 
      backgroundColor: "#fff", 
      color: "#000", 
      py: 10
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8 }}>
          {/* Work Tag */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "120px", md: "174.47px" },
              height: { xs: "40px", md: "48.74px" },
              backgroundColor: "#FFEF46",
              borderRadius: "6px",
              mb: 3,
              transform: "skewX(-10deg)",
              transformOrigin: "bottom left",
            }}
          >
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                color: "#000",
                lineHeight:"37.1px",
                transform: "skewX(10deg)",
                fontSize: "24.75px",
                letterSpacing:"0.23px"
              }}
            >
              Work
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontFamily: monument.style.fontFamily,
              fontSize: { xs: "48px", md: "80px" },
              fontWeight: 400,
              lineHeight: { xs: 1, md: "80px" },
              letterSpacing: "-1.25px",
              textTransform: "uppercase",
              mb: 3,
              maxWidth: "862px",
            }}
          >
            CRAFTED
            <br />
            WITH PRECISION
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: archivo.style.fontFamily,
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0.15px",
              color: "#000",
              opacity:"70%",
              mb: 8,
              maxWidth: "505px",
            }}
          >
            Designing for every customer touchpoint, from awareness to advocacy
          </Typography>

          {/* Filter Tabs */}
          <Stack
            direction="row"
            spacing={0}
            alignItems="center"
            sx={{
              borderBottom: "none",
              mb: 6,
              flexWrap: "wrap",
              gap: { xs: 2, md: 0 },
            }}
          >
            {CATEGORIES.map((category, index) => (
              <React.Fragment key={category}>
                <Button
                  onClick={() => setActiveCategory(category)}
                  sx={{
                    minWidth: "auto",
                    p: 0,
                    mt:4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  
                    textTransform: "none",
                  
                    fontFamily: monument.style.fontFamily,
                    fontWeight: 400,
                    fontSize: "28px",
                    lineHeight: "42px",
                    letterSpacing: "0%",
                  
                    color: activeCategory === category ? "#000000" : "#8A8A8A",
                  
                    border: "none",
                    borderRadius: 0,
                    opacity: 1,
                  
                    backgroundColor: "transparent",
                  
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {category}
                </Button>
                {index < CATEGORIES.length - 1 && (
                  <Box
                    sx={{
                      width: "1px",
                      height: "24px",
                      backgroundColor: "#ccc",
                      mx: { xs: 1, md: 2 },
                      display: { xs: "none", sm: "block" },
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Box>

        {/* Projects Display */}
        {filteredProjects.length === 0 ? (
          <Typography sx={{ fontFamily: archivo.style.fontFamily, fontSize: "18px", py: 10 }}>
            No projects found for this category.
          </Typography>
        ) : (
          <Stack spacing={4}>
            {/* Featured Project */}
            {featuredProject && (
              <FeaturedProjectCard {...featuredProject} />
            )}

            {/* Grid Projects */}
            {gridProjects.length > 0 && (
              <Grid container spacing={4}>
                {gridProjects.map((project, index) => (
                  <Grid size={{xs:12,md:6}} key={index}>
                    <GridProjectCard {...project} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsLayout;
