import React, { useState, useContext, useEffect } from "react";
import { JobContext } from "../../provider/context";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  TextField,
  IconButton,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  useMediaQuery,
  TablePagination,
  FormControlLabel,
  Switch,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import companies from "../../const/companies.js";
import { BookmarkContext } from "../../provider/booktext"; // BookmarkContextのインポート
import MyContext from "../../provider/provider";
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

function convertCompanyData(company, jobData) {
  const matchScore = calculateMatchScore(company, jobData);

  return {
    id: company.id.toString(),
    name: company.name,
    detail: company.detail,
    matchdo: matchScore.score,
    max: matchScore.total,
    history: [
      {
        industry: company.category,
        location: company.work_location,
        department: company.recruitment_grade,
        employees: company.number_of_employees,
        capital: company.capital,
        sales: company.amount_of_sales,
      },
    ],
  };
}

// マッチ度を計算する関数
function calculateMatchScore(company, jobData) {
  let score = 0;
  let total = 0;

  // 勤務地の比較
  const selectedLocations = jobData.location;
  let locationMatched = false;
  let locationmax = false;
  selectedLocations.forEach((location) => {
    if (!locationmax) {
      total += 15;
      locationmax = true;
    }
    if (company.work_location.includes(location) && !locationMatched) {
      score += 15; // 一度だけ加算
      locationMatched = true; // 加算フラグをオンにする
    }
  });
  // 特長の比較
  jobData.features.forEach((feature) => {
    total += 10;
    if (company.ideal_candidate_profile.includes(feature)) score += 10;
  });
  // 資格の比較
  jobData.qualifications.forEach((qualification) => {
    total += 10;

    if (company.qualification.includes(qualification)) score += 10;
  });
  // 募集学科情報の比較
  if (jobData.department != null && jobData.department.trim() !== "") {
    total += 10;
    if (
      company.recruitment_grade &&
      jobData.department &&
      company.recruitment_grade.includes(jobData.department)
    ) {
      score += 10;
    } else {
      score = 0; // 募集学科情報が一致しなかったらスコアを0にして返す
    }
  }

  if (jobData.department == null || jobData.department == "") {
    score = 0;
  }

  return { score, total };
}

