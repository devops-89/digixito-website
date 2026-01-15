import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Link from "next/link";
import { kessel, monument } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Image, { StaticImageData } from "next/image";
interface ServicesCardProps {
  title: string;
  description: string;
  url: string;
  img?: StaticImageData;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  url,
  img,
}) => {
  const maxLength = 200;
  const truncated =
    description.length > maxLength
      ? description.slice(0, maxLength - 3) + "..."
      : description;

  return (
    <Card
      elevation={0}
      sx={{
        background: "rgba(255, 255, 255, 0.08)",
        borderRadius: "24px",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        transition: "transform 0.3s, box-shadow 0.3s",
        ":hover": {
          transform: "scale(1.03)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        },
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "left",
        minHeight: { lg: 330, xs: 200 },
        position: "relative",
      }}
    >
      <CardContent sx={{ p: 0, flexGrow: 1 }}>
        <Box
          sx={{
            backgroundColor: COLORS.PRIMARY,
            width: 60,
            height: 60,
            borderRadius: "20px",
            color: COLORS.BLACK,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {img && <Image src={img} alt="" width={40} height={40} />}
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: monument.style.fontFamily,
            fontWeight: 600,
            color: COLORS.WHITE,
            fontSize: 16,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: kessel.style.fontFamily,
            color: "rgba(255,255,255,0.85)",
            my: 2,
          }}
        >
          {truncated}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href={url || "#"} passHref>
            <Typography
              component="a"
              sx={{
                color: COLORS.PRIMARY,
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Read more
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
