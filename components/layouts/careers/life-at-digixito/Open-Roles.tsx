"use client";
import ImageHeading from "@/components/widgets/image-heading";
import { archivo, kessel, monument } from "@/utils/fonts";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import RoleCard from "./components/Role-Card";
import { JOB_DESCRIPTION } from "@/public/locale/data";

const OpenRoles = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <Box sx={{ mb: 20 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            size={4}
            sx={{
              position: { lg: "sticky", xs: "static" },
              top: 100,
              alignSelf: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: kessel.style.fontFamily,
                textTransform: "capitalize",
                lineHeight: "40px",
                // letterSpacing: "-0.48px",
                fontWeight: 600,
              }}
            >
              Our open <br /> roles
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  fontSize: 15,
                  textTransform: "uppercase",
                  fontFamily: archivo.style.fontFamily,
                }}
              >
                or Contact Us With
              </Typography>
              <Typography
                sx={{ fontSize: 15, fontFamily: kessel.style.fontFamily }}
              >
                info@digixito.com
              </Typography>
            </Box>
          </Grid>
          <Grid size={8}>
            <Stack spacing={2}>
              {JOB_DESCRIPTION.map((val, i) => (
                <RoleCard
                  key={i}
                  expanded={expandedIndex === i}
                  onToggle={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                  offer={val.offer}
                  requirements={val.requirements}
                  category={val.category}
                  title={val.title}
                  description={val.description}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OpenRoles;
