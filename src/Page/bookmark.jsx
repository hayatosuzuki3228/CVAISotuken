import React from "react";
import { useState, useContext } from "react";
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
import { gray, primarycolor } from "../const/color";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MyContext from "../provider/provider";
import { companies } from "../const/companies";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
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

export function Bookmark() {
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

  const [open1, setOpen1] = useState(false);
  const [removeid, setRemoveid] = useState();
  const [removename, setRemovename] = useState();

  const handleClickOpen = (id) => {
    setOpen1(true);
    setRemoveid(id);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const handleConfirmDelete = () => {
    const updatedBookmark = bookmark.filter(
      (bookmark) => bookmark !== removeid
    );
    setBookmark(updatedBookmark);
    console.log(removename + "を削除しました");
    handleClose();
  };

  const { providerid, setproviderid } = useContext(MyContext);
  const { bookmark, setBookmark } = useContext(MyContext);

  const handleCompanyChange = (event, item) => {
    setproviderid(item), navigate("/companyinformation", console.log(item));
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "white",
    cursor: "pointer",
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
                名産会マッチングシステム／ブックマーク
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
            width="97%"
            flexWrap="wrap"
            sx={{ marginLeft: 7 }}
          >
            {bookmark.map((item, index) => {
              const company = companies.find((company) => company.id === item);
              return (
                <Typography key={item}>
                  <Box p={1}>
                    <Card sx={{ width: 180 }} key={company?.id}>
                      <CardMedia
                        sx={{ height: 130 }}
                        image="../assets/icon.png"
                        title="icon"
                        onClick={(event) => handleCompanyChange(event, item)}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            textOverflow: "ellipsis",
                            height: 60,
                          }}
                          onClick={(event) => handleCompanyChange(event, item)}
                        >
                          {company?.name}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => handleClickOpen(item)}
                          style={buttonStyle}
                        >
                          <IconButton
                            size="small"
                            aria-label="delete"
                            onClick={() => setRemovename(company?.name)}
                          >
                            <DeleteIcon sx={{ fontSize: 20 }} />
                          </IconButton>
                        </Button>
                        <Button
                          size="medium"
                          href={company.website}
                          target="_blank"
                        >
                          HP
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Typography>
              );
            })}
          </Stack>
          <Dialog
            open={open1}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">削除の確認</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                このブックマークを削除してもよろしいですか？<p></p>・
                {removename}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                キャンセル
              </Button>
              <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                削除
              </Button>
            </DialogActions>
          </Dialog>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
