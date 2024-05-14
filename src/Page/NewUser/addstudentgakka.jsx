import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box } from "@mui/material";
import { TextField, MenuItem } from "@mui/material";
import "normalize.css";

export function Addstudentgakka() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/adduser");
  };

  const onClick1 = () => {
    navigate("/addkakunin");
  };

  // 変数の初期値をnullに設定
  const [myVariable, setMyVariable] = useState(null);

  // ボタンのスタイル
  const enabledButtonStyle = { backgroundColor: "#bbdefb", color: "#000000" };
  const disabledButtonStyle = { backgroundColor: "#d3d3d3", color: "#808080" };

  const selectBox = [
    { label: "情報総合学科", value: "value1" },
    { label: "情報システム科", value: "value2" },
    { label: "情報処理学科", value: "value3" },
    { label: "AIイノベーション学科 AIシステムコース", value: "value4" },
    {
      label: "AIイノベーション学科 グローバルコミュニケーションコース",
      value: "value5",
    },
    { label: "高度情報学科", value: "value6" },
    { label: "ゲーム総合学科 ゲームプログラミングコース", value: "value7" },
    { label: "ゲーム総合学科 ゲームCGコース", value: "value8" },
    { label: "ゲームサイエンス学科", value: "value9" },
    { label: "ゲームCG学科", value: "value10" },
    { label: "ゲーム研究科 ゲームプログラミングコース", value: "value11" },
    { label: "ゲーム研究科 ゲームCGコース", value: "value12" },
    { label: "映像メディア科", value: "value13" },
    { label: "映像音響科 映像コース", value: "value14" },
    { label: "映像音響科 音響・照明コース", value: "value15" },
    { label: "映像メディア研究科", value: "value16" },
    { label: "電気工学科", value: "value17" },
    { label: "電業技術学科", value: "value18" },
    { label: "電気工学研究科", value: "value19" },
    { label: "電子情報学科", value: "value20" },
    { label: "電子情報研究科", value: "value21" },
    { label: "機械工学科", value: "value22" },
    { label: "機械CAD設計科", value: "value23" },
    { label: "産業技術研究科", value: "value24" },
  ];

  const selectBox1 = [
    { label: "2025年卒", value: "value1" },
    { label: "2026年卒", value: "value2" },
    { label: "2027年卒", value: "value3" },
    { label: "2028年卒", value: "value4" },
    { label: "2029年卒", value: "value5" },
    { label: "2030年卒", value: "value6" },
    { label: "2031年卒", value: "value7" },
    { label: "2032年卒", value: "value8" },
    { label: "2033年卒", value: "value9" },
    { label: "2034年卒", value: "value10" },
    { label: "2035年卒", value: "value11" },
    { label: "2036年卒", value: "value12" },
  ];

  return (
    <>
      <Box bgcolor="#66aacc" p={2}>
        <Stack justifyContent="center" alignItems="center">
          <h1>新規登録</h1>
        </Stack>
      </Box>
      <Stack
        direction="row"
        spacing={8}
        justifyContent="center"
        alignItems="center"
      >
        <Box>ID・PS</Box>
        <Box>利用者情報</Box>
        <Box bgcolor="#e0ffff" p={2}>
          <strong>学科情報</strong>
        </Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <Box width={300}>
          <p></p>
          <label>学科名</label>
          <p></p>
          <TextField required id={selectBox} label="学科名" select fullWidth>
            {selectBox.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <p></p>
          <label>卒業予定年</label>
          <p></p>
          <TextField
            required
            id={selectBox1}
            label="卒業予定年"
            select
            fullWidth
            onChange={(e) => setMyVariable(e.target.value)}
          >
            {selectBox1.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <p></p>
        </Box>
      </Stack>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box textAlign="left">
          <Button
            variant="contained"
            style={{ backgroundColor: "#bbdefb", color: "#000000" }}
            onClick={onClick}
          >
            戻る
          </Button>
        </Box>
        <Box textAlign="right">
          <Button
            style={myVariable ? enabledButtonStyle : disabledButtonStyle}
            disabled={!myVariable}
            variant="contained"
            onClick={onClick1}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
