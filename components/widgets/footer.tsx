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
import logo_initial from "@/logo/digixito_initial.png";
import footer_icon from "@/icons/footer_snake.svg";
import { LinkedIn, X, YouTube } from "@mui/icons-material";
import { LINK_LIST_DATA, TERMS_PAGE_LINKS } from "@/assets/data/generic-array";
import LinkList from "./common/link-list";
const Footer = () => {
  const socialIcons: React.ElementType[] = [X, YouTube, LinkedIn];
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} spacing={5}>
          <Grid size={{ lg: 6, xs: 12 }} sx={{ position: "relative" }}>
            <Typography
              sx={{
                fontFamily: monument.style.fontFamily,
                fontSize: 28,
                fontWeight: 800,
                mb: 2,
              }}
            >
              oops! we’re out of box 😜❤️
            </Typography>
            <Box sx={{ textAlign: "end" }}>
              <Image src={footer_icon} alt="" width={150} />
            </Box>
            <Stack direction={"row"} alignItems={"flex-start"} spacing={3}>
              <Box
                sx={{
                  backgroundColor: COLORS.BLACK,
                  width: 500,
                  height: 500,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Image src={logo_initial} alt="" />
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    {socialIcons.map((Icon, i) => (
                      <IconButton
                        key={i}
                        sx={{
                          backgroundColor: "#24262B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 60,
                          height: 60,
                          color: COLORS.WHITE,
                          ":hover": {
                            backgroundColor: "#24262B",
                          },
                        }}
                      >
                        <Icon />
                      </IconButton>
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
