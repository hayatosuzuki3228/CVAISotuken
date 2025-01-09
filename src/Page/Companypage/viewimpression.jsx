import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Chart.jsの初期化
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = ({ impressionData, userData }) => {
  // 棒グラフ用データ（全体インプレッション数）
  const barData = {
    labels: impressionData.labels,
    datasets: [
      {
        label: "全体インプレッション数",
        data: impressionData.values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // 円グラフ用データ（性別や気になる登録人数など）
  const pieData = {
    labels: ["男性", "女性", "その他"],
    datasets: [
      {
        label: "見た人の性別",
        data: userData.genderCounts,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        ダッシュボード
      </Typography>

      {/* インプレッションと性別を横並びに配置 */}
      <Box
        sx={{
          display: "flex", // フレックスボックス
          gap: 2, // 各グラフ間の余白
          justifyContent: "center", // 中央揃え
          alignItems: "flex-start", // 上揃え
          flexWrap: "wrap", // 必要に応じて折り返し
        }}
      >
        {/* 全体インプレッション数の棒グラフ */}
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: 2,
            width: "45%", // 横幅を調整
            height: "400px", // 高さの調整
          }}
        >
          <Typography variant="h7" gutterBottom>
            全体インプレッション数
          </Typography>
          <Bar data={barData} options={{ maintainAspectRatio: false }} />
        </Box>

        {/* 性別分布の円グラフ */}
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: 2,
            width: "45%", // 横幅を調整
            height: "400px", // 高さの調整
          }}
        >
          <Typography variant="h7" gutterBottom>
            性別分布
          </Typography>
          <Pie data={pieData} options={{ maintainAspectRatio: false }} />
        </Box>
      </Box>
    </Box>
  );
};

export function Viewimpression() {
  const [ImpressionData, setImpressionData] = useState([]);
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    setImpressionData((prevImpressionData) => {
      if (Object.keys(prevImpressionData).length > 0) return prevImpressionData;

      return {
        labels: ["2023年1月", "2023年2月", "2023年3月"],
        values: [150, 200, 250],
      };
    });

    setUserData((prevUserData) => {
      if (Object.keys(prevUserData).length > 0) return prevUserData;

      return {
        genderCounts: [120, 80, 10],
      };
    });
  }, []);

  return <Dashboard impressionData={ImpressionData} userData={UserData} />;
}
