"use client";
import { HEADER_LINKS, HEADER_TABS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel from "../tab-panel";
import Headerlist from "./header-list";

const HeaderTabs = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(HEADER_LINKS.what_we_offer);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setData([]);
    const target = e.target as HTMLElement;
    const filterText = target.innerHTML;

    if (filterText === HEADER_TABS_DATA.WHAT_WE_OFFER) {
      setData(HEADER_LINKS.what_we_offer);
    }
    if (filterText === HEADER_TABS_DATA.WHAT_WE_ARE) {
      setData(HEADER_LINKS.what_we_are);
    }
    if (filterText === HEADER_TABS_DATA.CAREERS) {
      setData(HEADER_LINKS.what_we_are);
    }
  };

  return (
    <Box>
      <Tabs
        sx={{
          width: "100%",
          "& .MuiTabs-list": {
            justifyContent: "space-between",
            borderBottom: "1px solid #B2B2B2",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: `${COLORS.PRIMARY} !important`,
          },
        }}
        value={value}
        onChange={handleChange}
      >
        {HEADER_TABS.map((val, i) => (
          <Tab
            label={
              <Typography
                sx={{
                  color: "#595959",
                  fontFamily: monument.style.fontFamily,
                  fontSize: 25,
                  fontWeight: 800,
                }}
              >
                {val.label}
              </Typography>
            }
            key={i}
          />
        ))}
      </Tabs>

      {HEADER_TABS.map((val, i) => (
        <TabPanel value={value} key={i} index={i}>
          <Grid container spacing={4}>
            {data.map((val, i) => (
              <Grid size={4} key={i}>
                <Headerlist heading={val.heading} data={val.data} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
};

export default HeaderTabs;
