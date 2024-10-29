import React, { useState, useContext } from "react";
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
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UndoIcon from "@mui/icons-material/Undo";
import { useNavigate } from "react-router-dom";

// 外部データファイルをインポート
import { industries } from "../../const/industries";
import { jobtypes } from "../../const/jobtypes";
import { areas } from "../../const/areas";
import { employeesizes } from "../../const/employeeSizes";
import { companies } from "../../const/companies";
import MyContext from "../../provider/provider";

export function Companysearch() {
  const { setproviderid } = useContext(MyContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [descriptionTerm, setDescriptionTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

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

    setFilteredCompanies(searchResults);
  };

  const handleCompanyChange = (companyId) => {
    setproviderid(companyId);
    console.log(companyId);
    navigate(`/companyinformation`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        marginBottom="20px"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            企業検索
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className="back"
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/matching")}
            startIcon={<UndoIcon />}
          >
            戻る
          </Button>
        </Grid>
      </Grid>
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

        {/* 所在地フィルター */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>所在地</InputLabel>
            <Select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              label="所在地"
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
                  <Typography variant="h6">{company.name}</Typography>
                  <Typography color="textSecondary">
                    業界：{company.category}
                  </Typography>
                  <Typography color="textSecondary">
                    勤務地：{company.work_location}
                  </Typography>
                  <Typography color="textSecondary">{company.area}</Typography>
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
    </div>
  );
}
