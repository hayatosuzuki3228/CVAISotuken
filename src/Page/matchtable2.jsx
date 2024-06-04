import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

// companiesファイルをインポート
import companies from "./companies.json"; // 仮のファイル名と場所

function Matchtable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    // ページロード時にすべての会社情報をフィルタリングせずに表示
    setFilteredCompanies(companies);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // テキストフィールドの値に基づいて会社情報をフィルタリング
    const filtered = companies.filter(
      (company) =>
        company.id.toLowerCase().includes(term) ||
        company.name.toLowerCase().includes(term) ||
        company.industry.toLowerCase().includes(term) ||
        company.location.toLowerCase().includes(term) ||
        company.department.toLowerCase().includes(term) ||
        company.employees.toLowerCase().includes(term) ||
        company.capital.toLowerCase().includes(term) ||
        company.sales.toLowerCase().includes(term)
    );

    setFilteredCompanies(filtered);
  };

  return (
    <>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearch}
        variant="outlined"
        sx={{ marginBottom: "1rem" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>会社ID</TableCell>
              <TableCell>会社名</TableCell>
              <TableCell>業種</TableCell>
              <TableCell>勤務地</TableCell>
              <TableCell>募集学科</TableCell>
              <TableCell>従業員数</TableCell>
              <TableCell>資本金</TableCell>
              <TableCell>売上高</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.industry}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.department}</TableCell>
                <TableCell>{company.employees}</TableCell>
                <TableCell>{company.capital}</TableCell>
                <TableCell>{company.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Matchtable;
