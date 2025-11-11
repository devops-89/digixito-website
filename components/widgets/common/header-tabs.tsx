"use client";
import { HEADER_LINKS, HEADER_TABS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import TabPanel from "../tab-panel";
import Headerlist from "./header-list";
import { ArrowBackIos } from "@mui/icons-material";

interface HeaderTabsProps {
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
}

const HeaderTabs = ({ setAnchorEl }: HeaderTabsProps) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(HEADER_LINKS.what_we_offer);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);

    switch (HEADER_TABS[newValue].label) {
      case HEADER_TABS_DATA.WHAT_WE_OFFER:
        setData(HEADER_LINKS.what_we_offer);
        break;
      case HEADER_TABS_DATA.WHAT_WE_ARE:
        setData(HEADER_LINKS.what_we_are);
        break;
      case HEADER_TABS_DATA.CAREERS:
        setData(HEADER_LINKS.CAREERS);
        break;
      default:
        setData([]);
        break;
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Tabs
        sx={{
          width: "100%",
          "& .MuiTabs-list": {
            justifyContent: "space-between",
            borderBottom: "1px solid #B2B2B2",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: `${COLORS.PRIMARY} !important`,
            borderWidth: 2,
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
        <TabPanel
          value={value}
          key={i}
          index={i}
          sx={{
            maxHeight: "calc(100vh - 200px)",
            overflowY: "auto",
          }}
        >
          <Grid container spacing={4}>
            {data.map((item, j) => (
              <Grid size={2.4} key={j}>
                <Headerlist
                  heading={item.heading}
                  data={item.data}
                  setAnchorEl={setAnchorEl}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
};

export default HeaderTabs;
