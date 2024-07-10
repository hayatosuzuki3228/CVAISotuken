import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Autocomplete } from "@mui/material";
import { prefectures } from "../../const/locations";
import { JobContext } from "../../provider/context";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";

const departmentOptions = [
  "高度情報科",
  "外科",
  "東京大学理科三類（医学部）",
  "コンピュータ",
  "不問",
];
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
  const navigate = useNavigate();
  const { setJobData } = useContext(JobContext);
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
    setJobData(formData);
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
      <Box display="flex" justifyContent="space-between">
        <Button
          type="submit"
          variant="contained"
          color="success"
          endIcon={<DoneIcon />}
        >
          登録
        </Button>
        <Button variant="outlined" onClick={() => navigate("/matchtable")}>
          マッチ度表へ
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/matching")}
          startIcon={<UndoIcon />}
        >
          戻る
        </Button>
      </Box>
    </form>
  );
};

export default JobForm;
