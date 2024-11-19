import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
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
  MenuItem,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { months, older } from "./Data";
import MyContext from "../../provider/provider";

export function CEdit() {
  useEffect(() => {
    document.title = "企業プロファイル編集";
  }, []);

  const { provideremail, providername, providerKName } = useContext(MyContext);

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

  const [CnameSave, setCnameSave] = useState(warpCname);
  const [CkNameSave, setCkNameSave] = useState(warpCkName);
  const [placeSave, setPlaceSave] = useState(warpPlace);
  const [telSave, setTelSave] = useState(warpTel);
  const [faxSave, setFaxSave] = useState(warpFax);
  const [infoSave, setInfoSave] = useState(warpInfo);
  const [COpenSave, setCOpenSave] = useState(warpCOpen);
  const [COpenMSave, setCOpenMSave] = useState(warpCOpenM);
  const [capitalSave, setCapitalSave] = useState(warpCapital);
  const [peopleSave, setPeopleSave] = useState(warpPeople);
  const [comePeopleSave, setComePeopleSave] = useState(warpComePeople);
  const [homepageSave, setHomepageSave] = useState(warpHomepage);

  const [CnameError, setCnameError] = useState("");
  const [CkNameError, setCkNameError] = useState("");
  const [PlaceError, setPlaceError] = useState("");
  const [TELError, setTELError] = useState("");
  const [FAXError, setFAXError] = useState("");
  const [InfoError, setInfoError] = useState("");
  const [COpenError, setCOpenError] = useState("");
  const [COpenMError, setCOpenMError] = useState("");
  const [CapitalError, setCapitalError] = useState("");
  const [PeopleError, setPeopleError] = useState("");
  const [CPeopleError, setCPeopleError] = useState("");
  const [HomepageError, setHomepageError] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const regex = /^[一-龠あ-んァ-ヶーA-Z]{2,}$/;
  const KanaRegex = /^[ア-ンァ-ヶ]{2,}$/;
  const TelRegex = /^[0-9-]{11,}$/;
  const MoneyRegex = /^[0-9]{1,}$/;
  const PageRegex =
    /^\b((?:(https?|ftp|ftps):\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(?:\/[^\s]*)?)\b$/;

  const regexCname = (Cname) => {
    if (!regex.test(Cname)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexCkName = (CkName) => {
    if (!KanaRegex.test(CkName)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexPlace = (place) => {
    if (!regex.test(place)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexTel = (tel) => {
    if (!TelRegex.test(tel)) {
      return "数字に間違いがある可能性があります。";
    }
    return "";
  };
  const regexFax = (fax) => {
    if (!TelRegex.test(fax)) {
      return "数字に間違いがある可能性があります。";
    }
    return "";
  };
  const regexInfo = (info) => {
    if (!regex.test(info)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexCapital = (capital) => {
    if (!MoneyRegex.test(capital)) {
      return "金額を入力してください。";
    }
    return "";
  };
  const regexPeople = (people) => {
    if (!regex.test(people)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexCPeople = (comePeople) => {
    if (!regex.test(comePeople)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexHomepage = (homepage) => {
    if (!PageRegex.test(homepage)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };

  const handleConfirmDialog = () => {
    const CnameError = regexCname(CnameSave);
    const CkNameError = regexCkName(CkNameSave);
    const PlaceError = regexPlace(placeSave);
    const TELError = regexTel(telSave);
    const FAXError = regexFax(faxSave);
    const InfoError = regexInfo(infoSave);
    const CapitalError = regexCapital(capitalSave);
    const PeopleError = regexPeople(peopleSave);
    const CPeopleError = regexCPeople(comePeopleSave);
    const HomepageError = regexHomepage(homepageSave);
    setCnameError(CnameError);
    setCkNameError(CkNameError);
    setPlaceError(PlaceError);
    setTELError(TELError);
    setFAXError(FAXError);
    setInfoError(InfoError);
    setCOpenError(COpen.length > 0 ? "" : "ERROR");
    setCOpenMError(COpenM.length > 0 ? "" : "ERROR");
    setCapitalError(CapitalError);
    setPeopleError(PeopleError);
    setCPeopleError(CPeopleError);
    setHomepageError(HomepageError);
    if (
      !CnameError &&
      !CkNameError &&
      !PlaceError &&
      !TELError &&
      !FAXError &&
      !InfoError &&
      !COpenError &&
      !COpenMError &&
      !CapitalError &&
      !PeopleError &&
      !CPeopleError &&
      (!HomepageError || homepage === "")
    ) {
      setCname(CnameSave);
      setCkName(CkNameSave);
      setPlace(placeSave);
      setTel(telSave);
      setFax(faxSave);
      setInfo(infoSave);
      setCOpen(COpenSave);
      setCOpenM(COpenMSave);
      setCapital(capitalSave);
      setPeople(peopleSave);
      setComePeople(comePeopleSave);
      setHomepage(homepageSave);
      setDialogOpen(false);

      navigate("/profile-com", {
        state: {
          Cname: CnameSave,
          CkName: CkNameSave,
          place: placeSave,
          tel: telSave,
          fax: faxSave,
          info: infoSave,
          COpen: COpenSave,
          COpenM: COpenMSave,
          capital: capitalSave,
          people: peopleSave,
          comePeople: comePeopleSave,
          homepage: homepageSave,
        },
      });
    }
    setDialogOpen(false);
  };

  const OnClick = () => {
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
  };

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
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={OnClick}>
                    <ListItemText primary="企業プロフィール" />
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
        style={{ whiteSpace: "pre-line" }}
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
                value={CnameSave}
                onChange={(e) => setCnameSave(e.target.value)}
                error={Boolean(CnameError)}
                helperText={CnameError}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="企業名(カタカナ)の変更"
                value={CkNameSave}
                onChange={(e) => setCkNameSave(e.target.value)}
                error={Boolean(CkNameError)}
                helperText={CkNameError}
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
              value={placeSave}
              onChange={(e) => setPlaceSave(e.target.value)}
              error={Boolean(PlaceError)}
              helperText={PlaceError}
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
                value={telSave}
                onChange={(e) => setTelSave(e.target.value)}
                helperText="ハイフン(-)を入力してください。"
                error={Boolean(TELError)}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="FAX番号の変更"
                value={faxSave}
                onChange={(e) => setFaxSave(e.target.value)}
                helperText="ハイフン(-)を入力してください。"
                error={Boolean(FAXError)}
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
              value={infoSave}
              onChange={(e) => setInfoSave(e.target.value)}
              error={Boolean(InfoError)}
              helperText={InfoError}
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
              sx={{ width: 100 }}
              select
              multiline
              id="older2"
              label="年"
              value={COpenSave}
              onChange={(e) => setCOpenSave(e.target.value)}
              error={Boolean(COpenError)}
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
              id="months"
              label="月"
              value={COpenMSave}
              select
              onChange={(e) => setCOpenMSave(e.target.value)}
              error={Boolean(COpenMError)}
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
                value={capitalSave}
                onChange={(e) => setCapitalSave(e.target.value)}
                error={Boolean(CapitalError)}
                helperText={CapitalError}
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
              value={peopleSave}
              onChange={(e) => setPeopleSave(e.target.value)}
              error={Boolean(PeopleError)}
              helperText={PeopleError}
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
              value={comePeopleSave}
              onChange={(e) => setComePeopleSave(e.target.value)}
              error={Boolean(CPeopleError)}
              helperText={CPeopleError}
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
              value={homepageSave}
              onChange={(e) => setHomepageSave(e.target.value)}
              helperText="ここは任意です"
              error={Boolean(HomepageError)}
            />
          </Box>
        </Stack>

        <Stack // ボタンの表示
          direction="row"
          spacing={7}
        >
          <Button // profile-com に飛ぶ(データの保存を行わない)
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
