import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  Toolbar,
} from "@mui/material";
import "./styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import MyContext from "../../provider/provider";
import { primarycolor } from "../../const/color";

export function CProfile() {
  useEffect(() => {
    document.title = "企業プロフィール";
  }, []);

  const {
    providerCname,
    providerCKName,
    providerPlace,
    providerTEL,
    providerFAX,
    providerInfo,
    providerCOpen,
    providerCOpenM,
    providerCapital,
    providerPeople,
    providerComePeople,
    providerHomepage,
  } = useContext(MyContext);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-com-edit", {
      state: {
        providerCname,
        providerCKName,
        providerPlace,
        providerTEL,
        providerFAX,
        providerInfo,
        providerCOpen,
        providerCOpenM,
        providerCapital,
        providerPeople,
        providerComePeople,
        providerHomepage,
      },
    });
  };

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div>
        <AppBar>
          <Toolbar
            elevation={4}
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              backgroundColor: primarycolor,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              　企業情報
            </Typography>
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
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />

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
              {!providerCname ? "" : providerCname}
              <br />
              {!providerCKName ? "" : providerCKName}
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
            <p>{!providerPlace ? "" : providerPlace}</p>
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
              {!providerTEL ? "" : "(TEL)" + providerTEL}
              <br />
              {!providerFAX ? "" : "(FAX)" + providerFAX}
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
            <p>{!providerInfo ? "" : providerInfo}</p>
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
              {!providerCOpen ? "" : providerCOpen + "年"}
              {!providerCOpenM ? "" : providerCOpenM + "月創業"}
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
            <p>{!providerCapital ? "" : providerCapital + "万円"}</p>
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
            <p>{!providerPeople ? "" : providerPeople}</p>
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
            <p>{!providerComePeople ? "" : providerComePeople}</p>
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
              <a href={!providerHomepage ? "" : providerHomepage}>
                {!providerHomepage ? "" : providerHomepage}
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
