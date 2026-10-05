"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Popover,
  Stack,
  Typography,
  Fade,
  IconButton,
  Drawer,
  Collapse,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  East as EastIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";
import logo from "@/logo/foote_logo.svg";
import Image from "next/image";
import { HEADER_TABS, HEADER_LINKS } from "@/assets/data/header-data";
import { COLORS, HEADER_TABS_DATA } from "@/utils/enum";
import { kessel, archivo } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getLinksKey = (label: string): keyof typeof HEADER_LINKS | null => {
  if (label === HEADER_TABS_DATA.WHAT_WE_OFFER) return "what_we_offer";
  if (label === HEADER_TABS_DATA.WHAT_WE_ARE) return "what_we_are";
  if (label === HEADER_TABS_DATA.CAREERS) return "CAREERS";
  return null;
};

const hasSubMenuItems = (label: string): boolean => {
  const key = getLinksKey(label);
  if (!key) return false;
  const sections = HEADER_LINKS[key] || [];
  return sections.some((s) => s.data && s.data.length > 0);
};

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeTabLabel, setActiveTabLabel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setAnchorEl(null);
    setActiveTabLabel(null);
  }, [pathname]);

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

  const toggleMobileTab = (label: string) => {
    setExpandedMobileTab((prev) => (prev === label ? null : label));
  };

  const toggleCategory = (heading: string) => {
    setExpandedCategory((prev) => (prev === heading ? null : heading));
  };

  return (
    <Box
      sx={{
        position: pathname === "/" ? "fixed" : "sticky",
        top:
          pathname === "/"
            ? { xs: 12, sm: 16, md: 24, lg: 40 }
            : { xs: 10, sm: 14, md: 20 },
        left: 0,
        right: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        pointerEvents: "none",
        boxSizing: "border-box",
        mt: pathname === "/" ? 0 : { xs: "8px", sm: "14px", md: "20px" },
        mb: pathname === "/" ? 0 : { xs: "12px", sm: "20px", md: "30px" },
      }}
    >
      <Container
        maxWidth="lg"
        ref={headerRef}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 2.5, md: 3, lg: 4 },
          boxSizing: "border-box",
          pointerEvents: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor:
              pathname === "/" ? "rgba(0, 0, 0, 0.28)" : "rgba(0, 0, 0, 0.55)",
            backdropFilter: "saturate(180%) blur(20px)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "1000px",
            height: { xs: 58, sm: 64, md: 72, lg: 80 },
            px: { xs: 2, sm: 2.5, md: 3.5, lg: 4 },
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
            aria-label="Digixito Home"
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 46, sm: 54, md: 62, lg: 70 },
                ml: { xs: 0, lg: 1 },
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <Image
                src={logo}
                alt="digixito"
                width={70}
                height={26}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                priority
              />
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              display: { xs: "none", lg: "flex" },
              mr: { lg: 1 },
            }}
            spacing={{ lg: 2.5, xl: 3 }}
          >
            {HEADER_TABS.map((val, i) =>
              val.url ? (
                <Link
                  key={i}
                  href={val.url}
                  prefetch={false}
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e: any) =>
                    handleMouseEnter(e, val.label, true)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Typography
                    sx={{
                      color: COLORS.WHITE,
                      fontSize: { lg: 15, xl: 17 },
                      fontWeight: "900",
                      fontFamily: kessel.style.fontFamily,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      position: "relative",
                      letterSpacing: "0.5px",
                      whiteSpace: "nowrap",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: COLORS.PRIMARY,
                      },
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
                  >
                    {val.label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  key={i}
                  component="span"
                  sx={{
                    color: COLORS.WHITE,
                    textDecoration: "none",
                    fontSize: { lg: 15, xl: 17 },
                    fontWeight: "900",
                    fontFamily: kessel.style.fontFamily,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    position: "relative",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: COLORS.PRIMARY,
                    },
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
                    handleMouseEnter(e, val.label, false)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {val.label}
                </Typography>
              ),
            )}
          </Stack>

          {/* Mobile / Tablet Hamburger Button */}
          <IconButton
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            sx={{
              display: { xs: "inline-flex", lg: "none" },
              color: COLORS.WHITE,
              p: { xs: 0.8, sm: 1 },
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              transition: "all 0.25s ease",
              boxSizing: "border-box",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                transform: "scale(1.05)",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: 22, sm: 26, md: 28 } }} />
          </IconButton>
        </Box>

        {/* Desktop Popover Mega-Menu */}
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
          sx={{
            pointerEvents: "none",
            mt: 2,
            display: { xs: "none", lg: "block" },
          }}
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
                backgroundColor: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.15)",
                maxWidth: { xs: "calc(100vw - 32px)", lg: "1200px" },
                width: isLargeMenu ? "100%" : "auto",
                maxHeight: "calc(100vh - 140px)",
                overflowY: "auto",
                boxSizing: "border-box",
                "&::-webkit-scrollbar": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                  borderRadius: "3px",
                },
              },
            },
          }}
        >
          <Box
            sx={{
              p: { lg: 3.5, xl: 4 },
              display: "grid",
              gridTemplateColumns: isLargeMenu
                ? "repeat(5, minmax(0, 1fr))"
                : `repeat(${activeLinks.length}, minmax(0, 1fr))`,
              gap: 3,
              width: isLargeMenu ? "100%" : "auto",
              boxSizing: "border-box",
            }}
          >
            {activeLinks.map((section, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", flexDirection: "column", minWidth: 0, boxSizing: "border-box" }}
              >
                {section.url ? (
                  <Link
                    href={section.url}
                    style={{ textDecoration: "none" }}
                    onClick={() => setAnchorEl(null)}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: COLORS.BLACK,
                        fontWeight: 800,
                        mb: 2,
                        fontSize: 13,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: "#666666",
                        },
                      }}
                    >
                      {section.heading}
                    </Typography>
                  </Link>
                ) : (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: COLORS.BLACK,
                      fontWeight: 800,
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
                )}

                <Stack spacing={1.5} sx={{ minWidth: 0 }}>
                  {section.data?.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.url || "#"}
                      onClick={() => setAnchorEl(null)}
                      style={{ textDecoration: "none", display: "block" }}
                    >
                      <Typography
                        sx={{
                          color: "#555555",
                          fontSize: 13.5,
                          lineHeight: 1.45,
                          transition: "all 0.2s ease",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                          "&:hover": {
                            color: "#000000",
                            transform: "translateX(3px)",
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Popover>
      </Container>

      {/* Mobile & Tablet Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 390, md: 430 },
            maxWidth: "100vw",
            background: "linear-gradient(180deg, #0e0f14 0%, #060608 100%)",
            color: COLORS.WHITE,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "-12px 0 40px rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: { xs: 2.2, sm: 2.8 },
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            boxSizing: "border-box",
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{ display: "inline-flex", alignItems: "center" }}
            aria-label="Digixito Home"
          >
            <Image
              src={logo}
              alt="digixito"
              width={58}
              height={22}
              style={{
                width: "auto",
                height: "22px",
                filter: "brightness(1.1)",
              }}
            />
          </Link>

          <IconButton
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            sx={{
              color: COLORS.WHITE,
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "50%",
              p: 0.9,
              transition: "all 0.2s ease",
              boxSizing: "border-box",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transform: "rotate(90deg)",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Drawer Content */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            px: { xs: 2, sm: 2.5 },
            py: 2.5,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "2px",
            },
          }}
        >
          {HEADER_TABS.map((tab, i) => {
            const hasSub = hasSubMenuItems(tab.label);
            const isTabExpanded = expandedMobileTab === tab.label;
            const linkKey = getLinksKey(tab.label);
            const sections = linkKey ? HEADER_LINKS[linkKey] || [] : [];

            if (hasSub) {
              return (
                <Box
                  key={i}
                  sx={{
                    borderRadius: "14px",
                    backgroundColor: isTabExpanded
                      ? "rgba(255, 255, 255, 0.04)"
                      : "transparent",
                    border: isTabExpanded
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid transparent",
                    transition: "all 0.25s ease",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Accordion Tab Header */}
                  <Box
                    onClick={() => toggleMobileTab(tab.label)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 1.6,
                      px: 2,
                      cursor: "pointer",
                      borderRadius: "14px",
                      userSelect: "none",
                      boxSizing: "border-box",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 16, sm: 17 },
                        fontWeight: 800,
                        fontFamily: kessel.style.fontFamily,
                        textTransform: "uppercase",
                        color: isTabExpanded ? COLORS.PRIMARY : COLORS.WHITE,
                        letterSpacing: "0.5px",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {tab.label}
                    </Typography>
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 22,
                        color: isTabExpanded
                          ? COLORS.PRIMARY
                          : "rgba(255, 255, 255, 0.6)",
                        transform: isTabExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease, color 0.2s ease",
                      }}
                    />
                  </Box>

                  {/* Sub-menu Content */}
                  <Collapse in={isTabExpanded} timeout="auto" unmountOnExit>
                    <Box sx={{ px: 2, pb: 2, pt: 0.5, boxSizing: "border-box" }}>
                      {tab.label === HEADER_TABS_DATA.WHAT_WE_OFFER ? (
                        // Nested Categories for What We Offer
                        <Stack spacing={1.2}>
                          {sections.map((section, sIdx) => {
                            const isCatOpen = expandedCategory === section.heading;
                            return (
                              <Box
                                key={sIdx}
                                sx={{
                                  borderRadius: "10px",
                                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                                  border: "1px solid rgba(255, 255, 255, 0.05)",
                                  overflow: "hidden",
                                  boxSizing: "border-box",
                                }}
                              >
                                <Box
                                  onClick={() => toggleCategory(section.heading)}
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 1.2,
                                    px: 1.8,
                                    cursor: "pointer",
                                    userSelect: "none",
                                    boxSizing: "border-box",
                                    "&:hover": {
                                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                                    },
                                  }}
                                >
                                  <Stack direction="row" alignItems="center" spacing={1.2}>
                                    <Box
                                      sx={{
                                        width: 5,
                                        height: 5,
                                        borderRadius: "50%",
                                        backgroundColor: COLORS.PRIMARY,
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        fontSize: 13.5,
                                        fontWeight: 700,
                                        fontFamily: archivo.style.fontFamily,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                        color: isCatOpen
                                          ? COLORS.PRIMARY
                                          : "rgba(255, 255, 255, 0.9)",
                                      }}
                                    >
                                      {section.heading}
                                    </Typography>
                                  </Stack>
                                  <ExpandMoreIcon
                                    sx={{
                                      fontSize: 18,
                                      color: "rgba(255, 255, 255, 0.5)",
                                      transform: isCatOpen
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                      transition: "transform 0.25s ease",
                                    }}
                                  />
                                </Box>

                                <Collapse in={isCatOpen} timeout="auto" unmountOnExit>
                                  <Box
                                    sx={{
                                      pl: 3.2,
                                      pr: 1.5,
                                      pb: 1.5,
                                      pt: 0.5,
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: 0.8,
                                      boxSizing: "border-box",
                                    }}
                                  >
                                    {section.url && (
                                      <Link
                                        href={section.url}
                                        onClick={() => setMobileOpen(false)}
                                        style={{ textDecoration: "none" }}
                                      >
                                        <Typography
                                          sx={{
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: COLORS.PRIMARY,
                                            py: 0.5,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 0.6,
                                            "&:hover": {
                                              textDecoration: "underline",
                                            },
                                          }}
                                        >
                                          Explore {section.heading} →
                                        </Typography>
                                      </Link>
                                    )}

                                    {section.data?.map((link, lIdx) => (
                                      <Link
                                        key={lIdx}
                                        href={link.url || "#"}
                                        onClick={() => setMobileOpen(false)}
                                        style={{ textDecoration: "none" }}
                                      >
                                        <Typography
                                          sx={{
                                            fontSize: 13,
                                            color: "rgba(255, 255, 255, 0.72)",
                                            py: 0.6,
                                            lineHeight: 1.4,
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                              color: COLORS.WHITE,
                                              pl: 0.5,
                                            },
                                          }}
                                        >
                                          {link.label}
                                        </Typography>
                                      </Link>
                                    ))}
                                  </Box>
                                </Collapse>
                              </Box>
                            );
                          })}
                        </Stack>
                      ) : (
                        // Standard list for What We Are (e.g. About, Case Studies, Blogs)
                        <Stack spacing={0.8} sx={{ pt: 0.5 }}>
                          {sections.map((section) =>
                            section.data?.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                href={link.url || "#"}
                                onClick={() => setMobileOpen(false)}
                                style={{ textDecoration: "none" }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    py: 1.2,
                                    px: 1.8,
                                    borderRadius: "10px",
                                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(255, 255, 255, 0.05)",
                                    transition: "all 0.2s ease",
                                    boxSizing: "border-box",
                                    "&:hover": {
                                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                                      borderColor: "rgba(255, 255, 255, 0.12)",
                                    },
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: 14,
                                      fontWeight: 500,
                                      color: "rgba(255, 255, 255, 0.85)",
                                    }}
                                  >
                                    {link.label}
                                  </Typography>
                                  <KeyboardArrowRightIcon
                                    sx={{
                                      fontSize: 18,
                                      color: "rgba(255, 255, 255, 0.4)",
                                    }}
                                  />
                                </Box>
                              </Link>
                            )),
                          )}
                        </Stack>
                      )}
                    </Box>
                  </Collapse>
                </Box>
              );
            }

            // Direct Links for Tabs without sub-menu (e.g., Careers, Our Projects)
            return (
              <Box
                key={i}
                component={tab.url ? Link : "div"}
                href={tab.url || "#"}
                onClick={() => setMobileOpen(false)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 1.6,
                  px: 2,
                  borderRadius: "14px",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxSizing: "border-box",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    "& .direct-arrow": {
                      transform: "translateX(4px)",
                      color: COLORS.PRIMARY,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 16, sm: 17 },
                    fontWeight: 800,
                    fontFamily: kessel.style.fontFamily,
                    textTransform: "uppercase",
                    color: COLORS.WHITE,
                    letterSpacing: "0.5px",
                  }}
                >
                  {tab.label}
                </Typography>
                <EastIcon
                  className="direct-arrow"
                  sx={{
                    fontSize: 18,
                    color: "rgba(255, 255, 255, 0.5)",
                    transition: "all 0.2s ease",
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* Drawer Bottom CTA */}
        <Box
          sx={{
            p: { xs: 2.2, sm: 2.8 },
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 1.8,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            boxSizing: "border-box",
          }}
        >
          <Button
            component={Link}
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            fullWidth
            sx={{
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.BLACK,
              fontWeight: 900,
              fontFamily: kessel.style.fontFamily,
              fontSize: 15,
              textTransform: "uppercase",
              py: 1.4,
              borderRadius: "1000px",
              boxShadow: "0 6px 24px rgba(255, 239, 70, 0.25)",
              letterSpacing: "0.5px",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#fff059",
                boxShadow: "0 8px 30px rgba(255, 239, 70, 0.4)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Get in Touch
          </Button>

          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: 12,
              letterSpacing: "0.5px",
            }}
          >
            DIGIXITO • DIGITAL EXCELLENCE
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header2;

