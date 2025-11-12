import ImageHeading from "@/components/widgets/image-heading";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { ArrowForward, GridOnOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProjectsCard from "./components/projects-card";
import { useDetailsStore } from "@/store/useDetailsStore";
import { DETAILS_PAGE_PROPS } from "@/utils/types";

const FeaturedProjects = () => {
  const { data } = useDetailsStore();

  const projectData = data as DETAILS_PAGE_PROPS;
  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Typography
            sx={{
              fontSize: { lg: 40, xs: 30 },
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
            }}
          >
            Our
          </Typography>
          <ImageHeading
            title="Featured Projects"
            sx={{
              px: { lg: 1, xs: 0 },
              width: { lg: "100%", xs: 350 },
            }}
          />
          {/* <IconButton
            sx={{
              backgroundColor: COLORS.PRIMARY,
              width: 64,
              height: 64,
              color: COLORS.BLACK,
              rotate: "-40deg",
              ":hover": {},
            }}
          >
            <ArrowForward />
          </IconButton> */}
        </Stack>
        <Typography
          sx={{
            fontSize: 19,
            fontFamily: kessel.style.fontFamily,
            fontWeight: 300,
            lineHeight: "24px",
            textAlign: "center",
            width: { lg: 772, xs: "100%" },
            margin: "auto",
            mt: 2,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aenean{" "}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projectData?.project_data.map((val, i) => (
            <Grid size={{ lg: 6, xs: 12 }}>
              <ProjectsCard
                project_description={val.project_description}
                project_name={val.project_name}
                img={val.img}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
