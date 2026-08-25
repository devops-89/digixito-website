"use client";
import logo from "@/logo/foote_logo.svg";
import { COLORS } from "@/utils/enum";
import {
  Box,
  Container,
  IconButton,
  Popover,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Grow from "@mui/material/Grow";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import HeaderTabs from "./common/header-tabs";
import MobileHeader from "./mobile-header";
import { Sling as Hamburger } from "hamburger-react";
import { Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import blackOutlineLogo from "@/logo/final_black.svg";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
    setOpenMenu(true);
  };

  const phone = useMediaQuery("(max-width:600px)");
  const pathname = usePathname();

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const isOverlay =
    pathname === "/" ||
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/blogs");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header>
        {!isOverlay && <div style={{ height: "100px" }} />}
      </header>
    );
  }

  return (
    <header>
      <Box
        sx={{
          // position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.8)"
            : isOverlay
              ? "transparent"
              : COLORS.WHITE,
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            : "none",
          // py: isScrolled ? 1 : 2.5,
          py: 1,
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.3)"
            : "none",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            transition: "all 0.4s ease",
          }}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Link href={"/"}>
              <Image
                src={
                  isOverlay && !isScrolled ? blackOutlineLogo : blackOutlineLogo
                }
                alt=""
                width={isScrolled ? 55 : (mounted && phone) ? 60 : 100}
                style={{
                  transition: "all 0.4s ease",
                  filter: isScrolled
                    ? "drop-shadow(0 0 2px rgba(0,0,0,0.1))"
                    : "none",
                }}
              />
            </Link>
            <IconButton
              onClick={handleClick}
              sx={{
                color: isOverlay && !isScrolled ? COLORS.BLACK : COLORS.BLACK,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {/* <Hamburger toggled={openMenu} toggle={setOpenMenu} size={26} /> */}

              <Menu sx={{ fontSize: isScrolled ? 30 : 45 }} />
            </IconButton>
          </Stack>
        </Container>
      </Box>
      {!isOverlay && (
        <Box
          sx={{
            height: { xs: "72px", lg: "100px" },
            transition: "all 0.4s ease",
          }}
        />
      )}
      <Popover
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow}
        transitionDuration={200}
        TransitionProps={{ style: { transformOrigin: "right top" } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            height: "100%",
            top: "0 !important",
            right: "0px !important",
            left: "0px !important",
            "&.MuiPopover-paper": {
              maxWidth: "100% !important",
              maxHeight: "100vh",
              boxShadow: "none",
            },
            position: "relative",
            overflow: "hidden",
          },
        }}
      >
        <Container maxWidth="lg">
          {(mounted && phone) ? (
            <MobileHeader setAnchorEl={setAnchorEl} />
          ) : (
            <HeaderTabs setAnchorEl={setAnchorEl} setMenuOpen={setOpenMenu} />
          )}
        </Container>
      </Popover>
    </header>
  );
};

export default Navbar;
