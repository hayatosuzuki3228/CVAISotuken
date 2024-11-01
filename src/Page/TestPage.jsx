import React from "react";
import { useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AppBarContents from "./Component/AppBarContents";
import DrawerContents from "./Component/DrawerContents";
import MainContents from "./Component/MainContents";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import BusinessIcon from "@mui/icons-material/Business";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { gray, primarycolor } from "../const/color";
import "normalize.css";
import { theme } from "../const/theme";
import { Pagination } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const TestPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const menuItems = [
    {
      text: "企業検索",
      icon: <BusinessIcon />,
      link: "https://www.meisankai.net/student/company/",
    },
    {
      text: "求人票",
      icon: <EventNoteIcon />,
      link: "https://www.meisankai.net/student",
    },
    {
      text: "マッチング",
      icon: <ContentPasteSearchIcon />,
      link: "/Matching",
      isNavigate: true,
    },
    { text: "プロフィール", icon: <PersonIcon />, link: "/profile-st" },
    {
      text: "設定",
      icon: <SettingsIcon />,
      link: "/Setting",
      isNavigate: true,
    },
  ];

  const careerNotice = [
    {
      date: "2025/1/1",
      text: "ここにおしらせタイトルが入ります",
      link: "/LoginPage",
    },
    {
      date: "2024/12/12",
      text: "学内合同企業説明会を開催します",
    },
    {
      date: "2024/11/11",
      text: "マッチング機能の不具合修正を行いました",
      link: "/Matching",
    },
    {
      date: "2024/10/10",
      text: "株式会社○○○○が企業登録を行いました",
    },
    {
      date: "2024/9/9",
      text: "名産会マッチングシステム学生登録が始まりました",
      link: "/Matching",
    },
    {
      date: "2025/1/1",
      text: "ここにおしらせタイトルが入ります",
      link: "/LoginPage",
    },
    {
      date: "2024/12/12",
      text: "学内合同企業説明会を開催します",
    },
    {
      date: "2024/11/11",
      text: "マッチング機能の不具合修正を行いました",
      link: "/Matching",
    },
    {
      date: "2024/9/9",
      text: "名産会マッチングシステム学生登録が始まりました",
      link: "/Matching",
    },
    {
      date: "2025/1/1",
      text: "ここにおしらせタイトルが入ります",
      link: "/LoginPage",
    },
    {
      date: "2024/12/12",
      text: "学内合同企業説明会を開催します",
    },
    {
      date: "2024/11/11",
      text: "マッチング機能の不具合修正を行いました",
      link: "/Matching",
    },
  ];

  const companyNotice = [
    {
      date: "2024/1/1",
      text: "(株)○○システム新卒採用開始しました",
      link: "/LoginPage",
    },
    {
      date: "20??/12/32",
      text: "採用サイトリニューアルのおしらせ",
    },
    {
      date: "2000/10/10",
      text: "システム(株)が企業一覧に追加されました",
      link: "/Matching",
    },
    {
      date: "2024/1/1",
      text: "(株)○○システム新卒採用開始しました",
      link: "/LoginPage",
    },
    {
      date: "20??/12/32",
      text: "採用サイトリニューアルのおしらせ",
    },
    {
      date: "2000/10/10",
      text: "システム(株)が企業一覧に追加されました",
      link: "/Matching",
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //#region pagenation
  const pageItems = 5;
  const [currentCareerPage, setCurrentCareerPage] = useState(1);
  const [currentCompanyPage, setCurrentCompanyPage] = useState(1);

  const careerIndex = (currentCareerPage - 1) * pageItems;
  const careerItems = careerNotice.slice(careerIndex, careerIndex + pageItems);
  const careerPages = Math.ceil(careerNotice.length / pageItems);

  const companyIndex = (currentCompanyPage - 1) * pageItems;
  const companyItems = companyNotice.slice(
    companyIndex,
    companyIndex + pageItems
  );
  const companyPages = Math.ceil(companyNotice.length / pageItems);

  const handleCareerPageChange = (event, value) => {
    setCurrentCareerPage(value);
  };

  const handleCompanyPageChange = (event, value) => {
    setCurrentCompanyPage(value);
  };

  //#endregion

  const [drawerOpen, setDrawerOpen] = useState(false); // ドロワー開閉の状態
  const navigate = useNavigate();

  const handleItemClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBarContents open={drawerOpen} setOpen={setDrawerOpen} />

        <DrawerContents
          open={drawerOpen}
          menuItems={menuItems}
          handleItemClick={handleItemClick}
        />

        <MainContents open={drawerOpen}>
          <DrawerHeader />

          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: primarycolor,
              },
            }}
          >
            <Tab
              label="キャリアセンターからのお知らせ"
              sx={{
                fontSize: isSmallScreen ? "0.6rem" : "0.9rem",
              }}
            />
            <Tab
              label="企業からのお知らせ"
              sx={{
                fontSize: isSmallScreen ? "0.6rem" : "0.9rem",
              }}
            />
          </Tabs>
          {value === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <List>
                {careerItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          handleItemClick(item.link, item.isNavigate)
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                              color: gray,
                              mt: 1,
                              mb: 1,
                            }}
                          >
                            {item.date}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                              color: primarycolor,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </div>
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                  </React.Fragment>
                ))}
              </List>
              <Pagination
                count={careerPages}
                page={currentCareerPage}
                onChange={handleCareerPageChange}
                size={isSmallScreen ? "small" : ""}
              />
            </div>
          )}
          {value === 1 && (
            <div>
              <List>
                {companyItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          handleItemClick(item.link, item.isNavigate)
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.8rem" : "0.9rem",
                              color: gray,
                              mt: 1,
                              mb: 1,
                            }}
                          >
                            {item.date}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                              color: primarycolor,
                            }}
                          >
                            {item.text}
                          </Typography>
                        </div>
                      </ListItemButton>
                    </ListItem>
                    <Divider sx={{ borderBottomWidth: 2 }} />
                  </React.Fragment>
                ))}
              </List>
              <Pagination
                count={companyPages}
                page={currentCompanyPage}
                onChange={handleCompanyPageChange}
                size={isSmallScreen ? "small" : ""}
              />
            </div>
          )}
        </MainContents>
      </Box>
    </ThemeProvider>
  );
};

export default TestPage;
