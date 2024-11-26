import React, { useContext, useState } from "react";
import JobForm from "./jobform";
import {
  Container,
  Typography,
  Box,
  Paper,
  Alert,
  Popover,
  IconButton,
  Grid,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { JobContext } from "../../provider/context";

export function Matchdo() {
  const { jobData } = useContext(JobContext);
  const [showAlert, setShowAlert] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // ボタンがクリックされたときの処理
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // ポップオーバーが閉じられるときの処理
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleSave = (data) => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // 3秒後にアラートを非表示にする
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box my={4}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              style={{ paddingBottom: 10 }}
            >
              マッチ度を算出するための情報を登録してください
            </Typography>

            {showAlert && (
              <Alert severity="success" onClose={() => setShowAlert(false)}>
                マッチ度情報が登録されました。
              </Alert>
            )}
          </Box>
          <Box
            className="paper-container"
            display="flex"
            justifyContent="space-between"
            mt={5}
          >
            <Paper elevation={3} className="paper-item">
              <Box p={3}>
                <JobForm onSave={handleSave} initialData={jobData} />
              </Box>
            </Paper>
            {jobData && (
              <Paper elevation={3} className="paper-item">
                <Box mt={4} p={3} border={1} borderRadius={2}>
                  <Grid container spacing={0}>
                    <Grid item xs={2.5}>
                      <Typography>学科情報：</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{jobData.department}</Typography>
                    </Grid>

                    <Grid item xs={2.5}>
                      <Typography>勤務地　：</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{jobData.location.join("、")}</Typography>
                    </Grid>

                    <Grid item xs={2.5}>
                      <Typography>特長　　：</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{jobData.features.join("、")}</Typography>
                    </Grid>

                    <Grid item xs={2.5}>
                      <Typography>資格　　：</Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>
                        {jobData.qualifications.join("、")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    height: "0.5vh",
                  }}
                >
                  <IconButton aria-label="注記" onClick={handleClick}>
                    <DescriptionIcon sx={{ color: "black" }} />
                  </IconButton>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <Box sx={{ fontWeight: "bold" }}>マッチ度の計算内容</Box>
                      <br />
                      学科情報、特長、資格は一個で＋１０加点され、勤務地は＋１５加点されます。
                      <br />
                      学科情報が一致していないまたは入力していない場合、
                      <Box component="span" sx={{ color: "red" }}>
                        他項目の一致度に関わらず必ずマッチ度が0として返ってきます。
                      </Box>
                      <br />
                      また、企業において必須資格があった時、選択した資格と一致していない場合も必ずマッチ度が0として返ってきます。
                      <br />
                      しかし、
                      <Box component="span" sx={{ color: "red" }}>
                        資格を選択していない場合に限り、特例でこの条件を無視することができます。
                      </Box>
                      <br />
                      特長や資格において複数選択で複数一致していた場合はその数に応じて＋１０加点されていきますが、
                      <br />
                      勤務地の場合は数によらず、＋１５しか加点されません。
                    </Typography>
                  </Popover>
                </Box>
              </Paper>
            )}
          </Box>
        </Box>
      </Container>
      <head>
        <link href="matchdo.css" rel="stylesheet" type="text/css" media="all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    </>
  );
}
