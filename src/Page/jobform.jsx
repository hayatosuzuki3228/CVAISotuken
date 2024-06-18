import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Autocomplete } from "@mui/material";

const departmentOptions = ["a", "b", "c"];
const locationOptions = ["東京", "大阪", "名古屋"];
const featuresOptions = ["a", "b", "c"];
const qualificationsOptions = ["a", "b", "c"];

const JobForm = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState({
    department: "",
    location: [],
    features: [],
    qualifications: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (name) => (event, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <Autocomplete
          options={departmentOptions}
          value={formData.department}
          onChange={handleChange("department")}
          renderInput={(params) => (
            <TextField {...params} label="募集学科情報" fullWidth />
          )}
        />
      </Box>
      <Box mb={2}>
        <Autocomplete
          multiple
          options={locationOptions}
          value={formData.location}
          onChange={handleChange("location")}
          renderInput={(params) => (
            <TextField {...params} label="勤務地" fullWidth />
          )}
        />
      </Box>
      <Box mb={2}>
        <Autocomplete
          multiple
          options={featuresOptions}
          value={formData.features}
          onChange={handleChange("features")}
          renderInput={(params) => (
            <TextField {...params} label="特長" fullWidth />
          )}
        />
      </Box>
      <Box mb={2}>
        <Autocomplete
          multiple
          options={qualificationsOptions}
          value={formData.qualifications}
          onChange={handleChange("qualifications")}
          renderInput={(params) => (
            <TextField {...params} label="資格" fullWidth />
          )}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        登録
      </Button>
    </form>
  );
};

export default JobForm;
