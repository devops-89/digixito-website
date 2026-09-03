"use client";
import { OLD_PROJECTS_DATA, PROJECTS_TABS_DATA } from "@/utils/constant";
import { kessel, monument } from "@/utils/fonts";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import ProjectCard2 from "../home-layout/components/ProjectCard2";
import { COLORS, PROJECTS_DEPARTMENT } from "@/utils/enum";
import { AnimatePresence, motion } from "motion/react";

const ProjectsLayout = () => {
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (e: React.SyntheticEvent, val: number) => {
    setTabValue(val);
  };

  const activeTab = PROJECTS_TABS_DATA[tabValue].label;
  const filteredProjects = activeTab === PROJECTS_DEPARTMENT.ALL 
    ? OLD_PROJECTS_DATA 
    : OLD_PROJECTS_DATA.filter(p => p.department === activeTab);

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
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((val, i) => (
              <Grid size={4} key={val.slug} component={motion.div} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                <ProjectCard2 {...val} />
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsLayout;
