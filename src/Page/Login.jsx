import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { primarycolor, gray } from "../const/color";

export function LoginPage() {
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    navigate("/Addstudent");
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Address:", address, "Password:", password);
    // ここにログイン処理を実装する
  };

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
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: primarycolor }}>
            ログイン
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="メールアドレス"
              name="address"
              autoComplete="username"
              autoFocus
              value={address}
              onChange={handleAddressChange}
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
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
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
              fullWidth
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
              ログイン
            </Button>
          </Box>
          <Box>
            <Button
              fullWidth
              sx={{ mt: 3, mb: 0, color: primarycolor }}
              onClick={signup}
            >
              新規登録はこちら
            </Button>
            <Button
              fullWidth
              sx={{ mt: 0, mb: 2, color: primarycolor }}
              onClick={signup}
            >
              パスワードを忘れた方はこちら
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
