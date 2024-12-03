import React, { useContext } from "react";
import { useState, useEffect } from "react";
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
import { Pagination, TextField, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MyContext from "../provider/provider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function Toppage() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const drawerWidth = isSmallScreen ? 100 : 220;

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
    {
      text: "設定",
      icon: <SettingsIcon />,
      link: "/Setting",
      isNavigate: true,
    },
  ];

  //#region お知らせデータ
  const careerNotice = [
    {
      date: "2025/1/1",
      text: "ここにおしらせタイトルが入ります",
      link: "/LoginPage",
    },
    {
      date: "2024/12/12",
      text: "学内合同企業説明会を開催します",
    },
    {
      date: "2024/11/11",
      text: "マッチング機能の不具合修正を行いました",
      link: "/Matching",
    },
    {
      date: "2024/10/10",
      text: "株式会社○○○○が企業登録を行いました",
    },
    {
      date: "2024/9/9",
      text: "名産会マッチングシステム学生登録が始まりました",
      link: "/Matching",
    },
    {
      date: "2025/1/1",
      text: "ここにおしらせタイトルが入ります",
      link: "/LoginPage",
    },
    {
      date: "2024/12/12",
      text: "学内合同企業説明会を開催します",
    },
    {
      date: "2024/11/11",
      text: "マッチング機能の不具合修正を行いました",
      link: "/Matching",
    },
    {
      date: "2024/9/9",
      text: "名産会マッチングシステム学生登録が始まりました",
      link: "/Matching",
    },
    {
      date: "2025/1/1",
      text: "ここにおしらせタイトルが入ります",
      link: "/LoginPage",
    },
    {
      date: "2024/12/12",
      text: "学内合同企業説明会を開催します",
    },
    {
      date: "2024/11/11",
      text: "マッチング機能の不具合修正を行いました",
      link: "/Matching",
    },
  ];
  //#endregion
  const [open1, setOpen1] = useState(false);

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const handleloginout = () => {
    if (!loginstats) {
      navigate("/Loginpage");
    } else {
      setOpenLogoutDialog(true);
    }
  };
  const handleConfirmLogout = () => {
    // ログアウト処理をここに記述
    setloginstats(false);
    setOpenLogoutDialog(false);
  };
  const { loginstats, setloginstats } = useContext(MyContext);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //#region pagenation
  const { companyNotice } = useContext(MyContext);
  const pageItems = 5;
  const [currentCareerPage, setCurrentCareerPage] = useState(1);
  const [currentCompanyPage, setCurrentCompanyPage] = useState(1);

  const careerIndex = (currentCareerPage - 1) * pageItems;
  const careerItems = careerNotice.slice(careerIndex, careerIndex + pageItems);
  const careerPages = Math.ceil(careerNotice.length / pageItems);

  const companyIndex = (currentCompanyPage - 1) * pageItems;
  const companyItems = companyNotice.slice(
    companyIndex,
    companyIndex + pageItems
  );
  const companyPages = Math.ceil(companyNotice.length / pageItems);

  const handleCareerPageChange = (event, value) => {
    setCurrentCareerPage(value);
  };

  const handleCompanyPageChange = (event, value) => {
    setCurrentCompanyPage(value);
  };
  //#endregion

  const onClick = () => {
    return navigate("/bookmark");
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
              <Typography
                variant={isSmallScreen ? "h7" : "h6"}
                noWrap
                component="div"
              >
                名産会マッチングシステム
              </Typography>
            </Box>
            <Button color="inherit" onClick={handleloginout}>
              {loginstats ? "ログアウト" : "ログイン"}
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
                    <Grid
                      container
                      direction={isSmallScreen ? "column" : "row"}
                      alignItems="center"
                    >
                      <ListItemIcon
                        style={{
                          display: "flex",
                          justifyContent: isSmallScreen
                            ? "center"
                            : "flex-start",
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          fontSize: isSmallScreen ? "small" : "medium",
                        })}
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontSize: isSmallScreen ? "0.6rem" : "1rem",
                          textAlign: isSmallScreen ? "center" : "left",
                          paddingTop: isSmallScreen ? 0.3 : 0.5,
                          paddingBottom: isSmallScreen ? 0.3 : 0.5,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Grid>
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
            <Tab
              label="キャリアセンターからのお知らせ"
              sx={{
                fontSize: isSmallScreen ? "0.6rem" : "0.9rem",
              }}
            />
            <Tab
              label="企業からのお知らせ"
              sx={{
                fontSize: isSmallScreen ? "0.6rem" : "0.9rem",
              }}
            />
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
                {careerItems.map((item, index) => (
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
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                              color: gray,
                              mt: 1,
                              mb: 1,
                            }}
                          >
                            {item.date}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                              color: primarycolor,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </div>
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                  </React.Fragment>
                ))}
              </List>
              <Pagination
                count={careerPages}
                page={currentCareerPage}
                onChange={handleCareerPageChange}
                size={isSmallScreen ? "small" : ""}
              />
            </div>
          )}
          {value === 1 && (
            <div>
              <List>
                {companyItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setSelectedItem(item);
                          handleClickOpen();
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                              color: gray,
                              mt: 1,
                              mb: 1,
                            }}
                          >
                            {item.date}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                              color: primarycolor,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </div>
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                  </React.Fragment>
                ))}
              </List>
              <Pagination
                count={companyPages}
                page={currentCompanyPage}
                onChange={handleCompanyPageChange}
                size={isSmallScreen ? "small" : ""}
              />
            </div>
          )}
          {selectedItem && (
            <Dialog
              open={open1}
              onClose={handleClose}
              aria-labelledby="commpany-alert"
              aria-describedby="commpany-alert"
            >
              <DialogTitle id="commpany-alert">{selectedItem.text}</DialogTitle>
              <DialogContent>
                <DialogContentText id="commpany-alert">
                  {selectedItem.modalText}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          )}
          <Dialog
            open={openLogoutDialog}
            onClose={() => setOpenLogoutDialog(false)}
          >
            <DialogTitle>ログアウト確認</DialogTitle>
            <DialogContent>ログアウトしますか？</DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenLogoutDialog(false)}
                color="primary"
              >
                キャンセル
              </Button>
              <Button onClick={handleConfirmLogout} color="primary">
                ログアウト
              </Button>
            </DialogActions>
          </Dialog>
        </Main>
      </Box>
    </ThemeProvider>
  );
  <head>
    <link href="toppage.css" rel="stylesheet" type="text/css" media="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>;
}

//メッセージ就職ガイドお問い合わせブックマーク
//ブックマーク　マッチング　メッセージ
