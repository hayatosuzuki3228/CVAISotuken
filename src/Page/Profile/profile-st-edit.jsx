import React, { useContext, useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  years,
  months,
  days,
  selectBox,
  HOME,
  Bye,
  older,
  older2,
} from "./Data";
import MyContext from "../../provider/provider";
import { Man } from "@mui/icons-material";

export function SEdit() {
  const location = useLocation();
  const {
    provideremail,
    setprovidermail,
    providerSaveEmail,
    setproviderSaveEmail,
    providername,
    setprovidername,
    providerSaveName,
    setproviderSaveName,
    providerKName,
    setProviderKName,
    providerSaveKName,
    setProviderSaveKName,
  } = useContext(MyContext);
  const warpName = location.state?.name || "";
  const warpKName = location.state?.kName || "";
  const warpEmail = location.state?.email || "";
  const warpManSave = location.state?.ManSave || "";
  const warpGakSave = location.state?.GakSave || "";
  const warpYearsSave = location.state?.YearsSave || "";
  const warpMonthsSave = location.state?.MonthsSave || "";
  const warpDaysSave = location.state?.DaysSave || "";
  const warpHomeSave = location.state?.HomeSave || "";
  const warpByeSave = location.state?.ByeSave || "";
  const warpAgeSave = location.state?.AgeSave || "";

  const {
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
  } = location.state || {};

  const [name, setName] = useState(warpName);
  const [kName, setKName] = useState(warpKName);
  const [man, setMan] = useState(warpManSave);
  const [Gak, setGak] = useState(warpGakSave);
  const [Years, setYears] = useState(warpYearsSave);
  const [Months, setMonths] = useState(warpMonthsSave);
  const [Days, setDays] = useState(warpDaysSave);
  const [Home, setHome] = useState(warpHomeSave);
  const [bye, setBye] = useState(warpByeSave);
  const [email, setEmail] = useState(warpEmail);
  const [age, setAge] = useState(warpAgeSave);

  const [ManSave, setManSave] = useState(warpManSave);
  const [GakSave, setGakSave] = useState(warpGakSave);
  const [YearsSave, setYearsSave] = useState(warpYearsSave);
  const [MonthsSave, setMonthsSave] = useState(warpMonthsSave);
  const [DaysSave, setDaysSave] = useState(warpDaysSave);
  const [HomeSave, setHomeSave] = useState(warpHomeSave);
  const [ByeSave, setByeSave] = useState(warpByeSave);
  const [AgeSave, setAgeSave] = useState(warpAgeSave);

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [OneMoreClick, setOneMoreClick] = useState();

  useEffect(() => {
    document.title = "プロフィール編集";
  }, []);

  useEffect(() => {
    if (!Man) {
      setMan(ManSave);
    } else {
      setMan(man);
    }
  }, [ManSave]);

  useEffect(() => {
    if (!Gak) {
      setGak(GakSave);
    } else {
      setGak(Gak);
    }
  }, [GakSave]);

  useEffect(() => {
    if (!Years) {
      setYears(YearsSave);
    } else {
      setYears(Years);
    }
  }, [YearsSave]);

  useEffect(() => {
    if (!Months) {
      setMonths(MonthsSave);
    } else {
      setMonths(Months);
    }
  }, [MonthsSave]);

  useEffect(() => {
    if (!Days) {
      setDays(DaysSave);
    } else {
      setDays(Days);
    }
  }, [DaysSave]);

  useEffect(() => {
    if (!Home) {
      setHome(HomeSave);
    } else {
      setHome(Home);
    }
  }, [HomeSave]);

  useEffect(() => {
    if (!bye) {
      setBye(ByeSave);
    } else {
      setBye(bye);
    }
  }, [ByeSave]);

  useEffect(() => {
    if (!age) {
      setAge(AgeSave);
    } else {
      setAge(age);
    }
  }, [AgeSave]);

  const navigate = useNavigate();
  // profile-st に飛ぶ(戻るボタン)
  const OnClick = () => {
    navigate("/profile-st", {
      state: {
        job,
        hobby,
        skill,
        SSubject,
        KSubject,
        myPower,
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

  // profile-st-com に飛ぶ
  const OnClick2 = () => {
    if (OneMoreClick === true) {
      null;
    } else {
      navigate("/profile-st-com", {
        state: {
          JobSave,
          HobbySave,
          SkillSave,
          SSubjectSave,
          KSubjectSave,
          MyPowerSave,
        },
      });
    }
  };

  // profile-st に飛ぶ(情報を確定するボタン)
  const OnClickNext = () => {
    const regex = /^[一-龠あ-んァ-ヶー]{2,}$/;
    const regex2 = /^[ァ-ヴ]{2,}$/;
    const mailRegex =
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const birthDate = new Date(Years, Months - 1, Days);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age + "歳");

    if (
      regex.test(providername) &&
      regex2.test(providerKName) &&
      mailRegex.test(provideremail) &&
      OneMoreClick !== false
    ) {
      setproviderSaveName(providername);
      setproviderSaveEmail(provideremail);
      setProviderSaveKName(providerKName);
      if (
        providerSaveName === providername &&
        providerSaveKName === providerKName &&
        providerSaveEmail === provideremail &&
        ManSave === man &&
        GakSave === Gak &&
        YearsSave === Years &&
        MonthsSave === Months &&
        DaysSave === Days &&
        HomeSave === Home &&
        ByeSave === bye &&
        AgeSave === age
      ) {
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
            JobSave,
            HobbySave,
            SkillSave,
            SSubjectSave,
            KSubjectSave,
            MyPowerSave,
            SSubject,
            KSubject,
            myPower,
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
      } else {
        setManSave(man);
        setGakSave(Gak);
        setYearsSave(Years);
        setMonthsSave(Months);
        setDaysSave(Days);
        setHomeSave(Home);
        setByeSave(bye);
        setAgeSave(age);
        setError1("");
        setError2("");
        setError3("");
        setOneMoreClick(true);
      }
    } else {
      setError1(!regex.test(providername) ? setError1("エラー：名前") : "");
      setError2(!regex.test(kName) ? setError2("エラー：カタカナ") : "");
      setError3(
        !regex.test(provideremail) ? setError3("エラー：メールアドレス") : ""
      );
      setOneMoreClick(false);
    }
  };

  const Check = // 全項目が入力されていればTrueとなり、情報の確定ボタンが押せるようになる
    providername &&
    providerKName &&
    man &&
    Gak &&
    Years &&
    Months &&
    Days &&
    provideremail &&
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

      <Stack // メインコンテンツ
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
                value={providername}
                onChange={(e) => setprovidername(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="名前(カタカナ)の変更"
                value={providerKName}
                onChange={(e) => setProviderKName(e.target.value)}
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
              id="SelectBox"
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
              id="older"
              label="年"
              value={Years}
              onChange={(e) => setYears(e.target.value)}
            >
              {older2.map((item, index) => (
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
              id="month-select"
              label="月"
              value={Months}
              onChange={(e) => setMonths(e.target.value)}
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
              id="days"
              label="日"
              value={Days}
              onChange={(e) => setDays(e.target.value)}
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
              id="HOME"
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
              id="Bye"
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
              value={provideremail}
              onChange={(e) => setprovidermail(e.target.value)}
            />
          </Box>
        </Stack>

        <div /* エラーの表示 */>
          {error1 && <p style={{ color: "red" }}>{error1}</p>}
          {error2 && <p style={{ color: "red" }}>{error2}</p>}
          {error3 && <p style={{ color: "red" }}>{error3}</p>}
          {OneMoreClick === true ? (
            <p style={{ color: "green" }}>
              よろしければ、もう一度ボタンを押してください。
            </p>
          ) : undefined}
        </div>

        <Stack // ボタンの表示
          direction="row"
          spacing={7}
        >
          <Button // profile-st に飛ぶ(データの保存を行わない)
            variant="contained"
            onClick={OnClick}
            disabled={OneMoreClick}
          >
            戻る
          </Button>
          <Button // profile-st に飛ぶ(データの保存を行う)
            variant="contained"
            onClick={OnClickNext}
            disabled={!Check}
          >
            情報を確定する
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
