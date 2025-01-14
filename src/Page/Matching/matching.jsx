import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Typography,
  Autocomplete,
  TextField,
  Card,
  CardContent,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import AppBarContents from "../Component/AppBarContents";
import DrawerContents from "../Component/DrawerContents";
import MainContents from "../Component/MainContents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { theme } from "../../const/theme";
import companies from "../../const/companies.js"; // インポートを修正
import MyContext from "../../provider/provider";
import "normalize.css";

const options = companies.map((company) => ({
  label: company.name,
  id: company.id,
}));
const menuItems = [
  //メニューに追加したいものをここにかく
  //表示テキスト アイコン リンク の指定

  {
    text: "マッチ度",
    icon: <FavoriteBorderIcon />,
    link: "/Matchdo",
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
export function Matching() {
  const isSmallScreen = useMediaQuery("(max-width : 1000px)");
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2024");
  const { setproviderid } = useContext(MyContext);
  const handleYearChange = (event, newYear) => {
    if (newYear !== null) {
      setSelectedYear(newYear);
    }
  };

  const handleJobInfoClick = () => {
    const url = `http://intra2.denpa.ac.jp/job/${selectedYear}/`;
    window.location.href = url; // 外部リンクへの遷移
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [drawerOpen, setDrawerOpen] = useState(false); // ドロワー開閉の状態

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  const handleCompanyChange = (event, value) => {
    if (value) {
      setSelectedCompany(value);
      setproviderid(value.id);
    } else {
      setSelectedCompany(null);
    }
  };

  const handleCompanyInfoClick = () => {
    if (selectedCompany) {
      navigate(`/companyinformation`);
    } else {
      alert("企業を選択してください");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBarContents
            apptitle={"マッチング"}
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

            {/*メイン画面 */}
            <Stack
              direction={isSmallScreen ? "column" : "row"}
              spacing={isSmallScreen ? 3 : 10}
              justifyContent="center"
              alignItems="center"
              sx={{ paddingTop: isSmallScreen ? 2 : 15 }}
            >
              {/*企業情報*/}
              <Card
                sx={{
                  width: 390,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  height: 150,
                }}
                className="c1"
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    企業情報
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    選択した企業の詳細情報を確認できます。
                  </Typography>
                  <Autocomplete
                    options={options}
                    value={selectedCompany}
                    getOptionLabel={(option) => option.label}
                    onChange={handleCompanyChange}
                    noOptionsText="企業候補がありません。"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="企業名入力"
                        variant="outlined"
                        sx={{
                          backgroundColor: "#eee",
                        }}
                      />
                    )}
                    className="textfield"
                  />
                </CardContent>
                <Box
                  onClick={handleCompanyInfoClick}
                  sx={{
                    cursor: "pointer",
                    width: 80,
                    height: "100%",
                    backgroundColor: "#38d", // 色を指定
                    "&:hover": {
                      backgroundColor: "#4292e2", // ホバー時の背景色
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    &gt;
                  </Typography>
                </Box>
              </Card>

              {/*求人票*/}
              <Card
                sx={{
                  width: 390,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  height: 150,
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    求人票
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    企業の求人情報を確認できます。
                  </Typography>
                  <ToggleButtonGroup
                    value={selectedYear}
                    exclusive
                    onChange={handleYearChange}
                    aria-label="年度選択"
                  >
                    <ToggleButton value="2023" aria-label="2023">
                      2023
                    </ToggleButton>
                    <ToggleButton value="2024" aria-label="2024">
                      2024
                    </ToggleButton>
                  </ToggleButtonGroup>
                </CardContent>
                <Box
                  onClick={handleJobInfoClick}
                  sx={{
                    cursor: "pointer",
                    width: 80,
                    height: "100%",
                    backgroundColor: "#3a3", // 色を指定
                    "&:hover": {
                      backgroundColor: "#42b242", // ホバー時の背景色
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    &gt;
                  </Typography>
                </Box>
              </Card>

              {/*マッチ度表*/}
              <Card
                sx={{
                  width: 390,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  height: 150,
                }}
                className="c2"
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    マッチ度表
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    各企業との相性を確認できます。
                  </Typography>
                </CardContent>
                <Box
                  onClick={() => navigate("/Matchtable")}
                  sx={{
                    cursor: "pointer",
                    width: 80,
                    height: "100%",
                    backgroundColor: "#b33", // 色を指定
                    "&:hover": {
                      backgroundColor: "#c34343", // ホバー時の背景色
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    &gt;
                  </Typography>
                </Box>
              </Card>
            </Stack>

            {/*企業検索*/}
            <Stack
              direction={isSmallScreen ? "column" : "row"}
              spacing={isSmallScreen ? 3 : 10}
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 5, paddingBottom: 10 }}
            >
              <Card
                sx={{
                  width: 390,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  height: 150,
                }}
                className="c2"
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    企業検索
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    求める企業を詳細に絞り込み、検索ができます。
                  </Typography>
                </CardContent>
                <Box
                  onClick={() => navigate("/Companysearch")}
                  sx={{
                    cursor: "pointer",
                    width: 80,
                    height: "100%",
                    backgroundColor: "#a3a", // 色を指定
                    "&:hover": {
                      backgroundColor: "#b242b2", // ホバー時の背景色
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    &gt;
                  </Typography>
                </Box>
              </Card>

              {/*企業ブログ*/}
              <Card
                sx={{
                  width: 390,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  height: 150,
                }}
                className="c2"
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    企業ブログ
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    企業の雰囲気など、知られざる一面や役立つ情報を見ることができます。
                  </Typography>
                </CardContent>
                <Box
                  onClick={() => navigate("/Blog")}
                  sx={{
                    cursor: "pointer",
                    width: 80,
                    height: "100%",
                    backgroundColor: "#9cf", // 色を指定
                    "&:hover": {
                      backgroundColor: "#a2d2f2", // ホバー時の背景色
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    &gt;
                  </Typography>
                </Box>
              </Card>

              {/*AI*/}
              <Card
                sx={{
                  width: 390,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  position: "relative",
                  height: 150,
                }}
                className="c3"
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" component="div">
                    AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    AIを使用しておすすめの企業を提案します。
                  </Typography>
                </CardContent>
                <Box
                  onClick={() => navigate("/Ai")}
                  sx={{
                    cursor: "pointer",
                    width: 80,
                    height: "100%",
                    backgroundColor: "#eee", // 色を指定
                    "&:hover": {
                      backgroundColor: "#f2f2f2", // ホバー時の背景色
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    &gt;
                  </Typography>
                </Box>
              </Card>
            </Stack>
          </MainContents>
        </Box>
      </ThemeProvider>

      <Helmet>
        <link
          href="matching.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  );
}

export default Matching;
