import React, { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
  Typography,
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
        CnameSave,
        CkNameSave,
        placeSave,
        telSave,
        faxSave,
        infoSave,
        COpenSave,
        COpenMSave,
        capitalSave,
        peopleSave,
        comePeopleSave,
        homepageSave,
      },
    });
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
    CnameSave,
    CkNameSave,
    placeSave,
    telSave,
    faxSave,
    infoSave,
    COpenSave,
    COpenMSave,
    capitalSave,
    peopleSave,
    comePeopleSave,
    homepageSave,
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
                <ListItem>
                  <ListItemText
                    primary={<Typography variant="h6">メニュー</Typography>}
                  />
                </ListItem>
              </List>
              <br />
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick}>
                    <ListItemText primary="企業情報編集" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </div>
        <h1>企業プロフィール</h1>
      </header>

      <Stack // メインコンテンツ
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
              企業名
              <br />
              カタカナ
            </p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {CnameSave == Cname ? Cname : CnameSave}
              <br />
              {CkNameSave == CkName ? CkName : CkNameSave}
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
            <p>企業所在地</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{placeSave == place ? place : placeSave}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              電話番号
              <br />
              FAX番号
            </p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {telSave == tel
                ? tel && "(TEL)" + tel
                : telSave && "(TEL)" + telSave}
              <br />
              {faxSave == fax
                ? fax && "(FAX)" + fax
                : faxSave && "(FAX)" + faxSave}
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
            <p>事業内容</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{infoSave == info ? info : infoSave}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>創業年月</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {COpenSave == COpen
                ? COpen && COpen + "年"
                : COpenSave && COpenSave + "年"}
              {COpenMSave == COpenM
                ? COpenM && COpenM + "月創業"
                : COpenMSave && COpenMSave + "月創業"}
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
            <p>資本金額</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              {capitalSave == capital
                ? capital && capital + "万円"
                : capitalSave && capitalSave + "万円"}
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
            <p>代表者名</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{peopleSave == people ? people : peopleSave}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>求める人物像</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{comePeopleSave == comePeople ? comePeople : comePeopleSave}</p>
          </Box>
        </Stack>

        <Stack direction="row" paddingBottom={5}>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>ホームページ等</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>
              <a href={homepageSave == homepage ? homepage : homepageSave}>
                {homepageSave == homepage ? homepage : homepageSave}
              </a>
            </p>
          </Box>
        </Stack>

        <Box>
          <Button variant="contained" size="large" onClick={OnClick}>
            情報を編集する
          </Button>
        </Box>
      </Stack>
    </>
  );
}
