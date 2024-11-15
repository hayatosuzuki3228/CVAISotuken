import React, { useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./styles.css";
import { options } from "./Data";
import MenuIcon from "@mui/icons-material/Menu";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export function SCEdit() {
  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  const location = useLocation();
  const warpJob = location.state?.job || "";
  const warpHobby = location.state?.hobby || "";
  const warpSkill = location.state?.skill || "";
  const warpSSubject = location.state?.SSubject || "";
  const warpKSubject = location.state?.KSubject || "";
  const warpMyPower = location.state?.myPower || [];
  const { name, kName, man, Gak, Years, Months, Days, email, Home, bye, age } =
    location.state || {};

  const [job, setJob] = useState(warpJob);
  const [hobby, setHobby] = useState(warpHobby);
  const [skill, setSkill] = useState(warpSkill);
  const [SSubject, setSSubject] = useState(warpSSubject);
  const [KSubject, setKSubject] = useState(warpKSubject);
  const [myPower, setMyPower] = useState(warpMyPower);

  const [JobSave, setJobSave] = useState(warpJob);
  const [HobbySave, setHobbySave] = useState(warpHobby);
  const [SkillSave, setSkillSave] = useState(warpSkill);
  const [SSubjectSave, setSSubjectSave] = useState(warpSSubject);
  const [KSubjectSave, setKSubjectSave] = useState(warpKSubject);
  const [MyPowerSave, setMyPowerSave] = useState(warpMyPower);

  const [JobError, setJobError] = useState("");
  const [HobbyError, setHobbyError] = useState("");
  const [SkillError, setSkillError] = useState("");
  const [SSubjectError, setSSubjectError] = useState("");
  const [KSubjectError, setKSubjectError] = useState("");
  const [MyPowerError, setMyPowerError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const regex = /^[一-龠あ-んァ-ヶーA-Z]{2,}$/;
  const regexJob = (job) => {
    if (!regex.test(job)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexHobby = (hobby) => {
    if (!regex.test(hobby)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexSkill = (skill) => {
    if (!regex.test(skill)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexSSubject = (SSubject) => {
    if (!regex.test(SSubject)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexKSubject = (KSubject) => {
    if (!regex.test(KSubject)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexMyPower = (myPower) => {
    if (myPower.length <= 0) {
      return "内容を選択してください。";
    }
    return "";
  };

  const handleConfirmDialog = () => {
    const JobError = regexJob(JobSave);
    const HobbyError = regexHobby(HobbySave);
    const SkillError = regexSkill(SkillSave);
    const SSubjectError = regexSSubject(SSubjectSave);
    const KSubjectError = regexKSubject(KSubjectSave);
    const MyPowerError = regexMyPower(MyPowerSave);

    setJobError(JobError);
    setHobbyError(HobbyError);
    setSkillError(SkillError);
    setSSubjectError(SSubjectError);
    setKSubjectError(KSubjectError);
    setMyPowerError(MyPowerError);
    if (
      !JobError &&
      !HobbyError &&
      !SkillError &&
      !SSubjectError &&
      !KSubjectError &&
      !MyPowerError
    ) {
      setJob(JobSave);
      setHobby(HobbySave);
      setSkill(SkillSave);
      setSSubject(SSubjectSave);
      setKSubject(KSubjectSave);
      setMyPower(MyPowerSave);
      setDialogOpen(false);

      navigate("/profile-st-com", {
        state: {
          job: JobSave,
          hobby: HobbySave,
          skill: SkillSave,
          SSubject: SSubjectSave,
          KSubject: KSubjectSave,
          myPower: MyPowerSave,
        },
      });
    }
    setDialogOpen(false);
  };

  const navigate = useNavigate();
  // profile-st に飛ぶ(サイドバー部分)
  const OnClick = () => {
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

  // profile-st-com に飛ぶ(戻るボタン)
  const OnClick2 = () => {
    navigate("/profile-st-com", {
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

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event, newValue) => {
    if (newValue.some((option) => option.id === 0)) {
      setMyPowerSave([options.find((option) => option.id === 0)]);
    } else {
      setMyPowerSave(newValue);
    }
  };

  return (
    <>
      <header /*ヘッダー部分*/
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
        <h1>プロフィール編集画面</h1>
      </header>

      <Stack /*メインコンテンツ*/
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingTop="5%"
        paddingBottom="7%"
        spacing={2}
        style={{ whiteSpace: "pre-line" }}
      >
        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            textAlign="center"
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
            <TextField
              fullWidth
              multiline
              label="希望職種の変更"
              value={JobSave}
              onChange={(e) => {
                setJobSave(e.target.value);
              }}
              error={Boolean(JobError)}
              helperText={JobError}
            />
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            textAlign="center"
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
            <TextField
              multiline
              fullWidth
              label="趣味の変更"
              value={HobbySave}
              onChange={(e) => setHobbySave(e.target.value)}
              error={Boolean(HobbyError)}
              helperText={HobbyError}
            />
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
            <TextField
              multiline
              fullWidth
              label="特技の変更"
              value={SkillSave}
              onChange={(e) => setSkillSave(e.target.value)}
              error={Boolean(SkillError)}
              helperText={SkillError}
            />
          </Box>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>得意な科目＆苦手な科目</p>
          </Box>

          <Box
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              multiline
              fullWidth
              label="得意な科目の変更"
              value={SSubjectSave}
              onChange={(e) => setSSubjectSave(e.target.value)}
              error={Boolean(SSubjectError)}
              helperText={SSubjectError}
            />
            <p></p>
            <TextField
              multiline
              fullWidth
              label="苦手な科目の変更"
              value={KSubjectSave}
              onChange={(e) => setKSubjectSave(e.target.value)}
              error={Boolean(KSubjectError)}
              helperText={KSubjectError}
            />
          </Box>
        </Stack>

        <Stack direction="row" paddingBottom={5}>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>取得した資格</p>
          </Box>

          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <Autocomplete
              sx={{ width: 300 }}
              multiple
              id="checkbox"
              options={options}
              disableCloseOnSelect
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.title}
              defaultValue={MyPowerSave || []}
              defaultChecked={MyPowerSave || []}
              value={MyPowerSave}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option.id}>
                  <Checkbox
                    key={"checkbox-${option.id}"}
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    disabled={
                      MyPowerSave.some(
                        (selectOption) => selectOption.id === 0
                      ) && option.id !== 0
                    }
                  />
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="取得資格の選択"
                  error={Boolean(MyPowerError)}
                  helperText={MyPowerError}
                />
              )}
              onChange={handleChange}
            />
          </Box>
        </Stack>

        <Stack direction="row" spacing={7} /*ボタンを表示する*/>
          <Button // profile-st-com に飛ぶ(データの保存を行わない)
            variant="contained"
            onClick={OnClick2}
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
              <Button onClick={handleConfirmDialog} color="primary" autoFocus>
                実行
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </Stack>
    </>
  );
}
