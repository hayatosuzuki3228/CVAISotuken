import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";
import { days, months, older } from "./Data";

export function CEdit() {
  useEffect(() => {
    document.title = "企業プロファイル編集";
  }, []);

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
  const [dialogOpen, setDialogOpen] = useState(false);

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

  const handleConfirmDialog = () => {
    setDialogOpen(false);
  };

  const navigate = useNavigate();

  const OnClick = () => {
    navigate("/profile-com", {
      state: {
        CnameSave,
        CkNameSave,
        placeSave,
        telSave,
        faxSave,
        infoSave,
        COpenSave,
        COpenMSave,
        capitalSave,
        peopleSave,
        comePeopleSave,
        homepageSave,
      },
    });
  };
  regex.test(Cname) &&
    regex.test(place) &&
    regex.test(info) &&
    regex.test(people) &&
    regex.test(comePeople) &&
    KanaRegex.test(CkName) &&
    TelRegex.test(tel) &&
    TelRegex.test(fax) &&
    MoneyRegex.test(capital) &&
    (PageRegex.test(homepage) || homepage === "");

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
                helperText="ハイフン(-)を入力してください。"
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="FAX番号の変更"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
                helperText="ハイフン(-)を入力してください。"
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
              sx={{ width: 100 }}
              select
              multiline
              id="older2"
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
              id="months"
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
