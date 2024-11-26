import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, Typography } from "@mui/material";
import { primarycolor } from "../../const/color";
import { postData } from "../../sever/api";

export function Addstudentkakunin() {
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
    switchpage,
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
        switchpage,
      },
    });
  };

  const onClick1 = () => {
    postData("registration/student/status", {
      email: email,
      password: pass,
      name: namae,
      furigana: kanamae,
      gender: gender,
      birthday: formatBirthday1(birthday),
      residence: area,
      graduation_year: sotu,
      classId: gakka,
    });
    {
      switchpage == 1 ? navigate("/Admin") : navigate("/LoginPage");
    }
  };

  const formatBirthday = (birthday) => {
    const year = birthday.slice(0, 4);
    const month = birthday.slice(4, 6);
    const day = birthday.slice(6, 8);

    return `${year}年${month}月${day}日`;
  };

  const formatBirthday1 = (birthday) => {
    const year = birthday.slice(0, 4);
    const month = birthday.slice(4, 6);
    const day = birthday.slice(6, 8);

    return `${year}/${month}/${day}`;
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
        <Stack spacing={2} width="100%" maxWidth="400px">
          {[
            ["メールアドレス", email],
            ["パスワード", pass],
            ["氏名", namae],
            ["フリガナ", kanamae],
            ["性別", gender == 0 ? "男" : gender == 1 ? "女" : "その他"],
            ["生年月日", formatBirthday(birthday)],
            ["居住地域", area],
            ["学科名", gakka[1]],
            ["卒業予定", `${sotu}年卒`],
            [
              "保有資格",
              sikaku.map((option, index) => (
                <Typography sx={{ textAlign: "right" }} key={index}>
                  {option.title}
                </Typography>
              )),
            ],
          ].map(([label, value], index) => (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}
            >
              <Typography variant="body1" fontWeight="bold">
                {label}
              </Typography>
              <Typography variant="body1">{value}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Stack direction="row" spacing={20} justifyContent="center" marginTop={4}>
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
