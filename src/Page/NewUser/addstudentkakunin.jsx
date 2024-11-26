import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, Typography } from "@mui/material";
import { primarycolor } from "../../const/color";

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
    navigate("/LoginPage", {
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
        <Typography
          fontSize={35}
          style={{
            color: primarycolor,
          }}
        >
          最終確認
        </Typography>
        <p></p>
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
            <label>学科名　　　　　：　</label>
            <label>{gakka}</label>
            <p></p>
            <label>卒業予定　　　　：　</label>
            <lable>{sotu}</lable>
            <p></p>
            <label>----------------------保有資格----------------------</label>
            <p></p>
            <div style={{ textAlign: "center" }}>
              {sikaku
                ? sikaku.map((option, index) => (
                    <Typography key={index}>{option.title}</Typography>
                  ))
                : null}
            </div>
            <p></p>
            <label>----------------------------------------------------</label>
            <p></p>
          </div>
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
            style={{
              color: primarycolor,
            }}
            onClick={onClick1}
          >
            登録
          </Button>
        </Box>
      </Stack>
    </>
  );
}
