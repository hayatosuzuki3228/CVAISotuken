import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  IconButton,
  Stack,
  Select,
  TextField,
  Button,
} from "@mui/material";
import "./styles.css";
import { license } from "./Data";

export function SCEdit() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("");
    navigate("/profile-st-edit");
  };
  const OnClick2 = () => {
    navigate("");
    navigate("/profile-st-com");
  };

  const OnClickBack = () => {
    navigate("");
    navigate("/profile-st-com", {
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

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const location = useLocation();
  const warpJob = location.state?.job || "";
  const warpHobby = location.state?.hobby || "";
  const warpSkill = location.state?.skill || "";
  const warpSSubject = location.state?.SSubject || "";
  const warpKSubject = location.state?.KSubject || "";
  const warpMyPower = location.state?.myPower || "";

  const [job, setJob] = useState(warpJob);
  const [hobby, setHobby] = useState(warpHobby);
  const [skill, setSkill] = useState(warpSkill);
  const [SSubject, setSSubject] = useState(warpSSubject);
  const [KSubject, setKSubject] = useState(warpKSubject);
  const [myPower, setMyPower] = useState(warpMyPower);

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
            </Box>
          </Drawer>
        </div>
        <h1>プロフィール編集画面</h1>
      </header>

      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingTop="3%"
        paddingBottom="7%"
        spacing={2}
      >
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            textAlign="center"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <p>希望職種</p>
          </Box>
          <Box
            //paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <TextField
              fullWidth
              multiline
              label="希望職種の変更"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              helperText={job !== undefined && !job ? "未入力です。" : ""}
              error={job !== undefined && !job}
            />
          </Box>
        </Stack>

        <Stack direction="row" paddingBottom="5">
          <Box
            flex="1"
            border="1px solid black"
            textAlign="center"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <p>趣味</p>
          </Box>

          <Box
            //paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <TextField
              multiline
              fullWidth
              label="趣味の変更"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              helperText={hobby !== undefined && !hobby ? "未入力です。" : ""}
              error={hobby !== undefined && !hobby}
            />
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <p>特技</p>
          </Box>

          <Box
            //paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <TextField
              multiline
              fullWidth
              label="特技の変更"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              helperText={skill !== undefined && !skill ? "未入力です。" : ""}
              error={skill !== undefined && !skill}
            />
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <p>得意な科目＆苦手な科目</p>
          </Box>

          <Box
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <TextField
              multiline
              fullWidth
              label="得意な科目の変更"
              value={SSubject}
              onChange={(e) => setSSubject(e.target.value)}
              helperText={
                SSubject !== undefined && !SSubject ? "未入力です。" : ""
              }
              error={SSubject !== undefined && !SSubject}
            />
            <p></p>
            <TextField
              multiline
              fullWidth
              label="苦手な科目の変更"
              value={KSubject}
              onChange={(e) => setKSubject(e.target.value)}
              helperText={
                KSubject !== undefined && !KSubject ? "未入力です。" : ""
              }
              error={KSubject !== undefined && !KSubject}
            />
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <p>取得した資格</p>
          </Box>

          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 240 }}
          >
            <TextField
              select
              fullWidth
              id={license}
              value={myPower}
              label="取得した資格"
              onChange={(e) => setMyPower(e.target.value)}
            >
              {license.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Stack>

        <Button variant="contained" onClick={OnClickBack}>
          情報を確定する
        </Button>
      </Stack>
    </>
  );
}
