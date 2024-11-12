import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  Stack,
  Button,
  TextField,
  Autocomplete,
  IconButton,
  Tooltip,
  Typography,
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import companies from "../../const/companies.js"; // インポートを修正
import MyContext from "../../provider/provider";
import styled from "styled-components";

const options = companies.map((company) => ({
  label: company.name,
  id: company.id, // 企業IDを追加
}));
const StyledButton = styled(Button)`
  && {
    width: 250px;
    height: 100px;
    padding: 5px;
    background-color: #446699;

    &:hover {
      background-color: #224477;
    }
  }
`;
const StyledButton2 = styled(Button)`
  && {
    background-color: #dd3300;

    &:hover {
      background-color: #aa2200;
    }
  }
`;
export function Matching() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { providerid, setproviderid } = useContext(MyContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCompanyChange = (event, value) => {
    if (value) {
      setSelectedCompany(value);
      setproviderid(value.id);
      console.log("Selected company ID:", value.id);
    } else {
      setSelectedCompany(null);
    }
    console.log("Provider ID:", providerid);
  };

  const handleCompanyInfoClick = () => {
    if (selectedCompany) {
      navigate(`/companyinformation`);
    } else {
      alert("企業を選択してください");
    }
  };

  const onClick = () => {
    navigate("/Matchtable");
  };

  return (
    <div>
      <AppBar>
        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "#38d" }}
        >
          <Typography
            sx={{ fontSize: isSmallScreen ? "0.8rem" : "1rem", color: "black" }}
          >
            <h1>名産会マッチング</h1>
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <div id="hart">
              <Tooltip title="マッチ度">
                <IconButton
                  aria-label="ハート"
                  onClick={() => navigate("/Matchdo")}
                >
                  <FavoriteIcon
                    sx={{ color: "#ff1493", fontSize: isSmallScreen ? 40 : 60 }}
                  />
                </IconButton>
              </Tooltip>
            </div>
            <div id="mylist">
              <Tooltip title="ブックマーク">
                <IconButton
                  aria-label="マイリスト"
                  onClick={() => navigate("/bookmark")}
                >
                  <ImportContactsIcon
                    sx={{ color: "#217", fontSize: isSmallScreen ? 40 : 60 }}
                  />
                </IconButton>
              </Tooltip>
            </div>
            <div id="menu">
              <Tooltip title="メニュー">
                <IconButton
                  aria-label="メニュー"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon
                    sx={{ color: "#88d1cc", fontSize: isSmallScreen ? 40 : 60 }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </Stack>
        </Toolbar>
      </AppBar>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu",
        }}
      >
        <MenuItem onClick={() => navigate("/Setting")}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>設定</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/profile-st")}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>プロフィール</ListItemText>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>ホーム</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>ログアウト</MenuItem>
      </Menu>

      <div className="gamen">
        <div className="menu">
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <StyledButton
              className="b1"
              onClick={() => navigate("/Companysearch")}
              variant="contained"
            >
              企業検索
            </StyledButton>

            <StyledButton
              className="b2"
              onClick={() =>
                (window.location.href = "http://intra2.denpa.ac.jp/job/2024/")
              }
              variant="contained"
            >
              求人票
            </StyledButton>

            <StyledButton
              className="b3"
              onClick={() => navigate("/Blog")}
              variant="contained"
            >
              企業ブログ
            </StyledButton>

            <StyledButton
              className="b4"
              onClick={() =>
                (window.location.href =
                  "http://intra2.denpa.ac.jp/e-learning/job/")
              }
              variant="contained"
            >
              就職ガイダンス
            </StyledButton>
          </Stack>
        </div>

        <div className="main">
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            onChange={handleCompanyChange}
            noOptionsText="企業候補がありません。"
            renderInput={(params) => (
              <TextField
                {...params}
                label="企業名入力"
                variant="outlined"
                sx={{
                  backgroundColor: "lightgray",
                }}
              />
            )}
            className="textfield"
          />

          <Button
            className="b5"
            onClick={handleCompanyInfoClick}
            sx={{
              padding: 2,
            }}
            variant="contained"
            color="info"
          >
            企業情報
          </Button>

          <StyledButton2
            className="b6"
            onClick={onClick}
            sx={{
              padding: 2,
            }}
            variant="contained"
          >
            マッチ度表
          </StyledButton2>

          <Button
            className="b7"
            onClick={() => navigate("/Ai")}
            sx={{
              padding: 2,
            }}
            variant="contained"
            color="inherit"
          >
            AI
          </Button>
        </div>
      </div>
      <head>
        <link
          href="matching.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    </div>
  );
}

export default Matching;
