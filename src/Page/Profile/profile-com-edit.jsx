import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
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
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { months, older } from "./Data";
import MyContext from "../../provider/provider";
import { primarycolor } from "../../const/color";

export function CEdit() {
  useEffect(() => {
    document.title = "企業プロファイル編集";
  }, []);

  const {
    providerCname,
    setproviderCname,
    providerCKName,
    setproviderCKname,
    providerPlace,
    setproviderPlace,
    providerTEL,
    setproviderTEL,
    providerFAX,
    setproviderFAX,
    providerInfo,
    setproviderInfo,
    providerCOpen,
    setproviderCOpen,
    providerCOpenM,
    setproviderCOpenM,
    providerCapital,
    setproviderCapital,
    providerPeople,
    setproviderPeople,
    providerComePeople,
    setproviderComePeople,
    providerHomepage,
    setproviderHomepage,
  } = useContext(MyContext);

  const location = useLocation();
  const warpCname = location.state?.providerCname || "";
  const warpCkName = location.state?.providerCKName || "";
  const warpPlace = location.state?.providerPlace || "";
  const warpTel = location.state?.providerTEL || "";
  const warpFax = location.state?.providerFAX || "";
  const warpInfo = location.state?.providerInfo || "";
  const warpCOpen = location.state?.providerCOpen || "";
  const warpCOpenM = location.state?.providerCOpenM || "";
  const warpCapital = location.state?.providerCapital || "";
  const warpPeople = location.state?.providerPeople || "";
  const warpComePeople = location.state?.providerComePeople || "";
  const warpHomepage = location.state?.providerHomepage || "";

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

  const regexCname = (CnameSave) => {
    if (!regex.test(CnameSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexCkName = (CkNameSave) => {
    if (!KanaRegex.test(CkNameSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexPlace = (placeSave) => {
    if (!regex.test(placeSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexTel = (telSave) => {
    if (!TelRegex.test(telSave)) {
      return "数字に間違いがある可能性があります。";
    }
    return "";
  };
  const regexFax = (faxSave) => {
    if (!TelRegex.test(faxSave)) {
      return "数字に間違いがある可能性があります。";
    }
    return "";
  };
  const regexInfo = (infoSave) => {
    if (!regex.test(infoSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexCapital = (capitalSave) => {
    if (!MoneyRegex.test(capitalSave)) {
      return "金額を入力してください。";
    }
    return "";
  };
  const regexPeople = (peopleSave) => {
    if (!regex.test(peopleSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexCPeople = (comePeopleSave) => {
    if (!regex.test(comePeopleSave)) {
      return "文字数が足りない、\nまたは正しい表現ではない可能性があります。";
    }
    return "";
  };
  const regexHomepage = (homepageSave) => {
    if (!PageRegex.test(homepageSave)) {
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
    setCOpenError(COpenSave.length > 0 ? "" : "ERROR");
    setCOpenMError(COpenMSave.length > 0 ? "" : "ERROR");
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
      (!HomepageError || homepageSave === "")
    ) {
      setproviderCname(CnameSave);
      setproviderCKname(CkNameSave);
      setproviderPlace(placeSave);
      setproviderTEL(telSave);
      setproviderFAX(faxSave);
      setproviderInfo(infoSave);
      setproviderCOpen(COpenSave);
      setproviderCOpenM(COpenMSave);
      setproviderCapital(capitalSave);
      setproviderPeople(peopleSave);
      setproviderComePeople(comePeopleSave);
      setproviderHomepage(homepageSave);
      setDialogOpen(false);

      navigate("/profile-com", {
        state: {
          providerCname: CnameSave,
          providerCKName: CkNameSave,
          providerPlace: placeSave,
          providerTEL: telSave,
          providerFAX: faxSave,
          providerInfo: infoSave,
          providerCOpen: COpenSave,
          providerCOpenM: COpenMSave,
          providerCapital: capitalSave,
          providerPeople: peopleSave,
          providerComePeople: comePeopleSave,
          providerHomepage: homepageSave,
        },
      });
    }
    setDialogOpen(false);
  };

  const OnClick = () => {
    navigate("/profile-com", {
      state: {
        providerCname,
        providerCKName,
        providerPlace,
        providerTEL,
        providerFAX,
        providerInfo,
        providerCOpen,
        providerCOpenM,
        providerCapital,
        providerPeople,
        providerComePeople,
        providerHomepage,
      },
    });
  };

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div>
        <AppBar>
          <Toolbar
            elevation={4}
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              backgroundColor: primarycolor,
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
              　企業情報編集
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
                      <ListItemText primary="企業プロフィール" />
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

      <Stack // メインコンテンツ
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingTop="5%"
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
