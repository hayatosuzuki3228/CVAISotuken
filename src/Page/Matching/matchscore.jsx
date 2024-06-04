import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BusinessIcon from "@mui/icons-material/Business";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import GroupIcon from "@mui/icons-material/Group";
import DescriptionIcon from "@mui/icons-material/Description";
import { primarycolor } from "../../const/color";

export function Matchscore() {
  const location = useLocation();
  const navigate = useNavigate();
  const { Prefectures, Salary, Holiday, Employees, Detail } =
    location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      navigate("/matchtable");
    }
  }, [loading, navigate]);

  const items = [
    {
      icon: <BusinessIcon sx={{ color: primarycolor }} />,
      primary: Prefectures?.join(", "),
      secondary: "選択した都道府県",
    },
    {
      icon: <AttachMoneyIcon sx={{ color: primarycolor }} />,
      primary: Salary,
      secondary: "基本給",
    },
    {
      icon: <BeachAccessIcon sx={{ color: primarycolor }} />,
      primary: Holiday,
      secondary: "休日",
    },
    {
      icon: <GroupIcon sx={{ color: primarycolor }} />,
      primary: Employees,
      secondary: "従業員数",
    },
    {
      icon: <DescriptionIcon sx={{ color: primarycolor }} />,
      primary: Detail,
      secondary: "事業内容",
    },
  ];

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {loading && (
        <Box sx={{ width: "70%", mb: 2 }}>
          <LinearProgress sx={{ bgcolor: primarycolor }} />
          <Typography
            variant="body1"
            color="initial"
            align="center"
            sx={{ mt: 1 }}
          >
            マッチ度計算中...
          </Typography>
          <Box sx={{ mt: 2, ml: 9, width: "100%" }}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                margin: "0 auto",
              }}
            >
              {items.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "transparent" }}>{item.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
}
