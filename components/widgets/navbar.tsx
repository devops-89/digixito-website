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
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
  };

  const phone = useMediaQuery("(max-width:600px)");

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
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
          <IconButton onClick={handleClick}>
            <Box
              sx={{
                border: "5px solid #000000",
                borderRadius: "50%",
                width: 10,
                height: 10,
                backgroundColor: open ? COLORS.BLACK : COLORS.TRANSPARENT,
              }}
            ></Box>
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
            <HeaderTabs setAnchorEl={setAnchorEl} />
          )}
        </Container>
      </Popover>
    </Box>
  );
};

export default Navbar;
