import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
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
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import BusinessIcon from "@mui/icons-material/Business";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ListSubheader from "@mui/material/ListSubheader";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../const/color";
import { regions, allPrefectures } from "../const/prefectures";
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

export function Conditions() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
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

  const salarylist = [
    { label: "15万円以上" },
    { label: "17万円以上" },
    { label: "19万円以上" },
    { label: "21万円以上" },
  ];

  const holiday = [
    { label: "90日以上" },
    { label: "100日以上" },
    { label: "110日以上" },
    { label: "120日以上" },
  ];

  const employees = [
    { label: "10人以下" },
    { label: "50人以下" },
    { label: "100人以下" },
    { label: "500人以下" },
    { label: "1000人以下" },
    { label: "1000人以上" },
  ];

  const detail = [
    { label: "IT" },
    { label: "電気" },
    { label: "情報通信" },
    { label: "機械" },
    { label: "音響" },
    { label: "ゲーム" },
    { label: "その他" },
  ];

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
            <ListItem disablePadding>
              <ListItemButton onClick={() => (window.location.href = "https")}>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary="企業検索" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <List>
            <ListItem></ListItem>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h6">
                希望する条件を選択してください
              </Typography>
              <Autocomplete
                multiple
                limitTags={1}
                options={allPrefectures}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="希望勤務地"
                    placeholder="選択してください"
                  />
                )}
              />

              <Autocomplete
                disablePortal
                id="salary"
                options={salarylist}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="基本給" />
                )}
              />

              <Autocomplete
                disablePortal
                id="salary"
                options={holiday}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => <TextField {...params} label="休日" />}
              />

              <Autocomplete
                disablePortal
                id="salary"
                options={employees}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="従業員数" />
                )}
              />

              <Autocomplete
                disablePortal
                id="salary"
                options={detail}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="事業内容" />
                )}
              />
              <Button variant="contained" size="large" sx={{ width: 300 }}>
                マッチングを開始
              </Button>
            </Box>
          </List>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

//資格 得意なもの 募集学科情報（一致しなかったら０）
//勤務地（一致しなかったら０） 給与 長所 従業員数 年間休日数 売上高
//休日制 勤務時間
