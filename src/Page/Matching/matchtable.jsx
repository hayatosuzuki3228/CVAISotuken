import React, { useState, useContext, useEffect } from "react";
import { JobContext } from "../../provider/context";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import UndoIcon from "@mui/icons-material/Undo";
import companies from "../../const/companies.js";
import MyContext from "../../provider/provider";

function convertCompanyData(company, jobData) {
  const matchScore = calculateMatchScore(company, jobData);

  return {
    id: company.id.toString(),
    name: company.name,
    detail: company.detail,
    matchdo: matchScore,
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
  console.log("登録情報:", jobData);

  // 募集学科情報の比較
  if (
    company.recruitment_grade &&
    jobData.department &&
    company.recruitment_grade.includes(jobData.department)
  )
    score += 10;
  else {
    return 0; // 募集学科情報が一致しなかったらスコアを0にして返す
  }
  // 勤務地の比較
  jobData.location.forEach((location) => {
    if (company.work_location.includes(location)) score += 10;
  });

  // 特長の比較
  jobData.features.forEach((feature) => {
    if (company.ideal_candidate_profile.includes(feature)) score += 10;
  });

  // 資格の比較
  jobData.qualifications.forEach((qualification) => {
    if (company.qualification.includes(qualification)) score += 10;
  });

  return score;
}

function Row(props) {
  const { row, showDetail } = props;
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { setproviderid } = useContext(MyContext);
  const handleCompanyChange = () => {
    const numericId = parseInt(row.id, 10);
    setproviderid(numericId);
    console.log(row.id);
    return navigate("/companyinformation");
  };
  const getMatchdoCellStyle = (matchdo) => {
    if (matchdo >= 30) {
      return { color: "green" }; // マッチ度が30以上の場合は緑色
    } else if (matchdo >= 10) {
      return { color: "orange" }; // マッチ度が10以上の場合はオレンジ色
    } else {
      return { color: "black" }; // それ以外は黒色
    }
  };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>
          <Button
            onClick={handleCompanyChange}
            style={{ textDecoration: "none", color: "blue", padding: "0" }}
          >
            {row.name}
          </Button>
        </TableCell>
        {showDetail && <TableCell>{row.detail}</TableCell>}
        <TableCell align="left" sx={getMatchdoCellStyle(row.matchdo)}>
          {row.matchdo}P
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={showDetail ? 5 : 4}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
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

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    matchdo: PropTypes.number.isRequired,
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
};

export function Matchtable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [detailSearchTerm, setDetailSearchTerm] = useState("");
  const [matchScoreTerm, setMatchScoreTerm] = useState(""); // 新しいstateを追加
  const [showDetail, setShowDetail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { jobData } = useContext(JobContext);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDetailSearch = (event) => {
    setDetailSearchTerm(event.target.value);
  };

  const handleMatchScoreSearch = (event) => {
    setMatchScoreTerm(event.target.value);
  };

  const filteredRows = companies
    .map((company) => convertCompanyData(company, jobData))
    .filter(
      (row) =>
        (row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        row.detail.toLowerCase().includes(detailSearchTerm.toLowerCase()) &&
        (matchScoreTerm === "" || row.matchdo >= parseInt(matchScoreTerm, 10))
    );

  const toggleDetail = () => {
    setShowDetail((prevShowDetail) => !prevShowDetail);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <TextField
          label="IDまたは会社名入力"
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          sx={{ marginBottom: "1rem" }}
          className="sertch"
        />
        <TextField
          label="事業内容入力"
          value={detailSearchTerm}
          onChange={handleDetailSearch}
          variant="outlined"
          sx={{ marginBottom: "1rem" }}
          className="detailSearch"
        />
        <TextField
          label="マッチ度入力"
          value={matchScoreTerm}
          onChange={handleMatchScoreSearch}
          variant="outlined"
          sx={{ marginBottom: "1rem" }}
          className="matchScoreSearch"
        />
      </Box>
      <Button
        onClick={toggleDetail}
        variant="contained"
        sx={{ marginBottom: "1rem", fontSize: 20 }}
        className="detailbu"
      >
        {showDetail ? "事業内容非表示" : "事業内容表示"}
      </Button>
      <Button
        className="matchdo"
        variant="outlined"
        onClick={() => navigate("/matchdo")}
      >
        マッチ度設定
      </Button>
      <Button
        className="back"
        variant="outlined"
        color="secondary"
        onClick={() => navigate("/matching")}
        startIcon={<UndoIcon />}
      >
        戻る
      </Button>

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
              <TableCell align="left">マッチ度</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <Row key={row.id} row={row} showDetail={showDetail} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <head>
        <link
          href="matchtable.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    </>
  );
}

export default companies;
