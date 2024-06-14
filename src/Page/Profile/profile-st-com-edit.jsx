import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Autocomplete,
  Chip,
  Checkbox,
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
  const warpMyPower = location.state?.myPower || null;
  const { name, kName, man, Gak, Years, Months, Days, email, Home, bye, age } =
    location.state || {};

  const [job, setJob] = useState(warpJob);
  const [hobby, setHobby] = useState(warpHobby);
  const [skill, setSkill] = useState(warpSkill);
  const [SSubject, setSSubject] = useState(warpSSubject);
  const [KSubject, setKSubject] = useState(warpKSubject);
  const [myPower, setMyPower] = useState(warpMyPower);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");

  const navigate = useNavigate();
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
      },
    });
  };

  const OnClickBack = () => {
    const regex = /^[一-龠あ-んァ-ヶーA-Z]{2,}$/;
    if ((regex.test(job, hobby, skill, SSubject, KSubject), myPower != "")) {
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
        },
      });
    } else {
      {
        !regex.test(job) ? setError1("エラー：希望職種") : "";
      }
      {
        !regex.test(hobby) ? setError2("エラー：趣味") : "";
      }
      {
        !regex.test(skill) ? setError3("エラー：得意な科目") : "";
      }
      {
        !regex.test(SSubject) ? setError4("エラー：苦手な科目") : "";
      }
      {
        !regex.test(KSubject) ? setError5("エラー：取得した資格") : "";
      }
      {
        myPower != "" ? setError6("エラー：保有資格") : "";
      }
    }
  };

  const Check = job && hobby && skill && SSubject && KSubject && myPower;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
            sx={{ minWidth: 300 }}
          >
            <p>希望職種</p>
          </Box>
          <Box
            //paddingBottom={2}
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
              onChange={(e) => setJob(e.target.value)}
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
            //paddingBottom={2}
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
            //paddingBottom={2}
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
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option.id}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              /*renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option.title}
                    {...getTagProps({ index })}
                  />
                ))
              }*/
              renderInput={(params) => (
                <TextField {...params} label="取得資格の選択" />
              )}
              onChange={(event, newValue) => {
                setMyPower(newValue);
              }}
            />
          </Box>
        </Stack>

        <div>
          {error1 && <p style={{ color: "red" }}>{error1}</p>}
          {error2 && <p style={{ color: "red" }}>{error2}</p>}
          {error3 && <p style={{ color: "red" }}>{error3}</p>}
          {error4 && <p style={{ color: "red" }}>{error4}</p>}
          {error5 && <p style={{ color: "red" }}>{error5}</p>}
          {error6 && <p style={{ color: "red" }}>{error6}</p>}
        </div>
        <Button variant="contained" onClick={OnClickBack} disabled={!Check}>
          情報を確定する
        </Button>
      </Stack>
    </>
  );
}
