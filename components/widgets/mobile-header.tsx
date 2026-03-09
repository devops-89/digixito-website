import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowDropDown,
  Close,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { HEADER_LINKS, HEADER_TABS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import { HEADER_LIST_PROPS } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import blackLogo from "@/logo/Digixito_black_outline.svg";
import HeaderTabs from "./common/header-tabs";

interface HeaderTabsProps {
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
}

const MobileHeader = ({ setAnchorEl }: HeaderTabsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getSubMenuData = (label: string): HEADER_LIST_PROPS[] => {
    if (label === HEADER_TABS_DATA.WHAT_WE_OFFER)
      return HEADER_LINKS.what_we_offer;
    if (label === HEADER_TABS_DATA.WHAT_WE_ARE) return HEADER_LINKS.what_we_are;
    return [];
  };

  return (
    <Box
      sx={{
        mt: 2,
        position: "relative",
        height: "100vh",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={2}
        justifyContent={"space-between"}
        sx={{ mt: 0, mb: 2 }}
      >
        <Image src={blackLogo} alt="logo" width={50} />
        <IconButton onClick={() => setAnchorEl(null)}>
          <Close />
        </IconButton>
      </Stack>

      <Stack sx={{ flexGrow: 1, overflowY: "auto", pb: 10 }}>
        {HEADER_TABS.map((tab, i) => {
          const subMenuData = getSubMenuData(tab.label);
          const hasSubMenu = subMenuData && subMenuData.length > 0;
          const isOpen = openIndex === i;

          return (
            <Box key={i} sx={{ mb: 1 }}>
              {hasSubMenu ? (
                <>
                  <Button
                    fullWidth
                    sx={{
                      fontSize: 18,
                      justifyContent: "space-between",
                      color: COLORS.BLACK,
                      fontFamily: archivo.style.fontFamily,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      py: 1.5,
                      px: 0,
                    }}
                    endIcon={isOpen ? <ExpandLess /> : <ExpandMore />}
                    onClick={() => handleToggle(i)}
                  >
                    {tab.label}
                  </Button>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 2, pb: 1 }}>
                      {subMenuData.map((section, idx) => (
                        <Box key={idx} sx={{ mb: 2 }}>
                          {section.heading && (
                            <Typography
                              sx={{
                                color: COLORS.BLACK,
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: archivo.style.fontFamily,
                                mb: 1,
                                mt: 1,
                                textTransform: "uppercase",
                                opacity: 0.7,
                              }}
                            >
                              {section.heading}
                            </Typography>
                          )}
                          {section.data && (
                            <List disablePadding>
                              {section.data.map((item, j) => (
                                <Link
                                  href={item.url || "#"}
                                  key={j}
                                  onClick={() => setAnchorEl(null)}
                                  style={{
                                    textDecoration: "none",
                                    display: "block",
                                  }}
                                >
                                  <ListItemButton
                                    sx={{
                                      borderRadius: "8px",
                                      py: 0.5,
                                      px: 0,
                                    }}
                                  >
                                    <ListItemText
                                      primary={item.label}
                                      slotProps={{
                                        primary: {
                                          fontSize: 14,
                                          fontFamily: kessel.style.fontFamily,
                                          color: COLORS.BLACK,
                                          fontWeight: 500,
                                        },
                                      }}
                                    />
                                  </ListItemButton>
                                </Link>
                              ))}
                            </List>
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </>
              ) : (
                <Link
                  href={tab.url || "#"}
                  style={{ textDecoration: "none", display: "block" }}
                  onClick={() => setAnchorEl(null)}
                >
                  <Button
                    fullWidth
                    sx={{
                      fontSize: 18,
                      justifyContent: "flex-start",
                      color: COLORS.BLACK,
                      fontFamily: archivo.style.fontFamily,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      py: 1.5,
                      px: 0,
                      textAlign: "left",
                    }}
                  >
                    {tab.label}
                  </Button>
                </Link>
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MobileHeader;
