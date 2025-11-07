import avatar1 from "@/homepage/avatar1.jpg";
import avatar2 from "@/homepage/avatar2.jpg";
import avatar3 from "@/homepage/avatar3.jpg";
import avatar4 from "@/homepage/avatar4.jpg";
import cartoon from "@/homepage/cartoon-banner.png";
import gridBanner from "@/homepage/grid-banner.jpg";
import { COLORS } from "@/utils/enum";
import { kessel, monument } from "@/utils/fonts";
import { Circle, PlayArrow } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
const GridSection = () => {
  const list_Item = [
    {
      label: "Web based",
    },
    {
      label: "Real time",
    },
    {
      label: "Navigatable",
    },
  ];

  const avatars = [
    {
      img: avatar1.src,
    },
    {
      img: avatar2.src,
    },
    {
      img: avatar3.src,
    },
    {
      img: avatar4.src,
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        height: "130vh",
        backgroundImage: `url(${gridBanner.src})`,
      }}
    >
      <Container>
        <Box sx={{ width: 468 }}>
          <Typography
            sx={{
              fontSize: 28,
              fontFamily: monument.style.fontFamily,
              fontWeight: 400,
            }}
          >
            Engineering 360° digital experiences from concept to conquest
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image src={cartoon} alt="" width={850} />
        </Box>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            width: "170px",
            height: "140px",
            marginLeft: "auto",
          }}
        >
          <List>
            {list_Item.map((val, i) => (
              <ListItem
                secondaryAction={<Circle sx={{ width: 10 }} />}
                disablePadding
                key={i}
              >
                <ListItemText
                  primary={val.label}
                  slotProps={{
                    primary: {
                      fontFamily: kessel.style.fontFamily,
                      textAlign: "center",
                      fontSize: 16,
                      textTransform: "capitalize",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ 
            position: "absolute", 
            bottom: 100, 
            width: "100%", 
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "1200px",
            px: 2
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AvatarGroup>
                {avatars.map((val, i) => (
                  <Avatar src={val.img} key={i} />
                ))}
              </AvatarGroup>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: kessel.style.fontFamily,
                  fontWeight: 500,
                  letterSpacing: "-0.2px",
                }}
              >
                20K
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 26,
                mt: 2,
                fontFamily: kessel.style.fontFamily,
                color: COLORS.GRAY,
                fontWeight: 500,
                letterSpacing: "-0.26px",
              }}
            >
              Active Users Worldwide
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: COLORS.BLACK,
              width: 150,
              height: 150,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <PlayArrow sx={{ color: COLORS.WHITE }} />
              <Typography
                sx={{
                  fontFamily: kessel.style.fontFamily,
                  color: COLORS.WHITE,
                  fontWeight: 500,
                  letterSpacing: "-0.16px",
                  textDecoration: "underline",
                }}
              >
                How it works
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default GridSection;
