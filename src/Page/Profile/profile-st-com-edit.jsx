import React, { useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Autocomplete,
  AppBar,
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
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
  Toolbar,
} from "@mui/material";
import "./styles.css";
import { options } from "./Data";
import MenuIcon from "@mui/icons-material/Menu";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import MyContext from "../../provider/provider";

export function SCEdit() {
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
    setproviderJob,
    providerHobby,
    setproviderHobby,
    providerSkill,
    setproviderSkill,
    providerSSubject,
    setproviderSSubject,
    providerKSubject,
    setproviderKSubject,
    providerMyPower,
    setproviderMyPower,
  } = useContext(MyContext);

  const location = useLocation();
  const warpJob = location.state?.providerJob || "";
  const warpHobby = location.state?.providerHobby || "";
  const warpSkill = location.state?.providerSkill || "";
  const warpSSubject = location.state?.providerSSubject || "";
  const warpKSubject = location.state?.providerKSubject || "";
  const warpMyPower = location.state?.providerMyPower || [];

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
  const regexJob = (JobSave) => {
    if (!regex.test(JobSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexHobby = (HobbySave) => {
    if (!regex.test(HobbySave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexSkill = (SkillSave) => {
    if (!regex.test(SkillSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexSSubject = (SSubjectSave) => {
    if (!regex.test(SSubjectSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexKSubject = (KSubjectSave) => {
    if (!regex.test(KSubjectSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };

  const handleConfirmDialog = () => {
    const JobError = regexJob(JobSave);
    const HobbyError = regexHobby(HobbySave);
    const SkillError = regexSkill(SkillSave);
    const SSubjectError = regexSSubject(SSubjectSave);
    const KSubjectError = regexKSubject(KSubjectSave);
    setJobError(JobError);
    setHobbyError(HobbyError);
    setSkillError(SkillError);
    setSSubjectError(SSubjectError);
    setKSubjectError(KSubjectError);
    setMyPowerError(MyPowerSave.length > 0 ? "" : "ERROR");
    if (
      !JobError &&
      !HobbyError &&
      !SkillError &&
      !SSubjectError &&
      !KSubjectError &&
      !MyPowerError
    ) {
      setproviderJob(JobSave);
      setproviderHobby(HobbySave);
      setproviderSkill(SkillSave);
      setproviderSSubject(SSubjectSave);
      setproviderKSubject(KSubjectSave);
      setproviderMyPower(MyPowerSave);
      setDialogOpen(false);

      navigate("/profile-st-com", {
        state: {
          providerJob: JobSave,
          providerHobby: HobbySave,
          providerSkill: SkillSave,
          providerSSubject: SSubjectSave,
          providerKSubject: KSubjectSave,
          providerMyPower: MyPowerSave,
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

  // profile-st-com に飛ぶ(戻るボタン)
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
      <div>
        <AppBar>
          <Toolbar
            elevation={4}
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
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
              　企業向け情報編集
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
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />

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
