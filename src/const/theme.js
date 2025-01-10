import { createTheme } from "@mui/material/styles";
import { primarycolor, gray } from "./color";

export const lighttheme = createTheme({
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

export const darktheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ddd", // プライマリカラー
    },
    secondary: {
      main: "#d53421", // セカンダリカラー
    },
    background: {
      default: "#1a1a1a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#fff",
    },

    divider: "#8899a6",
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: primarycolor,
        },
      },
    },
  },
});

//listitemの背景色paper
