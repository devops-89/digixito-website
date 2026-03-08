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
    <Box sx={{ mb: { xs: 10, md: 20 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 0 }}>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              position: { md: "sticky" },
              top: { md: 100 },
              alignSelf: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 32, md: 40 },
                fontFamily: kessel.style.fontFamily,
                textTransform: "capitalize",
                lineHeight: { xs: "36px", md: "40px" },
                fontWeight: 600,
              }}
            >
              Our open <br /> roles
            </Typography>
            <Box sx={{ mt: { xs: 2.5, md: 4 } }}>
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
          <Grid size={{ xs: 12, md: 8 }}>
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
