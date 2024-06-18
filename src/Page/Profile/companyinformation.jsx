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
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "c:/Users/user/CVAISotuken/src/const/color";
import "normalize.css";
const drawerWidth = 240;

import { companies } from "C:/Users/user/CVAISotuken/src/const/companies";

const company = companies.find((company) => company.id === 1);

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
export function Companyinformation() {
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
                名産会マッチングシステム／企業情報
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
          <Typography
            style={{ fontSize: "2em", textAlign: "left" }}
            sx={{ mx: 4 }}
          >
            <li key={company.id}>{company.name}</li>
          </Typography>
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            spacing={1}
          >
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                業種:職種<li key={company.id}>{company.category}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                会社概要<li key={company.id}>{company.detail}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                所在地<li key={company.id}>{company.office}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                役員<li key={company.id}>{company.representative}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                創業<li key={company.id}>{company.foundation_date}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                資本金<li key={company.id}>{company.capital}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                売上高<li key={company.id}>{company.amount_of_sales}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                従業員数<li key={company.id}>{company.number_of_employees}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                電話番号<li key={company.id}>{company.phone_number}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                メールアドレス<li key={company.id}>{company.email}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                募集人数<li key={company.id}>{company.recruitment_numbers}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                募集学科<li key={company.id}>{company.recruitment_grade}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                必須資格<li key={company.id}>{company.qualification}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                求める人物像
                <li key={company.id}>{company.ideal_candidate_profile}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                勤務地<li key={company.id}>{company.work_location}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                労働時間<li key={company.id}>{company.working_hours}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                休暇制度<li key={company.id}>{company.holiday}</li>
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                4年課程基本給 4年課程諸手当 4年課程総合計 3年課程基本給
                3年課程諸手当 3年課程総合計 2年課程基本給 2年課程諸手当
                2年課程総合計 1年課程基本給 1年課程諸手当 1年課程総合計
              </Typography>
            </Box>
            <Box border={1} p={2}>
              <Typography style={{ fontSize: "1.5em" }}>
                ホームページ<li key={company.id}>{company.website}</li>
              </Typography>
            </Box>
          </Stack>
          <p></p>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
