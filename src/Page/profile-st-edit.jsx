import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  Divider,
  FormControlLabel,
  FormControl,
  InputLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Gkinfo } from "./Data";

export function SEdit() {
  useEffect(() => {
    document.title = "プロフィール編集";
  }, []);

  const navigate = useNavigate();
  const OnClick = () => {
    navigate("/profile-st");
  };
  const OnClick2 = () => {
    navigate("/profile-st-com");
  };
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [name, getName] = useState("");
  const [kName, getKName] = useState("");
  const [man, getMan] = useState("");
  const [age, getAge] = useState("");
  const [gk, getGk] = useState("");
  const [selectItems, getSelectItems] = useState([]);

  const handleChange1 = (event) => {
    getMan(event.target.value);
  };
  const handleChange2 = (event) => {
    getAge(event.target.value);
  };
  const handleChange3 = (event) => {
    getGk(event.target.value);
  };

  const handleMenuItemClick = (Gkinfo) => {
    const currentIndex = selectItems.indexOf(Gkinfo);
    const newItem = [...selectItems];

    if (currentIndex === -1) {
      newItem.push(Gkinfo);
    } else {
      newItem.splice(currentIndex, 1);
    }
    setSelectItems(newItem);
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
        <h1>プロフィール編集</h1>
      </header>

      <Stack
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="column"
        paddingTop="3%"
        paddingBottom="5%"
        spacing={2}
      >
        <Box>
          <p>名前の編集</p>
          <TextField
            label="名前の変更"
            value={name}
            onChange={(e) => getName(e.target.value)}
            helperText="名前の変更です"
          />
        </Box>
        <Box>
          <TextField
            label="名前(カタカナ)の変更"
            value={kName}
            onChange={(e) => getKName(e.target.value)}
          />
        </Box>

        <Box>
          <p>性別の変更</p>
          <RadioGroup
            value={man}
            onChange={handleChange1}
            defaultValue="man"
            row
          >
            <FormControlLabel
              value="man"
              control={<Radio />}
              label="男性"
            ></FormControlLabel>
            <FormControlLabel
              value="woman"
              control={<Radio />}
              label="女性"
            ></FormControlLabel>
          </RadioGroup>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <p>年齢の変更</p>
          <FormControl fullWidth>
            <InputLabel id="test-age-label">年齢</InputLabel>
            <Select
              labelId="test-age-label"
              id="test-age"
              value={age}
              label="年齢"
              onChange={handleChange2}
            >
              <MenuItem value={15}>15歳</MenuItem>
              <MenuItem value={16}>16歳</MenuItem>
              <MenuItem value={17}>17歳</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 240 }}>
          <p>学科名の変更</p>
          <FormControl fullWidth>
            <InputLabel id="Gk-label">学科名</InputLabel>
            <Select
              labelId="Gk-label"
              id="Gk"
              value={gk}
              label="学科名"
              onChange={handleChange3}
            >
              {Gkinfo.map((option) => (
                <MenuItem
                  key={Gkinfo}
                  onClick={() => handleMenuItemClick(option)}
                >
                  <ListItemText primary={Gkinfo.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
}
