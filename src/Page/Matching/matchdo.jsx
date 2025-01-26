import React, { useContext, useState } from "react";
import JobForm from "./jobform";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  Paper,
  Alert,
  Popover,
  IconButton,
  Grid,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { JobContext } from "../../provider/context";
import "normalize.css";
import AppBarContents from "../Component/AppBarContents";
import DrawerContents from "../Component/DrawerContents";
import MainContents from "../Component/MainContents";
import { theme } from "../../const/theme";
import { styled, ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../../provider/ThemeContext";
const menuItems = [
  //メニューに追加したいものをここにかく
  //表示テキスト アイコン リンク の指定
  {
    text: "マッチング",
    icon: <ContentPasteSearchIcon />,
    link: "/Matching",
    isNavigate: true,
  },

  {
    text: "ブックマーク",
    icon: <ImportContactsIcon />,
    link: "/bookmark",
    isNavigate: true,
  },
  {
    text: "プロフィール",
    icon: <PersonIcon />,
    link: "/profile-st",
    isNavigate: true,
  },

  {
    text: "ホーム",
    icon: <HomeIcon />,
    link: "/",
    isNavigate: true,
  },
  {
    text: "設定",
    icon: <SettingsIcon />,
    link: "/Setting",
    isNavigate: true,
  },
];

export function Matchdo() {
  const { isDarkMode } = useContext(ThemeContext);
  const { jobData } = useContext(JobContext);
  const [showAlert, setShowAlert] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [drawerOpen, setDrawerOpen] = useState(false); // ドロワー開閉の状態
  const navigate = useNavigate();

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  // ボタンがクリックされたときの処理
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // ポップオーバーが閉じられるときの処理
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleSave = (data) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // 3秒後にアラートを非表示にする
  };

  const defaultFormData = {
    department: "不問",
    location: ["愛知県"],
    features: ["真面目"],
    qualifications: [],
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBarContents
            apptitle={"文字を入力してください"}
            open={drawerOpen}
            setOpen={setDrawerOpen}
          />

          <DrawerContents
            open={drawerOpen}
            menuItems={menuItems}
            handleItemClick={handleItemClick}
          />

          <MainContents open={drawerOpen}>
            <DrawerHeader />
            <Container maxWidth="lg">
              <Box my={4}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h5" component="h1">
                    マッチ度を算出するための情報を登録してください
                  </Typography>

                  {showAlert && (
                    <Alert
                      severity="success"
                      onClose={() => setShowAlert(false)}
                    >
                      マッチ度情報が登録されました。
                    </Alert>
                  )}
                </Box>
                <Box
                  className="paper-container"
                  display="flex"
                  justifyContent="space-between"
                  mt={5}
                  sx={{}}
                >
                  <Paper
                    elevation={3}
                    className="paper-item"
                    sx={{
                      backgroundColor: isDarkMode ? "#444" : "#fff",
                    }}
                  >
                    <Box p={3}>
                      <JobForm
                        onSave={handleSave}
                        initialData={defaultFormData}
                      />
                    </Box>
                  </Paper>
                  {jobData && (
                    <Paper
                      elevation={3}
                      className="paper-item"
                      sx={{
                        backgroundColor: isDarkMode ? "#444" : "#fff",
                        color: isDarkMode ? "#ccc" : "#000",
                      }}
                    >
                      <Box mt={4} p={3} border={1} borderRadius={2}>
                        <Grid container spacing={0}>
                          <Grid item xs={3} md={2}>
                            <Typography>学科情報：</Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <Typography>{jobData.department}</Typography>
                          </Grid>

                          <Grid item xs={3} md={2}>
                            <Typography>勤務地　：</Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <Typography>
                              {jobData.location.join("、")}
                            </Typography>
                          </Grid>

                          <Grid item xs={3} md={2}>
                            <Typography>特長　　：</Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <Typography>
                              {jobData.features.join("、")}
                            </Typography>
                          </Grid>

                          <Grid item xs={3} md={2}>
                            <Typography>資格　　：</Typography>
                          </Grid>
                          <Grid item xs={9}>
                            <Typography>
                              {jobData.qualifications.join("、")}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          height: "0.5vh",
                        }}
                      >
                        <IconButton aria-label="注記" onClick={handleClick}>
                          <DescriptionIcon
                            sx={{ color: isDarkMode ? "white" : "black" }}
                          />
                        </IconButton>
                        <Popover
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              p: 2,
                              fontWeight: "bold",
                              backgroundColor: isDarkMode ? "#444" : "#fff",
                              color: isDarkMode ? "#eee" : "#000",
                            }}
                          >
                            <Box>マッチ度の計算内容</Box>
                            <br />
                            学科情報、特長、資格は一個で＋１０加点され、勤務地は＋１５加点されます。
                            <br />
                            学科情報が一致していないまたは入力していない場合、
                            <Box component="span" sx={{ color: "red" }}>
                              他項目の一致度に関わらず必ずマッチ度が0として返ってきます。
                            </Box>
                            <br />
                            特長や資格において複数選択で複数一致していた場合はその数に応じて＋１０加点されていきますが、
                            <br />
                            勤務地の場合は数によらず、＋１５しか加点されません。
                          </Typography>
                        </Popover>
                      </Box>
                    </Paper>
                  )}
                </Box>
              </Box>
            </Container>
          </MainContents>
        </Box>
      </ThemeProvider>

      <Helmet>
        <link href="matchdo.css" rel="stylesheet" type="text/css" media="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </>
  );
}
