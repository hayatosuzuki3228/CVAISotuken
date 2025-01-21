import { createTheme } from "@mui/material/styles";
import { primarycolor, gray } from "./color";

// ライトテーマ
export const lighttheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ddd",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
      paper: "fff",
    },
    text: {
      primary: "#1a1a1a",
    },
    divider: "fff",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: primarycolor,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: gray,
        },
      },
    },
  },
});

// ダークテーマ
export const darktheme = createTheme({
  palette: {
    mode: "dark",
    divider: "#8899a6",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: primarycolor,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: "#fff", // 入力文字の色
          },
          label: {
            color: "#fff", // ラベル色
          },
          focused: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff", // フォーカス時の枠線色（白）
            },
          },
        },
      },
    },
  },
});
