import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  Box,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import "normalize.css";
import { selectBox, selectBox1, selectBox2 } from "./Data";
import { primarycolor } from "../../const/color";

export function Addstudentgakka() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialGakka = location.state?.gakka || "";
  const initialSotu = location.state?.sotu || "";
  const initialHope = location.state?.hope || "";

  const {
    email,
    pass,
    namae,
    kanamae,
    gender,
    birthday,
    area,
    sikaku,
    switchpage,
  } = location.state || {};
  const [gakka, setGakka] = useState(initialGakka);
  const [sotu, setSotu] = useState(initialSotu);
  const [hope, setHope] = useState(initialHope);

  const enabledButtonStyle = { color: primarycolor };
  const disabledButtonStyle = { color: "#b0b0b0" };

  const onClick = () => {
    navigate("/adduser", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        gender,
        birthday,
        area,
        sikaku,
        gakka,
        sotu,
        switchpage,
        hope,
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
        gender,
        birthday,
        area,
        sikaku,
        gakka,
        sotu,
        switchpage,
        hope,
      },
    });
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={35}
          style={{
            color: primarycolor,
          }}
        >
          新規登録
        </Typography>
        <p></p>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box fontSize={20} sx={{ borderBottom: "1px solid #D3D3D3" }}>
            ID・PS
          </Box>
          <Box fontSize={20} sx={{ borderBottom: "1px solid #D3D3D3" }}>
            利用者情報
          </Box>
          <Box
            fontSize={20}
            sx={{ borderBottom: "2px solid ", borderBottomColor: primarycolor }}
          >
            学科情報
          </Box>
        </Stack>
        <Stack justifyContent="center" alignItems="center" padding={1}>
          <Box width={350}>
            <p></p>
            <TextField
              required
              autoFocus
              id={selectBox}
              label="学科名"
              value={gakka}
              select
              fullWidth
              onChange={(e) => setGakka(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: primarycolor,
                  },
                },
              }}
            >
              {selectBox.map((item, index) => (
                <MenuItem key={index} value={item.value[0]}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p></p>
            <TextField
              required
              id={selectBox1}
              label="卒業予定年"
              value={sotu}
              select
              fullWidth
              onChange={(e) => setSotu(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: primarycolor,
                  },
                },
              }}
            >
              {selectBox1.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            {/* <p></p>
            <TextField
              required
              id={selectBox2}
              label="希望勤務地"
              value={hope}
              select
              fullWidth
              onChange={(e) => setHope(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: primarycolor,
                  },
                },
              }}
            >
              {selectBox2.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <p></p> */}
          </Box>
        </Stack>
      </Box>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box textAlign="left">
          <Button
            style={{
              color: primarycolor,
            }}
            onClick={onClick}
          >
            戻る
          </Button>
        </Box>
        <Box textAlign="right">
          <Button
            // style={
            //   !gakka || !sotu || !hope
            //     ? disabledButtonStyle
            //     : enabledButtonStyle
            // }
            // disabled={!gakka || !sotu || !hope}
            onClick={onClick1}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
