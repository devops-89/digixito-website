import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ecommerce from "@/services/machine-learning/ecommerce-recommended-engine.png";
import { archivo, monument } from "@/utils/fonts";
import { ArrowForward } from "@mui/icons-material";
import { PROJECT_CARD_PROPS } from "@/utils/types";
const ProjectsCard = ({
  img,
  project_name,
  project_description,
}: PROJECT_CARD_PROPS) => {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: "32px",
          backgroundColor: "#fcfcfc",
          boxShadow: " 4px 4px 0 rgba(0, 0, 0, 0.20)",
          height: 550,
          position: "relative",
        }}
      >
        <Image
          src={img}
          alt=""
          style={{ width: "100%", height: 300, objectFit: "cover" }}
        />

        <CardContent>
          <Typography
            sx={{
              fontSize: 23,
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
              color: "#454545",
            }}
          >
            {project_name}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: archivo.style.fontFamily,
              fontWeight: 400,
              lineHeight: "30px",
              mt: 2,
            }}
          >
            {project_description}
          </Typography>
          <Box sx={{ textAlign: "end" }}>
            <Button
              variant="text"
              sx={{
                fontSize: "14px",
                fontFamily: monument.style.fontFamily,
                fontWeight: 400,
                letterSpacing: "-0.14px",
                color: "#c29900",
                ":hover": {
                  svg: {
                    transform: "translateX(4px)",
                  },
                },
                svg: {
                  transition: "0.5s ease all",
                },
                position: "absolute",
                right: 20,
                bottom: 10,
              }}
              endIcon={<ArrowForward />}
            >
              Learn More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectsCard;
