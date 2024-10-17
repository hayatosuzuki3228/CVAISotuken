import React, { useEffect, useState } from "react";
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
import { selectBox, selectBox1 } from "./Data";

export function Addstudentgakka() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const initialGakka = location.state?.gakka || "";
  const initialSotu = location.state?.sotu || "";

  const { email, pass, namae, kanamae, gender, birthday, area, sikaku } =
    location.state || {};
  const [gakka, setGakka] = useState(initialGakka);
  const [sotu, setSotu] = useState(initialSotu);

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
        <Typography fontSize={35} color="#21a7dd">
          新規登録
        </Typography>
        <p></p>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box fontSize={20}>ID・PS</Box>
          <Box fontSize={20}>利用者情報</Box>
          <Box fontSize={20}>
            <strong>学科情報</strong>
          </Box>
        </Stack>
        <Stack justifyContent="center" alignItems="center" padding={1}>
          <Box width={300}>
            <p></p>
            <TextField
              required
              id={selectBox}
              label="学科名"
              value={gakka}
              select
              fullWidth
              onChange={(e) => setGakka(e.target.value)}
            >
              {selectBox.map((item, index) => (
                <MenuItem key={index} value={item.value}>
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
      </Box>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box textAlign="left">
          <Button variant="text" color="primary" onClick={onClick}>
            戻る
          </Button>
        </Box>
        <Box textAlign="right">
          <Button
            variant="text"
            color="primary"
            disabled={!gakka || !sotu}
            onClick={onClick1}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
