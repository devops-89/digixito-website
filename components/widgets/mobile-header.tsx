import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { HEADER_LINKS, HEADER_TABS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import { HEADER_LIST_PROPS } from "@/utils/types";

const MobileHeader = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryData, setCategoryData] = useState<HEADER_LIST_PROPS[] | null>(
    null
  );
  const [anchorIndex, setAnchorIndex] = useState<number | null>(null);
  const [dropdownTopPx, setDropdownTopPx] = useState<number | null>(null);
  const [dropdownHeightPx, setDropdownHeightPx] = useState<number | null>(null);

  const computePosition = (buttonIndex: number) => {
    const btns = containerRef.current?.querySelectorAll("button");
    const btn = btns
      ? (btns[buttonIndex] as HTMLElement | undefined)
      : undefined;
    if (!btn) {
      setDropdownTopPx(null);
      setDropdownHeightPx(null);
      return;
    }
    const rect = btn.getBoundingClientRect();
    const topPx = Math.max(0, rect.bottom);
    const available = Math.max(0, window.innerHeight - topPx);
    const reserved = 16;
    setDropdownTopPx(topPx);
    setDropdownHeightPx(Math.max(100, available - reserved));
  };

  useEffect(() => {
    const onResizeOrScroll = () => {
      if (anchorIndex !== null) computePosition(anchorIndex);
    };
    window.addEventListener("resize", onResizeOrScroll);
    window.addEventListener("scroll", onResizeOrScroll, true);
    return () => {
      window.removeEventListener("resize", onResizeOrScroll);
      window.removeEventListener("scroll", onResizeOrScroll, true);
    };
  }, [anchorIndex]);

  const handleOpen = (name: string, index: number) => {
    let data: HEADER_LIST_PROPS[] | null = null;
    if (name === HEADER_TABS_DATA.WHAT_WE_OFFER)
      data = HEADER_LINKS.what_we_offer;
    else if (name === HEADER_TABS_DATA.WHAT_WE_ARE)
      data = HEADER_LINKS.what_we_are;
    else if (name === HEADER_TABS_DATA.CAREERS) data = HEADER_LINKS.CAREERS;

    if (anchorIndex === index && categoryOpen) {
      // close
      setCategoryOpen(false);
      setCategoryData(null);
      setAnchorIndex(null);
      setDropdownTopPx(null);
      setDropdownHeightPx(null);
    } else {
      setAnchorIndex(index);
      setCategoryData(data);
      setCategoryOpen(true);
      requestAnimationFrame(() => computePosition(index));
    }
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!categoryOpen) return;
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setCategoryOpen(false);
        setAnchorIndex(null);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [categoryOpen]);

  return (
    <Box ref={containerRef} sx={{ mt: 2, position: "relative" }}>
      <Stack>
        {HEADER_TABS.map((val, i) => (
          <Button
            key={i}
            sx={{
              fontSize: 20,
              border: "none",
              borderRadius: "20px",
              mb: 1,
              textAlign: "flex-start",
              justifyContent: "space-between",
              color: COLORS.BLACK,
              fontFamily: kessel.style.fontFamily,
              width: "100%",
            }}
            endIcon={<ArrowDropDown />}
            onClick={() => handleOpen(val.label, i)}
          >
            {val.label}
          </Button>
        ))}
      </Stack>

      {categoryOpen &&
        categoryData &&
        dropdownTopPx !== null &&
        dropdownHeightPx !== null && (
          <Box
            sx={{
              position: "fixed",
              top: `${dropdownTopPx}px`,
              left: 0,
              right: 0,
              zIndex: 1400,
              height: `${dropdownHeightPx}px`,
              backgroundColor: "#fff",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              borderTop: "1px solid #eee",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                p: 2,
                pb: 6,
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ccc",
                  borderRadius: "6px",
                },
              }}
            >
              <Stack spacing={2}>
                {categoryData.map((section, idx) => (
                  <Box key={idx}>
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
                      {section.data.map((item, j) => (
                        <ListItemButton key={j} sx={{ borderRadius: "12px" }}>
                          <ListItemText
                            primary={item.label}
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
            </Box>
          </Box>
        )}
    </Box>
  );
};

export default MobileHeader;