function Row(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const { row, showDetail, onFavoriteToggle } = props;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setproviderid } = useContext(MyContext);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleCompanyChange = () => {
    const numericId = parseInt(row.id, 10);
    setproviderid(numericId);
    console.log(row.id);
    return navigate("/companyinformation");
  };

  const getMatchdoCellStyle = (matchdo, max) => {
    if (matchdo >= 40) {
      return { color: "red" };
    }
    if (matchdo >= 30) {
      return { color: "orange" };
    } else if (matchdo >= 10) {
      return { color: "green" };
    } else {
      return { color: isDarkMode ? "white" : "black" };
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/*開くボタン*/}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/*メインの項目 */}
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>
          <Button
            onClick={handleCompanyChange}
            style={{ textDecoration: "none", color: "#4466cc", padding: "0" }}
          >
            {row.name}
          </Button>
        </TableCell>
        {showDetail && (
          <TableCell>
            {" "}
            {row.detail.length > 50
              ? `${row.detail.substring(0, 50)}...`
              : row.detail}
          </TableCell>
        )}
        <TableCell
          align="center"
          sx={getMatchdoCellStyle(row.matchdo, row.max)}
        >
          {Math.round((row.matchdo / row.max) * 100)}% ({row.matchdo}/{row.max})
        </TableCell>

        <TableCell>
          <IconButton id="bookmarkbu" onClick={() => onFavoriteToggle(row.id)}>
            <BookmarksIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={showDetail ? 6 : 5}
        >
          {/*詳細の項目*/}
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{
              display: isSmallScreen ? "flex" : "table-row",
              flexDirection: isSmallScreen ? "unset" : "column",
            }}
          >
            <Box
              sx={{
                margin: 1,
              }}
            >
              <Typography variant="h6" gutterBottom component="div">
                詳細
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>業種</TableCell>
                    <TableCell>勤務地</TableCell>
                    <TableCell>募集学科</TableCell>
                    <TableCell>従業員数</TableCell>
                    <TableCell>資本金</TableCell>
                    <TableCell>売上高</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.industry}
                      </TableCell>
                      <TableCell>{historyRow.location}</TableCell>
                      <TableCell>{historyRow.department}</TableCell>
                      <TableCell>{historyRow.employees}</TableCell>
                      <TableCell>{historyRow.capital}</TableCell>
                      <TableCell>{historyRow.sales}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// データの型
Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    matchdo: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        industry: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        employees: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        sales: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  showDetail: PropTypes.bool.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export function Matchtable() {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [detailSearchTerm, setDetailSearchTerm] = useState("");
  const [matchScoreTerm, setMatchScoreTerm] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { jobData } = useContext(JobContext);
  const { bookmarks, addBookmark } = useContext(BookmarkContext);
  const [favorites, setFavorites] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [sortOrder, setSortOrder] = useState("desc");
  const [checked, setChecked] = useState(false);
  const defaultFormData = {
    department: "不問",
    location: ["愛知県"],
    features: ["真面目"],
    qualifications: [],
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
  // ローディング
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  // tebleから抜き出すためのコード
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDetailSearch = (event) => {
    setDetailSearchTerm(event.target.value);
  };

  const handleMatchScoreSearch = (event) => {
    setMatchScoreTerm(event.target.value);
  };
  const handleFavoriteToggle = (id) => {
    console.log("トグルするID:", id); // IDのログ出力
    setSelectedId(id);
    setDialogOpen(true);
  };
  const handleDialogClose = (confirm) => {
    setDialogOpen(false);

    // ダイアログメッセージに応じてアクションを実行
    if (confirm == true) {
      if (favorites[selectedId]) {
        // 既に追加されている場合は何もしない
        return;
      } else {
        // まだ追加されていない場合は追加
        console.log("bookmarkID:", bookmarks);
        addBookmark(Number(selectedId));
        setFavorites((prevFavorites) => ({
          ...prevFavorites,
          [selectedId]: true,
        }));
      }
    }

    setSelectedId(null); // IDをリセット
  };
  const filteredRows = companies
    .map((company) => convertCompanyData(company, defaultFormData))
    .filter((row) => {
      const matchPercentage = (row.matchdo / row.max) * 100;

      return (
        (row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        row.detail.toLowerCase().includes(detailSearchTerm.toLowerCase()) &&
        (matchScoreTerm === "" || matchPercentage >= parseFloat(matchScoreTerm))
      );
    });
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = [...filteredRows].sort((a, b) => {
    const percentageA = a.matchdo / a.max;
    const percentageB = b.matchdo / b.max;

    if (sortOrder === "asc") {
      return percentageA - percentageB;
    } else {
      return percentageB - percentageA;
    }
  });

  const displayedRows = sortedRows.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const toggleDetail = () => {
    setShowDetail((prevShowDetail) => !prevShowDetail);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBarContents
            apptitle={"マッチ度表"}
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
      </ThemeProvider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Button
          className="matchdo"
          variant="outlined"
          onClick={() => navigate("/matchdo")}
        >
          マッチ度設定
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="text"
        >
          <TextField
            label="IDまたは会社名入力"
            value={searchTerm}
            onChange={handleSearch}
            variant="outlined"
            sx={{
              marginBottom: "1rem",
              backgroundColor: isDarkMode ? "101010" : "#f6f6f6",
            }}
            className="search"
          />
          <TextField
            label="事業内容入力"
            value={detailSearchTerm}
            onChange={handleDetailSearch}
            variant="outlined"
            sx={{
              marginBottom: "1rem",
              backgroundColor: isDarkMode ? "101010" : "#f6f6f6",
            }}
            className="detailSearch"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="text"
        >
          <TextField
            label="マッチ度（％）入力"
            value={matchScoreTerm}
            onChange={handleMatchScoreSearch}
            variant="outlined"
            sx={{
              marginBottom: "1rem",
              backgroundColor: isDarkMode ? "101010" : "#f6f6f6",
            }}
            className="matchScoreSearch"
          />
          <Button
            variant="outlined"
            onClick={() =>
              setSortOrder((prevOrder) =>
                prevOrder === "asc" ? "desc" : "asc"
              )
            }
          >
            {sortOrder === "asc" ? "マッチ度: 昇順" : "マッチ度: 降順"}
          </Button>
          <FormControlLabel
            control={
              <Switch
                id="mySwitchId"
                checked={checked}
                onChange={handleChange}
              />
            }
            label="事業内容"
            onClick={toggleDetail}
            className="detailbu"
          />
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        className="table1"
        sx={{
          border: "2px solid gray",
          boxShadow: "0px 10px 14px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell>会社名</TableCell>
              {showDetail && <TableCell>事業内容</TableCell>}
              <TableCell align="center">マッチ度</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <Row
                key={row.id}
                row={row}
                showDetail={showDetail}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={bookmarks.includes(row.id)}
              />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredRows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[100, 50, 200]}
          labelRowsPerPage="表示件数"
        />
      </TableContainer>

      <Dialog
        id="bookmarkdia"
        open={dialogOpen}
        onClose={() => handleDialogClose(false)}
      >
        <DialogTitle>確認</DialogTitle>
        <DialogContent>
          <DialogContentText>
            この会社をブックマークに追加しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            name="cancel"
            onClick={() => handleDialogClose(false)}
            color="primary"
          >
            キャンセル
          </Button>
          <Button
            onClick={() => handleDialogClose(true)}
            color="primary"
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
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
      <Helmet>
        <link
          href="matchtable.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  );
}

export default companies;
