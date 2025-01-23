import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Bar, Pie } from "react-chartjs-2";
import { gray, primarycolor } from "../../const/color";
import { menuItems } from "./onlyCompanypageConst.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { postData } from "../../sever/api.js";

// Chart.jsの初期化
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const drawerWidth = 220;

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Dashboard = ({
  impressionData,
  userData,
  toggleDrawer,
  open,
  selectedYear,
  setSelectedYear,
  registrationfavorite,
  impressiontitle,
}) => {
  const navigate = useNavigate();

  const SendmailOnClick = () => {
    navigate("/SendEmail", { state: { impressiontitle } });
  };

  // 卒業年度に基づく性別分布データのフィルタリング
  const filteredGenderData = userData[selectedYear] || {
    genderCounts: [0, 0, 0],
  };

  // 円グラフ用データ（性別分布）
  const pieData = {
    labels: ["男性", "女性", "その他"],
    datasets: [
      {
        label: "見た人の性別",
        data: filteredGenderData.genderCounts,
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: primarycolor,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            名産会マッチングシステム
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* コンテンツ部分 */}
      <Box
        sx={{
          marginLeft: open ? `${drawerWidth}px` : 0, // Drawerの幅分スライド
          transition: "margin 0.3s", // スライド時のアニメーション
          padding: 4,
          marginTop: 8,
        }}
      >
        <Typography variant="h4" gutterBottom>
          ダッシュボード
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* 学年別インプレッション数 */}
          <Box
            sx={{
              width: "45%", // コンテナの幅を固定
              height: "470px", // コンテナの高さを固定
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: 2,
              margin: "0", // 左に寄せるための余白調整
              display: "block", // 他の要素と区別して左寄せ
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h7">学年別インプレッション数</Typography>
              <Box ml={15} />
              <Typography variant="h7">
                総インプレッション数 {impressionData.values[0]}
              </Typography>
            </Box>

            {/* グラフ */}
            <Box sx={{ height: "100%", width: "100%" }}>
              <Bar
                data={{
                  labels: impressionData.labels.slice(1), // 全学年以外の学年を表示
                  datasets: [
                    {
                      label: "学年別インプレッション数",
                      data: impressionData.values.slice(1), // 全学年以外のデータ
                      backgroundColor: "rgba(75, 192, 192, 0.6)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true, // レスポンシブを有効化
                  maintainAspectRatio: false, // 縦横比を無視
                  plugins: {
                    legend: {
                      display: true, // 凡例を表示
                      position: "top",
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        padding: 10, // X軸ラベルの余白
                      },
                    },
                    y: {
                      beginAtZero: true, // Y軸を0から始める
                    },
                  },
                }}
              />
            </Box>
          </Box>

          {/* 性別分布 */}
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: 2,
              width: "45%",
              height: "470px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h7" gutterBottom>
              性別分布
            </Typography>
            <Box
              sx={{
                flex: 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pie
                data={pieData}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <FormControl sx={{ width: "150px" }}>
                <InputLabel
                  id="year-select-label"
                  sx={{
                    backgroundColor: "white",
                  }}
                >
                  卒業年度
                </InputLabel>
                <Select
                  labelId="year-select-label"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  size="small"
                >
                  {Object.keys(userData).map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* お気に入りに登録した人の数 */}
          <Box
            sx={{
              width: "45%", // コンテナの幅を固定
              height: "470px", // コンテナの高さを固定
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: 2,
              margin: "0", // 左に寄せるための余白調整
              display: "block", // 他の要素と区別して左寄せ
            }}
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h7">お気に入りに登録した人の数</Typography>
              <Box ml={15} />
              <Typography variant="h7">
                お気に入り登録総数 {registrationfavorite.values[0]}
              </Typography>
            </Box>

            {/* グラフ */}
            <Box sx={{ height: "100%", width: "100%" }}>
              <Bar
                data={{
                  labels: registrationfavorite.labels.slice(1), // 全学年以外の学年を表示
                  datasets: [
                    {
                      label: "学年別お気に入り登録数",
                      data: registrationfavorite.values.slice(1), // 全学年以外のデータ
                      backgroundColor: "rgba(153, 102, 255, 0.6)",
                      borderColor: "rgba(153, 102, 255, 1)",
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true, // レスポンシブを有効化
                  maintainAspectRatio: false, // 縦横比を無視
                  plugins: {
                    legend: {
                      display: true, // 凡例を表示
                      position: "top",
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        padding: 10, // X軸ラベルの余白
                      },
                    },
                    y: {
                      beginAtZero: true, // Y軸を0から始める
                    },
                  },
                }}
              />
            </Box>
          </Box>
          {/*お気に入り登録グラフを左寄せ*/}
          <Box
            sx={{
              width: "45%", // コンテナの幅を固定
              height: "470px", // コンテナの高さを固定
              //border: "1px solid #ddd",
              borderRadius: "8px",
              padding: 2,
              margin: "0", // 左に寄せるための余白調整
              display: "block", // 他の要素と区別して左寄せ
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: primarycolor,
                "&:hover": {
                  backgroundColor: primarycolor,
                },
              }}
              onClick={SendmailOnClick}
            >
              お気に入りした人にメールを送る
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export function Viewimpression() {
  const [open, setOpen] = useState(false);
  const [ImpressionData, setImpressionData] = useState({
    labels: [],
    values: [],
  });
  const [UserData, setUserData] = useState({});
  const [Registrationfavorite, setRegistrationfavorite] = useState({
    labels: [],
    values: [],
  });
  const [selectedYear, setSelectedYear] = useState("全学年");
  const [impressiontitle, setimpressiontitle] = useState("");

  // Drawerの開閉切り替え
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setImpressionData({
      labels: ["全学年", "25卒", "26卒", "27卒", "28卒"],
      values: [660, 10, 300, 250, 100],
    });
    setUserData({
      全学年: { genderCounts: [416, 323, 21] },
      "25卒": { genderCounts: [6, 3, 1] },
      "26卒": { genderCounts: [150, 140, 10] },
      "27卒": { genderCounts: [200, 145, 5] },
      "28卒": { genderCounts: [60, 35, 5] },
    });
    setRegistrationfavorite({
      labels: ["全学年", "25卒", "26卒", "27卒", "28卒"],
      values: [352, 2, 150, 150, 50],
    });
    setimpressiontitle("TEST");
  }, []);

  // useEffect(() => {
  //   (setImpressionData,setUserData,setRegistrationfavorite,setimpressiontitle) = postData("/impression",impressiontitle);
  // },[]);

  return (
    <Dashboard
      impressionData={ImpressionData}
      userData={UserData}
      toggleDrawer={toggleDrawer}
      open={open}
      selectedYear={selectedYear}
      setSelectedYear={setSelectedYear}
      registrationfavorite={Registrationfavorite}
      impressiontitle={impressiontitle}
    />
  );
}
