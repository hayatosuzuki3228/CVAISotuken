import React from "react";
import { styled } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lighttheme, darktheme } from "../../const/theme";
import { useMediaQuery } from "@mui/material";

const MainContents = ({ open, children }) => {
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

  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <Main open={!open}>{children}</Main> {/* children を表示 */}
    </ThemeProvider>
  );
};

export default MainContents;
