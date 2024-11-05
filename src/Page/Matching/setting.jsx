import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export function Setting() {
  // 選択されたメニュー項目を管理するステート
  const [selectedMenu, setSelectedMenu] = useState("アカウント管理");

  // メニュー項目リスト
  const menuItems = ["アカウント管理", "通知設定", "プライバシー", "ヘルプ"];

  // コンテンツのレンダリング関数
  const renderContent = () => {
    switch (selectedMenu) {
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
                  backgroundColor: "#3cb371",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2e8b57",
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
