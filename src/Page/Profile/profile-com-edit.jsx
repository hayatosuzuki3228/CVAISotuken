import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
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
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { days, months, older } from "./Data";

export function CEdit() {
  useEffect(() => {
    document.title = "企業プロファイル編集";
  }, []);

  const location = useLocation();
  const warpCnameSave = location.state?.CnameSave || "";
  const warpCkNameSave = location.state?.CkNameSave || "";
  const warpPlaceSave = location.state?.placeSave || "";
  const warpTelSave = location.state?.telSave || "";
  const warpFaxSave = location.state?.faxSave || "";
  const warpInfoSave = location.state?.infoSave || "";
  const warpCOpenSave = location.state?.COpenSave || "";
  const warpCOpenMSave = location.state?.COpenMSave || "";
  const warpCapitalSave = location.state?.capitalSave || "";
  const warpPeopleSave = location.state?.peopleSave || "";
  const warpComePeopleSave = location.state?.comePeopleSave || "";
  const warpHomepageSave = location.state?.homepageSave || "";

  const [Cname, setCname] = useState(warpCnameSave);
  const [CkName, setCkName] = useState(warpCkNameSave);
  const [place, setPlace] = useState(warpPlaceSave);
  const [tel, setTel] = useState(warpTelSave);
  const [fax, setFax] = useState(warpFaxSave);
  const [info, setInfo] = useState(warpInfoSave);
  const [COpen, setCOpen] = useState(warpCOpenSave);
  const [COpenM, setCOpenM] = useState(warpCOpenMSave);
  const [capital, setCapital] = useState(warpCapitalSave);
  const [people, setPeople] = useState(warpPeopleSave);
  const [comePeople, setComePeople] = useState(warpComePeopleSave);
  const [homepage, setHomepage] = useState(warpHomepageSave);

  const [CnameSave, setCnameSave] = useState(warpCnameSave);
  const [CkNameSave, setCkNameSave] = useState(warpCkNameSave);
  const [placeSave, setPlaceSave] = useState(warpPlaceSave);
  const [telSave, setTelSave] = useState(warpTelSave);
  const [faxSave, setFaxSave] = useState(warpFaxSave);
  const [infoSave, setInfoSave] = useState(warpInfoSave);
  const [COpenSave, setCOpenSave] = useState(warpCOpenSave);
  const [COpenMSave, setCOpenMSave] = useState(warpCOpenMSave);
  const [capitalSave, setCapitalSave] = useState(warpCapitalSave);
  const [peopleSave, setPeopleSave] = useState(warpPeopleSave);
  const [comePeopleSave, setComePeopleSave] = useState(warpComePeopleSave);
  const [homepageSave, setHomepageSave] = useState(warpHomepageSave);

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const [error5, setError5] = useState("");
  const [error6, setError6] = useState("");
  const [error7, setError7] = useState("");
  const [error8, setError8] = useState("");
  const [error9, setError9] = useState("");
  const [error10, setError10] = useState("");
  const [OneMoreClick, setOneMoreClick] = useState();

  useEffect(() => {
    if (!Cname) {
      setCname(CnameSave);
    } else {
      setCname(Cname);
    }
  }, [CnameSave]);

  useEffect(() => {
    if (!CkName) {
      setCkName(CkNameSave);
    } else {
      setCkName(CkName);
    }
  }, [CkNameSave]);

  useEffect(() => {
    if (!place) {
      setPlace(placeSave);
    } else {
      setPlace(place);
    }
  }, [placeSave]);

  useEffect(() => {
    if (!tel) {
      setTel(telSave);
    } else {
      setTel(tel);
    }
  }, [telSave]);

  useEffect(() => {
    if (!fax) {
      setFax(faxSave);
    } else {
      setFax(fax);
    }
  }, [faxSave]);

  useEffect(() => {
    if (!info) {
      setInfo(infoSave);
    } else {
      setInfo(info);
    }
  }, [infoSave]);

  useEffect(() => {
    if (!COpen) {
      setCOpen(COpenSave);
    } else {
      setCOpen(COpen);
    }
  }, [COpenSave]);

  useEffect(() => {
    if (!COpenM) {
      setCOpenM(COpenMSave);
    } else {
      setCOpenM(COpenM);
    }
  }, [COpenMSave]);

  useEffect(() => {
    if (!capital) {
      setCapital(capitalSave);
    } else {
      setCapital(capital);
    }
  }, [capitalSave]);

  useEffect(() => {
    if (!people) {
      setPeople(peopleSave);
    } else {
      setPeople(people);
    }
  }, [peopleSave]);

  useEffect(() => {
    if (!comePeople) {
      setComePeople(comePeopleSave);
    } else {
      setComePeople(comePeople);
    }
  }, [comePeopleSave]);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st-edit");
  };

  const OnClick2 = () => {
    navigate("/profile-st-com");
  };

  const OnClick3 = () => {
    navigate("/profile-com");
  };

  // profile-com に飛ぶ
  const OnClickBack = () => {
    const regex = /^[一-龠あ-んァ-ヶーA-Z]{2,}$/;
    const KanaRegex = /^[ア-ンァ-ヶ]{2,}$/;
    const TelRegex = /^[0-9-]{11,}$/;
    const MoneyRegex = /^[0-9]{1,}$/;
    const PageRegex =
      /^\b((?:(https?|ftp|ftps):\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(?:\/[^\s]*)?)\b$/;

    if (
      regex.test(Cname) &&
      regex.test(place) &&
      regex.test(info) &&
      regex.test(people) &&
      regex.test(comePeople) &&
      KanaRegex.test(CkName) &&
      TelRegex.test(tel) &&
      TelRegex.test(fax) &&
      MoneyRegex.test(capital) &&
      (PageRegex.test(homepage) || homepage === "")
    ) {
      if (
        Cname === CnameSave &&
        CkName === CkNameSave &&
        place === placeSave &&
        info === infoSave &&
        tel === telSave &&
        fax === faxSave &&
        people === peopleSave &&
        comePeople === comePeopleSave &&
        capital === capitalSave &&
        (homepage === homepageSave || homepage === "")
      ) {
        navigate("/profile-com", {
          state: {
            Cname,
            CkName,
            place,
            tel,
            fax,
            info,
            COpen,
            COpenM,
            capital,
            people,
            comePeople,
            homepage,
          },
        });
      } else {
        setCnameSave(Cname);
        setCkNameSave(CkName);
        setPlaceSave(place);
        setInfoSave(info);
        setTelSave(tel);
        setFaxSave(fax);
        setCOpenSave(COpen);
        setCOpenMSave(COpenM);
        setCapitalSave(capital);
        setPeopleSave(people);
        setComePeopleSave(comePeople);
        setHomepageSave(homepage);
        setError1("");
        setError2("");
        setError3("");
        setError4("");
        setError5("");
        setError6("");
        setError7("");
        setError8("");
        setError9("");
        setError10("");
        setOneMoreClick(true);
      }
    } else {
      setError1(
        !regex.test(Cname) ? setError1("エラー：企業名") : setError1("")
      );
      setError2(!KanaRegex.test(CkName) ? "エラー：カタカナ企業名" : "");
      setError3(!regex.test(place) ? "エラー：来訪者数" : "");
      setError4(!TelRegex.test(tel) ? "エラー：電話番号" : "");
      setError5(!TelRegex.test(fax) ? "エラー：FAX番号" : "");
      setError6(!regex.test(info) ? "エラー：事業内容" : "");
      setError7(!MoneyRegex.test(capital) ? "エラー：資本金" : "");
      setError8(!regex.test(people) ? "エラー：従業員数" : "");
      setError9(
        !regex.test(comePeople) ? setError9("エラー：人物像") : setError9("")
      );
      setError10(
        !PageRegex.test(homepage)
          ? setError10("エラー：ホームページ")
          : setError10("")
      );
      setOneMoreClick(false);
    }
  };

  const Check = // 全項目が入力されていればTrueとなり、情報の確定ボタンが押せるようになる
    Cname &&
    CkName &&
    place &&
    tel &&
    fax &&
    info &&
    COpen &&
    COpenM &&
    capital &&
    people &&
    comePeople;

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
        <h1>プロフィール編集</h1>
      </header>

      <Stack // メインコンテンツ
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
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>企業名</p>
          </Box>
          <Stack
            spacing={2}
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <Box>
              <TextField
                fullWidth
                label="企業名の変更"
                value={Cname}
                onChange={(e) => setCname(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="企業名(カタカナ)の変更"
                value={CkName}
                onChange={(e) => setCkName(e.target.value)}
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
            <p>企業所在地</p>
          </Box>
          <Box
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              fullWidth
              label="企業所在地の変更"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
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
            <p>電話番号＆FAX番号</p>
          </Box>
          <Stack
            spacing={2}
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <Box>
              <TextField
                fullWidth
                label="電話番号の変更"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="FAX番号の変更"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
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
            <p>事業内容</p>
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
              minRows={4}
              label="事業内容の変更"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
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
            <p>創業年日</p>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            paddingBottom={2}
            spacing={1.2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>西暦</p>
            <TextField
              select
              sx={{ width: 100 }}
              multiline
              id={older}
              label="年"
              value={COpen}
              onChange={(e) => setCOpen(e.target.value)}
            >
              {older.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p>年</p>
            <TextField
              sx={{ width: 55 }}
              multiline
              id={months}
              label="月"
              value={COpenM}
              select
              onChange={(e) => setCOpenM(e.target.value)}
            >
              {months.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p>月創業</p>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>資本金</p>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            paddingBottom={2}
            spacing={1.2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <Box>
              <TextField
                label="資本金の変更(百万円単位)"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
            </Box>
            <p>万円</p>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <p>代表者名</p>
          </Box>
          <Box
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              fullWidth
              label="代表者名の変更"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
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
            <p>企業が求める人材像</p>
          </Box>
          <Box
            paddingBottom={2}
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              fullWidth
              multiline
              minRows={4}
              sx={{ minWidth: 240 }}
              label="企業が求める人材像の変更"
              value={comePeople}
              onChange={(e) => setComePeople(e.target.value)}
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
            <p>ホームページ等</p>
          </Box>
          <Box
            flex="1"
            border="1px solid black"
            padding="10px"
            sx={{ minWidth: 300 }}
          >
            <TextField
              fullWidth
              label="ホームページ等の追加・変更"
              value={homepage}
              onChange={(e) => setHomepage(e.target.value)}
              helperText="ここは任意です"
            />
          </Box>
        </Stack>

        <div /* エラーの表示 */>
          {error1 && <p style={{ color: "red" }}>{error1}</p>}
          {error2 && <p style={{ color: "red" }}>{error2}</p>}
          {error3 && <p style={{ color: "red" }}>{error3}</p>}
          {error4 && <p style={{ color: "red" }}>{error4}</p>}
          {error5 && <p style={{ color: "red" }}>{error5}</p>}
          {error6 && <p style={{ color: "red" }}>{error6}</p>}
          {error7 && <p style={{ color: "red" }}>{error7}</p>}
          {error8 && <p style={{ color: "red" }}>{error8}</p>}
          {error9 && <p style={{ color: "red" }}>{error9}</p>}
          {error10 && <p style={{ color: "red" }}>{error10}</p>}
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
          <Button // profile-com に飛ぶ(データの保存を行わない)
            variant="contained"
            onClick={OnClick3}
            disabled={OneMoreClick}
          >
            戻る
          </Button>
          <Button // profile-comに飛ぶ(データの保存を行う)
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
