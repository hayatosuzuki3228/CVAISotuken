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
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              color: "#fff", // 入力文字を白に
              backgroundColor: "#333", // 入力フィールドの背景を暗く
            },
            "& .MuiOutlinedInput-root": {
              borderColor: "#888", // 枠線色を薄いグレーに
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff", // ホバー時の枠線色
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: primarycolor, // フォーカス時の枠線色
            },
            "& .MuiInputLabel-root": {
              color: gray, // ラベルの色を薄いグレーに
            },
            "& .Mui-focused .MuiInputLabel-root": {
              color: primarycolor, // フォーカス時のラベル色
            },
          },
        },
      },
    },
    //   primary: {
    //     main: "#000",
    //   },
    //   secondary: {
    //     main: "#fff",
    //   },
    //   background: {
    //     default: "#1a1a1a",
    //     paper: "#1a1a1a",
    //   },
    //   text: {
    //     primary: "#d1d2d3",
    //     secondary: "#000",
    //   },

    //   divider: "#8899a6",
    // },
    // components: {
    //   MuiListItemIcon: {
    //     styleOverrides: {
    //       root: {
    //         color: primarycolor,
    //       },
    //     },
    //   },
    //     MuiAutocomplete: {
    //     styleOverrides: {
    //       root: {
    //         // ルート（全体）のスタイル
    //         backgroundColor: "#333", // 背景色
    //         borderRadius: "4px", // 枠線の角丸
    //       },
    //     },
    //   },
    //   MuiInputBase: {
    //     styleOverrides: {
    //       root: {
    //         // 入力エリア全体
    //         backgroundColor: "#333", // 背景色
    //         borderRadius: "4px", // 枠線の角丸
    //       },
    //       input: {
    //         // 入力文字の色
    //         color: "#fff", // 白い文字
    //       },
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     styleOverrides: {
    //       root: {
    //         // 枠線のスタイル
    //         "&.Mui-focused": {
    //           borderColor: "#ff6f00", // フォーカス時の枠線の色
    //         },
    //         "&:hover": {
    //           borderColor: "#ff6f00", // ホバー時の枠線の色
    //         },
    //       },
    //       notchedOutline: {
    //         // 入力エリアのアウトライン（枠）
    //         borderColor: "#fff", // 通常時の枠線の色
    //       },
    //     },
    //   },
    //   MuiAutocompletePopper: {
    //     styleOverrides: {
    //       root: {
    //         // ドロップダウンリストの背景色
    //         backgroundColor: "#333", // ドロップダウンの背景色
    //         borderRadius: "4px", // 角丸
    //       },
    //     },
    //   },
    //   MuiAutocompleteOption: {
    //     styleOverrides: {
    //       root: {
    //         // 各オプションのスタイル
    //         "&:hover": {
    //           backgroundColor: "#ff6f00", // ホバー時のオプション背景色
    //         },
    //         "&.Mui-selected": {
    //           backgroundColor: "#ff6f00", // 選択時の背景色
    //           color: "#fff", // 選択時の文字色
    //         },
    //       },
    //     },
    //   },
  },
});
