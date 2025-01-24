import { createTheme } from "@mui/material/styles";
import { primarycolor, secondarycolor, gray } from "./color";

// ライトテーマ
export const lighttheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primarycolor,
    },
    secondary: {
      main: secondarycolor,
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#1a1a1a",
    },
    divider: "#d3d3d3",
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
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "#fff", // フォーカス時の枠線を白に設定
    //       },
    //       "& .MuiOutlinedInput-notchedOutline": {
    //         borderColor: "#aaa", // 通常時の枠線をグレーに設定
    //       },
    //       "& .MuiInputBase-input": {
    //         color: "#fff", // テキストを白に設定
    //       },
    //     },
    //   },
    // },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
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
