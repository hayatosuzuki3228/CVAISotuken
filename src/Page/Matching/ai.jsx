import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";

export function Ai() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h5" gutterBottom>
        現在、このAI機能は未実装です。
      </Typography>
      <Typography variant="body1" gutterBottom>
        今後の追加をお待ちください。
      </Typography>
      <Button
        className="back"
        variant="outlined"
        color="secondary"
        onClick={() => navigate("/matching")}
        startIcon={<UndoIcon />}
      >
        戻る
      </Button>
    </Box>
  );
}
