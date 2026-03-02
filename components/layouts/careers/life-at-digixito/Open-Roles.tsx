import ImageHeading from "@/components/widgets/image-heading";
import { kessel, monument } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const OpenRoles = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            size={4}
            sx={{ position: { lg: "sticky", xs: "static" }, top: 100 }}
          >
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: kessel.style.fontFamily,
                textTransform: "capitalize",
                lineHeight: "33px",
                letterSpacing: "-0.48px",
                fontWeight: 600,
              }}
            >
              Our open <br /> roles
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography sx={{ fontSize: 15, textTransform: "uppercase" }}>
                or Contact Us With
              </Typography>
              <Typography
                sx={{ fontSize: 15, fontFamily: kessel.style.fontFamily }}
              >
                info@digixito.com
              </Typography>
            </Box>
          </Grid>
          <Grid size={8}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OpenRoles;
