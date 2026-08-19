import { FAQ_DATA } from "@/assets/data/generic-array";
import { COLORS } from "@/utils/enum";
import { archivo, kessel, monument } from "@/utils/fonts";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import FaqQuestionCard from "./common/faq-question-card";

const FaqSection = () => {
  return (
    <Box
      sx={{
        pt: 10,
        height: { lg: "90vh", xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { lg: 38, xs: 25, sm: 30 },
                fontFamily: monument.style.fontFamily,
                textTransform: "capitalize",
              }}
              data-aos="fade-up"
            >
              Frequently Asked Questions
            </Typography>

            <Typography
              component="h3"
              sx={{
                fontFamily: kessel.style.fontFamily,
                fontSize: 18,
                mt: 4,
              }}
              data-aos="fade-up"
            >
              Still you have any questions? Contact our Team via
              info@digixito.com
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              spacing={4}
              sx={{ mt: 5 }}
              data-aos="fade-up"
            >
              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontFamily: archivo.style.fontFamily,
                    borderRadius: "50px",
                    border: "1px solid #010205",
                    padding: "17px",
                    width: "176px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    textTransform: "capitalize",
                    fontSize: 16,
                    color: COLORS.BLACK,
                  }}
                >
                  Contact Us
                </Button>
              </Link>

              {/* <Button
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  borderRadius: "50px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  fontSize: 16,
                  color: COLORS.BLACK,
                  textDecoration: "underline",
                }}
              >
                Contact Us
              </Button> */}
            </Stack>
          </Grid>

          <Grid size={{ lg: 6, xs: 12, sm: 6 }}>
            <FaqQuestionCard data={FAQ_DATA} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FaqSection;