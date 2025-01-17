import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { ThemeContext } from "../../provider/ThemeContext";

export function Setting() {
  // 選択されたメニュー項目を管理するステート
  const [selectedMenu, setSelectedMenu] = useState("画面設定");
  const { isDarkMode, toggleDarkMode } = React.useContext(ThemeContext);

  // メニュー項目リスト
  const menuItems = [
    "画面設定",
    "アカウント管理",
    "通知設定",
    "プライバシー",
    "ヘルプ",
  ];

  // コンテンツのレンダリング関数
  const renderContent = () => {
    switch (selectedMenu) {
      case "画面設定":
        return (
          <div>
            <h1>設定</h1>
            <FormControlLabel
              control={
                <Switch checked={isDarkMode} onChange={toggleDarkMode} />
              }
              label="ダークモード"
            />
          </div>
        );
      case "アカウント管理":
        return <Typography variant="h6">アカウント管理画面</Typography>;
      case "通知設定":
        return <Typography variant="h6">通知設定画面</Typography>;
      case "プライバシー":
        return <Typography variant="h6">プライバシー画面</Typography>;
      case "ヘルプ":
        return <Typography variant="h6">ヘルプ画面</Typography>;
      default:
        return (
          <Typography variant="h6">
            選択したメニューに対応する画面がありません
          </Typography>
        );
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* 左側のメニュー */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <List>
          {menuItems.map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => setSelectedMenu(text)}
              selected={selectedMenu === text} // 選択されているかを確認
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#21a7dd",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#43c9ff",
                  },
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* 右側のコンテンツ */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          設定画面
        </Typography>
        {renderContent()}
      </Box>
    </Box>
  );
}
