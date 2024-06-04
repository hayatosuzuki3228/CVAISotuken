import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import "./styles.css";
import MenuIcon from "@mui/icons-material/Menu";

//変数をnavigateの中に入れて、
//ボタンを押したら自動挿入され転送されるようにしたい

export function SCompany() {
  const navigate = useNavigate();
  const OnClick = () => {
    navigate("");
    navigate("/profile-st-com-edit");
  };
  const OnClick2 = () => {
    navigate("");
    navigate("/profile-st");
  };

  useEffect(() => {
    document.title = "企業向けプロフィール";
  }, []);

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
                    <ListItemText primary="企業向け情報編集" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick2}>
                    <ListItemText primary="個人情報" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </div>
        <h1>企業向けプロフィール</h1>
      </header>

      <Box my={4} alignContent="center" component="section" gap={4} p={2}>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>希望職種</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>ITエンジニア、SE</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>趣味</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                ・プログラミング
                <br />
                ・全国の古い自動販売機を巡ること
              </p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>特技</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>相手を楽しませるコミュニケーションができること</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>得意な科目</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                地理
                <br />
              </p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>苦手な科目</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                数学
                <br />
              </p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>取得した資格</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                ・応用情報技術者
                <br /> ・普通自動車運転免許 <br />
                ・世界遺産検定1級
              </p>
            </font>
          </div>
        </div>
      </Box>
      <div className="div-padding">
        <button className="button" onClick={OnClick}>
          情報を編集する
        </button>
        <button className="button">戻る</button>
      </div>
    </>
  );
}
