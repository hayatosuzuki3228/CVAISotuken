import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { menuItems } from "./onlyCompanypageConst.jsx";
import { primarycolor } from "../../const/color";
import { postData } from "../../sever/api.js";

const drawerWidth = 220;

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

export function SendEmail() {
  const location = useLocation();
  const [UserEmailAddress, setUserEmailAddress] = useState([]);
  const [EmailTitle, setEmailTitle] = useState("");
  const [EmailMainText, setMainText] = useState("");
  const [InChargeEmailAddress, setInChargeEmailAddress] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const { impressiontitle } = location.state || "";

  useEffect(() => {
    // setUserEmailAddress(
    //   postData("NoticesFavoriteUserEmailAddress", impressiontitle)
    // );
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const SendOnClick = (event) => {
    navigate("/Companytoppage");
  };

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: primarycolor,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            名産会マッチングシステム
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* メインコンテンツ */}
      <Box
        sx={{
          marginLeft: open ? `${drawerWidth}px` : 0,
          padding: 3,
          marginTop: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          対象者にメールを送信する
        </Typography>
        <Typography variant="h5" gutterBottom>
          送信先
        </Typography>
        <TextField
          variant="outlined"
          value={impressiontitle + "のお知らせをお気に入りに登録した人"}
          aria-readonly
          fullWidth
        />
        <Typography variant="h5" gutterBottom>
          ご担当者メールアドレス
        </Typography>
        <TextField
          label="ご担当者メールアドレス"
          variant="outlined"
          value={InChargeEmailAddress}
          onChange={(e) => setInChargeEmailAddress(e.target.value)}
          fullWidth
        />

        <Typography variant="h5" gutterBottom>
          タイトルを入力
        </Typography>
        <TextField
          label="タイトルを入力"
          variant="outlined"
          value={EmailTitle}
          onChange={(e) => setEmailTitle(e.target.value)}
          fullWidth
        />
        <Typography variant="h5" gutterBottom>
          本文を入力
        </Typography>
        <TextField
          label="本文を入力"
          variant="outlined"
          value={EmailMainText}
          onChange={(e) => setMainText(e.target.value)}
          fullWidth
          multiline // 複数行入力を有効化
          rows={20} // 行数を指定
          sx={{
            "& .MuiInputBase-input": {
              height: "auto", // 高さを自動調整
              alignItems: "flex-start", // 上寄せ
              paddingTop: "10px", // 上部の余白を調整
            },
          }}
        />
        <Stack direction="row" spacing={200} justifyContent="center">
          <Box></Box>
          <Box sx={{ padding: 2 }}>
            <Button
              style={{
                color: "white",
              }}
              sx={{
                backgroundColor: primarycolor,
                "&:hover": {
                  backgroundColor: primarycolor,
                },
              }}
              textAlign="right"
              onClick={SendOnClick}
            >
              送信
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
