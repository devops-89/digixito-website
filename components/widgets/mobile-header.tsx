import { HEADER_LINKS, HEADER_TABS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { HEADER_LIST_PROPS } from "@/utils/types";
import { ArrowDropDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MobileHeader = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryData, setCategoryData] = useState<HEADER_LIST_PROPS[] | null>(
    null
  );
  const handleOpen = (name: string) => {
    console.log("werere", name);
    if (name === HEADER_TABS_DATA.WHAT_WE_OFFER) {
      setCategoryData(HEADER_LINKS.what_we_offer);
      setCategoryOpen(true);
      return;
    }
    if (name === HEADER_TABS_DATA.WHAT_WE_ARE) {
      setCategoryData(HEADER_LINKS.what_we_are);
      setCategoryOpen(true);
      return;
    }
    if (name === HEADER_TABS_DATA.CAREERS) {
      setCategoryData(HEADER_LINKS.CAREERS);
      setCategoryOpen(true);
      return;
    }
    setCategoryData(null);
    setCategoryOpen(false);
  };

  const handleClose = () => {
    setCategoryOpen(false);
  };
  return (
    <Box sx={{ mt: 2 }}>
      <Stack>
        {HEADER_TABS.map((val, i) => (
          <Button
            sx={{
              fontSize: 20,
              border: "none",
              borderRadius: "20px",
              mb: 3,
              textAlign: "flex-start",
              justifyContent: "space-between",
              color: COLORS.BLACK,
              fontFamily: kessel.style.fontFamily,
            }}
            key={i}
            endIcon={<ArrowDropDown />}
            onClick={() => handleOpen(val.label)}
          >
            {val.label}
          </Button>
        ))}

        <Collapse in={categoryOpen && !!categoryData}>
          <Stack spacing={2} sx={{ mt: 1 }}>
            {categoryData?.map((section, sectionIndex) => (
              <Box key={sectionIndex}>
                <Typography
                  sx={{
                    color: COLORS.GRAY,
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: kessel.style.fontFamily,
                    mb: 1,
                  }}
                >
                  {section.heading}
                </Typography>
                <List disablePadding>
                  {section.data.map((val, i) => (
                    <ListItemButton key={i} sx={{ borderRadius: "12px" }}>
                      <ListItemText
                        primary={val.label}
                        slotProps={{
                          primary: {
                            fontSize: 14,
                            fontFamily: kessel.style.fontFamily,
                          },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            ))}
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
};

export default MobileHeader;
