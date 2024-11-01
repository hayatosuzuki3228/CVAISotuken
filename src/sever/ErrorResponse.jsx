import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import { primarycolor } from "../const/color";

export function ErrorResponse() {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || { message: "不明なエラーが発生しました" };

  const handleBack = () => {
    navigate(-1); // 前のページに戻る
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: primarycolor, mb: 2 }}>
          エラーが発生しました
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {message}
        </Typography>
        <Button
          variant="contained"
          onClick={handleBack}
          sx={{
            backgroundColor: primarycolor,
            "&:hover": {
              backgroundColor: primarycolor,
            },
          }}
        >
          戻る
        </Button>
      </Box>
    </Container>
  );
}
