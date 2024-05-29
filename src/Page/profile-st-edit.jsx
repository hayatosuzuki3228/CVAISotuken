import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  Divider,
  FormControlLabel,
  FormControl,
  InputLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Gkinfo, years, months, days, tdfk, Byears } from "./Data";

export function SEdit() {
  useEffect(() => {
    document.title = "プロフィール編集";
  }, []);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const kregex = /^[ァ-ヶー　]+$/;

    if (!kregex.test(inputValue)) {
      const correctedValue = inputValue.replace(/[^ァ-ヶー　]+/g, "");
      e.target.value = correctedValue;
    }
  };

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st");
  };
  const OnClick2 = () => {
    navigate("/profile-st-com");
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [name, getName] = useState("");
  const [kName, getKName] = useState("");
  const [man, getMan] = useState("");
  const [age, getAge] = useState("");
  const [gk, getGk] = useState("");
  const [Years, getYears] = useState("");
  const [Months, getMonths] = useState("");
  const [Days, getDays] = useState("");
  const [TDFK, getTDFK] = useState("");
  const [sika, getSika] = useState("");
  const [byear, getByear] = useState("");

  const handleChange1 = (event) => {
    getMan(event.target.value);
  };
  const handleChange2 = (event) => {
    getGk(event.target.value);
  };
  const handleChange3 = (event) => {
    getYears(event.target.value);
  };
  const handleChange4 = (event) => {
    getMonths(event.target.value);
  };
  const handleChange5 = (event) => {
    getDays(event.target.value);
  };
  const handleChange6 = (event) => {
    getTDFK(event.target.value);
  };
  const handleChange7 = (event) => {
    getByear(event.target.value);
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
                    <ListItemText primary="個人情報" />
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
        <h1>プロフィール編集</h1>
      </header>

      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        //direction="column"
        paddingTop="3%"
        paddingBottom="5%"
        spacing={2}
      >
        <p>名前の編集</p>
        <Stack spacing={2}>
          <Box>
            <TextField
              label="名前の変更"
              value={name}
              onChange={(e) => getName(e.target.value)}
              //helperText=""
            />
          </Box>
          <Box>
            <TextField
              inputProps={{
                maxLength: 50,
              }}
              onInput={handleInput}
              label="名前(カタカナ)の変更"
            />
          </Box>
        </Stack>

        <Box>
          <p>性別の変更</p>
          <RadioGroup
            value={man}
            onChange={handleChange1}
            defaultValue="man"
            row
          >
            <FormControlLabel
              value="man"
              control={<Radio />}
              label="男性"
            ></FormControlLabel>
            <FormControlLabel
              value="woman"
              control={<Radio />}
              label="女性"
            ></FormControlLabel>
          </RadioGroup>
        </Box>

        <Box sx={{ minWidth: 240 }}>
          <p>学科名の変更</p>
          <FormControl fullWidth>
            <InputLabel id="Gk-label">学科名</InputLabel>
            <Select
              labelId="Gk-label"
              id="Gk"
              value={gk}
              label="学科名"
              onChange={handleChange2}
            >
              {Gkinfo.map((Gk) => (
                <MenuItem key={Gk} value={Gk}>
                  {Gk}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <p></p>
        <p>生年月日の変更</p>
        <Stack
          sx={{ Width: 120 }}
          direction="row"
          spacing={2}
          alignItems="center"
          paddingBottom={2}
        >
          <FormControl sx={{ width: 90 }}>
            <InputLabel id="YMD-label">年</InputLabel>
            <Select
              labelId="YMD-label"
              id="YMD"
              value={Years}
              label="年"
              onChange={handleChange3}
            >
              {years.map((YMD) => (
                <MenuItem key={YMD} value={YMD}>
                  {YMD}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <p>年</p>
          <FormControl sx={{ width: 80 }}>
            <InputLabel id="YMD-label">月</InputLabel>
            <Select
              labelId="YMD-label"
              id="YMD"
              value={Months}
              label="月"
              onChange={handleChange4}
            >
              {months.map((YMD) => (
                <MenuItem key={YMD} value={YMD}>
                  {YMD}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <p>月</p>
          <FormControl sx={{ width: 80 }}>
            <InputLabel id="YMD-label">日</InputLabel>
            <Select
              labelId="YMD-label"
              id="YMD"
              value={Days}
              label="日"
              onChange={handleChange5}
            >
              {days.map((YMD) => (
                <MenuItem key={YMD} value={YMD}>
                  {YMD}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <p>日</p>
        </Stack>

        <p>居住地域</p>
        <Box paddingBottom={2}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="TDFK-label">居住地</InputLabel>
            <Select
              labelId="TDFK-label"
              value={TDFK}
              label="居住地"
              onChange={handleChange6}
            >
              {tdfk.map((home) => (
                <MenuItem key={home} value={home}>
                  {home}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <p>卒業年度</p>
        <Box>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>卒業年度</InputLabel>
            <Select value={byear} label="卒業年度" onChange={handleChange7}>
              {Byears.map((BY) => (
                <MenuItem value={BY}>{BY}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Button variant="contained">情報を確定する</Button>
      </Stack>
    </>
  );
}
