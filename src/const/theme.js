import { createTheme } from "@mui/material/styles";
import { primarycolor, gray } from "./color";

export const theme = createTheme({
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
