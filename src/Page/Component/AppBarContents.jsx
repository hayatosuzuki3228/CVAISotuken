import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider, Box } from "@mui/material";
import { theme } from "../../const/theme";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primarycolor } from "../../const/color";

const AppBarContents = ({ open, setOpen }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const drawerWidth = isSmallScreen ? 100 : 220;

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

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Box>
            <Tooltip
              title="ブックマーク"
              placement="top"
              enterDelay={0}
              leaveDelay={10}
              arrow
            >
              <IconButton color="inherit" onClick={() => navigate("/Bookmark")}>
                <BookmarksIcon />
              </IconButton>
            </Tooltip>

            <Button color="inherit" onClick={() => navigate("/Loginpage")}>
              ログイン
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarContents;
