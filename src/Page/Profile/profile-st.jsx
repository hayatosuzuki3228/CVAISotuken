import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import MuiAppBar from "@mui/material/AppBar";
import AppBarContents from "../Component/AppBarContents";
import DrawerContents from "../Component/DrawerContents";
import MainContents from "../Component/MainContents";
import "normalize.css";
import MyContext from "../../provider/provider";
import { primarycolor, gray } from "../../const/color";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuItems = [
  {
    text: "トップページ",
    icon: <BusinessIcon />,
    link: "/",
  },
  {
    text: "企業プロフィール",
    icon: <BusinessIcon />,
    link: "/profile-st-com",
  },
  { text: "プロフィール編集", icon: <PersonIcon />, link: "/profile-st-edit" },
];

export function SProfile() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  const theme = createTheme({
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: primarycolor,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: gray,
          },
        },
      },
    },
  });

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
  // OnClickの残骸(もしかしたら使うかもしれないので・・・)
  /*
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
  };*/

  const [open, setOpen] = React.useState(false);

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <AppBarContents
            apptitle={"名産会マッチングシステム"}
            open={drawerOpen}
            setOpen={setDrawerOpen}
            sx={{ backgroundColor: "gray" }}
          />

          <DrawerContents
            open={drawerOpen}
            menuItems={menuItems}
            handleItemClick={handleItemClick}
          />

          <MainContents open={drawerOpen}>
            <DrawerHeader />
            <Stack
              alignItems="center"
              textAlign="center"
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
          </MainContents>
        </Box>
      </ThemeProvider>
    </>
  );
}
