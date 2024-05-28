import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, TextField, MenuItem } from "@mui/material";
import "normalize.css";
import { selectBox, selectBox1 } from "./Data";

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
