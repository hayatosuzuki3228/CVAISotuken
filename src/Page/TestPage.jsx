import React, { useState } from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, Modal, Button } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { careerNotice } from "../const/data/careernotice";
import { companyNotice } from "../const/data/companynotice";
import { gray, primarycolor } from "../const/color";
import { theme } from "../const/theme";
import AppBarContents from "./Component/AppBarContents";
import DrawerContents from "./Component/DrawerContents";
import MainContents from "./Component/MainContents";

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
    {
      text: "お問い合わせ",
      icon: <HelpOutlineIcon />,
      link: "/inquiry",
      isNavigate: true,
    },
  ];

  const [value, setValue] = React.useState(0);
  const [openModal, setOpenModal] = useState(false); // モーダルの開閉状態を管理
  const [selectedItem, setSelectedItem] = useState(null); // クリックされたアイテムを保持

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //#region pagination
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

  const handleLinkClick = (link, isNavigate) => {
    if (isNavigate) {
      navigate(link);
    } else if (link) {
      window.location.href = link;
    }
  };

  const handleItemClick = (item) => {
    // モーダルを開き、クリックされたアイテムの詳細情報を表示
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null); // モーダルが閉じられるときに選択されたアイテムをリセット
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBarContents open={drawerOpen} setOpen={setDrawerOpen} />

        <DrawerContents
          open={drawerOpen}
          menuItems={menuItems}
          handleItemClick={handleLinkClick}
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
                      <ListItemButton onClick={() => handleItemClick(item)}>
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
                            {item.title}
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
                      <ListItemButton onClick={() => handleItemClick(item)}>
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
                            {item.title}
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

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: "80%",
            maxWidth: 600,
          }}
        >
          {selectedItem && (
            <div>
              <Typography variant="h6" component="h2">
                {selectedItem.title}
              </Typography>
              <Typography sx={{ mt: 1 }}>{selectedItem.date}</Typography>
              <Typography sx={{ whiteSpace: "pre-wrap", mt: 2 }}>
                {selectedItem.text}
              </Typography>
              <Button
                onClick={handleCloseModal}
                sx={{
                  mt: 2,
                  backgroundColor: primarycolor,
                  color: "white",
                }}
              >
                閉じる
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default TestPage;
