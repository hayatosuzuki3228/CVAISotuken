import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, TextField, MenuItem } from "@mui/material";
import "normalize.css";

export function Addstudentgakka() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const initialMyVariable = location.state?.myVariable || "";
  const initialMyVariable1 = location.state?.myVariable1 || "";

  const { email, pass, namae, kanamae, birthday, area, selectedOptions } =
    location.state || {};

  const onClick = () => {
    navigate("/adduser", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        birthday,
        area,
        selectedOptions,
        myVariable,
        myVariable1,
      },
    });
  };

  const onClick1 = () => {
    navigate("/addkakunin", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        birthday,
        area,
        selectedOptions,
        myVariable,
        myVariable1,
      },
    });
  };

  const [myVariable, setMyVariable] = useState(initialMyVariable);
  const [myVariable1, setMyVariable1] = useState(initialMyVariable1);

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
    { label: "25卒", value: "value1" },
    { label: "26卒", value: "value2" },
    { label: "27卒", value: "value3" },
    { label: "28卒", value: "value4" },
    { label: "29卒", value: "value5" },
    { label: "30卒", value: "value6" },
    { label: "31卒", value: "value7" },
    { label: "32卒", value: "value8" },
    { label: "33卒", value: "value9" },
    { label: "34卒", value: "value10" },
    { label: "35卒", value: "value11" },
    { label: "36卒", value: "value12" },
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
        <Box
          style={{
            border: "2px solid #e0ffff",
            padding: "16px",
          }}
        >
          ID・PS
        </Box>
        <Box
          style={{
            border: "2px solid #e0ffff",
            padding: "16px",
          }}
        >
          利用者情報
        </Box>
        <Box bgcolor="#e0ffff" p={2}>
          <strong>学科情報</strong>
        </Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <Box width={300}>
          <p></p>
          <label>学科名</label>
          <p></p>
          <TextField
            required
            id={selectBox}
            label="学科名"
            value={myVariable}
            select
            fullWidth
            onChange={(e) => setMyVariable(e.target.value)}
          >
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
            value={myVariable1}
            select
            fullWidth
            onChange={(e) => setMyVariable1(e.target.value)}
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
            style={
              myVariable && myVariable1
                ? enabledButtonStyle
                : disabledButtonStyle
            }
            disabled={!myVariable || !myVariable1}
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
