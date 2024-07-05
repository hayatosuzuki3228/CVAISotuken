import React, { useContext, useEffect, useState } from "react";
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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "normalize.css";
import "./styles.css";
import MyContext from "../../provider/provider";

/* 
   名前、メールアドレス　<= プロバイダー使う
   年齢、生年月日、 <= 使うか怪しい
   学科名、年齢、居住地、卒業予定年度、性別 <= いらん
*/

export function SProfile() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

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
    JobSave,
    HobbySave,
    SkillSave,
    SSubjectSave,
    KSubjectSave,
    MyPowerSave,
    ManSave,
    GakSave,
    YearsSave,
    MonthsSave,
    DaysSave,
    HomeSave,
    ByeSave,
    AgeSave,
  } = location.state || {};
  const { provideremail, setprovideremail } = useContext(MyContext);

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
        JobSave,
        HobbySave,
        SkillSave,
        SSubjectSave,
        KSubjectSave,
        MyPowerSave,
        ManSave,
        GakSave,
        YearsSave,
        MonthsSave,
        DaysSave,
        HomeSave,
        ByeSave,
        AgeSave,
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
        JobSave,
        HobbySave,
        SkillSave,
        SSubjectSave,
        KSubjectSave,
        MyPowerSave,
        ManSave,
        GakSave,
        YearsSave,
        MonthsSave,
        DaysSave,
        HomeSave,
        ByeSave,
        AgeSave,
      },
    });
  };

  // profile-com に飛ぶ(テスト用で設置、本番時には必ず削除)
  const OnClick3 = () => {
    navigate("/profile-com");
  };

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
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="h6">メニュー</Typography>}
                  />
                </ListItem>
              </List>
              <br />
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

      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingTop="5%"
        paddingBottom="5%"
        spacing={2}
      >
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              名前
              <br />
              <br />
              カタカナ
            </p>
          </Box>
          <Stack
            //spacing={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {name}
              <br />
              <br />
              {kName}
            </p>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>性別</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{ManSave == man ? man : ManSave}</p>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>学科名</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{GakSave == Gak ? Gak : GakSave}</p>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>年齢</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {AgeSave == age ? age && age + "歳" : AgeSave && AgeSave + "歳"}
            </p>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>生年月日</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {YearsSave == Years
                ? Years && Years + "年"
                : YearsSave && YearsSave + "年"}
              {MonthsSave == Months
                ? Months && Months + "月"
                : MonthsSave && MonthsSave + "月"}
              {DaysSave == Days
                ? Days && Days + "日生まれ"
                : DaysSave && DaysSave + "日生まれ"}
            </p>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>メールアドレス</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{email}</p>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>居住地</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{HomeSave == Home ? Home : HomeSave}</p>
          </Box>
        </Stack>
        <Stack direction="row" paddingBottom={5}>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>卒業予定年度</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{ByeSave == bye ? bye : ByeSave}</p>
          </Box>
        </Stack>

        <Box>
          <Button variant="contained" size="large" onClick={OnClick1}>
            情報を編集する
          </Button>
        </Box>
      </Stack>
    </>
  );
}
