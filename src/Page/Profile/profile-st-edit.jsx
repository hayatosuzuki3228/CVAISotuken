import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { years, months, days, selectBox, HOME, Bye, older } from "./Data";

export function SEdit() {
  useEffect(() => {
    document.title = "プロフィール編集";
  }, []);

  const location = useLocation();
  const warpName = location.state?.name || "";
  const warpKName = location.state?.kName || "";
  const warpMan = location.state?.man || "";
  const warpGak = location.state?.Gak || "";
  const warpYears = location.state?.Years || "";
  const warpMonths = location.state?.Months || "";
  const warpDays = location.state?.Days || "";
  const warpHome = location.state?.Home || "";
  const warpBye = location.state?.bye || "";
  const warpEmail = location.state?.email || "";
  const warpAge = location.state?.age || "";
  const { job, hobby, skill, SSubject, KSubject, myPower } =
    location.state || {};

  const [name, setName] = useState(warpName);
  const [kName, setKName] = useState(warpKName);
  const [man, setMan] = useState(warpMan);
  const [Gak, setGak] = useState(warpGak);
  const [Years, setYears] = useState(warpYears);
  const [Months, setMonths] = useState(warpMonths);
  const [Days, setDays] = useState(warpDays);
  const [Home, setHome] = useState(warpHome);
  const [bye, setBye] = useState(warpBye);
  const [email, setEmail] = useState(warpEmail);
  const [age, setAge] = useState(warpAge);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st", {
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
    navigate("/profile-st-com");
  };
  const OnClickNext = () => {
    const regex = /^[一-龠あ-んァ-ヶー]{2,}$/;
    const regex2 = /^[ァ-ヴ]{2,}$/;
    const mailRegex =
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    if (regex.test(name) && regex2.test(kName) && mailRegex.test(email)) {
      const birthDate = new Date(Years, Months - 1, Days);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age + "歳");

      navigate("/profile-st", {
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
        },
      });
    } else {
      {
        !regex.test(name) ? setError1("エラー：名前") : "";
      }
      {
        !regex2.test(kName) ? setError2("エラー：カタカナ") : "";
      }
      {
        !mailRegex.test(email) ? setError3("エラー：メール") : "";
      }
    }
  };

  const Check =
    name &&
    kName &&
    man &&
    Gak &&
    Years &&
    Months &&
    Days &&
    email &&
    Home &&
    bye;

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange1 = (event) => {
    setMan(event.target.value);
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
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>名前の編集</p>
          </Box>
          <Stack
            spacing={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <Box>
              <TextField
                fullWidth
                label="名前の変更"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="名前(カタカナ)の変更"
                value={kName}
                onChange={(e) => setKName(e.target.value)}
              />
            </Box>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>性別の変更</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <RadioGroup
              value={man}
              onChange={handleChange1}
              defaultValue={man}
              row
            >
              <FormControlLabel
                value="男性"
                control={<Radio />}
                label="男性"
              ></FormControlLabel>
              <FormControlLabel
                value="女性"
                control={<Radio />}
                label="女性"
              ></FormControlLabel>
              <FormControlLabel
                value="その他"
                control={<Radio />}
                label="その他"
              ></FormControlLabel>
            </RadioGroup>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>学科名の変更</p>
          </Box>

          <Box
            sx={{ minWidth: 300 }}
            flex="1"
            border="1px solid black"
            padding="10px"
          >
            <TextField
              multiline
              select
              sx={{ width: 300 }}
              id={selectBox}
              label="学科名"
              value={Gak}
              onChange={(e) => setGak(e.target.value)}
            >
              {selectBox.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p></p>
            <p>生年月日の変更</p>
          </Box>
          <Stack
            sx={{ minWidth: 300 }}
            direction="row"
            spacing={1}
            alignItems="center"
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
          >
            <TextField
              sx={{ width: 100 }}
              select
              multiline
              id={older}
              label="年"
              value={Years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="YYYY"
            >
              {older.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p>年</p>
            <TextField
              sx={{ width: 60 }}
              select
              multiline
              id={months}
              label="月"
              value={Months}
              onChange={(e) => setMonths(e.target.value)}
              placeholder="MM"
            >
              {months.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p>月</p>
            <TextField
              sx={{ width: 60 }}
              select
              multiline
              id={days}
              label="日"
              value={Days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="DD"
            >
              {days.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p>日</p>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>居住地域</p>
          </Box>
          <Box
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              select
              fullWidth
              id={HOME}
              value={Home}
              label="都道府県"
              onChange={(e) => setHome(e.target.value)}
            >
              {HOME.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>卒業年度</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              select
              fullWidth
              id={Bye}
              label="卒業年度"
              value={bye}
              onChange={(e) => setBye(e.target.value)}
            >
              {Bye.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Stack>

        <Stack direction="row" paddingBottom={5}>
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
            <TextField
              fullWidth
              label="メールアドレスの変更"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Stack>
        <div>
          {error1 && <p style={{ color: "red" }}>{error1}</p>}
          {error2 && <p style={{ color: "red" }}>{error2}</p>}
          {error3 && <p style={{ color: "red" }}>{error3}</p>}
        </div>
        <Stack direction="row" spacing={7}>
          <Button variant="contained" onClick={OnClick}>
            戻る
          </Button>
          <Button variant="contained" onClick={OnClickNext} disabled={!Check}>
            情報を確定する
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
