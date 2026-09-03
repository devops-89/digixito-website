import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bgImage from "@/projects/old-projects/max-bupa/max-bupa.jpg";
import Image from "next/image";
const ProjectCard4 = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={8}>
          <Box
            sx={{
              height: "400px",
              width: "100%",
              overflowY: "auto",
              position: "relative",
              border: "2px solid #222222",
              borderRadius: "16px",
              "&::-webkit-scrollbar": {
                width: "3px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#444",
                borderRadius: "10px",
              },
            }}
          >
            <Image
              src={bgImage}
              alt="Project Screenshot"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>
        <Grid size={4}></Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard4;
