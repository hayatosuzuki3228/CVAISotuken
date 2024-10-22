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
  "真面目",
  "コミュニケーション能力",
  "誠実",
  "素直",
  "チームワーク",
  "責任感",
  "柔軟性",
  "リーダーシップ",
  "自己管理",
  "創造力",
  "向上心",
  "課題解決力",
];
const qualificationsOptions = [
  "不問",
  "基本情報",
  "応用情報",
  "普通自動車免許（AT限定可）",
  "普通自動車免許",
  "準中型自動車免許",
  "第一種電気工事士",
  "第二種電気工事士",
  "電気主任技術者第3種",
  "第1級陸上特殊無線技士",
  "工事担任者AD･DD総合種",
];

// 都道府県名のリストを取得
const getPrefectureNames = (prefectures) => {
  return Object.values(prefectures)
    .flat()
    .map((pref) => pref.name);
};

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
          disableCloseOnSelect
          options={getPrefectureNames(prefectures)}
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
          disableCloseOnSelect
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
          disableCloseOnSelect
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
