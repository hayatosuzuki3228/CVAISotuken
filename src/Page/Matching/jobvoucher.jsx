import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useNavigate } from "react-router-dom";

// 外部データファイルをインポート
import { companies } from "../../const/companies";
import MyContext from "../../provider/provider";
import { SearchContext } from "../../provider/SearchContext";
import { BookmarkContext } from "../../provider/booktext";
import "normalize.css";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AppBarContents from "../Component/AppBarContents";
import DrawerContents from "../Component/DrawerContents";
import MainContents from "../Component/MainContents";
import { theme } from "../../const/theme";
import { styled, ThemeProvider } from "@mui/material/styles";
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
    text: "マッチ度",
    icon: <FavoriteBorderIcon />,
    link: "/Matchdo",
    isNavigate: true,
  },
  {
    text: "ブックマーク",
    icon: <ImportContactsIcon />,
    link: "/bookmark",
    isNavigate: true,
  },
  {
    text: "ホーム",
    icon: <HomeIcon />,
    link: "/",
    isNavigate: true,
  },
  {
    text: "プロフィール",
    icon: <PersonIcon />,
    link: "/profile-st",
    isNavigate: true,
  },
  {
    text: "設定",
    icon: <SettingsIcon />,
    link: "/Setting",
    isNavigate: true,
  },
];
export function JobVoucher() {
  const { setproviderid } = useContext(MyContext);
  const { bookmarks, addBookmark } = useContext(BookmarkContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
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

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    descriptionTerm,
    setDescriptionTerm,
    filteredCompanies,
    setFilteredCompanies,
  } = useContext(SearchContext);

  const handleSearch = () => {
    let searchResults = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        company.detail.toLowerCase().includes(descriptionTerm.toLowerCase())
    );
    setFilteredCompanies(searchResults);
  };

  const handleCompanyChange = (companyId) => {
    setproviderid(companyId);
    console.log(companyId);
    navigate(`/companyinformation`);
  };

  const handleBookmarkClick = (id) => {
    setSelectedCompanyId(id);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleBookmarkConfirm = () => {
    if (selectedCompanyId) {
      console.log("bookmarkID:", bookmarks);
      addBookmark(selectedCompanyId);
    }
    setOpenDialog(false);
  };

  // スクロールを監視して「トップに戻る」ボタンの表示を切り替え
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 「トップに戻る」ボタンを押したときの処理
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBarContents
          apptitle={"企業検索"}
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
        </MainContents>
      </Box>
      <div style={{ padding: "10px" }}>
        <Grid container spacing={2} alignItems="center">
          {/* 企業名検索 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="企業名で求人票を検索"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          {/* 事業内容検索 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="事業内容で求人票を検索"
              variant="outlined"
              fullWidth
              value={descriptionTerm}
              onChange={(e) => setDescriptionTerm(e.target.value)}
            />
          </Grid>
          {/* 検索ボタン */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<SearchIcon />}
              onClick={handleSearch}
              sx={{
                cursor: "pointer",
                height: "100%",
                backgroundColor: "#3a3", // 色を指定
                "&:hover": {
                  backgroundColor: "#42b242", // ホバー時の背景色
                },
              }}
            >
              検索
            </Button>
          </Grid>
        </Grid>

        {/* 検索結果表示 */}
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company.id}>
                <Card onClick={() => handleCompanyChange(company.id)}>
                  <CardContent>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      marginBottom="2px"
                    >
                      <Grid item>
                        <Typography variant="h6">{company.name}</Typography>
                      </Grid>
                      <Grid item>
                        <Fab
                          color="secondary"
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookmarkClick(company.id);
                          }}
                        >
                          <BookmarksIcon />
                        </Fab>
                      </Grid>
                    </Grid>
                    <Typography color="textSecondary">
                      業界：{company.category}
                    </Typography>
                    <Typography color="textSecondary">
                      勤務地：{company.work_location}
                    </Typography>
                    <Typography color="textSecondary">
                      {company.area}
                    </Typography>
                    <Typography color="textSecondary">
                      従業員規模： {company.number_of_employees}
                    </Typography>
                    <Typography color="textSecondary">
                      事業内容:{" "}
                      {company.detail.length > 50
                        ? `${company.detail.substring(0, 50)}...`
                        : company.detail}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              color="textSecondary"
              style={{ margin: "20px auto" }}
            >
              検索結果がありません
            </Typography>
          )}
        </Grid>
        {showScrollTopButton && (
          <Fab
            color="primary"
            size="small"
            onClick={scrollToTop}
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        )}

        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>ブックマーク追加</DialogTitle>
          <DialogContent>
            <DialogContentText>
              この企業をブックマークに追加しますか？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              キャンセル
            </Button>
            <Button onClick={handleBookmarkConfirm} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
