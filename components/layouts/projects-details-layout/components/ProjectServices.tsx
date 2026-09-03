import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { kessel_bold, archivo } from "@/utils/fonts";
import { motion } from "motion/react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const MotionBox = motion(Box);

const getServiceDescription = (label: string) => {
  const map: Record<string, string> = {
    "Web Development":
      "Building high-performance, scalable web architectures with cutting-edge tech.",
    "Web Design":
      "Crafting intuitive, engaging, and modern user interfaces that captivate users.",
    "E-commerce Operations":
      "Optimizing online sales, inventory, and customer journeys for maximum conversion.",
    "E-Commerce":
      "End-to-end e-commerce solutions tailored for exponential growth and revenue.",
    "Digital Marketing":
      "Data-driven campaigns engineered to boost brand visibility, engagement, and ROI.",
    "Mobile Application":
      "Creating seamless, lightning-fast cross-platform mobile experiences.",
    "UX Design":
      "Deep user-centric research and design to ensure frictionless, delightful interactions.",
    "Graphic Works":
      "Compelling visual assets and brand identities that leave a lasting impression.",
    "Online Sales":
      "Advanced strategies and tools designed to maximize conversion rates and overall revenue.",
    "Marketplace Management":
      "End-to-end handling of marketplace listings, optimization, and strategy.",
    "Next.js":
      "React framework for highly optimized, SEO-friendly, and ultra-fast applications.",
    NestJS:
      "Progressive Node.js framework for efficient, reliable, and scalable backend services.",
  };
  return (
    map[label] ||
    "Delivering excellence through specialized, strategic, and precise execution."
  );
};

interface ProjectServicesProps {
  skills: { label: string }[];
}

const ProjectServices = ({ skills }: ProjectServicesProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 15 },
        overflow: "hidden",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: `"Inter", "Roboto", "Helvetica Neue", sans-serif`,
            fontWeight: 700,
            color: "#1F2326",
            mb: 2,
            fontSize: { xs: 32, md: 48 },
            letterSpacing: "-0.02em",
          }}
        >
          Services Delivered
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 4,
            backgroundColor: COLORS.PRIMARY,
            mx: "auto",
            borderRadius: 2,
          }}
        />
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {skills?.map((skill, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.04)",
                p: { xs: 4, md: 5 },
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  borderColor: `${COLORS.PRIMARY}44`,
                },
              }}
            >
              {/* Subtle top border highlight on hover */}
              <Box
                className="hover-highlight"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "0%",
                  height: "6px",
                  background: `linear-gradient(90deg, ${COLORS.PRIMARY}, #FFA500)`,
                  transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  backgroundColor: `${COLORS.PRIMARY}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  color: COLORS.PRIMARY,
                }}
              >
                <AutoAwesomeIcon />
              </Box>
              <Typography
                sx={{
                  fontFamily: kessel_bold.style.fontFamily,
                  fontSize: { xs: 18, md: 22 },
                  color: "#1F2326",
                  mb: 2,
                  letterSpacing: "0.02em",
                }}
              >
                {skill.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: archivo.style.fontFamily,
                  fontSize: { xs: 15, md: 16 },
                  color: "#6B7280",
                  lineHeight: 1.8,
                  flexGrow: 1,
                }}
              >
                {getServiceDescription(skill.label)}
              </Typography>

              {/* CSS for the hover highlight animation */}
              <style jsx global>{`
                .MuiBox-root:hover > .hover-highlight {
                  width: 100%;
                }
              `}</style>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectServices;
