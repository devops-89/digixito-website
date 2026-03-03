"use client";
import { COLORS } from "@/utils/enum";
import { monument } from "@/utils/fonts";
import {
  Alert,
  AlertColor,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const ContactMessageForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      title: "Digixito Media Pvt.Ltd.",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      //   console.error(
      //     "EmailJS credentials are not set in environment variables.",
      //   );
      //   setSnackbarOpen({
      //     open: true,
      //     message:
      //       "Sorry, there was an error sending your message. Please try again later.",
      //     severity: "error",
      //   });
      //   setSubmitting(false);
      //   return;
      // }
      // setSubmitting(true);
      // emailjs
      //   .send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      //   .then(
      //     (response) => {
      //       setSnackbarOpen({
      //         open: true,
      //         message: "Your message has been sent successfully!",
      //         severity: "success",
      //       });
      //       resetForm();
      //     },
      //     (err) => {
      //       console.error("FAILED...", err);
      //       setSnackbarOpen({
      //         open: true,
      //         message:
      //           "Failed to send the message. Please check your connection or try again later.",
      //         severity: "error",
      //       });
      //     },
      //   )
      //   .finally(() => {
      //     setSubmitting(false);
      //   });
    },
  });
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
          fontSize: { lg: 30, xs: 15, sm: 25 },
          fontWeight: 400,
          lineHeight: { lg: "50px", xs: "25px", sm: "25px" },
        }}
      >
        SEND US A MESSAGE
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          spacing={{ lg: 7, xs: 3, sm: 5 }}
          sx={{ mt: { lg: 5, xs: 2 } }}
        >
          <TextField
            variant="standard"
            label="Full Name"
            fullWidth
            sx={{
              "& label": {
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 20, xs: 15, sm: 20 },
                fontWeight: 400,
              },
            }}
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            variant="standard"
            label="Email Address"
            fullWidth
            sx={{
              "& label": {
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 20, xs: 15, sm: 20 },
                fontWeight: 400,
              },
            }}
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            variant="standard"
            label="Phone Number"
            fullWidth
            sx={{
              "& label": {
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 20, xs: 15, sm: 20 },
                fontWeight: 400,
              },
            }}
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          {/* <TextField
          variant="standard"
          label="Your Role"
          fullWidth
          sx={{
            "& label": {
              fontFamily: monument.style.fontFamily,
              fontSize: { lg: 23, xs: 15, sm: 20 },
              fontWeight: 400,
            },
          }}
        /> */}
          <TextField
            variant="standard"
            label="How can we help you?"
            fullWidth
            sx={{
              "& label": {
                fontFamily: monument.style.fontFamily,
                fontSize: { lg: 20, xs: 15, sm: 20 },
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
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
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
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={20} />
            ) : (
              "Send message"
            )}
          </Button>
        </Stack>
      </form>
      <Snackbar
        open={snackbarOpen.open}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen((prev) => ({ ...prev, open: false }))}
        message={snackbarOpen.message}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={snackbarOpen.severity}
          onClose={() => setSnackbarOpen((prev) => ({ ...prev, open: false }))}
        >
          {snackbarOpen.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactMessageForm;
