import React, { useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Checkbox,
  Dialog,
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
  Typography,
} from "@mui/material";
import "./styles.css";
import { options } from "./Data";
import MenuIcon from "@mui/icons-material/Menu";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Power } from "@mui/icons-material";

export function SCEdit() {
  const location = useLocation();
  const warpJobSave = location.state?.JobSave || "";
  const warpHobbySave = location.state?.HobbySave || "";
  const warpSkillSave = location.state?.SkillSave || "";
  const warpSSubjectSave = location.state?.SSubjectSave || "";
  const warpKSubjectSave = location.state?.KSubjectSave || "";
  const warpMyPowerSave = location.state?.MyPowerSave || [];
  const { name, kName, man, Gak, Years, Months, Days, email, Home, bye, age } =
    location.state || {};

  const [job, setJob] = useState(warpJobSave);
  const [hobby, setHobby] = useState(warpHobbySave);
  const [skill, setSkill] = useState(warpSkillSave);
  const [SSubject, setSSubject] = useState(warpSSubjectSave);
  const [KSubject, setKSubject] = useState(warpKSubjectSave);
  const [myPower, setMyPower] = useState(warpMyPowerSave);

  const [JobSave, setJobSave] = useState(warpJobSave);
  const [HobbySave, setHobbySave] = useState(warpHobbySave);
  const [SkillSave, setSkillSave] = useState(warpSkillSave);
  const [SSubjectSave, setSSubjectSave] = useState(warpSSubjectSave);
  const [KSubjectSave, setKSubjectSave] = useState(warpKSubjectSave);
  const [MyPowerSave, setMyPowerSave] = useState(warpMyPowerSave);

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [OneMoreClick, setOneMoreClick] = useState();

  useEffect(() => {
    document.title = "プロフィール";
  }, []);

  useEffect(() => {
    if (!job) {
      setJob(JobSave);
    } else {
      setJob(job);
    }
  }, [JobSave]);

  useEffect(() => {
    if (!hobby) {
      setHobby(HobbySave);
    } else {
      setHobby(hobby);
    }
  }, [HobbySave]);

  useEffect(() => {
    if (!skill) {
      setSkill(SkillSave);
    } else {
      setSkill(skill);
    }
  }, [SkillSave]);

  useEffect(() => {
    if (!SSubject) {
      setSSubject(SSubjectSave);
    } else {
      setSSubject(SSubject);
    }
  }, [SSubjectSave]);

  useEffect(() => {
    if (!KSubject) {
      setKSubject(KSubjectSave);
    } else {
      setKSubject(KSubject);
    }
  }, [KSubjectSave]);

  useEffect(() => {
    if (!myPower) {
      setMyPower([...MyPowerSave]);
    } else {
      setMyPower([...myPower]);
    }
  }, [MyPowerSave]);

  const navigate = useNavigate();
  /* profile-st に飛ぶ */
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
      },
    });
  };

  /* profile-st-com に飛ぶ(戻るボタン) */
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
        JobSave,
        HobbySave,
        SkillSave,
        SSubjectSave,
        KSubjectSave,
        MyPowerSave,
      },
    });
  };

  /* profile-st-com に飛ぶ(情報を確定するボタン) */
  const OnClickBack = () => {
    const regex = /^[一-龠あ-んァ-ヶーA-Z]{2,}$/;
    if (
      regex.test(job) &&
      regex.test(hobby) &&
      regex.test(skill) &&
      regex.test(SSubject) &&
      regex.test(KSubject) &&
      myPower.length > 0
    ) {
      if (
        JobSave === job &&
        HobbySave === hobby &&
        SkillSave === skill &&
        SSubjectSave === SSubject &&
        KSubjectSave === KSubject &&
        OneMoreClick !== false
      ) {
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
            Gak,
            JobSave,
            HobbySave,
            SkillSave,
            SSubjectSave,
            KSubjectSave,
            MyPowerSave,
          },
        });
      } else {
        setJobSave(job);
        setHobbySave(hobby);
        setSkillSave(skill);
        setSSubjectSave(SSubject);
        setKSubjectSave(KSubject);
        setMyPowerSave([...myPower]);
        setError1("");
        setError2("");
        setError3("");
        setError4("");
        setError5("");
        setError6("");
        setOneMoreClick(!regex.test(job) ? false : true);
      }
    } else {
      setError1(!regex.test(job) ? "エラー：希望職種" : "");
      setError2(!regex.test(hobby) ? "エラー：趣味" : "");
      setError3(!regex.test(skill) ? "エラー：特技" : "");
      setError4(!regex.test(SSubject) ? "エラー：得意な科目" : "");
      setError5(!regex.test(KSubject) ? "エラー：苦手な科目" : "");
      setError6(myPower === "" ? "エラー：保有資格" : "");
      setOneMoreClick(false);
    }
  };

  const Check = job && hobby && skill && SSubject && KSubject && myPower; // 全項目が入力されていればTrueとなり、情報の確定ボタンが押せるようになる
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event, newValue) => {
    if (newValue.some((option) => option.id === 0)) {
      setMyPower([options.find((option) => option.id === 0)]);
    } else {
      setMyPower(newValue);
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
              value={job}
              onChange={(e) => {
                setJob(e.target.value);
              }}
            />
          </Box>
        </Stack>

        <Stack direction="row" paddingBottom="5">
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
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
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
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
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
              value={SSubject}
              onChange={(e) => setSSubject(e.target.value)}
            />
            <p></p>
            <TextField
              multiline
              fullWidth
              label="苦手な科目の変更"
              value={KSubject}
              onChange={(e) => setKSubject(e.target.value)}
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
              defaultValue={myPower || []}
              defaultChecked={myPower || []}
              value={myPower}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option.id}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    disabled={
                      myPower.some((selectOption) => selectOption.id === 0) &&
                      option.id !== 0
                    }
                  />
                  {option.title}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="取得資格の選択" />
              )}
              onChange={handleChange}
            />
          </Box>
        </Stack>
        <Stack direction="column" spacing={2}>
          JobSave: {JobSave}
          <br />
          <br />
          HobbySave: {HobbySave} <br />
          <br />
          SkillSave: {SkillSave} <br />
          <br />
          SSubjectSave: {SSubjectSave} <br />
          <br />
          KSubjectSave: {KSubjectSave} <br />
          <br />
          MyPowerSave: {MyPowerSave.map((Power) => Power.title).join(",")}
        </Stack>

        <div /*エラーを表示する*/>
          {error1 && <p style={{ color: "red" }}>{error1}</p>}
          {error2 && <p style={{ color: "red" }}>{error2}</p>}
          {error3 && <p style={{ color: "red" }}>{error3}</p>}
          {error4 && <p style={{ color: "red" }}>{error4}</p>}
          {error5 && <p style={{ color: "red" }}>{error5}</p>}
          {error6 && <p style={{ color: "red" }}>{error6}</p>}
          {OneMoreClick === true ? (
            <p style={{ color: "green" }}>
              よろしければ、もう一度ボタンを押してください。
            </p>
          ) : undefined}
        </div>
        <Stack direction="row" spacing={7} /*ボタンを表示する*/>
          <Button /* profile-st-com に飛ぶ(データの保存を行わない) */
            variant="contained"
            onClick={OnClick2}
            disabled={OneMoreClick}
          >
            戻る
          </Button>
          <Button /* profile-st-com に飛ぶ(データの保存を行う) */
            variant="contained"
            onClick={OnClickBack}
            disabled={!Check}
          >
            情報を確定する
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
