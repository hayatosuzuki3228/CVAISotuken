import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "normalize.css";
import "./styles.css";

export function SProfile() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st-edit");
  };
  const OnClick2 = () => {
    navigate("/profile-st-com");
  };

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <header className="header" style={{ textAlign: "center" }}>
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick}>
                    <ListItemText primary="個人情報編集" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick2}>
                    <ListItemText primary="企業向け情報" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </div>
        <h1>プロフィール</h1>
      </header>

      <Box my={4} alignContent="center" component="section" gap={4} p={2}>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>
                氏名
                <br />
                カタカナ
              </p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                工学院太郎
                <br />
                コウガクインタロウ
              </p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>性別</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>男性 or 女性</p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>年齢</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>○○歳</p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>学科名</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>○○○○学科</p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>生年月日</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>YYYY/MM/DD</p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>メールアドレス</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>メールアドレス</p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>居住地域</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>愛知県・・・</p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>保有資格</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                ・世界遺産検定1級
                <br />
                ・漢検準2級
              </p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>卒業予定年度</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>2025年卒</p>
            </font>
          </div>
        </div>
      </Box>
      <Box my={4} alignContent="center" component="section" gap={4} p={2}>
        <div className="div-padding">
          <button className="button" onClick={OnClick}>
            情報を編集する
          </button>
          <button className="button">戻る</button>
        </div>
      </Box>
    </>
  );
}
