"use client";

import {
  SERVICES_TAB,
  SERVICES_TAB_DATA
} from "@/assets/data/generic-array";
import SectionCard from "@/components/widgets/section-card";
import StarCard from "@/components/widgets/star-card";
import TabPanel from "@/components/widgets/tab-panel";
import bgImage from "@/homepage/best-service3.png";
import { VARIANTS } from "@/utils/enum";
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
import ArrowCard from "./components/arrow-card";
const ServiceSection = () => {
  const [value, setValue] = useState(0);

  const [servicesData, setServicesData] = useState(
    SERVICES_TAB_DATA.AI_TRANSFORMATION,
  );

  const SERVICES_MAP = {
    "AI Transformation": SERVICES_TAB_DATA.AI_TRANSFORMATION,
    "Business Transformation": SERVICES_TAB_DATA.BUSINESS_TRANSFORMATION,
    "Design Intelligence": SERVICES_TAB_DATA.Design_intelligence,
    "Product Engineering": SERVICES_TAB_DATA.Product_Engineering,
  } as any;

  const tabChangeHandler = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    const selectedLabel = SERVICES_TAB[newValue]
      .label as keyof typeof SERVICES_MAP;

    setServicesData(SERVICES_MAP[selectedLabel]);
  };

  return (
    <Box sx={{ my: 10 }}>
      <SectionCard title="What we do" variant={VARIANTS.PRIMARY} />
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ lg: 5, xs: 12, sm: 5 }}>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography
              variant="h2"
                sx={{
                  fontSize: { lg: 35, xs: 25 },
                  fontFamily: monument.style.fontFamily,
                }}
              >
                What We Do
              </Typography>
              {/* <ImageHeading title="Do" /> */}
            </Stack>
            <Typography
            component="h3"
              sx={{
                mt: 4,
                fontFamily: kessel.style.fontFamily,
                fontSize: 18,
                fontWeight: 300,
              }}
            >
              Build AI Powered business with Digixito, the all-in-one platform
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
                    padding: "18px 20px",
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                    color: "#000",
                    textTransform: "none",
                    fontFamily: kessel.style.fontFamily,
                    fontSize: { lg: "18px", sm: "14px" },
                    fontWeight: 400,
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    border: "1px solid #D7D7D7",
                    width: "100%",

                    mb: "20px",
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
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
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
                        <ArrowForward
                          sx={{ fontSize: 22, color: "inherit" }}
                          className="arrow-icon"
                        />
                      </Box>
                    }
                  />
                ))}
              </Tabs>
            </Box>
          </Grid>
          <Grid size={{ lg: 7, xs: 12, sm: 7 }}>
            {SERVICES_TAB.map((val, i) => (
              <TabPanel value={value} index={i} key={i}>
                {servicesData.map((val, i) => (
                  <Grid container spacing={2} key={i} alignItems="stretch">
                    <Grid size={{ lg: 6, xs: 12 }}>
                      <StarCard
                        backgroundImage={bgImage.src}
                        iconPosition="top"
                        heading={val.starCardData.normalHeading}
                        boldHeading={val.starCardData.boldHeading}
                        height={{ lg: "60vh", xs: "40vh" }}
                      />
                    </Grid>
                    <Grid size={{ lg: 6, xs: 12 }}>
                      <Stack alignItems="center" spacing={1} height="100%">
                        {val.data.map((val, i) => (
                          <ArrowCard
                            title={val.heading}
                            textColor={val.textColor}
                            backgroundColor={val.backgroundColor}
                            secondTitle={val.bottomTitle}
                            iconBgColor={val.iconBgColor}
                            iconColor={val.iconColor}
                            key={i}
                            // sx={{ flex: 1, width: "100%" }}
                          />
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                ))}
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
