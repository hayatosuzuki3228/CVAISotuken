import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; // Buttonをインポート
import companies from "../const/companies";

function convertCompanyData(company) {
  const matchScore = calculateMatchScore(company);
  return {
    id: company.id.toString(), // IDを文字列に変換
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
function calculateMatchScore(company) {
  let score = 0;
  /* if (company.category === matchscore.industry) score += 10;
  if (company.job_type === matchscore.jobType) score += 10;
  if (company.capital === matchscore.capital) score += 10;
  if (company.qualification === matchscore.qualification) score += 10;
  if (company.personality === matchscore.personality) score += 10;
  if (company.characteristics === matchscore.characteristics) score += 10;
  if (company.recruitment_grade === matchscore.recruitmentGrade) score += 10;
  if (company.work_location === matchscore.location) score += 10;
  if (company.bonus === matchscore.bonus) score += 10;
  if (company.initial_salary === matchscore.initialSalary) score += 10;
  if (company.allowances === matchscore.allowances) score += 10;
  if (company.welfare === matchscore.welfare) score += 10;
  if (company.number_of_employees === matchscore.employees) score += 10;
  if (company.amount_of_sales === matchscore.sales) score += 10;
  if (company.holidays === matchscore.holidays) score += 10;
  if (company.working_hours === matchscore.workingHours) score += 10;*/
  return score;
}
const rows = companies.map(convertCompanyData);

function Row(props) {
  const { row, showDetail } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell>{row.name}</TableCell>
        {showDetail && <TableCell>{row.detail}</TableCell>}
        <TableCell align="left">{row.matchdo}</TableCell>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [detailSearchTerm, setDetailSearchTerm] = useState(""); // 詳細検索用の状態
  const [showDetail, setShowDetail] = useState(false); // 事業内容の表示状態を管理するstate

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDetailSearch = (event) => {
    setDetailSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      (row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      row.detail.toLowerCase().includes(detailSearchTerm.toLowerCase())
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
          sx={{ marginBottom: "1rem", width: 500 }}
          className="sertch"
        />

        <TextField
          label="事業内容入力"
          value={detailSearchTerm}
          onChange={handleDetailSearch}
          variant="outlined"
          sx={{ marginBottom: "1rem", width: 500 }}
          className="detailSearch"
        />
      </Box>
      <Button
        onClick={toggleDetail}
        variant="contained"
        sx={{ marginBottom: "1rem", height: 60, width: 200, fontSize: 20 }}
        className="detailbu"
      >
        {showDetail ? "事業内容非表示" : "事業内容表示"}
      </Button>
      <TableContainer
        component={Paper}
        className="table1"
        sx={{
          width: 1400,
          fontSize: 30,
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
