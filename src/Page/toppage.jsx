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
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../const/color";
import "normalize.css";
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

//Boxのボーダーにテキストを追加
const CustomBox = styled(Box)({
  position: "relative",
  "&::before": {
    content: '"お知らせ"',
    position: "absolute",
    top: "-13px", // Adjust as necessary
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff", // Background color to overlay on border
    padding: "0 4px", // Adjust padding as necessary
    zIndex: 1,
    fontSize: "18px",
  },
  padding: "16px",
});
const CustomBox1 = styled(Box)({
  position: "relative",
  "&::before": {
    content: '"企業からのお知らせ"',
    position: "absolute",
    top: "-13px", // Adjust as necessary
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff", // Background color to overlay on border
    padding: "0 4px", // Adjust padding as necessary
    zIndex: 1,
    fontSize: "20px",
  },
  padding: "16px",
});

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
        <Main open={open}>
          <DrawerHeader />
          <Stack
            direction="row"
            alignContent="center"
            justifyContent="center"
            spacing={2}
            height="100%"
          >
            <Box
              border={1}
              borderColor={gray}
              sx={{ borderRadius: 4 }}
              width="100%"
              height="100%"
            >
              <CustomBox></CustomBox>
            </Box>
            <Box
              border={1}
              borderColor={gray}
              sx={{ borderRadius: 4 }}
              width="100%"
              height="100%"
            >
              <CustomBox1></CustomBox1>
            </Box>
            <Stack direction="column" width="85%" height="100%">
              <Box p={2} border={1} borderColor={gray} sx={{ borderRadius: 8 }}>
                <p></p>
                <Box
                  border={1}
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
                  border={1}
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
                  >
                    ブックマーク
                  </Button>
                </Box>
              </Box>
              <p></p>
              <Box p={2} border={1} borderColor={gray} sx={{ borderRadius: 8 }}>
                <Box
                  border={1}
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
                  border={1}
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
            </Stack>
          </Stack>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
