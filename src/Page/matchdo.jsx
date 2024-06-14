import React, { useState } from "react";
import Jobform from "./jobform";
import { Container, Typography, Box, Paper, Alert } from "@mui/material";

export function Matchdo() {
  const [jobData, setJobData] = useState({
    department: "",
    location: "",
    features: "",
    qualifications: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = (data) => {
    setJobData(data);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // 3秒後にアラートを非表示にする
  };

  return (
    <>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h5" component="h1" gutterBottom>
            マッチ度を算出するための情報を登録してください
          </Typography>
          {showAlert && (
            <Alert severity="success" onClose={() => setShowAlert(false)}>
              マッチ度情報が登録されました。
            </Alert>
          )}
          <Box display="flex" justifyContent="space-between">
            <Paper elevation={3} style={{ flex: 1, marginRight: "0.5rem" }}>
              <Box p={3}>
                <Jobform onSave={handleSave} initialData={jobData} />
              </Box>
            </Paper>
            {jobData && (
              <Paper elevation={3} style={{ flex: 1, marginLeft: "0.5rem" }}>
                <Box mt={4} p={3} border={1} borderRadius={2}>
                  <Typography variant="h6">登録したマッチ度情報</Typography>
                  <Typography>募集学科情報: {jobData.department}</Typography>
                  <Typography>勤務地: {jobData.location}</Typography>
                  <Typography>特長: {jobData.features}</Typography>
                  <Typography>資格: {jobData.qualifications}</Typography>
                </Box>
              </Paper>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
