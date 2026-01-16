import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import secure from "@/homepage/secure.png";
import Image from "next/image";
import lock from "@/icons/lock.svg";
import { kessel, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { Shield } from "@mui/icons-material";
import { SECURE_CONNECTED_CARD } from "@/utils/types";
const SecureConnectCard = ({
  backgroundImage,
  img,
  heading,
  description,
  isButton,
  button,
}: SECURE_CONNECTED_CARD) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          height: { lg: "65vh", xs: "50vh" },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              size={{ lg: 8, xs: 12 }}
              margin={"auto"}
              sx={{ textAlign: "center" }}
            >
              <Image src={img} alt="" width={50} data-aos="fade-up" />
              <Typography
                data-aos="fade-up"
                data-aos-delay={100}
                sx={{
                  fontSize: 30,
                  fontFamily: monument.style.fontFamily,
                  color: isButton ? COLORS.WHITE : COLORS.BLACK,
                  lineHeight: "55px",
                  letterSpacing: "-0.92px",
                  fontWeight: 800,
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: kessel.style.fontFamily,
                  color: isButton ? "#ffffff60" : "#00000060",
                }}
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {description}
              </Typography>
              {/* {isButton && (
                <Button
                  startIcon={<Shield />}
                  sx={{
                    color: COLORS.BLACK,
                    backgroundColor: COLORS.PRIMARY,
                    padding: "18px",
                    borderRadius: "4px",
                    fontSize: 13,
                    fontFamily: kessel.style.fontFamily,
                    fontWeight: 600,
                    lineHeight: "18px",
                    mt: 3,
                    letterSpacing: "-0.14px",
                  }}
                >
                  {button}
                </Button>
              )} */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SecureConnectCard;
