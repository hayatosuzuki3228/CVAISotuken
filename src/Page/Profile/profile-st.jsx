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
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "normalize.css";
import "./styles.css";
import MyContext from "../../provider/provider";
import { primarycolor } from "../../const/color";

export function SProfile() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  const {
    provideremail,
    providername,
    providerKName,
    providerMan,
    providerGak,
    providerYears,
    providerMonths,
    providerDays,
    providerHome,
    providerBye,
    providerAge,
    providerJob,
    providerHobby,
    providerSkill,
    providerSSubject,
    providerKSubject,
    providerMyPower,
  } = useContext(MyContext);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/");
  };

  const OnClick1 = () => {
    navigate("/profile-st-edit", {
      state: {
        provideremail,
        providername,
        providerKName,
        providerMan,
        providerGak,
        providerYears,
        providerMonths,
        providerDays,
        providerHome,
        providerBye,
        providerAge,
        providerJob,
        providerHobby,
        providerSkill,
        providerSSubject,
        providerKSubject,
        providerMyPower,
      },
    });
  };

  const OnClick2 = () => {
    navigate("/profile-st-com", {
      state: {
        provideremail,
        providername,
        providerKName,
        providerMan,
        providerGak,
        providerYears,
        providerMonths,
        providerDays,
        providerHome,
        providerBye,
        providerAge,
        providerJob,
        providerHobby,
        providerSkill,
        providerSSubject,
        providerKSubject,
        providerMyPower,
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
              　個人情報
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
                      <ListItemText primary="トップページ" />
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
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={OnClick1}>
                      <ListItemText primary="個人情報編集" />
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

      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingTop="5%"
        paddingBottom="5%"
        spacing={2}
        sx={{
          overflow: "hidden",
        }}
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
              {!providername ? "" : providername}
              <br />
              <br />
              {!providerKName ? "" : providerKName}
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
            <p>{!providerMan ? "" : providerMan}</p>
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
            <p>{!providerGak ? "" : providerGak}</p>
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
            <p>{!providerAge ? "" : providerAge}</p>
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
              {!providerYears ? "" : providerYears + "年"}
              {!providerMonths ? "" : providerMonths + "月"}
              {!providerDays ? "" : providerDays + "日生まれ"}
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
            <p>{!provideremail ? "" : provideremail}</p>
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
            <p>{!providerHome ? "" : providerHome}</p>
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
            <p>{!providerBye ? "" : providerBye}</p>
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
