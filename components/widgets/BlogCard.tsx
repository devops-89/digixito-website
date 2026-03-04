import React from "react";
import { Box, Typography } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { archivo, kessel } from "@/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import { BlogProps } from "@/public/locale/blogs-data";

interface BlogCardProps {
  blog: BlogProps;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Box
      component={Link}
      href={`/blogs/${blog.id}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        height: "100%",
        "&:hover": {
          "& .blog-image": {
            transform: "scale(1.05)",
          },
          "& .read-more-arrow": {
            transform: "translateX(8px)",
          },
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "65%", // ~3:2 aspect ratio
          overflow: "hidden",
          borderRadius: "16px",
          mb: 4,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="blog-image"
          style={{
            objectFit: "cover",
            transition: "transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
          }}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>

      {/* Meta tags */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: COLORS.BLACK,
            fontWeight: 600,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          {blog.category}
        </Typography>
        <Box
          sx={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />
        <Typography
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: "rgba(0,0,0,0.5)",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {blog.date}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontFamily: kessel.style.fontFamily,
          fontSize: { xs: 22, md: 28 },
          fontWeight: 400,
          color: COLORS.BLACK,
          lineHeight: 1.25,
          mb: 2,
        }}
      >
        {blog.title}
      </Typography>

      {/* Short Description */}
      <Typography
        sx={{
          fontFamily: archivo.style.fontFamily,
          color: "rgba(0,0,0,0.7)",
          fontSize: 16,
          lineHeight: 1.6,
          mb: 3,
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}
      >
        {blog.shortDescription}
      </Typography>

      {/* Read More Link */}
      <Box sx={{ display: "flex", alignItems: "center", mt: "auto", pt: 2 }}>
        <Typography
          sx={{
            fontFamily: archivo.style.fontFamily,
            fontWeight: 600,
            color: COLORS.BLACK,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Read Article
        </Typography>
        <Typography
          className="read-more-arrow"
          sx={{
            fontFamily: archivo.style.fontFamily,
            color: COLORS.BLACK,
            fontSize: 18,
            ml: 1,
            transition: "transform 0.4s ease",
          }}
        >
          &rarr;
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
