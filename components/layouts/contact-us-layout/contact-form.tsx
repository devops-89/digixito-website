import ImageHeading from "@/components/widgets/image-heading";
import { kessel, monument } from "@/utils/fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ContactCard from "./components/contact-card";
import { CONTACT_CARD_DATA } from "@/assets/data/generic-array";
import { COLORS } from "@/utils/enum";
import linkedin from "@/icons/linkedin.svg";
import fb from "@/icons/fb.svg";
import x from "@/icons/twitter.svg";
import instagram from "@/icons/instagram.svg";
import Image from "next/image";
import combit from "@/banners/Bitmap.png";
import star from "@/icons/gold-star.svg";
import giffty from "@/icons/heading-star.png";
import ContactMessageForm from "./components/form";
const ContactForm = () => {
  const socialIcons = [
    {
      img: linkedin,
    },
    {
      img: fb,
    },
    {
      img: x,
    },
    {
      img: instagram,
    },
  ];
  return (
    <div>
      <Box
        sx={{
          py: 10,
          backgroundImage: `url(${combit.src})`,
          height: "100%",
          backgroundPosition: "top right",
          backgroundColor: "#eee",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "end" }}>
            <Image src={star} width={30} alt="" />
          </Box>
          <Grid container spacing={10}>
            <Grid size={{ lg: 6, xs: 12, sm: 12 }}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <ImageHeading
                  title="Contact us"
                  sx={{ width: { lg: 400, xs: 350 }, px: 1 }}
                />
                {/* <Image src={giffty} alt="" style={{ marginTop: -10,transform:"rotate(180deg)" }} /> */}
              </Stack>
              <Typography
                sx={{
                  fontSize: { lg: 23, xs: 20, sm: 20 },
                  fontFamily: kessel.style.fontFamily,
                  my: 2,
                }}
              >
                Please provide the following information and we’ll put you in
                touch with the right person.
              </Typography>

              <Stack spacing={2}>
                {CONTACT_CARD_DATA.map((val, i) => (
                  <ContactCard
                    img={val.img}
                    description={val.description}
                    heading={val.heading}
                    key={i}
                  />
                ))}
              </Stack>
              <Divider sx={{ borderColor: COLORS.BLACK }} />
              <Typography
                sx={{
                  fontSize: { lg: 30, xs: 25, sm: 25 },
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: { lg: "50px", xs: "25px", sm: "25px" },
                  // letterSpacing: {
                  //   lg: "-px",
                  //   xs: "-1.25px",
                  //   sm: "-1.25px",
                  // },
                  my: { lg: 3, xs: 2, sm: 2 },
                  textAlign: { lg: "start", xs: "center" },
                }}
              >
                Follow Us
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={{ lg: "flex-start", xs: "center" }}
                spacing={2}
              >
                {socialIcons.map((val, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      backgroundColor: COLORS.BLACK,
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ":hover": {
                        backgroundColor: COLORS.BLACK,
                      },
                    }}
                  >
                    <Image src={val.img} alt="" width={20} />
                  </IconButton>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ lg: 6, xs: 12, sm: 12 }}>
              <ContactMessageForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ContactForm;
