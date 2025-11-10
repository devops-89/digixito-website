import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const ContactMessageForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        borderRadius: "32px",
        padding: "20px 25px",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: monument.style.fontFamily,
          fontSize: 30,
          fontWeight: 400,
          lineHeight: "50px",
        }}
      >
        SEND US A MESSAGE
      </Typography>
      <Stack
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        spacing={7}
        sx={{ mt: 5 }}
      >
        <TextField
          variant="standard"
          label="Full Name"
          fullWidth
          sx={{
            "& label": {
              fontFamily: monument.style.fontFamily,
              fontSize: 23,
              fontWeight: 400,
            },
          }}
        />
        <TextField
          variant="standard"
          label="Email Address"
          fullWidth
          sx={{
            "& label": {
              fontFamily: monument.style.fontFamily,
              fontSize: 23,
              fontWeight: 400,
            },
          }}
        />
        <TextField
          variant="standard"
          label="Phone Number"
          fullWidth
          sx={{
            "& label": {
              fontFamily: monument.style.fontFamily,
              fontSize: 23,
              fontWeight: 400,
            },
          }}
        />
        <TextField
          variant="standard"
          label="Your Role"
          fullWidth
          sx={{
            "& label": {
              fontFamily: monument.style.fontFamily,
              fontSize: 23,
              fontWeight: 400,
            },
          }}
        />
        <TextField
          variant="standard"
          label="How can we help you?"
          fullWidth
          sx={{
            "& label": {
              fontFamily: monument.style.fontFamily,
              fontSize: 23,
              fontWeight: 400,
            },
            "& fieldset": {
              height: 100,
            },
            "& .MuiOutlinedinput-Input": {
              height: 110,
            },
          }}
          multiline
        />

        <Button
          sx={{
            fontFamily: monument.style.fontFamily,
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.BLACK,
            // height: 87,
            padding: "10px 34px",
          }}
          fullWidth
        >
          Send message
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactMessageForm;
