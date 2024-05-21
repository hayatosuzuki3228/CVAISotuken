import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import companies from "../const/companies";

export const SearchCompany = () => {
  const [inputId, setInputId] = useState("");
  const [company, setCompany] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const companyId = parseInt(inputId, 10);
    if (isNaN(companyId)) {
      setError("Please enter a valid number");
      return;
    }
    const foundCompany = companies.find((c) => c.id === companyId);
    if (foundCompany) {
      setCompany(foundCompany);
      setError("");
    } else {
      setCompany(null);
      setError("Company not found");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Search Company by ID
      </Typography>
      <TextField
        label="Enter Company ID"
        variant="outlined"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}
      {company && (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5">{company.name}</Typography>
            <Typography variant="body1">Code: {company.code}</Typography>
            <Typography variant="body1">Website: {company.website}</Typography>
            <Typography variant="body1">
              Category: {company.category}
            </Typography>
            <Typography variant="body1">Detail: {company.detail}</Typography>
            <Typography variant="body1">Office: {company.office}</Typography>
            <Typography variant="body1">
              Representative: {company.representative}
            </Typography>
            <Typography variant="body1">
              Foundation Date: {company.foundation_date}
            </Typography>
            <Typography variant="body1">Capital: {company.capital}</Typography>
            <Typography variant="body1">
              Amount of Sales: {company.amount_of_sales}
            </Typography>
            <Typography variant="body1">
              Number of Employees: {company.number_of_employees}
            </Typography>
            <Typography variant="body1">
              Phone Number: {company.phone_number}
            </Typography>
            <Typography variant="body1">Email: {company.email}</Typography>
            <Typography variant="body1">
              Recruitment Numbers: {company.recruitment_numbers}
            </Typography>
            <Typography variant="body1">
              Ideal Candidate Profile: {company.ideal_candidate_profile}
            </Typography>
            <Typography variant="body1">
              Work Location: {company.work_location}
            </Typography>
            <Typography variant="body1">
              Working Hours: {company.working_hours}
            </Typography>
            <Typography variant="body1">Holiday: {company.holiday}</Typography>
            <Typography variant="body1">
              Salary (4-year course): {company["4_year_course_salary_total"]}
            </Typography>
            {/* Add other fields as needed */}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};
