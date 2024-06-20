import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
    navigate("/");
  };

  const OnClick1 = () => {
    navigate("/profile-st-edit", {
      state: {
        name,
        kName,
        man,
        Gak,
        Years,
        Months,
        Days,
        email,
        Home,
        bye,
        age,
        job,
        hobby,
        skill,
        SSubject,
        KSubject,
        myPower,
      },
    });
  };

  const OnClick2 = () => {
    navigate("/profile-st-com", {
      state: {
        name,
        kName,
        man,
        Gak,
        Years,
        Months,
        Days,
        email,
        Home,
        bye,
        age,
        job,
        hobby,
        skill,
        SSubject,
        KSubject,
        myPower,
      },
    });
  };

  const OnClick3 = () => {
    navigate("/profile-com");
  };

  const location = useLocation();
  const {
    name,
    kName,
    man,
    Gak,
    Years,
    Months,
    Days,
    email,
    Home,
    bye,
    age,
    job,
    hobby,
    skill,
    SSubject,
    KSubject,
    myPower,
  } = location.state || {};
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <header // ヘッダー部分
        className="header"
        style={{ textAlign: "center" }}
      >
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
                    <ListItemText primary="メイン" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick1}>
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
              <Divider />
              <List //実際に動かすときは95～102行目を消す
              >
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick3}>
                    <ListItemText primary="企業情報" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </div>
        <h1>プロフィール</h1>
      </header>

      <Box // メインコンテンツ
        my={4}
        alignContent="center"
        component="section"
        gap={4}
        p={2}
      >
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
                {name}
                <br />
                {kName}
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
              <p>{man}</p>
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
              <p>{age && age + "歳"}</p>
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
              <p>{Gak}</p>
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
              <p>
                {Years && Years + "年"}
                {Months && Months + "月"}
                {Days && Days + "日生まれ"}
              </p>
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
              <p>{email}</p>
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
              <p>{Home}</p>
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
              <p>{bye}</p>
            </font>
          </div>
        </div>
      </Box>
      <div className="div-padding">
        <button className="button" onClick={OnClick1}>
          情報を編集する
        </button>
        <button className="button">戻る</button>
      </div>
    </>
  );
}
