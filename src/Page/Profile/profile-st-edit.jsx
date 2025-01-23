import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import { months, days, selectBox, HOME, Bye, older2 } from "./Data";
import MyContext from "../../provider/provider";
import AppBarContents from "../Component/AppBarContents";
import DrawerContents from "../Component/DrawerContents";
import MainContents from "../Component/MainContents";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import { primarycolor } from "../../const/color";

const menuItems = [
  //メニューに追加したいものをここにかく
  //表示テキスト アイコン リンク の指定
  {
    text: "トップページ",
    icon: <BusinessIcon />,
    link: "/",
  },
  {
    text: "ページを戻る",
    icon: <PersonIcon />,
    link: "/profile-st",
  },
];

export function SEdit() {
  useEffect(() => {
    document.title = "プロフィール編集";
  }, []);

  const location = useLocation();
  const {
    provideremail,
    setprovidermail,
    providername,
    setprovidername,
    providerKName,
    setproviderKName,
    providerMan,
    setproviderMan,
    providerGak,
    setproviderGak,
    providerYears,
    setproviderYears,
    providerMonths,
    setproviderMonths,
    providerDays,
    setproviderDays,
    providerHome,
    setproviderHome,
    providerBye,
    setproviderBye,
    providerAge,
    setproviderAge,

    providerJob,
    providerHobby,
    providerSkill,
    providerSSubject,
    providerKSubject,
    providerMyPower,
  } = useContext(MyContext);

  const warpName = location.state?.providername || "";
  const warpKName = location.state?.providerKName || "";
  const warpEmail = location.state?.provideremail || "";
  const warpMan = location.state?.providerMan || "";
  const warpGak = location.state?.providerGak || "";
  const warpYears = location.state?.providerYears || "";
  const warpMonths = location.state?.providerMonths || "";
  const warpDays = location.state?.providerDays || "";
  const warpHome = location.state?.providerHome || "";
  const warpBye = location.state?.providerBye || "";
  const warpAge = location.state?.providerAge || "";

  const [NameSave, setNameSave] = useState(warpName);
  const [KNameSave, setKNameSave] = useState(warpKName);
  const [ManSave, setManSave] = useState(warpMan);
  const [GakSave, setGakSave] = useState(warpGak);
  const [YearsSave, setYearsSave] = useState(warpYears);
  const [MonthsSave, setMonthsSave] = useState(warpMonths);
  const [DaysSave, setDaysSave] = useState(warpDays);
  const [HomeSave, setHomeSave] = useState(warpHome);
  const [ByeSave, setByeSave] = useState(warpBye);
  const [AgeSave, setAgeSave] = useState(warpAge);
  const [EmailSave, setEmailSave] = useState(warpEmail);

  const [NameError, setNameError] = useState("");
  const [KNameError, setKNameError] = useState("");
  const [GakError, setGakError] = useState("");
  const [HomeError, setHomeError] = useState("");
  const [ByeError, setByeError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [YearError, setYearError] = useState("");
  const [MonthError, setMonthError] = useState("");
  const [DaysError, setDaysError] = useState("");
  const [ManError, setManError] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [BackColor, setBackColor] = useState("white");

  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setDialogOpen(true);
    const birthDate = new Date(YearsSave, MonthsSave - 1, DaysSave);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAgeSave(age + "歳");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const regex = /^[一-龠あ-んァ-ヶー]{2,}$/;
  const Kregex = /^[ァ-ヴ]{2,}$/;
  const mailRegex =
    /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  const regexName = (NameSave) => {
    if (!regex.test(NameSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexKName = (KNameSave) => {
    if (!Kregex.test(KNameSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexHome = (HomeSave) => {
    if (!regex.test(HomeSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexEmail = (EmailSave) => {
    if (!mailRegex.test(EmailSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };

  const handleConfirmDialog = () => {
    const NameError = regexName(NameSave);
    const KNameError = regexKName(KNameSave);
    const HomeError = regexHome(HomeSave);
    const EmailError = regexEmail(EmailSave);

    setNameError(NameError);
    setKNameError(KNameError);
    setHomeError(HomeError);
    setEmailError(EmailError);
    setByeError(ByeSave.length > 0 ? "" : "ERROR");
    setGakError(GakSave.length > 0 ? "" : "ERROR");
    setYearError(YearsSave.length > 0 ? "" : "ERROR");
    setMonthError(MonthsSave.length > 0 ? "" : "ERROR");
    setDaysError(DaysSave.length > 0 ? "" : "ERROR");
    setManError(ManSave.length > 0 ? "" : "ERROR");
    if (
      !NameError &&
      !KNameError &&
      !GakError &&
      !HomeError &&
      !ByeError &&
      !EmailError &&
      !YearError &&
      !MonthError &&
      !DaysError &&
      !ManError
    ) {
      setprovidername(NameSave);
      setproviderKName(KNameSave);
      setproviderMan(ManSave);
      setproviderGak(GakSave);
      setproviderHome(HomeSave);
      setproviderAge(AgeSave);
      setproviderYears(YearsSave);
      setproviderMonths(MonthsSave);
      setproviderDays(DaysSave);
      setproviderBye(ByeSave);
      setprovidermail(EmailSave);
      setDialogOpen(false);

      navigate("/profile-st", {
        state: {
          providername: NameSave,
          providerKName: KNameSave,
          provideremail: EmailSave,
          providerMan: ManSave,
          providerGak: GakSave,
          providerYears: YearsSave,
          providerMonths: MonthsSave,
          providerDays: DaysSave,
          providerHome: HomeSave,
          providerBye: ByeSave,
          providerAge: AgeSave,
          providerJob,
          providerHobby,
          providerSkill,
          providerSSubject,
          providerKSubject,
          providerMyPower,
        },
      });
    }
    setDialogOpen(false);
  };

  const OnClick = () => {
    // profile-st に飛ぶ(戻るボタン)
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

  const handleChange1 = (event) => {
    setManSave(event.target.value);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

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

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBarContents
            apptitle={"名産会マッチングシステム"}
            open={drawerOpen}
            setOpen={setDrawerOpen}
          />

          <DrawerContents
            open={drawerOpen}
            menuItems={menuItems}
            handleItemClick={handleItemClick}
          />

          <MainContents open={drawerOpen}>
            <DrawerHeader />

            <Stack // メインコンテンツ
              alignItems="center"
              textAlign="center"
              paddingBottom="5%"
              spacing={2}
              style={{ whiteSpace: "pre-line" }}
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
                      value={NameSave}
                      onChange={(e) => setNameSave(e.target.value)}
                      error={Boolean(NameError)}
                      helperText={NameError}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      label="名前(カタカナ)の変更"
                      value={KNameSave}
                      onChange={(e) => setKNameSave(e.target.value)}
                      error={Boolean(KNameError)}
                      helperText={KNameError}
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
                    value={ManSave}
                    onChange={handleChange1}
                    defaultValue={providerMan}
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
                    value={GakSave}
                    error={Boolean(GakError)}
                    onChange={(e) => setGakSave(e.target.value)}
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
                    value={YearsSave}
                    onChange={(e) => setYearsSave(e.target.value)}
                    error={Boolean(YearError)}
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
                    value={MonthsSave}
                    onChange={(e) => setMonthsSave(e.target.value)}
                    error={Boolean(MonthError)}
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
                    value={DaysSave}
                    onChange={(e) => setDaysSave(e.target.value)}
                    error={Boolean(DaysError)}
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
                    value={HomeSave}
                    label="都道府県"
                    onChange={(e) => setHomeSave(e.target.value)}
                    error={Boolean(HomeError)}
                    helperText={HomeError}
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
                    value={ByeSave}
                    onChange={(e) => setByeSave(e.target.value)}
                    error={Boolean(ByeError)}
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
                    value={EmailSave}
                    onChange={(e) => setEmailSave(e.target.value)}
                    error={Boolean(EmailError)}
                    helperText={EmailError}
                  />
                </Box>
              </Stack>

              <Stack // ボタンの表示
                direction="row"
                spacing={7}
              >
                <Button // profile-st に飛ぶ(データの保存を行わない)
                  variant="contained"
                  onClick={OnClick}
                >
                  戻る
                </Button>
                <Button variant="contained" onClick={handleOpenDialog}>
                  情報を確定する
                </Button>
                <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                  <DialogTitle>確認</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      この操作を実行してもよろしいですか？
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                      キャンセル
                    </Button>
                    <Button
                      onClick={handleConfirmDialog}
                      color="primary"
                      autoFocus
                    >
                      実行
                    </Button>
                  </DialogActions>
                </Dialog>
              </Stack>
            </Stack>
          </MainContents>
        </Box>
      </ThemeProvider>
    </>
  );
}
