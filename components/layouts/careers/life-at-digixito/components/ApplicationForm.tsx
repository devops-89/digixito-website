"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  AlertColor,
} from "@mui/material";
import { Close, CloudUploadOutlined } from "@mui/icons-material";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { MuiTelInput } from "mui-tel-input";
import { COLORS } from "@/utils/enum";
import { monument, archivo } from "@/utils/fonts";
import { useModal } from "@/store/useModal";

interface ApplicationFormProps {
  roleTitle: string;
}

const applicationValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  coverMessage: Yup.string(),
  resume: Yup.mixed().required("Resume is required"),
});

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: archivo.style.fontFamily,
    backgroundColor: "#F9FAFB",
    borderRadius: "12px",
    transition: "all 0.2s ease-in-out",
    "& fieldset": {
      borderColor: "#E5E7EB",
    },
    "&:hover fieldset": {
      borderColor: "#D1D5DB",
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.BLACK,
      borderWidth: "1px",
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: archivo.style.fontFamily,
    color: "#6B7280",
    "&.Mui-focused": {
      color: COLORS.BLACK,
      fontWeight: 600,
    },
  },
};

const ApplicationForm = ({ roleTitle }: ApplicationFormProps) => {
  const { hideModal } = useModal();
  const [fileName, setFileName] = useState<string | null>(null);
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
      coverMessage: "",
      resume: null,
      roleTitle: roleTitle,
    },
    validationSchema: applicationValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("coverMessage", values.coverMessage);
      formData.append("roleTitle", roleTitle);

      if (values.resume) {
        formData.append("resume", values.resume);
      }

      try {
        await axios.post("/api/apply", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setSnackbarOpen({
          open: true,
          message: "Application submitted successfully!",
          severity: "success",
        });
        resetForm();
        setFileName(null);
        setTimeout(() => {
          hideModal();
        }, 1500);
      } catch (error) {
        console.error("Failed to submit", error);
        setSnackbarOpen({
          open: true,
          message: "Failed to submit application. Please try again later.",
          severity: "error",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "500px" },
        position: "relative",
        padding: "24px 30px",
      }}
    >
      <IconButton
        onClick={hideModal}
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          color: COLORS.BLACK,
        }}
      >
        <Close />
      </IconButton>

      <Typography
        sx={{
          fontFamily: monument.style.fontFamily,
          fontSize: { lg: 28, xs: 24, sm: 26 },
          fontWeight: 800,
          lineHeight: 1.2,
          mb: 1,
          color: COLORS.BLACK,
        }}
      >
        JOIN THE TEAM
      </Typography>

      <Typography
        sx={{
          fontFamily: archivo.style.fontFamily,
          fontSize: 16,
          color: "#6B7280",
          mb: 4,
          fontWeight: 500,
        }}
      >
        Applying for{" "}
        <strong style={{ color: COLORS.BLACK }}>{roleTitle}</strong>
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            maxHeight: "calc(100vh - 270px)",
            overflowY: "auto",
            pr: 1,
            mr: -1,
          }}
        >
          <Stack spacing={2}>
            <TextField
              variant="outlined"
              label="Full Name"
              fullWidth
              sx={textFieldSx}
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && (formik.errors.name as string)}
            />

            <TextField
              variant="outlined"
              label="Email Address"
              fullWidth
              sx={textFieldSx}
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email && (formik.errors.email as string)
              }
            />

            <MuiTelInput
              variant="outlined"
              label="Phone Number"
              defaultCountry="IN"
              fullWidth
              sx={textFieldSx}
              id="phone"
              value={formik.values.phone}
              onChange={(newValue) => formik.setFieldValue("phone", newValue)}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={
                formik.touched.phone && formik.errors.phone
                  ? String(formik.errors.phone)
                  : ""
              }
            />

            <TextField
              variant="outlined"
              label="Cover Message (Optional)"
              multiline
              rows={2}
              fullWidth
              sx={textFieldSx}
              id="coverMessage"
              value={formik.values.coverMessage}
              onChange={formik.handleChange}
              error={
                formik.touched.coverMessage &&
                Boolean(formik.errors.coverMessage)
              }
              helperText={
                formik.touched.coverMessage &&
                (formik.errors.coverMessage as string)
              }
            />

            <Box>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                startIcon={
                  <CloudUploadOutlined
                    sx={{
                      fontSize: "32px !important",
                      color: fileName ? COLORS.BLACK : "#9CA3AF",
                    }}
                  />
                }
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  fontWeight: 600,
                  fontSize: 15,
                  border:
                    formik.touched.resume && formik.errors.resume
                      ? "2px dashed #EF4444"
                      : fileName
                        ? "2px dashed #000"
                        : "2px dashed #E5E7EB",
                  backgroundColor: fileName ? "#F3F4F6" : "#F9FAFB",
                  color: fileName ? COLORS.BLACK : "#6B7280",
                  justifyContent: "center",
                  textTransform: "none",
                  py: 3,
                  px: 3,
                  borderRadius: "12px",
                  flexDirection: "column",
                  gap: 1,
                  "&:hover": {
                    border: fileName ? "2px dashed #000" : "2px dashed #D1D5DB",
                    backgroundColor: "#F3F4F6",
                  },
                  "& .MuiButton-startIcon": {
                    margin: 0,
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Box sx={{ textAlign: "center", mt: 1 }}>
                  {fileName ? (
                    <span style={{ color: COLORS.BLACK }}>{fileName}</span>
                  ) : (
                    <>
                      <span
                        style={{
                          color: COLORS.BLACK,
                          display: "block",
                          marginBottom: "4px",
                        }}
                      >
                        Click to upload Resume
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 400,
                          color: "#9CA3AF",
                          display: "block",
                        }}
                      >
                        PDF or DOCX (Max 5MB)
                      </span>
                    </>
                  )}
                </Box>
                <input
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    if (file) {
                      formik.setFieldValue("resume", file);
                      setFileName(file.name);
                    }
                  }}
                />
              </Button>
              {formik.touched.resume && formik.errors.resume && (
                <Typography
                  color="error"
                  variant="caption"
                  sx={{
                    mt: 1,
                    display: "block",
                    textAlign: "center",
                    fontFamily: archivo.style.fontFamily,
                  }}
                >
                  {formik.errors.resume as string}
                </Typography>
              )}
            </Box>
          </Stack>
        </Box>
        <Box sx={{ pt: 2, pb: 1, px: { xs: 1, md: 0 } }}>
          <Button
            sx={{
              fontFamily: monument.style.fontFamily,
              backgroundColor: COLORS.PRIMARY,
              color: COLORS.BLACK,
              padding: "16px 24px",
              fontSize: 16,
              borderRadius: "50px",
              boxShadow: "0 4px 14px 0 rgba(253, 235, 57, 0.39)",
              "&:hover": {
                backgroundColor: COLORS.PRIMARY,
                opacity: 0.9,
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px 0 rgba(253, 235, 57, 0.39)",
              },
              transition: "all 0.2s ease-in-out",
            }}
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={24} sx={{ color: COLORS.BLACK }} />
            ) : (
              "SUBMIT APPLICATION"
            )}
          </Button>
        </Box>
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

export default ApplicationForm;
