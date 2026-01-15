"use client";
import { monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Introduction from "./Introduction";
import { COLORS } from "@/utils/enum";
import InformationWeCollect from "./Information-We-Collect";
import HowweUseyourInformation from "./How-We-Use-Your-Information";

const PrivacyPolicyLayout = () => {
  const toc = [
    {
      label: "Introduction",
      url: "introduction",
    },
    {
      label: "What Information We Collect",
      url: "information_we_collect",
    },
    {
      label: "How We Use Your Information",
      url: "how_we_use_your_information",
    },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          sx={{ fontSize: 40, fontFamily: monument.style.fontFamily, mt: 5 }}
        >
          Privacy Policy
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={8}>
            <Box id="introduction">
              <Introduction />
            </Box>
            <Box id="information_we_collect">
              <InformationWeCollect />
            </Box>
            <Box id="how_we_use_your_information">
              <HowweUseyourInformation />
            </Box>
          </Grid>
          <Grid size={4}>
            <Box
              sx={{
                backgroundColor: COLORS.WHITE,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                p: 2,
                position: "sticky",
                top: 0,
                alignSelf: "flex-start",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 800,
                  mt: 2,
                }}
              >
                Table of Contents
              </Typography>
              <List>
                {toc.map((item, i) => (
                  <ListItemButton
                    key={i}
                    onClick={() => handleScroll(item.url)}
                  >
                    <ListItemText primary={`${i + 1}. ${item.label}`} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PrivacyPolicyLayout;
