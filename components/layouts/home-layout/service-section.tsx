"use client";

import {
  SERVCIES_ARROW_CARD_DATA,
  SERVICES_TAB,
} from "@/assets/data/generic-array";
import StarCard from "@/components/widgets/star-card";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import bgImage from "@/homepage/best-service3.png";
import TabPanel from "@/components/widgets/tab-panel";
import ArrowCard from "./components/arrow-card";
import SectionCard from "@/components/widgets/section-card";
import headingBanner from "@/homepage/heading-banner.png";
import Image from "next/image";
import ImageHeading from "@/components/widgets/image-heading";
const ServiceSection = () => {
  const [value, setValue] = useState(0);

  const tabChangeHandler = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 10 }}>
      <SectionCard
        title="What we do"
        backgroundColor={COLORS.PRIMARY}
        textColor="#222"
      />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={5}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography
                sx={{ fontSize: 35, fontFamily: monument.style.fontFamily }}
              >
                Our
              </Typography>
              <ImageHeading title="Services" />
            </Stack>
            <Typography
              sx={{
                mt: 4,
                fontFamily: kessel.style.fontFamily,
                fontSize: 18,
                fontWeight: 300,
              }}
            >
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </Typography>
            <Box sx={{ width: "100%", mt: 3 }}>
              <Tabs
                value={value}
                orientation="vertical"
                TabIndicatorProps={{ style: { display: "none" } }}
                sx={{
                  width: "100%",
                  "& .MuiTab-root": {
                    minHeight: "auto",
                    padding: "18px 20px", // tighter padding
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                    color: "#000",
                    textTransform: "none",
                    fontFamily: kessel.style.fontFamily,
                    fontSize: "20px",
                    fontWeight: 400,
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    border: "1px solid #D7D7D7",
                    width: "100%",
                    // "&:hover": {
                    //   backgroundColor: "#f5f5f5",
                    // },
                    mb: "32px",
                  },
                  "& .Mui-selected": {
                    color: "#fff !important",
                    backgroundColor: "#000",
                    border: "1px solid #000",
                    "& svg": {
                      color: "#fff",
                    },
                    "& .number": {
                      color: "#FFD84D",
                    },
                  },
                }}
                onChange={tabChangeHandler}
              >
                {SERVICES_TAB.map((val, i) => (
                  <Tab
                    key={i}
                    // disableRipple
                    icon={
                      <ArrowForward
                        sx={{ ml: 1, fontSize: 22, color: "#000" }}
                      />
                    }
                    iconPosition="end"
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box
                            component="span"
                            className="number"
                            sx={{ fontWeight: 700 }}
                          >
                            0{i + 1}
                          </Box>
                          <Box component="span">{val.label}</Box>
                        </Box>
                      </Box>
                    }
                  />
                ))}
              </Tabs>
            </Box>
          </Grid>
          <Grid size={7}>
            {SERVICES_TAB.map((val, i) => (
              <TabPanel value={value} index={i} key={i}>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <StarCard
                      backgroundImage={bgImage.src}
                      iconPosition="top"
                      heading="We study the game before we"
                      boldHeading="change it. "
                      height="85vh"
                    />
                  </Grid>
                  <Grid size={6}>
                    <Stack alignItems="center" spacing={1}>
                      {SERVCIES_ARROW_CARD_DATA.map((val, i) => (
                        <ArrowCard
                          title={val.title}
                          textColor={val.textColor}
                          backgroundColor={val.backgroundColor}
                          secondTitle={val.secondTitle}
                          iconBgColor={val.iconBgColor}
                          iconColor={val.iconColor}
                          key={i}
                        />
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
