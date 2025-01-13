import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { gray, primarycolor } from "../../const/color";
import { postData } from "../../sever/api";
import { useNavigate } from "react-router-dom";
import { menuItems } from "./onlyCompanypageConst.jsx";

const drawerWidth = 220;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: open ? drawerWidth : 0,
  marginTop: `64px`,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export function Companytoppage() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();
  const itemsPerPage = 5;

  //サンプルが以下
  useEffect(() => {
    setNotices((prevNotices) => {
      //重複チェック
      // 既にデータが追加されている場合は何もしない
      if (prevNotices.length > 0) return prevNotices;

      return [
        ...prevNotices,
        {
          date: "2025/01/01",
          text: "発行したお知らせのインプレッション",
          path: "/Viewimpression",
        },
        { date: "2024/12/25", text: "重要なお知らせがあります" },
        { date: "2024/12/20", text: "メンテナンスのお知らせ" },
      ];
    });
  }, []);

  //本番用はこちら
  //useEffect(() => {setNotices(postData())}, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  //theme設定
  const theme = createTheme({
    palette: {
      primary: {
        main: primarycolor,
      },
      secondary: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleNoticeClick = (path) => {
    navigate(path);
  };

  const displayedNotices = notices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="secondary">
            名産会マッチングシステム
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/*お知らせの設定 */}
      <Main open={open}>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: 2,
            padding: 2,
            minHeight: "500px",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            お知らせ
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {displayedNotices.length > 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {displayedNotices.map((notice, index) => (
                  <Box
                    key={index}
                    sx={{
                      padding: 2,
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                    onClick={() => handleNoticeClick(notice.path)}
                  >
                    <Typography variant="h4" color="#696969">
                      {notice.date} - {notice.text}
                    </Typography>
                    {index < displayedNotices.length && <Divider />}
                  </Box>
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="body1" color="textSecondary">
                  お知らせがありません
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Pagination
          count={Math.ceil(notices.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ marginTop: 2 }}
        />
      </Main>
    </ThemeProvider>
  );
}
