import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box } from "@mui/material";

export function Addstudentkakunin() {
  useEffect(() => {
    document.title = "最終確認";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    email,
    pass,
    namae,
    kanamae,
    birthday,
    area,
    selectedOptions,
    myVariable,
    myVariable1,
  } = location.state || {};

  const onClick = () => {
    navigate("/addgakka", {
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
    navigate("/", {
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

  return (
    <>
      <Box bgcolor="#66aacc" p={2}>
        <Stack justifyContent="center" alignItems="center">
          <h1>最終確認</h1>
        </Stack>
      </Box>
      <Stack justifyContent="center" alignItems="center">
        <div>
          <p></p>
          <label>メールアドレス　：　</label>
          <p></p>
          <label>パスワード　　　：　</label>
          <p></p>
          <label>氏名　　　　　　：　</label>
          <p></p>
          <label>カタカナ　　　　：　</label>
          <p></p>
          <label>性別　　　　　　：　</label>
          <p></p>
          <label>生年月日　　　　：　</label>
          <p></p>
          <label>居住地域　　　　：　</label>
          <p></p>
          <label>保有資格　　　　：　</label>
          <p></p>
        </div>
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
            variant="contained"
            style={{ backgroundColor: "#bbdefb", color: "#000000" }}
            onClick={onClick1}
          >
            登録
          </Button>
        </Box>
      </Stack>
    </>
  );
}
