"use client";
import {
  Box,
  Container,
  Popover,
  Stack,
  Typography,
  Fade,
} from "@mui/material";
import React, { useState, useRef } from "react";
import logo from "@/logo/foote_logo.svg";
import Image from "next/image";
import { HEADER_TABS, HEADER_LINKS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { kessel } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getLinksKey = (label: string): keyof typeof HEADER_LINKS | null => {
  if (label === HEADER_TABS_DATA.WHAT_WE_OFFER) return "what_we_offer";
  if (label === HEADER_TABS_DATA.WHAT_WE_ARE) return "what_we_are";
  if (label === HEADER_TABS_DATA.CAREERS) return "CAREERS";
  return null;
};

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeTabLabel, setActiveTabLabel] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const activeKey = activeTabLabel ? getLinksKey(activeTabLabel) : null;
  const activeLinks = activeKey ? HEADER_LINKS[activeKey] : [];
  const open = Boolean(anchorEl) && activeLinks.length > 0;
  const isLargeMenu = activeLinks.length > 3;

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    label: string,
    hasUrl?: boolean,
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveTabLabel(label);

    if (hasUrl) {
      setAnchorEl(null);
      return;
    }

    const key = getLinksKey(label);
    const links = key ? HEADER_LINKS[key] : [];
    if (links.length > 3) {
      setAnchorEl(headerRef.current);
    } else {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setActiveTabLabel(null);
    }, 200);
  };
  return (
    <Box
      sx={{
        position: pathname === "/" ? "fixed" : "sticky",
        top: pathname === "/" ? 50 : 20,
        mt: pathname === "/" ? 0 : "20px",
        mb: pathname === "/" ? 0 : "30px",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg" ref={headerRef}>
        <Box
          sx={{
            backgroundColor:
              pathname === "/" ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.5)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
            borderRadius: "1000px",
            height: 80,
            px: 4,
          }}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="digixito"
              width={70}
              style={{ marginLeft: "20px" }}
            />
          </Link>

          <Stack direction="row" sx={{ alignItems: "center" }} spacing={3}>
            {HEADER_TABS.map((val, i) => (
              <Typography
                key={i}
                component={val.url ? Link : "span"}
                href={val.url}
                prefetch={false}
                sx={{
                  color: COLORS.WHITE,
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: "900",
                  fontFamily: kessel.style.fontFamily,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: activeTabLabel === val.label ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: COLORS.PRIMARY,
                    transition: "width 0.3s ease",
                  },
                }}
                onMouseEnter={(e: any) =>
                  handleMouseEnter(e, val.label, !!val.url)
                }
                onMouseLeave={handleMouseLeave}
              >
                {val.label}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          onClose={() => setAnchorEl(null)}
          disableScrollLock
          disableRestoreFocus
          TransitionComponent={Fade}
          transitionDuration={300}
          sx={{ pointerEvents: "none", mt: 2 }}
          slotProps={{
            paper: {
              onMouseEnter: () => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
              },
              onMouseLeave: handleMouseLeave,
              sx: {
                pointerEvents: "auto",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(12px)",
                borderRadius: "16px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 24px 48px rgba(0,0,0,0.1)",
                maxWidth: { xs: "calc(100vw - 32px)", lg: "1200px" },
                width: isLargeMenu ? "100%" : "auto",
              },
            },
          }}
        >
          <Box
            sx={{
              p: 4,
              display: "grid",
              gridTemplateColumns: isLargeMenu
                ? { xs: "1fr", md: "repeat(auto-fit, minmax(150px, 1fr))" }
                : `repeat(${activeLinks.length}, 1fr)`,
              gap: 0.5,
              width: isLargeMenu ? "100%" : "auto",
            }}
          >
            {activeLinks.map((section, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", flexDirection: "column", minWidth: 0 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: COLORS.BLACK,
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  {section.heading}
                </Typography>
                <Stack spacing={1.5} sx={{ minWidth: 0 }}>
                  {section.data?.map((link, linkIdx) => (
                    <Typography
                      key={linkIdx}
                      component="a"
                      href={link.url}
                      sx={{
                        color: "#555555",
                        textDecoration: "none",
                        fontSize: 14,
                        lineHeight: 1.4,
                        transition: "color 0.2s ease",
                        "&:hover": { color: "#000000" },
                        display: "block",
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Popover>
      </Container>
    </Box>
  );
};

export default Header2;
