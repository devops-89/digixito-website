import { COLORS } from "@/utils/enum";
import { archivo, monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo_initial from "@/logo/Digixito_White_Logo.svg";
import footer_icon from "@/icons/footer_snake.svg";
import { LinkedIn, X, YouTube } from "@mui/icons-material";
import { LINK_LIST_DATA, TERMS_PAGE_LINKS } from "@/assets/data/generic-array";
import LinkList from "./common/link-list";
import { SvgIconProps } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  const socialIcons = [
    { Icon: X, url: "https://x.com/digixito" },
    { Icon: YouTube, url: "https://www.youtube.com/@digixito" },
    { Icon: LinkedIn, url: "https://www.linkedin.com/company/digixito/" },
  ];
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} spacing={5}>
          <Grid size={{ lg: 6, xs: 12 }} sx={{ position: "relative" }}>
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 28, xs: 20 },
                fontWeight: 800,
                mb: 2,
              }}
            >
              oops! we’re out of box 😜❤️
            </Typography>
            <Box sx={{ textAlign: "end" }}>
              <Image src={footer_icon} alt="" width={150} />
            </Box>
            <Stack
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              spacing={3}
            >
              <Box
                sx={{
                  backgroundColor: COLORS.BLACK,
                  width: { lg: 500, xs: 300, sm: 400 },
                  height: { lg: 500, xs: 300, sm: 400 },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <Box sx={{}}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Image
                      src={logo_initial}
                      alt=""
                      width={100}
                      style={{ margin: "auto" }}
                    />
                  </Box>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={{ xs: "center" }}
                    spacing={2}
                  >
                    {socialIcons.map((item, i) => (
                      <Link href={item.url} key={i} target="_blank">
                        <IconButton
                          sx={{
                            backgroundColor: "#24262B",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: { lg: 60, xs: 40 },
                            height: { lg: 60, xs: 40 },
                            color: COLORS.WHITE,
                            ":hover": {
                              backgroundColor: "#24262B",
                            },
                          }}
                        >
                          <item.Icon sx={{ fontSize: { lg: 20, xs: 16 } }} />
                        </IconButton>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Box
              sx={{
                backgroundColor: COLORS.BLACK,
                padding: "47px 60px",
                borderRadius: "50px",
                mt: 15,
              }}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                {TERMS_PAGE_LINKS.map((val, i) => (
                  <Typography
                    sx={{
                      color: "#F5F8FF80",
                      fontSize: 14,
                      fontFamily: archivo.style.fontFamily,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "1.4",
                      textTransform: "uppercase",
                    }}
                    key={i}
                  >
                    {val.label}
                  </Typography>
                ))}
              </Stack>

              <LinkList data={LINK_LIST_DATA} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
