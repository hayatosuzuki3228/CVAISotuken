import React from "react";
import { useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBarContents from "./Component/AppBarContents";
import DrawerContents from "./Component/DrawerContents";
import MainContents from "./Component/MainContents";
import BusinessIcon from "@mui/icons-material/Business";
import { useNavigate } from "react-router-dom";
import "normalize.css";
import { theme } from "../const/theme";
import { useMediaQuery } from "@mui/material";

const menuItems = [
  //メニューに追加したいものをここにかく
  //表示テキスト アイコン リンク の指定
  {
    text: "テキスト",
    icon: <BusinessIcon />,
    link: "https://www.meisankai.net/student/company/",
  },
  {
    text: "てきすと",
    icon: <BusinessIcon />,
    link: "/matching",
  },
];

const TestPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [drawerOpen, setDrawerOpen] = useState(false); // ドロワー開閉の状態
  const navigate = useNavigate();

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBarContents
          apptitle={"文字を入力してください"}
          open={drawerOpen}
          setOpen={setDrawerOpen}
        />

        <DrawerContents
          open={drawerOpen}
          menuItems={menuItems}
          handleItemClick={handleItemClick}
        />

        <MainContents open={drawerOpen}>
          <DrawerHeader />
          メイン要素をここにかく
        </MainContents>
      </Box>
    </ThemeProvider>
  );
};

export default TestPage;
