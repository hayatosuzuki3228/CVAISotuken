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
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { days, months, older } from "./Data";

export function CEdit() {
  useEffect(() => {
    document.title = "企業プロファイル編集";
  }, []);

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const location = useLocation();
  const warpCname = location.state?.Cname || "";
  const warpCkName = location.state?.CkName || "";
  const warpPlace = location.state?.place || "";
  const warpTel = location.state?.tel || "";
  const warpFax = location.state?.fax || "";
  const warpInfo = location.state?.info || "";
  const warpCOpen = location.state?.COpen || "";
  const warpCOpenM = location.state?.COpenM || "";
  const warpCapital = location.state?.capital || "";
  const warpPeople = location.state?.people || "";
  const warpComePeople = location.state?.comePeople || "";
  const warpHomepage = location.state?.homepage || "";

  const [Cname, setCname] = useState(warpCname);
  const [CkName, setCkName] = useState(warpCkName);
  const [place, setPlace] = useState(warpPlace);
  const [tel, setTel] = useState(warpTel);
  const [fax, setFax] = useState(warpFax);
  const [info, setInfo] = useState(warpInfo);
  const [COpen, setCOpen] = useState(warpCOpen);
  const [COpenM, setCOpenM] = useState(warpCOpenM);
  const [capital, setCapital] = useState(warpCapital);
  const [people, setPeople] = useState(warpPeople);
  const [comePeople, setComePeople] = useState(warpComePeople);
  const [homepage, setHomepage] = useState(warpHomepage);

  const [CnameSave, setCnameSave] = useState();

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

    const isValidCname = regex.test(Cname);
    const isValidPlace = regex.test(place);
    const isValidInfo = regex.test(info);
    const isValidPeople = regex.test(people);
    const isValidComePeople = regex.test(comePeople);
    const isValidCkName = KanaRegex.test(CkName);
    const isValidTel = TelRegex.test(tel);
    const isValidFax = TelRegex.test(fax); // FAX番号も同じ正規表現を使用
    const isValidCapital = MoneyRegex.test(capital);
    const isValidHomepage = PageRegex.test(homepage) || homepage === "";

    if (
      isValidCname &&
      isValidPlace &&
      isValidInfo &&
      isValidPeople &&
      isValidComePeople &&
      isValidCkName &&
      isValidTel &&
      isValidFax &&
      isValidCapital &&
      isValidHomepage
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
        </div>

        <Stack // ボタンの表示
          direction="row"
          spacing={7}
        >
          <Button // profile-com に飛ぶ(データの保存を行わない)
            variant="contained"
            onClick={OnClick3}
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
