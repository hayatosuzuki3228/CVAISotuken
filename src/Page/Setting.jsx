import React, { useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AppBarContents from "./Component/AppBarContents";
import DrawerContents from "./Component/DrawerContents";
import MainContents from "./Component/MainContents";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuItems = [
  {
    text: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    text: "求人票",
    icon: <EventNoteIcon />,
    link: "https://www.meisankai.net/student",
  },
  {
    text: "マッチング",
    icon: <ContentPasteSearchIcon />,
    link: "/Matching",
    isNavigate: true,
  },
  { text: "プロフィール", icon: <PersonIcon />, link: "/profile-st" },

  {
    text: "お問い合わせ",
    icon: <HelpOutlineIcon />,
    link: "/inquiry",
    isNavigate: true,
  },
];

const Setting = ({ onThemeToggle, toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // ドロワー開閉の状態
  const navigate = useNavigate();

  const handleLinkClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarContents
          apptitle={"設定"}
          open={drawerOpen}
          setOpen={setDrawerOpen}
        />

        <DrawerContents
          open={drawerOpen}
          menuItems={menuItems}
          handleItemClick={handleLinkClick}
        />
        <MainContents open={drawerOpen}>
          <DrawerHeader />
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6">テーマ設定</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ marginRight: 2 }}>ダークモード</Typography>
              <Switch checked={toggleDarkMode} onChange={onThemeToggle} />
            </Box>
          </Box>
        </MainContents>
      </Box>
    </>
  );
};

export default Setting;
