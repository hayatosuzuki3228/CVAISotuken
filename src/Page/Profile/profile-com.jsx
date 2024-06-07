import React, { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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

export function CProfile() {
  useEffect(() => {
    document.title = "企業プロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-com-edit", {
      state: {
        Cname,
        CkName,
        place,
        tel,
        fax,
        info,
        COpen,
        COpenM,
        capital,
        people,
        comePeople,
        homepage,
      },
    });
  };
  const OnClick2 = () => {
    navigate("/profile-st");
  };
  const OnClick3 = () => {
    navigate("/profile-st-com");
  };

  const location = useLocation();
  const {
    Cname,
    CkName,
    place,
    tel,
    fax,
    info,
    COpen,
    COpenM,
    capital,
    people,
    comePeople,
    homepage,
  } = location.state || {};

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
                    <ListItemText primary="企業情報編集" />
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
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick3}>
                    <ListItemText primary="企業向け情報" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </div>

        <h1>企業プロフィール</h1>
      </header>

      <Box my={4} alignContent="center" component="section" gap={4} p={2}>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>
                企業名
                <br />
                カタカナ
              </p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                {Cname}
                <br />
                {CkName}
              </p>
            </font>
          </div>
        </div>
        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>企業所在地</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>{place}</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>
                電話番号
                <br />
                FAX番号
              </p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                {tel && "(TEL)" + tel}
                <br />
                {fax && "(FAX)" + fax}
              </p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>事業内容</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>{info}</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>創業年日</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                {COpen && COpen + "年"}
                {COpenM && COpenM + "月創業"}
              </p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>資本金</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>{capital && capital + "万円"}</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>代表者名</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>{people}</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>企業が求める人材像</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>{comePeople}</p>
            </font>
          </div>
        </div>

        <div className="info" style={{ textAlign: "center" }}>
          <div className="half-box black">
            <font size="3.5">
              <p>ホームページ</p>
            </font>
          </div>
          <div className="half-box black">
            <font size="3.5">
              <p>
                <Link to={homepage}>{homepage}</Link>
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
