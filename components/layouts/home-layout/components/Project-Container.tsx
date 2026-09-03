"use client";
import { OLD_PROJECTS_DATA, PROJECTS_TABS_DATA } from "@/utils/constant";
import { COLORS } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { Container, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProjectCard3 from "./ProjectCard3";
import ProjectCard4 from "./Project-Card4";
import ProjectCard2 from "./ProjectCard2";

const ProjectContainer = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, value: number) => {
    setTab(value);
  };
  return (
    <div>
      <Container maxWidth="lg">
        {/* <Tabs
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            borderRadius: "50px",
            padding: "4px",
            height: "64px",
            alignItems: "center",
            "& .MuiTabs-indicator": {
              backgroundColor: "#000000",
            },
            "& .Mui-selected": {
              color: COLORS.BLACK + "!important",
            },
          }}
          value={tab}
          onChange={handleTabChange}
        >
          {PROJECTS_TABS_DATA.map((val, i) => (
            <Tab
              label={val.label}
              key={i}
              sx={{ fontSize: 20, fontFamily: kessel.style.fontFamily }}
            />
          ))}
        </Tabs> */}

        <Grid container sx={{ mt: 2 }} spacing={3}>
          {OLD_PROJECTS_DATA.slice(0, 6).map((val, i) => (
            <Grid size={4} key={i}>
              <ProjectCard2 {...val} />
            </Grid>
          ))}
        </Grid>
        {/* <ProjectCard4 /> */}
      </Container>
    </div>
  );
};

export default ProjectContainer;
