"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  Alert,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { East, Lock } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { kessel_bold, kessel } from "@/utils/fonts";
import { renderKesselText } from "@/utils/formatText";

const serviceOptions = [
  "Branding & Identity Design",
  "Brand Strategy & Positioning",
  "Design Intelligence",
  "Growth Marketing & Scaling",
  "Enterprise Web & Mobile",
  "Creative Content",
  "Consultation & Advisory",
];

const budgetOptions = [
  "Select Estimated Budget",
  "<$25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const timelineOptions = [
  "Select Timeline",
  "ASAP (1-2 weeks)",
  "1 month",
  "2 - 3 months",
  "Flexible",
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid business email").required("Business email is required"),
  phone: Yup.string().required("Phone number is required"),
  company: Yup.string().required("Company name is required"),
  message: Yup.string().required("Please share a brief note about your project"),
});

const BrandingContactForm = () => {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Branding & Identity Design",
  ]);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: budgetOptions[0],
      timeline: timelineOptions[0],
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const fullMessage = `
Company: ${values.company}
Services: ${selectedServices.join(", ")}
Budget: ${values.budget}
Timeline: ${values.timeline}

Project Details:
${values.message}
        `.trim();

        await axios.post("/api/contact", {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: fullMessage,
        });

        setSnackbar({
          open: true,
          message: "Thank you! Your brand inquiry has been received. Our team will contact you within 24 business hours.",
          severity: "success",
        });
        resetForm();
        setSelectedServices(["Branding & Identity Design"]);
        router.push("/thank-you");
      } catch (err) {
        setSnackbar({
          open: true,
          message: "Failed to submit your request. Please try again or reach out directly.",
          severity: "error",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box
      id="contact-form"
      component="section"
      sx={{
        backgroundColor: "#FFEF46",
        color: "#0F0F0F",
        py: { xs: 8, md: 12 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, lg: 8 }}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          {/* LEFT: Info & Value Bullets */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ maxWidth: 520 }}>
              {/* Eyebrow */}
              <Box
                sx={{
                  display: "inline-block",
                  backgroundColor: "#0F0F0F",
                  color: "#FFFFFF",
                  borderRadius: "30px",
                  px: 2,
                  py: 0.6,
                  mb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: kessel_bold.style.fontFamily,
                  }}
                >
                  GET IN TOUCH
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 32, sm: 42, md: 48 },
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "#0F0F0F",
                  fontFamily: kessel_bold.style.fontFamily,
                  mb: 2.5,
                }}
              >
                {renderKesselText("Let's Create a Brand That")}
                <br />
                {renderKesselText("Moves Your Business Forward.")}
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16.5 },
                  lineHeight: 1.6,
                  color: "#2C2C2C",
                  fontFamily: kessel.style.fontFamily,
                  mb: 4.5,
                }}
              >
                Whether you are launching a new brand or strengthening an
                existing one, let&apos;s discuss your vision and creative
                requirements.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT: Form Card */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                p: { xs: 3, sm: 4.5, md: 5 },
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                maxWidth: 680,
                ml: { lg: "auto" },
              }}
            >
              <Grid container spacing={2.5}>
                {/* Row 1: Name & Email */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Full Name *
                  </Typography>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAF9F5",
                      },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Business Email *
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAF9F5",
                      },
                    }}
                  />
                </Grid>

                {/* Row 2: Phone & Company */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Phone Number *
                  </Typography>
                  <TextField
                    fullWidth
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAF9F5",
                      },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Company Name *
                  </Typography>
                  <TextField
                    fullWidth
                    name="company"
                    placeholder="e.g. Acme Corp"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.company && Boolean(formik.errors.company)}
                    helperText={formik.touched.company && formik.errors.company}
                    variant="outlined"
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#FAF9F5",
                      },
                    }}
                  />
                </Grid>

                {/* Row 3: Service Selection Pills */}
                <Grid size={{ xs: 12 }}>
                  <Typography
                    sx={{
                      fontSize: 11.5,
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#333333",
                      fontFamily: kessel_bold.style.fontFamily,
                      mt: 1,
                      mb: 1.5,
                    }}
                  >
                    WHAT ARE YOU LOOKING TO BUILD?
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.2,
                    }}
                  >
                    {serviceOptions.map((service, i) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <Box
                          key={i}
                          onClick={() => toggleService(service)}
                          sx={{
                            backgroundColor: isSelected ? "#0F0F0F" : "#FFFFFF",
                            color: isSelected ? "#FFFFFF" : "#444444",
                            border: isSelected
                              ? "1.5px solid #0F0F0F"
                              : "1.5px solid #E2DFD7",
                            borderRadius: "24px",
                            px: 2,
                            py: 0.8,
                            fontSize: 12.5,
                            fontWeight: 700,
                            fontFamily:
                              'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            userSelect: "none",
                            "&:hover": {
                              borderColor: "#0F0F0F",
                            },
                          }}
                        >
                          {service}
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>

                {/* Row 4: Message */}
                <Grid size={{ xs: 12 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Tell us about your brand goals or challenges *
                  </Typography>
                  <TextField
                    fullWidth
                    name="message"
                    multiline
                    rows={3}
                    placeholder="Provide a high-level overview of your brand vision, design requirements, or business objectives..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "14px",
                        backgroundColor: "#FAF9F5",
                      },
                    }}
                  />
                </Grid>

                {/* Row 5: Budget & Timeline */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Estimated Budget
                  </Typography>
                  <Select
                    fullWidth
                    size="small"
                    name="budget"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#FAF9F5",
                    }}
                  >
                    {budgetOptions.map((opt, i) => (
                      <MenuItem key={i} value={opt} disabled={i === 0}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#444444",
                      mb: 0.8,
                      fontFamily:
                        'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                  >
                    Timeline
                  </Typography>
                  <Select
                    fullWidth
                    size="small"
                    name="timeline"
                    value={formik.values.timeline}
                    onChange={formik.handleChange}
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#FAF9F5",
                    }}
                  >
                    {timelineOptions.map((opt, i) => (
                      <MenuItem key={i} value={opt} disabled={i === 0}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                {/* Row 6: Submit Button */}
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    fullWidth
                    disabled={formik.isSubmitting}
                    variant="contained"
                    endIcon={
                      formik.isSubmitting ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <East />
                      )
                    }
                    sx={{
                      backgroundColor: "#FFEF46",
                      color: "#0F0F0F",
                      fontSize: { xs: 14, md: 15 },
                      fontWeight: 900,
                      fontFamily: kessel_bold.style.fontFamily,
                      textTransform: "none",
                      borderRadius: "14px",
                      py: 1.8,
                      mt: 1,
                      boxShadow: "0 6px 20px rgba(255, 239, 70, 0.5)",
                      "&:hover": {
                        backgroundColor: "#F5E535",
                        boxShadow: "0 8px 26px rgba(255, 239, 70, 0.7)",
                      },
                      transition: "all 0.25s ease",
                    }}
                  >
                    {formik.isSubmitting
                      ? "Submitting Request..."
                      : "Request a Growth Conversation"}
                  </Button>

                  {/* Footnote */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                    sx={{ mt: 2 }}
                  >
                    <Lock sx={{ fontSize: 14, color: "#777777" }} />
                    <Typography
                      sx={{
                        fontSize: 11.5,
                        color: "#777777",
                        textAlign: "center",
                        fontFamily: kessel.style.fontFamily,
                      }}
                    >
                      We respect your privacy. No spam, ever. Non-disclosure
                      agreements available upon request.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%", borderRadius: "10px" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BrandingContactForm;
