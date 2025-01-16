import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import "normalize.css";
import MyContext from "../../provider/provider";
import { primarycolor, gray } from "../../const/color";
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
    text: "トップページ",
    icon: <BusinessIcon />,
    link: "/",
  },
  { text: "プロフィール編集", icon: <PersonIcon />, link: "/profile-st-edit" },
];

export function SProfile() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

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

  const {
    provideremail,
    providername,
    providerKName,
    providerMan,
    providerGak,
    providerYears,
    providerMonths,
    providerDays,
    providerHome,
    providerBye,
    providerAge,
    providerJob,
    providerHobby,
    providerSkill,
    providerSSubject,
    providerKSubject,
    providerMyPower,
  } = useContext(MyContext);

  const navigate = useNavigate();

  const OnClick1 = () => {
    navigate("/profile-st-edit", {
      state: {
        provideremail,
        providername,
        providerKName,
        providerMan,
        providerGak,
        providerYears,
        providerMonths,
        providerDays,
        providerHome,
        providerBye,
        providerAge,
        providerJob,
        providerHobby,
        providerSkill,
        providerSSubject,
        providerKSubject,
        providerMyPower,
      },
    });
  };
  // OnClickの残骸(もしかしたら使うかもしれないので・・・)
  /*
  const OnClick2 = () => {
    navigate("/profile-st-com", {
      state: {
        provideremail,
        providername,
        providerKName,
        providerMan,
        providerGak,
        providerYears,
        providerMonths,
        providerDays,
        providerHome,
        providerBye,
        providerAge,
        providerJob,
        providerHobby,
        providerSkill,
        providerSSubject,
        providerKSubject,
        providerMyPower,
      },
    });
  };*/

  const [open, setOpen] = React.useState(false);

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
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
                  名産会マッチングシステム／プロフィール
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
                      onClick={() =>
                        handleItemClick(item.link, item.isNavigate)
                      }
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
          <Main
            open={open} // #region MainContent
          >
            <DrawerHeader />
            <Stack
              alignItems="center"
              textAlign="center"
              paddingBottom="5%"
              spacing={2}
            >
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>
                    名前
                    <br />
                    <br />
                    カタカナ
                  </p>
                </Box>
                <Stack
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>
                    {!providername ? "" : providername}
                    <br />
                    <br />
                    {!providerKName ? "" : providerKName}
                  </p>
                </Stack>
              </Stack>
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>性別</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>{!providerMan ? "" : providerMan}</p>
                </Box>
              </Stack>
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>学科名</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>{!providerGak ? "" : providerGak}</p>
                </Box>
              </Stack>
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>年齢</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>{!providerAge ? "" : providerAge}</p>
                </Box>
              </Stack>
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>生年月日</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>
                    {!providerYears ? "" : providerYears + "年"}
                    {!providerMonths ? "" : providerMonths + "月"}
                    {!providerDays ? "" : providerDays + "日生まれ"}
                  </p>
                </Box>
              </Stack>
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>メールアドレス</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>{!provideremail ? "" : provideremail}</p>
                </Box>
              </Stack>
              <Stack direction="row">
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>居住地</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>{!providerHome ? "" : providerHome}</p>
                </Box>
              </Stack>
              <Stack direction="row" paddingBottom={5}>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>卒業予定年度</p>
                </Box>
                <Box
                  flex="1"
                  border="1px solid black"
                  padding="10px"
                  sx={{ minWidth: 300 }}
                >
                  <p>{!providerBye ? "" : providerBye}</p>
                </Box>
              </Stack>

              <Box>
                <Button variant="contained" size="large" onClick={OnClick1}>
                  情報を編集する
                </Button>
              </Box>
            </Stack>
          </Main>
        </Box>
      </ThemeProvider>
      <br />
    </>
  );
}
