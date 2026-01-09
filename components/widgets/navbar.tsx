"use client";
import logo from "@/logo/Digixito_White_Logo.svg";
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
import React, { useEffect, useState } from "react";
import HeaderTabs from "./common/header-tabs";
import MobileHeader from "./mobile-header";
import { Sling as Hamburger } from "hamburger-react";
import { Menu } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import blackOutlineLogo from "@/logo/Digixito_black_outline.svg";
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

  const [showAbsoluteHeader, setShowAbsoluteHeader] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setShowAbsoluteHeader(true);
    } else {
      setShowAbsoluteHeader(false);
    }
  }, [pathname]);
  return (
    <Box
      sx={{
        // p: 2,
        position: "relative",
        backgroundColor: COLORS.WHITE,
        zIndex: showAbsoluteHeader ? 1 : 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: showAbsoluteHeader ? "absolute" : "relative",
          top: showAbsoluteHeader ? 40 : 10,
          left: showAbsoluteHeader ? "50%" : 0,
          transform: showAbsoluteHeader ? "translateX(-50%)" : "translateX(0)",
        }}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Link href={"/"}>
            <Image
              src={showAbsoluteHeader ? logo : blackOutlineLogo}
              alt=""
              width={80}
            />
          </Link>
          <IconButton
            onClick={handleClick}
            sx={{ color: showAbsoluteHeader ? COLORS.WHITE : COLORS.BLACK }}
          >
            {/* <Hamburger toggled={openMenu} toggle={setOpenMenu} size={26} /> */}

            <Menu sx={{ fontSize: 45 }} />
          </IconButton>
        </Stack>
      </Container>
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
          {phone ? (
            <MobileHeader setAnchorEl={setAnchorEl} />
          ) : (
            <HeaderTabs setAnchorEl={setAnchorEl} setMenuOpen={setOpenMenu} />
          )}
        </Container>
      </Popover>
    </Box>
  );
};

export default Navbar;
