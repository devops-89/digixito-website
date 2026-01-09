"use client";
import { HEADER_LINKS, HEADER_TABS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import TabPanel from "../tab-panel";
import Headerlist from "./header-list";
import { ArrowBackIos, Close } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import logo from "@/logo/Digixito_black_outline.svg";
import Image from "next/image";
interface HeaderTabsProps {
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

const HeaderTabs = ({ setAnchorEl, setMenuOpen }: HeaderTabsProps) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(HEADER_LINKS.what_we_offer);
  const router = useRouter();

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);

    switch (HEADER_TABS[newValue].label) {
      case HEADER_TABS_DATA.WHAT_WE_OFFER:
        setData(HEADER_LINKS.what_we_offer);
        break;
      case HEADER_TABS_DATA.WHAT_WE_ARE:
        setData([]);
        router.push("/about-us");
        setAnchorEl(null);
        setMenuOpen?.(false);

        break;
      case HEADER_TABS_DATA.CAREERS:
        // setData(HEADER_LINKS.CAREERS);
        router.push("/careers/life-at-digixito");
        setAnchorEl(null);
        setMenuOpen?.(false);
        break;
      default:
        setData([]);
        break;
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ mt: 3 }}
      >
        <Image src={logo} alt="black outline logo" width={80} />

        <IconButton onClick={() => setAnchorEl(null)}>
          <Close sx={{ color: COLORS.BLACK, fontSize: 30 }} />
        </IconButton>
      </Stack>
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
          py: 3,
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
                  setMenuOpen={setMenuOpen}
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
