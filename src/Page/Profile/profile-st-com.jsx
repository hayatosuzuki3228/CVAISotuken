import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Typography,
} from "@mui/material";
import "./styles.css";
import MenuIcon from "@mui/icons-material/Menu";

export function SCompany() {
  useEffect(() => {
    document.title = "企業向けプロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/");
  };
  const OnClick1 = () => {
    navigate("/profile-st-com-edit", {
      state: {
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
    navigate("/profile-st", {
      state: {
        Gak,
      },
    });
  };

  const location = useLocation();
  const { job, hobby, skill, SSubject, KSubject, myPower, Gak } =
    location.state || {};

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
                    <ListItemText primary="メイン" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick1}>
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
              <p>{job}</p>
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
              <p>趣味</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>{hobby}</p>
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
              <p>{skill}</p>
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
                {SSubject}
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
                {KSubject}
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
          <div className="half-box black">{myPower}</div>
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
