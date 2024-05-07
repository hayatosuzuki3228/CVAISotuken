import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

    const signup = () => {
    navigate("/Testpage");
    } 

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

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3,
              mb: 2, 
            }}

          >
            ログイン
          </Button>
        </Box>
        <Box>
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            onClick={signup}
          >
              新規登録はこちら
            </Button>
        </Box>
      </Box>
    </Container>
  );
}
