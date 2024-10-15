import React from "react";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from "@mui/icons-material/Business";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../const/color";
import "normalize.css";
import { TextField } from "@mui/material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: open ? 100 : 1,
  ...(open && {
    width: `100%`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuItems = [
  {
    text: "企業検索",
    icon: <BusinessIcon />,
    link: "https://www.meisankai.net/student/company/",
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
  { text: "設定", icon: <SettingsIcon />, link: "/Setting", isNavigate: true },
];

const careerNotice = [
  {
    date: "2000/12/34",
    text: "ここにおしらせタイトルが入ります",
    link: "/LoginPage",
  },
  {
    date: "2024/12/31",
    text: "学内合同企業説明会の開催について",
  },
  {
    date: "1234/56/78",
    text: "マッチング機能の不具合修正を行いました",
    link: "/Matching",
  },
];

const companyNotice = [
  {
    date: "2024/1/1",
    text: "(株)○○システム新卒採用開始しました",
    link: "/LoginPage",
  },
  {
    date: "20??/12/32",
    text: "採用サイトリニューアルのおしらせ",
  },
  {
    date: "2000/10/10",
    text: "システム(株)が企業一覧に追加されました",
    link: "/Matching",
  },
];

export function Toppage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  const theme = createTheme({
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: primarycolor,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: gray,
          },
        },
      },
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClick = () => {
    return navigate("/bookmark");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: primarycolor,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Box />
              <Typography variant="h6" noWrap component="div">
                名産会マッチングシステム
              </Typography>
            </Box>
            <Button color="inherit" onClick={() => navigate("/Loginpage")}>
              ログイン
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
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
              <React.Fragment key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleItemClick(item.link, item.isNavigate)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
                {index === 2 && (
                  <Box my={1}>
                    <Divider />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
        //#region
        <Main open={open} className="main">
          <DrawerHeader />

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: primarycolor,
              },
            }}
          >
            <Tab label="キャリアセンターからのお知らせ" />
            <Tab label="企業からのお知らせ" />
          </Tabs>
          {value === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <List>
                {careerNotice.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          handleItemClick(item.link, item.isNavigate)
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              color: gray,
                            }}
                          >
                            {item.date}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "1.2rem",
                              color: primarycolor,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </div>
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                    {index === 2 && <Box my={1}></Box>}
                  </React.Fragment>
                ))}
              </List>
            </div>
          )}

          {value === 1 && (
            <div>
              <List>
                {companyNotice.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          handleItemClick(item.link, item.isNavigate)
                        }
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontSize: "0.9rem",
                                color: gray,
                              }}
                            >
                              {item.date}
                            </Typography>
                          }
                        />
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontSize: "1.2rem",
                                color: primarycolor,
                              }}
                            >
                              {item.text}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                    {index === 2 && <Box my={1}></Box>}
                  </React.Fragment>
                ))}
              </List>
            </div>
          )}

          {/* <Stack direction="column" width="200" height="100%">
            <p></p>
            <Box p={2} border={1} borderColor={gray} sx={{ borderRadius: 8 }}>
              <p></p>
              <Box
                border={2}
                sx={{
                  borderRadius: 8,
                }}
                backgroundColor="#ADD8E6"
              >
                <Button
                  fullWidth
                  style={{ fontSize: "3em" }}
                  sx={{ borderRadius: 8 }}
                >
                  メッセージ
                </Button>
              </Box>
              <p></p>
              <Box
                border={2}
                sx={{
                  borderRadius: 8,
                }}
                backgroundColor="#ADD8E6"
              >
                <Button
                  fullWidth
                  style={{ fontSize: "3em" }}
                  sx={{
                    borderRadius: 8,
                  }}
                  onClick={onClick}
                >
                  ブックマーク
                </Button>
              </Box>
            </Box>
            <p></p>
            <Box p={2} border={1} borderColor={gray} sx={{ borderRadius: 8 }}>
              <Box
                border={2}
                backgroundColor="#98FB98"
                sx={{ borderRadius: 8 }}
              >
                <Button
                  fullWidth
                  style={{ fontSize: "3em" }}
                  sx={{
                    borderRadius: 8,
                    color: "black",
                  }}
                >
                  就職ガイド
                </Button>
              </Box>
              <p></p>
              <Box
                border={2}
                backgroundColor="#98FB98"
                sx={{ borderRadius: 8 }}
              >
                <Button
                  fullWidth
                  style={{ fontSize: "3em" }}
                  sx={{ borderRadius: 8, color: "black" }}
                >
                  お問い合わせ
                </Button>
              </Box>
            </Box>
          </Stack> */}
        </Main>
        //#endregion
      </Box>
    </ThemeProvider>
  );
  <head>
    <link href="toppage.css" rel="stylesheet" type="text/css" media="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>;
}
