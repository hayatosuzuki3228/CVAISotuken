import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  createTheme,
  ThemeProvider,
  AppBar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primarycolor, gray } from "../const/color";
import App from "../App";

export function Inquiry() {
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      h5: {
        fontSize: "2rem",
      },
      button: {
        fontSize: "1rem",
        padding: "0.75rem 1.5rem",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: primarycolor }}>
            名産会マッチングシステムお問い合わせフォーム
          </Typography>

          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="お名前"
              name="name"
              autoComplete="username"
              autoFocus
              InputLabelProps={{
                sx: {
                  color: gray,
                  "&.Mui-focused": { color: primarycolor },
                },
              }}
              InputProps={{
                sx: {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: gray,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: primarycolor,
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="メールアドレス"
              name="address"
              autoComplete="usermail"
              autoFocus
              InputLabelProps={{
                sx: {
                  color: gray,
                  "&.Mui-focused": { color: primarycolor },
                },
              }}
              InputProps={{
                sx: {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: gray,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: primarycolor,
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="toiawase"
              label="お問い合わせ内容"
              id="toiawase"
              multiline
              rows={7}
              InputLabelProps={{
                sx: {
                  color: gray,
                  "&.Mui-focused": { color: primarycolor },
                },
              }}
              InputProps={{
                sx: {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: gray,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: primarycolor,
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 0,
                backgroundColor: primarycolor,
                "&:hover": {
                  backgroundColor: primarycolor,
                },
              }}
            >
              送信
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
/*
作業memo
トップページのサイズ調整
お問い合わせフォーム　パスワード再設定　
メール送信　サーバレス
お問い合わせフォームの項目
*/
