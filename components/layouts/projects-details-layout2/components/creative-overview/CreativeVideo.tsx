"use client";
import React from "react";
import { Box, Container, Grid } from "@mui/material";

const getYoutubeEmbedUrl = (url: string) => {
  const match = url.match(/youtu\.be\/([^?]+)/);
  if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`;
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch && watchMatch[1])
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  return url;
};

export const CreativeVideo = ({ creativeData }: any) => {
  return (
    <>
      {creativeData?.videoUrls && creativeData.videoUrls.length > 0 && (
        <Box
          className="reveal-up"
          sx={{ width: "100%", py: { xs: 5, md: 10 } }}
        >
          {creativeData.videoUrls.length === 1 ? (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "42.85%", // 21:9 cinematic ratio approx
                bgcolor: "#000",
                overflow: "hidden",
              }}
            >
              <iframe
                src={getYoutubeEmbedUrl(creativeData.videoUrls[0])}
                title="Cinematic Visual Moment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          ) : (
            <Container maxWidth="xl">
              <Grid container spacing={{ xs: 4, md: 6 }}>
                {creativeData.videoUrls.map((url: string, index: number) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%", // 16:9 standard ratio for grid items
                        bgcolor: "#000",
                        overflow: "hidden",
                        borderRadius: 2,
                      }}
                    >
                      <iframe
                        src={getYoutubeEmbedUrl(url)}
                        title={`Cinematic Visual Moment ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </Box>
      )}
    </>
  );
};
