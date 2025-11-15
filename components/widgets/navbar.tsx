"use client";
import logo from "@/logo/Digixito_black_outline.svg";
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
import React, { useState } from "react";
import HeaderTabs from "./common/header-tabs";
import MobileHeader from "./mobile-header";
import { Sling as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
    setOpenMenu(true);
  };

  const phone = useMediaQuery("(max-width:600px)");

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  return (
    <Box sx={{ p: 2 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Link href={"/"}>
            <Image src={logo} alt="" width={80} />
          </Link>
          <IconButton onClick={handleClick} sx={{ color: COLORS.BLACK }}>
            {/* <Box
              sx={{
                border: "5px solid #000000",
                borderRadius: "50%",
                width: 10,
                height: 10,
                backgroundColor: open ? COLORS.BLACK : COLORS.TRANSPARENT,
              }}
            ></Box> */}
            {/* {open ? <CloseTwoTone /> : <Menu />} */}
            <Hamburger toggled={openMenu} toggle={setOpenMenu} size={26} />
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
            top: "110px !important",
            right: "0px !important",
            left: "0px !important",
            "&.MuiPopover-paper": {
              maxWidth: "100% !important",
              maxHeight: "100vh",
              boxShadow: "none",
            },
            position: "relative",
            // pb: 100,
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
