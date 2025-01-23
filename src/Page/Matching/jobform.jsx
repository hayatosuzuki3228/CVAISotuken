import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Autocomplete, Chip } from "@mui/material";
import { prefectures } from "../../const/locations";
import { JobContext } from "../../provider/context";
import DoneIcon from "@mui/icons-material/Done";
import { ThemeContext } from "../../provider/ThemeContext";
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
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { setJobData } = useContext(JobContext);
  const [formData, setFormData] = useState({
    department: null,
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
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                backgroundColor: isDarkMode ? "#333" : "#fff", // ダークモード時の背景色
                color: isDarkMode ? "#ddd" : "#000", // ダークモード時の文字色
              }}
            >
              {option}
            </li>
          )}
          ListboxProps={{
            sx: {
              backgroundColor: isDarkMode ? "#333" : "#fff", // リスト全体の背景色
              "&::-webkit-scrollbar": {
                width: "8px", // スクロールバーの幅
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: isDarkMode ? "#555" : "#ccc", // スクロールバーの色
                borderRadius: "4px", // スクロールバーの角丸
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: isDarkMode ? "#222" : "#f5f5f5", // トラックの背景色
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="学科情報"
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  color: isDarkMode ? "#ddd" : "#666", // ラベルのカラー
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#aaa" : "#aaa", // ボーダーの色
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#ddd" : "#333", // 入力文字の色
                },
                backgroundColor: isDarkMode ? "#444" : "#fff",
              }}
              fullWidth
            />
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
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                backgroundColor: isDarkMode ? "#333" : "#fff", // ダークモード時の背景色
                color: isDarkMode ? "#ddd" : "#000", // ダークモード時の文字色
              }}
            >
              {option}
            </li>
          )}
          ListboxProps={{
            sx: {
              backgroundColor: isDarkMode ? "#333" : "#fff", // リスト全体の背景色
              "&::-webkit-scrollbar": {
                width: "8px", // スクロールバーの幅
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: isDarkMode ? "#555" : "#ccc", // スクロールバーの色
                borderRadius: "4px", // スクロールバーの角丸
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: isDarkMode ? "#222" : "#f5f5f5", // トラックの背景色
              },
            },
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                label={option}
                sx={{
                  backgroundColor: isDarkMode ? "#555" : "#eee", // チップの背景色
                  color: isDarkMode ? "#fff" : "#000", // チップの文字色
                  "& .MuiChip-deleteIcon": {
                    color: isDarkMode ? "#fff" : "#000", // 削除アイコンの色
                  },
                  margin: "4px", // チップ間の余白
                }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="勤務地"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: isDarkMode ? "#ddd" : "#666", // ラベルのカラー
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#aaa" : "#aaa", // ボーダーの色
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#ddd" : "#333", // 入力文字の色
                },
                backgroundColor: isDarkMode ? "#444" : "#fff",
              }}
            />
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
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                backgroundColor: isDarkMode ? "#333" : "#fff", // ダークモード時の背景色
                color: isDarkMode ? "#ddd" : "#000", // ダークモード時の文字色
              }}
            >
              {option}
            </li>
          )}
          ListboxProps={{
            sx: {
              backgroundColor: isDarkMode ? "#333" : "#fff", // リスト全体の背景色
              "&::-webkit-scrollbar": {
                width: "8px", // スクロールバーの幅
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: isDarkMode ? "#555" : "#ccc", // スクロールバーの色
                borderRadius: "4px", // スクロールバーの角丸
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: isDarkMode ? "#222" : "#f5f5f5", // トラックの背景色
              },
            },
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                label={option}
                sx={{
                  backgroundColor: isDarkMode ? "#555" : "#eee", // チップの背景色
                  color: isDarkMode ? "#fff" : "#000", // チップの文字色
                  "& .MuiChip-deleteIcon": {
                    color: isDarkMode ? "#fff" : "#000", // 削除アイコンの色
                  },
                  margin: "4px", // チップ間の余白
                }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="特長"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: isDarkMode ? "#ddd" : "#666", // ラベルのカラー
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#aaa" : "#aaa", // ボーダーの色
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#ddd" : "#333", // 入力文字の色
                },
                backgroundColor: isDarkMode ? "#444" : "#fff",
              }}
            />
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
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                backgroundColor: isDarkMode ? "#333" : "#fff", // ダークモード時の背景色
                color: isDarkMode ? "#ddd" : "#000", // ダークモード時の文字色
              }}
            >
              {option}
            </li>
          )}
          ListboxProps={{
            sx: {
              backgroundColor: isDarkMode ? "#333" : "#fff", // リスト全体の背景色
              "&::-webkit-scrollbar": {
                width: "8px", // スクロールバーの幅
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: isDarkMode ? "#555" : "#ccc", // スクロールバーの色
                borderRadius: "4px", // スクロールバーの角丸
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: isDarkMode ? "#222" : "#f5f5f5", // トラックの背景色
              },
            },
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                label={option}
                sx={{
                  backgroundColor: isDarkMode ? "#555" : "#eee", // チップの背景色
                  color: isDarkMode ? "#fff" : "#000", // チップの文字色
                  "& .MuiChip-deleteIcon": {
                    color: isDarkMode ? "#fff" : "#000", // 削除アイコンの色
                  },
                  margin: "4px", // チップ間の余白
                }}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="資格"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  color: isDarkMode ? "#ddd" : "#666", // ラベルのカラー
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: isDarkMode ? "#aaa" : "#aaa", // ボーダーの色
                },
                "& .MuiInputBase-input": {
                  color: isDarkMode ? "#ddd" : "#333", // 入力文字の色
                },
                backgroundColor: isDarkMode ? "#444" : "#fff",
              }}
            />
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
      </Box>
    </form>
  );
};

export default JobForm;
