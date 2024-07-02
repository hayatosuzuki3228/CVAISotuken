import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Autocomplete } from "@mui/material";
import { prefectures } from "../../const/locations";
const departmentOptions = ["高度情報科", "外科", "東京大学理科三類（医学部）"];
const featuresOptions = [
  "傲慢",
  "嫉妬",
  "憤怒",
  "怠惰",
  "強欲",
  "色欲",
  "暴食",
];
const qualificationsOptions = ["基本情報", "応用情報", "猫検定 "];

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
          options={prefectures.map((prefecture) => prefecture.name)}
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
