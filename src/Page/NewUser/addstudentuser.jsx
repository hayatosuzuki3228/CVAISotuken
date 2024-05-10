import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box } from "@mui/material";

export function Addstudentuser() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const onClick1 = () => {
    navigate("/addgakka");
  };

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
        <Box bgcolor="#e0ffff" p={2}>
          <strong>利用者情報</strong>
        </Box>
        <Box>学科情報</Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <div>
          <p></p>
          <label>氏名</label>
          <td>
            <input
              type="email"
              name="name"
              placeholder="電波 太郎"
              required
              minlength="4"
              maxlength="50"
              size="30"
            />
          </td>
          <p></p>
          <label>カタカナ</label>
          <td>
            <input
              type="email"
              name="namek"
              placeholder="デンパ タロウ"
              required
              minlength="4"
              maxlength="50"
              size="30"
            />
          </td>
          <p></p>
          <Stack direction="row" spacing={6} justifyContent="center">
            <Box>性別</Box>
            <input type="radio" name="num_of_inq1" value="男"></input>男
            <input type="radio" name="num_of_inq2" value="女"></input>女<p></p>
          </Stack>
          <p></p>
          <label>生年月日</label>
          <td>
            <input
              type="text"
              name="birth"
              placeholder="20041125"
              required
              minlength="8"
              maxlength="20"
              size="30"
            />
          </td>
          <p></p>
          <label>居住地域</label>
          <td>
            <input
              type="text"
              name="area"
              placeholder="愛知県豊田市"
              required
              minlength="8"
              maxlength="20"
              size="30"
            />
          </td>
          <p></p>
          <label>保有資格</label>
          <td>
            <input
              type="text"
              name="qualification"
              placeholder="応用情報技術者"
              required
              minlength="8"
              maxlength="20"
              size="30"
            />
          </td>
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
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
