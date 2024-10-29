import React from "react";
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
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../../const/color";
import data from "../../const/data.json";
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

export function Admin() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
              <Box />
              <Typography variant="h6" noWrap component="div">
                名産会マッチングシステム／管理者画面
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Main open={open} className="main">
          <DrawerHeader />
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: 200,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 200,
                boxSizing: "border-box",
              },
            }}
          >
            <List>
              <ListItem sx={{ mt: 12, justifyContent: "center" }}>
                <Button
                  style={{
                    color: primarycolor,
                  }}
                >
                  学生データ
                </Button>
              </ListItem>
              <ListItem sx={{ justifyContent: "center" }}>
                <Button
                  style={{
                    color: primarycolor,
                  }}
                >
                  企業データ
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Main>
      </Box>
      <List sx={{ ml: 30 }}>
        {data.map((user) => (
          <Box
            key={user.id}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              marginBottom: "8px",
              marginRight: "30px",
            }}
          >
            <ListItem>
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1" sx={{ marginRight: 2 }}>
                      {user.id}
                    </Typography>
                    <Typography variant="body1" sx={{ marginRight: 2 }}>
                      {user.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: user.active ? "green" : "grey",
                        marginRight: 2,
                        fontWeight: user.active ? "bold" : "",
                      }}
                    >
                      {user.active ? "Active" : "Inactive"}
                    </Typography>
                    <Box>
                      {user.active ? <Button>A</Button> : <Button>B</Button>}
                    </Box>
                  </Box>
                }
              />
            </ListItem>
          </Box>
        ))}
      </List>
    </ThemeProvider>
  );
}
