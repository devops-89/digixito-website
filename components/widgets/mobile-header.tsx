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
    // if (label === HEADER_TABS_DATA.WHAT_WE_ARE) return [];
    // if (label === HEADER_TABS_DATA.CAREERS) return [];
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
      {/* Submenu */}
      {/* <Stack sx={{ flex: 1, overflowY: "auto" }}>
        {HEADER_TABS.map((val: any, i) => {
          const subMenuData = getSubMenuData(val.label);
          const hasSubMenu = subMenuData && subMenuData.length > 0;
          const isOpen = openIndex === i;

          return (
            <Box key={i}>
              {hasSubMenu ? (
                <>
                  <Button
                    fullWidth
                    sx={{
                      fontSize: 20,
                      justifyContent: "space-between",
                      color: COLORS.BLACK,
                      fontFamily: kessel.style.fontFamily,
                      textTransform: "none",
                      py: 1.5,
                    }}
                    endIcon={isOpen ? <ExpandLess /> : <ExpandMore />}
                    onClick={() => handleToggle(i)}
                  >
                    {val.label}
                  </Button>
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        pl: 2,
                        pb: 2,
                        maxHeight: "50vh",
                        overflowY: "scroll",
                        "&::-webkit-scrollbar": { width: "4px" },
                        "&::-webkit-scrollbar-track": { background: "#f1f1f1" },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#888",
                          borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                          background: "#555",
                        },
                      }}
                    >
                      {subMenuData.map((section, idx) => (
                        <Box key={idx} sx={{ mb: 2 }}>
                          {section.heading && (
                            <Typography
                              sx={{
                                color: COLORS.GRAY,
                                fontSize: 14,
                                fontWeight: 700,
                                fontFamily: kessel.style.fontFamily,
                                mb: 1,
                                mt: 1,
                              }}
                            >
                              {section.heading}
                            </Typography>
                          )}
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
                                    px: 1,
                                  }}
                                >
                                  <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                      fontSize: 16,
                                      fontFamily: kessel.style.fontFamily,
                                      color: COLORS.BLACK,
                                      fontWeight: 500,
                                    }}
                                  />
                                </ListItemButton>
                              </Link>
                            ))}
                          </List>
                        </Box>
                      ))}
                    </Box>
                  </Collapse>
                </>
              ) : (
                <Link
                  href={val.url || "#"}
                  style={{ textDecoration: "none", display: "block" }}
                  onClick={() => setAnchorEl(null)}
                >
                  <Button
                    fullWidth
                    sx={{
                      fontSize: 20,
                      justifyContent: "flex-start",
                      color: COLORS.BLACK,
                      fontFamily: kessel.style.fontFamily,
                      textTransform: "none",
                      py: 1.5,
                      textAlign: "left",
                    }}
                  >
                    {val.label}
                  </Button>
                </Link>
              )}
            </Box>
          );
        })}
      </Stack> */}

      <Stack sx={{ flexGrow: 1, overflowY: "auto" }}>
        {HEADER_LINKS.what_we_offer.map((section, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            {section.heading && (
              <Link href={section.url || "#"} onClick={() => setAnchorEl(null)}>
                <Typography
                  sx={{
                    color: COLORS.BLACK,
                    fontSize: 16,
                    fontWeight: 900,
                    fontFamily: archivo.style.fontFamily,
                    mb: 1,
                    mt: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {section.heading}
                </Typography>
              </Link>
            )}
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
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileHeader;
