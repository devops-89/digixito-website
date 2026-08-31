"use client";
import { OLD_PROJECTS_DATA, PROJECTS_TABS_DATA } from "@/utils/constant";
import { kessel, monument } from "@/utils/fonts";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import ProjectCard2 from "../home-layout/components/ProjectCard2";
import { COLORS } from "@/utils/enum";

const ProjectsLayout = () => {
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (e: React.SyntheticEvent, val: number) => {
    setTabValue(val);
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{ fontFamily: monument.style.fontFamily, fontSize: 60 }}
        >
          Our Projects
        </Typography>

        <Tabs
          value={tabValue}
          onChange={tabChangeHandler}
          sx={{
            mt: 5,
            borderBottom: "1px solid #000",
            "& .Mui-selected": { color: COLORS.BLACK + "!important" },
            "& .MuiTabs-indicator": { backgroundColor: "#000" },
          }}
        >
          {PROJECTS_TABS_DATA.map((val, i) => (
            <Tab
              key={i}
              sx={{
                textTransform: "none",
                fontFamily: kessel.style.fontFamily,
                fontSize: 24,
                fontWeight: "500",
              }}
              label={val.label}
            />
          ))}
        </Tabs>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {OLD_PROJECTS_DATA.map((val, i) => (
            <Grid size={4} key={i}>
              <ProjectCard2 {...val} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsLayout;
