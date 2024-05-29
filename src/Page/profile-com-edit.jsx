import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { days, months, years } from "./Data";
import { CenterFocusStrong } from "@mui/icons-material";

export function CEdit() {
  useEffect(() => {
    document.title = "企業プロファイル編集";
  }, []);

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("");
    navigate("/profile-st-edit");
  };
  const OnClick2 = () => {
    navigate("");
    navigate("/profile-st-com");
  };

  const [Cname, setCname] = useState(undefined);
  const [Ckname, setCkname] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [tel, setTel] = useState(undefined);
  const [fax, setFax] = useState(undefined);
  const [info, setInfo] = useState(undefined);
  const [COpen, setCOpen] = useState("");
  const [COpenM, setCOpenM] = useState("");
  const [capital, setCapital] = useState(undefined);
  const [people, setPeople] = useState(undefined);
  const [comePeople, setComePeople] = useState(undefined);
  const [homepage, setHomepage] = useState("");

  const handleChange1 = (event) => {
    setCOpen(event.target.value);
  };
  const handleChange2 = (event) => {
    setCOpenM(event.target.value);
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

      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        paddingTop="3%"
        paddingBottom="7%"
        spacing={2}
      >
        <Box
          sx={{
            border: "2px solid black",
            padding: "24px",
            borderRadius: "8px",
          }}
        >
          <p>企業名</p>
          <Stack spacing={2} paddingBottom={2}>
            <Box>
              <TextField
                required
                label="企業名の変更"
                value={Cname}
                onChange={(e) => setCname(e.target.value)}
                helperText={Cname !== undefined && !Cname ? "未入力です。" : ""}
                error={Cname !== undefined && !Cname}
              />
            </Box>
            <Box>
              <TextField
                required
                label="企業名(カタカナ)の変更"
                value={Ckname}
                onChange={(e) => setCkname(e.target.value)}
                helperText={
                  Ckname !== undefined && !Ckname ? "未入力です。" : ""
                }
                error={Ckname !== undefined && !Ckname}
              />
            </Box>
          </Stack>

          <p>企業所在地</p>
          <Box paddingBottom={2}>
            <TextField
              required
              label="企業所在地の変更"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              helperText={
                location !== undefined && !location ? "未入力です" : ""
              }
              error={location !== undefined && !location}
            />
          </Box>

          <p>電話番号＆FAX番号</p>
          <Stack spacing={2} paddingBottom={2}>
            <Box>
              <TextField
                required
                label="電話番号の変更"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                helperText={tel !== undefined && !tel ? "未入力です" : ""}
                error={tel !== undefined && !tel}
              />
            </Box>
            <Box>
              <TextField
                required
                label="FAX番号の変更"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
                helperText={fax !== undefined && !fax ? "未入力です" : ""}
                error={fax !== undefined && !fax}
              />
            </Box>
          </Stack>

          <p>事業内容</p>
          <Box paddingBottom={2}>
            <TextField
              required
              multiline
              minRows={4}
              label="事業内容の変更"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              helperText={info !== undefined && !info ? "未入力です" : ""}
              error={info !== undefined && !info}
            />
          </Box>

          <p>創業年日</p>
          <Stack
            direction="row"
            alignItems="center"
            paddingBottom={2}
            spacing={2}
          >
            <p>西暦</p>
            <FormControl sx={{ minWidth: 120 }} required>
              <InputLabel>年</InputLabel>
              <Select label="年" value={COpen} onChange={handleChange1}>
                {years.map((OY) => (
                  <MenuItem key={OY} value={OY}>
                    {OY}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <p>年</p>
            <FormControl sx={{ minWidth: 120 }} required>
              <InputLabel>月</InputLabel>
              <Select label="月" value={COpenM} onChange={handleChange2}>
                {months.map((OM) => (
                  <MenuItem key={OM} value={OM}>
                    {OM}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <p>月創業</p>
          </Stack>

          <p>資本金</p>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            paddingBottom={2}
            spacing={2}
          >
            <Box>
              <TextField
                required
                label="資本金の変更(百万円単位)"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
                helperText={
                  capital !== undefined && !capital ? "未入力です。" : ""
                }
                error={capital !== undefined && !capital}
              />
            </Box>
            <p>万円</p>
          </Stack>

          <p>代表者名</p>
          <Box paddingBottom={2}>
            <TextField
              required
              label="代表者名の変更"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              helperText={people !== undefined && !people ? "未入力です。" : ""}
              error={people !== undefined && !people}
            />
          </Box>

          <p>企業が求める人材像</p>
          <Box paddingBottom={2}>
            <TextField
              required
              multiline
              minRows={4}
              sx={{ minWidth: 240 }}
              label="企業が求める人材像の変更"
              value={comePeople}
              onChange={(e) => setComePeople(e.target.value)}
              helperText={
                comePeople !== undefined && !comePeople ? "未入力です" : ""
              }
              error={comePeople !== undefined && !comePeople}
            />
          </Box>

          <p>ホームページ等</p>
          <Box paddingBottom={4}>
            <TextField
              label="代表者名の変更"
              value={homepage}
              onChange={(e) => setHomepage(e.target.value)}
              helperText="ここは任意です"
            />
          </Box>

          <Button variant="contained">情報を確定する</Button>
        </Box>
      </Stack>
    </>
  );
}
