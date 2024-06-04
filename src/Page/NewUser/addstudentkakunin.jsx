import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, Typography } from "@mui/material";

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
    gender,
    birthday,
    area,
    sikaku,
    gakka,
    sotu,
  } = location.state || {};

  const onClick = () => {
    navigate("/addgakka", {
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
    navigate("/", {
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

  let ir = 30;

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
          <label>{email}</label>
          <p></p>
          <label>パスワード　　　：　</label>
          <label>{pass}</label>
          <p></p>
          <label>氏名　　　　　　：　</label>
          <label>{namae}</label>
          <p></p>
          <label>カタカナ　　　　：　</label>
          <label>{kanamae}</label>
          <p></p>
          <label>性別　　　　　　：　</label>
          <label>{gender}</label>
          <p></p>
          <label>生年月日　　　　：　</label>
          <label>{birthday}</label>
          <p></p>
          <label>居住地域　　　　：　</label>
          <label>{area}</label>
          <p></p>
          <label>保有資格---------------------------</label>
          {sikaku.map((option, index) => (
            <Typography key={index}>{option.title}</Typography>
          ))}
          <label>------------------------------------</label>
          <p></p>
          <p></p>
          <label>学科名　　　　　：　</label>
          <label>{gakka}</label>
          <p></p>
          <label>卒業予定　　　　：　</label>
          <lable>{sotu}</lable>
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
