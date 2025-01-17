import React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primarycolor } from "../../const/color";
import { lighttheme, darktheme } from "../../const/theme";

const AppBarContents = ({ open, setOpen, apptitle }) => {
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
            sx={{ ml: isSmallScreen ? 0 : -1.8, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box />
          <Typography
            variant={isSmallScreen ? "body1" : "h6"}
            noWrap
            color={"text.secondary"}
          >
            {apptitle}
          </Typography>
        </Box>
        <Button onClick={() => navigate("/Loginpage")}>ログイン</Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarContents;
