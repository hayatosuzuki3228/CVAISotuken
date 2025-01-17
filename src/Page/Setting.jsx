import React, { useState } from "react";
import { Box, Switch, Typography } from "@mui/material";

const Setting = ({ onThemeToggle, toggleDarkMode }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">テーマ設定</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ marginRight: 2 }}>ダークモード</Typography>
        <Switch checked={toggleDarkMode} onChange={onThemeToggle} />
      </Box>
    </Box>
  );
};

export default Setting;
