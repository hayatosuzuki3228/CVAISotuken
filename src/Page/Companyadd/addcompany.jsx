import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Autocomplete,
  Button,
  Box,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  InputAdornment,
  MobileStepper,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  industry,
  occupation,
  area,
  person,
  qualification,
} from "../Companyadd/companydata";
import companies from "../Matching/matchtable";
import CompanyDetails from "./companysarch";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Category } from "@mui/icons-material";

export function Addcompany() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = useState("");
  const [selectindustry, setSelectIndustry] = useState(null);
  const [selectoccupation, setSelectOccupation] = useState(null);
  const [capital, setCapital] = useState("");
  const [sales, setSales] = useState("");
  const [employees, setEmployees] = useState("");
  const [selectarea, setSelectArea] = useState(null);
  const [holiday, setHoliday] = useState("");
  const [selectqualification, setSelectQualification] = useState(null);
  const [selectperson, setSelectPerson] = useState([]);

  const [FourYearSalary, setFourYearSalary] = useState(0);
  const [ThreeYearSalary, setThreeYearSalary] = useState(0);
  const [TwoYearSalary, setTwoYearSalary] = useState(0);
  const [OneYearSalary, setOneYearSalary] = useState(0);
  const [FourYearAllowances, setFourYearAllowances] = useState(0);
  const [ThreeYearAllowances, setThreeYearAllowances] = useState(0);
  const [TwoYearAllowances, setTwoYearAllowances] = useState(0);
  const [OneYearAllowances, setOneYearAllowances] = useState(0);

  //ステッパー
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //数値入力制約
  const valuechange = (event, setValue) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });

    const numericValue = inputValue.replace(/[^0-9]/g, "");
    setValue(numericValue);

    const formattedValue = addCommas(numericValue);

    setValue(formattedValue);
  };

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handlePerson = (event) => {
    const value = event.target.name;
    setSelectPerson((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else if (prevSelected.length < 3) {
        return [...prevSelected, value];
      }
      return prevSelected;
    });
  };

  //チェックボックス連動
  const [checked, setChecked] = React.useState([true, false]);

  const comit = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const comit4 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const comit2 = (event) => {
    setChecked([checked[0], event.target.checked]);
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
            <TextField
              label="会社名"
              value={name}
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              sx={{ width: 400 }}
            />
            <Autocomplete
              sx={{ width: 400 }}
              value={selectindustry}
              onChange={(event, newValue) => setSelectIndustry(newValue)}
              options={industry}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="業種" variant="standard" />
              )}
            />
            <Autocomplete
              sx={{ width: 400 }}
              value={selectoccupation}
              onChange={(event, newValue) => setSelectOccupation(newValue)}
              options={occupation}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="職種" variant="standard" />
              )}
            />
            <TextField
              label="資本金"
              value={capital}
              variant="standard"
              sx={{ width: 400 }}
              onChange={(e) => valuechange(e, setCapital)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">百万円</InputAdornment>
                ),
              }}
            />
            <TextField
              label="売上高"
              variant="standard"
              sx={{ width: 400 }}
              value={sales}
              onChange={(e) => valuechange(e, setSales)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">百万円</InputAdornment>
                ),
              }}
            />
            <TextField
              label="従業員数"
              variant="standard"
              sx={{ width: 400 }}
              value={employees}
              onChange={(e) => valuechange(e, setEmployees)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">人</InputAdornment>
                ),
              }}
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
            <Autocomplete
              sx={{ width: 400 }}
              value={selectarea}
              onChange={(event, newValue) => setSelectArea(newValue)}
              options={area}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="勤務地" variant="standard" />
              )}
            />
            <FormControl>
              <FormLabel sx={{ ml: -1 }}>勤務体系</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="fulltime"
                  control={<Radio />}
                  label="固定時間"
                />
                <FormControlLabel
                  value="variable"
                  control={<Radio />}
                  label="変形労働時間"
                />
                <FormControlLabel
                  value="flex"
                  control={<Radio />}
                  label="フレックス"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="年間休日"
              variant="standard"
              sx={{ width: 400 }}
              value={holiday}
              onChange={(e) => valuechange(e, setHoliday)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">日</InputAdornment>
                ),
              }}
            />
            <FormControl>
              <FormLabel sx={{ ml: -1 }}>休日制度</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="fulltwoday"
                  control={<Radio />}
                  label="完全週休二日制"
                />
                <FormControlLabel
                  value="twoday"
                  control={<Radio />}
                  label="週休二日制"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="その他"
                />
              </RadioGroup>
            </FormControl>
            <Autocomplete
              sx={{ width: 400 }}
              value={selectqualification}
              onChange={(event, newValue) => setSelectQualification(newValue)}
              options={qualification}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="必須資格" variant="standard" />
              )}
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
            <Typography variant="h5">募集学科登録</Typography>

            <FormGroup>
              <Stack direction="row" spacing={0.1} width={255} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1]}
                      indeterminate={checked[0] !== checked[1]}
                      onChange={comit}
                    />
                  }
                />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    コンピューター・IT
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked[0]} onChange={comit4} />
                      }
                      label="4年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked[1]} onChange={comit2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="3年・2年・1年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={255} p={1}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    ゲーム・CG
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="4年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年+1年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={260} p={1}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    映像・音響
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={260} p={1}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    電気
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={260} p={1}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    情報通信
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={260} p={1}>
                <FormControlLabel control={<Checkbox defaultChecked />} />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    機械・CADデザイン
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
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
            <Typography variant="h5">給与情報</Typography>

            <TextField
              label="4年課程"
              variant="standard"
              value={FourYearSalary || ""}
              onChange={(e) => valuechange(e, setFourYearSalary)}
              sx={{ width: 400 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />

            <TextField
              label="4年課程手当"
              variant="standard"
              value={FourYearAllowances || ""}
              onChange={(e) => valuechange(e, setFourYearAllowances)}
              sx={{ width: 400 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />

            <TextField
              label="3年課程"
              variant="standard"
              value={ThreeYearSalary || ""}
              onChange={(e) => valuechange(e, setThreeYearSalary)}
              sx={{ width: 400 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />

            <TextField
              label="3年課程手当"
              variant="standard"
              value={ThreeYearAllowances || ""}
              onChange={(e) => valuechange(e, setThreeYearAllowances)}
              sx={{ width: 400 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />

            <TextField
              label="2年課程"
              variant="standard"
              value={TwoYearSalary || ""}
              onChange={(e) => valuechange(e, setTwoYearSalary)}
              sx={{ width: 400 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />

            <TextField
              label="2年課程手当"
              variant="standard"
              value={TwoYearAllowances || ""}
              onChange={(e) => valuechange(e, setTwoYearAllowances)}
              sx={{ width: 400 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">円</InputAdornment>
                ),
              }}
            />
          </Box>
        );
      case 4:
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
            <Typography variant="h5">求める人物像</Typography>
            <FormLabel>当てはまる上位3つの項目を選択してください</FormLabel>
            <FormGroup>
              <Grid container spacing={2} justifyContent="center">
                {person.map((person, index) => (
                  <Grid item xs={6} key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ ml: "20%", mr: -10 }}
                          name={person}
                          checked={selectperson.includes(person)}
                          onChange={handlePerson}
                          disabled={
                            !selectperson.includes(person) &&
                            selectperson.length >= 3
                          }
                        />
                      }
                      label={
                        <Typography noWrap sx={{ ml: "30%", mr: 0 }}>
                          {person}
                        </Typography>
                      }
                      style={{
                        width: "100%",
                        textAlign: "center",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Box>
        );
      case 5:
        return (
          <Box>
            <Typography>会社名：{name}</Typography>
            <Typography>
              業種：{selectindustry ? selectindustry.title : ""}
            </Typography>
            <Typography>
              職種：{selectoccupation ? selectoccupation.title : ""}
            </Typography>
            <Typography>資本金: {capital}百万円</Typography>
            <Typography>売上高: {sales}百万円</Typography>
            <Typography>従業員数: {employees}人</Typography>
            <Typography>
              必須資格：{selectqualification ? selectqualification.title : ""}
            </Typography>
            <Typography>年間休日: {holiday}日</Typography>
            <Typography>選択された人物像: {selectperson.join(", ")}</Typography>
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
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, margin: "0 auto" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === 5}
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
