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
import instagram from "@/icons/twitter.svg";
import Image from "next/image";
const ContactForm = () => {
  const socialIcons = [
    {
        img:linkedin,
  },
];
  return (
    <div>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid size={6}>
              <ImageHeading title="Contact us" />
              <Typography
                sx={{
                  fontSize: 23,
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
                  fontSize: 30,
                  fontFamily: monument.style.fontFamily,
                  fontWeight: 400,
                  lineHeight: "50px",
                  letterSpacing: "-1.516px",
                }}
              >
                Follow Us
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                {/* {socialIcons.map((val, i) => (
                  <IconButton>
                    <Image src={val.} />
                  </IconButton>
                ))} */}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ContactForm;
