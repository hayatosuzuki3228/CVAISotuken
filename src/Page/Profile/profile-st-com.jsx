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
  Typography,
  Toolbar,
  Stack,
} from "@mui/material";
import "./styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import MyContext from "../../provider/provider";

export function SCompany() {
  useEffect(() => {
    document.title = "企業向けプロフィール";
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
    navigate("/profile-st-com-edit", {
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
    navigate("/profile-st", {
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
              　企業向け情報
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
                      <ListItemText primary="個人情報" />
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
            <p>希望職種</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{!providerJob ? "" : providerJob}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>趣味</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{!providerHobby ? "" : providerHobby}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>特技</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{!providerSkill ? "" : providerSkill}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>得意科目</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{!providerSSubject ? "" : providerSSubject}</p>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>苦手科目</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>{!providerKSubject ? "" : providerKSubject}</p>
          </Box>
        </Stack>

        <Stack direction="row" paddingBottom={5}>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>保有資格</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p></p>
            <div style={{ textAlign: "center" }}>
              {providerMyPower
                ? providerMyPower.map((option, index) => (
                    <Typography key={index}>{option.title}</Typography>
                  ))
                : null}
            </div>
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
