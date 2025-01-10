import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
import { industries } from "../../const/industries";
import { jobtypes } from "../../const/jobtypes";
import { areas } from "../../const/areas";
import { employeesizes } from "../../const/employeeSizes";
import { holidays } from "../../const/holiday";
import { overtimes } from "../../const/overtime";
import { holidayssys } from "../../const/holidaysys";
import { salaries } from "../../const/salary";
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
  {
    text: "ホーム",
    icon: <HomeIcon />,
    link: "/",
    isNavigate: true,
  },
];
export function Companysearch() {
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
    industryFilter,
    setIndustryFilter,
    jobTypeFilter,
    setJobTypeFilter,
    locationFilter,
    setLocationFilter,
    sizeFilter,
    setSizeFilter,
    holidayFilter,
    setHolidayFilter,
    overtimeFilter,
    setOvertimeFilter,
    holidaysysFilter,
    setHolidaysysFilter,
    salaryFilter,
    setSalaryFilter,
    filteredCompanies,
    setFilteredCompanies,
  } = useContext(SearchContext);

  const handleSearch = () => {
    let searchResults = companies.filter(
      (company) =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        company.detail.toLowerCase().includes(descriptionTerm.toLowerCase())
    );

    if (industryFilter) {
      searchResults = searchResults.filter((company) =>
        company.category.toLowerCase().includes(industryFilter.toLowerCase())
      );
    }

    if (jobTypeFilter) {
      searchResults = searchResults.filter((company) =>
        company.detail.toLowerCase().includes(jobTypeFilter.toLowerCase())
      );
    }

    if (locationFilter) {
      searchResults = searchResults.filter((company) =>
        company.work_location
          .toLowerCase()
          .includes(locationFilter.toLowerCase())
      );
    }

    if (sizeFilter) {
      searchResults = searchResults.filter((company) =>
        company.number_of_employees
          .toLowerCase()
          .includes(sizeFilter.toLowerCase())
      );
    }

    if (holidayFilter) {
      searchResults = searchResults.filter((company) =>
        company.holiday.toLowerCase().includes(holidayFilter.toLowerCase())
      );
    }

    if (overtimeFilter) {
      searchResults = searchResults.filter((company) =>
        company.overtime.toLowerCase().includes(overtimeFilter.toLowerCase())
      );
    }

    if (holidaysysFilter) {
      searchResults = searchResults.filter((company) =>
        company.holidaysys.includes(holidaysysFilter)
      );
    }

    // 新しい初任給フィルター
    if (salaryFilter) {
      searchResults = searchResults.filter(
        (company) => company.salary === salaryFilter
      );
    }
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
          <div style={{ padding: "10px" }}>
            <Grid container spacing={2} alignItems="center">
              {/* 企業名検索 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="企業名で検索"
                  variant="outlined"
                  fullWidth
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Grid>
              {/* 事業内容検索 */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="事業内容で検索"
                  variant="outlined"
                  fullWidth
                  value={descriptionTerm}
                  onChange={(e) => setDescriptionTerm(e.target.value)}
                />
              </Grid>
              {/* 業界フィルター */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>業界</InputLabel>
                  <Select
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    label="業界"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {industries.map((industry) => (
                      <MenuItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* 職種フィルター */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>職種</InputLabel>
                  <Select
                    value={jobTypeFilter}
                    onChange={(e) => setJobTypeFilter(e.target.value)}
                    label="職種"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {jobtypes.map((jobType) => (
                      <MenuItem key={jobType.value} value={jobType.value}>
                        {jobType.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* 勤務地フィルター */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>勤務地</InputLabel>
                  <Select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    label="勤務地"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {areas.map((area) => (
                      <MenuItem key={area.value} value={area.value}>
                        {area.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* 従業員規模フィルター */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>従業員規模</InputLabel>
                  <Select
                    value={sizeFilter}
                    onChange={(e) => setSizeFilter(e.target.value)}
                    label="従業員規模"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {employeesizes.map((size) => (
                      <MenuItem key={size.value} value={size.value}>
                        {size.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>年間休日</InputLabel>
                  <Select
                    value={holidayFilter}
                    onChange={(e) => setHolidayFilter(e.target.value)}
                    label="年間休日"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {holidays.map((holiday) => (
                      <MenuItem key={holiday.value} value={holiday.value}>
                        {holiday.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>平均残業時間</InputLabel>
                  <Select
                    value={overtimeFilter}
                    onChange={(e) => setOvertimeFilter(e.target.value)}
                    label="平均残業時間"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {overtimes.map((overtime) => (
                      <MenuItem key={overtime.value} value={overtime.value}>
                        {overtime.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>休日制度</InputLabel>
                  <Select
                    value={holidaysysFilter}
                    onChange={(e) => setHolidaysysFilter(e.target.value)}
                    label="休日制度"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {holidayssys.map((holidaysys) => (
                      <MenuItem key={holidaysys.value} value={holidaysys.value}>
                        {holidaysys.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* 最低月給フィルター */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>最低月給</InputLabel>
                  <Select
                    value={salaryFilter}
                    onChange={(e) => setSalaryFilter(e.target.value)}
                    label="最低月給"
                  >
                    <MenuItem value="">
                      <em>すべて</em>
                    </MenuItem>
                    {salaries.map((salary) => (
                      <MenuItem key={salary.value} value={salary.value}>
                        {salary.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* 検索ボタン */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<SearchIcon />}
                  onClick={handleSearch}
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
        </MainContents>
      </Box>
    </ThemeProvider>
  );
}
