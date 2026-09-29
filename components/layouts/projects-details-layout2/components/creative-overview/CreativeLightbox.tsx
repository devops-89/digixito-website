"use client";
import React from "react";
import { Box, Modal, Fade, Backdrop, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const CreativeLightbox = ({ selectedImage, setSelectedImage }: any) => {
  return (
    <Modal
      open={!!selectedImage}
      onClose={() => setSelectedImage(null)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 700, sx: { backgroundColor: "#000" } },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Fade in={!!selectedImage}>
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            outline: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2, md: 8 },
          }}
          onClick={() => setSelectedImage(null)}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            sx={{
              position: "absolute",
              top: { xs: 20, md: 40 },
              right: { xs: 20, md: 40 },
              color: "#fff",
              "&:hover": { transform: "rotate(90deg)" },
              transition: "all 0.5s",
              zIndex: 2,
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 100 }} />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Fullscreen"
              onClick={(e: any) => e.stopPropagation()}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                boxShadow: "0 40px 100px rgba(0,0,0,1)",
              }}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
};
