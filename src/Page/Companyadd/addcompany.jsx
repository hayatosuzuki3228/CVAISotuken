import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import { category } from "../Companyadd/companydata";
import companies from "../Matching/matchtable";
import CompanyDetails from "./companysarch";

export function Addcompany() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // ステップごとのコンテンツ
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mt: "10vh",
              gap: 2,
            }}
          >
            <Typography variant="h5">企業情報登録</Typography>
            <TextField label="会社名" variant="standard" sx={{ width: 400 }} />
            <Autocomplete
              sx={{ width: 400 }}
              options={category}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="業種" variant="standard" />
              )}
            />
            <Autocomplete
              sx={{ width: 400 }}
              options={category}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="職種" variant="standard" />
              )}
            />
            <TextField label="資本金" variant="standard" sx={{ width: 400 }} />
            <TextField label="売上高" variant="standard" sx={{ width: 400 }} />
            <TextField
              label="従業員数"
              variant="standard"
              sx={{ width: 400 }}
            />
          </Box>
        );
      case 1:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mt: "10vh",
              gap: 2,
            }}
          >
            <Typography variant="h5">求人条件登録</Typography>
            <TextField label="勤務地" variant="standard" sx={{ width: 400 }} />
            <TextField
              label="勤務時間"
              variant="standard"
              sx={{ width: 400 }}
            />
            <TextField
              label="年間休日"
              variant="standard"
              sx={{ width: 400 }}
            />
            <TextField
              label="必須資格"
              variant="standard"
              sx={{ width: 400 }}
            />
            <TextField
              label="募集学科"
              variant="standard"
              sx={{ width: 400 }}
            />
          </Box>
        );
      case 2:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mt: "10vh",
              gap: 2,
            }}
          >
            <Typography variant="h5">福利厚生登録</Typography>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="社会保険"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="退職金制度"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="確定拠出型年金"
              />
            </FormGroup>
          </Box>
        );
      case 3:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              mt: "10vh",
              gap: 2,
            }}
          >
            <Typography variant="h5">募集学科登録</Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="コンピューター・IT"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="ゲーム・CG"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="映像・音響"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="電気"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="情報通信"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="機械・CADデザイン"
              />
            </FormGroup>
          </Box>
        );

      default:
        return (
          <div>
            <h2>Unknown</h2>
          </div>
        );
    }
  };

  return (
    <div>
      <div style={{ minHeight: "75vh" }}>{getStepContent(activeStep)}</div>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, margin: "0 auto" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === 3}
            sx={{ mt: 2 }}
          >
            次へ
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ mt: 2 }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            戻る
          </Button>
        }
      />
    </div>
  );
}
