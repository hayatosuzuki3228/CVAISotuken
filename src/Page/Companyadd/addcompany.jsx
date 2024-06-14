//#region import
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Autocomplete,
  Button,
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
  person,
  qualification,
  area,
} from "../Companyadd/companydata";
import companies from "../Matching/matchtable";
import CompanyDetails from "./companysarch";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Category } from "@mui/icons-material";

//#endregion
export function Addcompany() {
  const navigate = useNavigate();

  const theme = useTheme();

  //#region 定数
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [selectindustry, setSelectIndustry] = useState(null);
  const [selectoccupation, setSelectOccupation] = useState(null);
  const [capital, setCapital] = useState("");
  const [sales, setSales] = useState("");
  const [employees, setEmployees] = useState("");
  const [selectarea, setSelectArea] = useState([]);
  const [worktime, setWorktime] = useState("");
  const [holiday, setHoliday] = useState("");
  const [holidaysystem, setHolidaysystem] = useState("");
  const [selectqualification, setSelectQualification] = useState([]);
  const [selectperson, setSelectPerson] = useState([]);

  const [FourYearSalary, setFourYearSalary] = useState(null);
  const [ThreeYearSalary, setThreeYearSalary] = useState(null);
  const [TwoYearSalary, setTwoYearSalary] = useState(null);
  const [OneYearSalary, setOneYearSalary] = useState(null);
  const [FourYearAllowances, setFourYearAllowances] = useState(null);
  const [ThreeYearAllowances, setThreeYearAllowances] = useState(null);
  const [TwoYearAllowances, setTwoYearAllowances] = useState(null);
  const [OneYearAllowances, setOneYearAllowances] = useState(null);
  //#endregion

  //ステッパー
  const handleNext = () => {
    if (activeStep === 5) {
      setOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //登録→トップページ（仮）へ
  const handleConfirm = () => {
    setOpen(false);
    navigate("/");
  };

  const handleClose = () => {
    setOpen(false);
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

  //#region 学科チェック連動
  const [checked, setChecked] = React.useState([false, false, false, false]);

  const comit = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const comit4 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };
  const comit2 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const comit3 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const comit321 = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };

  const [checked1, setChecked1] = React.useState([false, false, false]);

  const game = (event) => {
    setChecked1([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const game4 = (event) => {
    setChecked1([event.target.checked, checked1[1], checked1[2]]);
  };
  const game2 = (event) => {
    setChecked1([checked1[0], event.target.checked, checked1[2]]);
  };
  const game321 = (event) => {
    setChecked1([checked1[0], checked1[1], event.target.checked]);
  };

  const [checked2, setChecked2] = React.useState([false, false]);

  const eizo = (event) => {
    setChecked2([event.target.checked, event.target.checked]);
  };
  const eizo3 = (event) => {
    setChecked2([event.target.checked, checked2[1]]);
  };
  const eizo2 = (event) => {
    setChecked2([checked2[0], event.target.checked]);
  };

  const [checked3, setChecked3] = React.useState([false, false]);

  const denki = (event) => {
    setChecked3([event.target.checked, event.target.checked]);
  };
  const denki3 = (event) => {
    setChecked3([event.target.checked, checked3[1]]);
  };
  const denki2 = (event) => {
    setChecked3([checked3[0], event.target.checked]);
  };

  const [checked4, setChecked4] = React.useState([false, false]);

  const tsusin = (event) => {
    setChecked4([event.target.checked, event.target.checked]);
  };
  const tsusin3 = (event) => {
    setChecked4([event.target.checked, checked4[1]]);
  };
  const tsusin2 = (event) => {
    setChecked4([checked4[0], event.target.checked]);
  };

  const [checked5, setChecked5] = React.useState([false, false]);

  const kikai = (event) => {
    setChecked5([event.target.checked, event.target.checked]);
  };
  const kikai3 = (event) => {
    setChecked5([event.target.checked, checked5[1]]);
  };
  const kikai2 = (event) => {
    setChecked5([checked5[0], event.target.checked]);
  };

  const all = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    setChecked1([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    setChecked2([event.target.checked, event.target.checked]);
    setChecked3([event.target.checked, event.target.checked]);
    setChecked4([event.target.checked, event.target.checked]);
    setChecked5([event.target.checked, event.target.checked]);
  };
  //#endregion

  //gakka

  const generateSelectedCoursesText = (
    checked,
    checked1,
    checked2,
    checked3,
    checked4,
    checked5
  ) => {
    const allChecked =
      checked.every(Boolean) &&
      checked1.every(Boolean) &&
      checked2.every(Boolean) &&
      checked3.every(Boolean) &&
      checked4.every(Boolean) &&
      checked5.every(Boolean);

    if (allChecked) {
      return "不問";
    }

    const courses = [];

    if (checked.every(Boolean)) {
      courses.push("コンピューター・IT");
    } else {
      const subCourses = [];
      if (checked[0]) subCourses.push("4年");
      if (checked[1]) subCourses.push("2年");
      if (checked[2]) subCourses.push("3年");
      if (checked[3]) subCourses.push("3年・2年＋1年");
      if (subCourses.length > 0)
        courses.push(`コンピューター・IT(${subCourses.join("、")})`);
    }

    if (checked1.every(Boolean)) {
      courses.push("ゲーム・CG");
    } else {
      const subCourses = [];
      if (checked1[0]) subCourses.push("4年");
      if (checked1[1]) subCourses.push("2年");
      if (checked1[2]) subCourses.push("2年+1年");
      if (subCourses.length > 0)
        courses.push(`ゲーム・CG(${subCourses.join("、")})`);
    }

    if (checked2.every(Boolean)) {
      courses.push("映像・音響");
    } else {
      const subCourses = [];
      if (checked2[0]) subCourses.push("2年+1年");
      if (checked2[1]) subCourses.push("2年");
      if (subCourses.length > 0)
        courses.push(`映像・音響(${subCourses.join("、")})`);
    }

    if (checked3.every(Boolean)) {
      courses.push("電気");
    } else {
      const subCourses = [];
      if (checked3[0]) subCourses.push("2年+1年");
      if (checked3[1]) subCourses.push("2年");
      if (subCourses.length > 0) courses.push(`電気(${subCourses.join("、")})`);
    }

    if (checked4.every(Boolean)) {
      courses.push("情報通信");
    } else {
      const subCourses = [];
      if (checked4[0]) subCourses.push("2年+1年");
      if (checked4[1]) subCourses.push("2年");
      if (subCourses.length > 0)
        courses.push(`情報通信(${subCourses.join("、")})`);
    }

    if (checked5.every(Boolean)) {
      courses.push("機械・CADデザイン");
    } else {
      const subCourses = [];
      if (checked5[0]) subCourses.push("2年+1年");
      if (checked5[1]) subCourses.push("2年");
      if (subCourses.length > 0)
        courses.push(`機械・CADデザイン(${subCourses.join("、")})`);
    }

    return courses.length > 0 ? courses.join("、") : "不問";
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
              id="companyname"
              label="会社名"
              value={name}
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              sx={{ width: 400 }}
            />
            <Autocomplete
              id="industry"
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
              id="occupation"
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
              id="capital"
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
              id="sales"
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
              id="employees"
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
              id="area"
              multiple
              limitTags={3}
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
              <RadioGroup
                row
                value={worktime}
                onChange={(event, newValue) => setWorktime(newValue)}
              >
                <FormControlLabel
                  value="固定時間"
                  control={<Radio />}
                  label="固定時間"
                />
                <FormControlLabel
                  value="変形労働時間"
                  control={<Radio />}
                  label="変形労働時間"
                />
                <FormControlLabel
                  value="フレックス"
                  control={<Radio />}
                  label="フレックス"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="holiday"
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
              <RadioGroup
                row
                value={holidaysystem}
                onChange={(event, newValue) => setHolidaysystem(newValue)}
              >
                <FormControlLabel
                  value="完全週休二日生制"
                  control={<Radio />}
                  label="完全週休二日制"
                />
                <FormControlLabel
                  value="週休二日制"
                  control={<Radio />}
                  label="週休二日制"
                />
                <FormControlLabel
                  value="その他"
                  control={<Radio />}
                  label="その他"
                />
              </RadioGroup>
            </FormControl>
            <Autocomplete
              multiple
              limitTags={1}
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
              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        checked.every(Boolean) &&
                        checked1.every(Boolean) &&
                        checked2[0] &&
                        checked2[1] &&
                        checked3[0] &&
                        checked3[1] &&
                        checked4[0] &&
                        checked4[1] &&
                        checked5[0] &&
                        checked5[1]
                      }
                      onChange={all}
                    />
                  }
                ></FormControlLabel>
                <Typography variant="h6" p={1} pl={2}>
                  不問
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.every(Boolean)}
                      indeterminate={
                        checked.some(Boolean) && !checked.every(Boolean)
                      }
                      onChange={comit}
                    />
                  }
                />
                <Accordion
                  sx={{ width: 400, boxShadow: "none", border: "none" }}
                >
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
                        <Checkbox checked={checked[2]} onChange={comit3} />
                      }
                      label="3年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked[1]} onChange={comit2} />
                      }
                      label="2年"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox checked={checked[3]} onChange={comit321} />
                      }
                      label="3年・2年＋1年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>

              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked1.every(Boolean)}
                      indeterminate={
                        checked1.some(Boolean) && !checked1.every(Boolean)
                      }
                      onChange={game}
                    />
                  }
                />
                <Accordion
                  sx={{ width: 400, boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    ゲーム・CG
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked1[0]} onChange={game4} />
                      }
                      label="4年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked1[1]} onChange={game2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked1[2]} onChange={game321} />
                      }
                      label="2年+1年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked2[0] && checked2[1]}
                      indeterminate={checked2[0] !== checked2[1]}
                      onChange={eizo}
                    />
                  }
                />
                <Accordion
                  sx={{ width: 400, boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    映像・音響
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked2[0]} onChange={eizo3} />
                      }
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked2[1]} onChange={eizo2} />
                      }
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked3[0] && checked3[1]}
                      indeterminate={checked3[0] !== checked3[1]}
                      onChange={denki}
                    />
                  }
                />
                <Accordion
                  sx={{ width: 400, boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    電気
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked3[0]} onChange={denki3} />
                      }
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked3[1]} onChange={denki2} />
                      }
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked4[0] && checked4[1]}
                      indeterminate={checked4[0] !== checked4[1]}
                      onChange={tsusin}
                    />
                  }
                />
                <Accordion
                  sx={{ width: 400, boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    情報通信
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked4[0]} onChange={tsusin3} />
                      }
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked4[1]} onChange={tsusin2} />
                      }
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
              <Stack direction="row" spacing={0.1} width={400} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked5[0] && checked5[1]}
                      indeterminate={checked5[0] !== checked5[1]}
                      onChange={kikai}
                    />
                  }
                />
                <Accordion
                  sx={{ width: 400, boxShadow: "none", border: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    機械・CADデザイン
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked5[0]} onChange={kikai3} />
                      }
                      label="2年+1年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked5[1]} onChange={kikai2} />
                      }
                      label="2年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </FormGroup>
          </Box>
        );

      case 3:
        // コンピューター・ITの3年のチェック
        const isComputerIT3YearSelected = checked[2];
        // コンピューター・ITまたはゲーム・CGの4年のチェック
        const isFourYearSelected = checked[0] || checked1[0];
        // コンピューター・ITの2年のチェック
        const isTwoYearSelected = checked[1];
        const isItSelected = checked[3];
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

            {isTwoYearSelected && (
              <>
                <TextField
                  id="salary-2"
                  label="2年課程基本給"
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
                  id="allowances-2"
                  label="2年課程諸手当"
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
              </>
            )}
            {isComputerIT3YearSelected && (
              <>
                <TextField
                  id="salary-3"
                  label="3年課程基本給"
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
                  id="allowances-3"
                  label="3年課程諸手当"
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
              </>
            )}
            {isFourYearSelected && (
              <>
                <TextField
                  id="salary-4"
                  label="4年課程基本給"
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
                  id="allowances-4"
                  label="4年課程諸手当"
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
              </>
            )}
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
        const selectedCoursesText = generateSelectedCoursesText(
          checked,
          checked1,
          checked2,
          checked3,
          checked4,
          checked5
        );

        return (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            mt="10vh"
            spacing={2}
            sx={{ paddingLeft: "35%" }}
          >
            <Grid item sx={{ mr: "53%" }}>
              <Typography variant="h5">入力確認</Typography>
            </Grid>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography>会社名：{name}</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  業種：{selectindustry ? selectindustry.title : ""}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  職種：{selectoccupation ? selectoccupation.title : ""}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>資本金：{capital}百万円</Typography>
              </Grid>
              <Grid item>
                <Typography>売上高：{sales}百万円</Typography>
              </Grid>
              <Grid item>
                <Typography>従業員数：{employees}人</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  勤務地：{selectarea.map((area) => area.title).join(", ")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  必須資格：
                  {selectqualification
                    .map((qualification) => qualification.title)
                    .join(", ")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography>勤務体系：{worktime}</Typography>
              </Grid>
              <Grid item>
                <Typography>年間休日：{holiday}日</Typography>
              </Grid>
              <Grid item>
                <Typography>休日体系：{holidaysystem}</Typography>
              </Grid>
              <Grid item>
                <Typography>募集学科：{selectedCoursesText}</Typography>
              </Grid>
              <Grid item>
                <Typography>基本給2年：{TwoYearSalary}円</Typography>
              </Grid>
              <Grid item>
                <Typography>諸手当2年：{TwoYearAllowances}円</Typography>
              </Grid>
              <Grid item>
                <Typography>基本給3年：{ThreeYearSalary}円</Typography>
              </Grid>
              <Grid item>
                <Typography>諸手当3年：{ThreeYearAllowances}円</Typography>
              </Grid>
              <Grid item>
                <Typography>基本給4年：{FourYearSalary}円</Typography>
              </Grid>
              <Grid item>
                <Typography>諸手当4年：{FourYearAllowances}円</Typography>
              </Grid>
              <Grid item>
                <Typography>求める人物像：{selectperson.join(", ")}</Typography>
              </Grid>
            </Grid>
          </Grid>
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
          <Button size="small" onClick={handleNext} sx={{ mt: 2 }}>
            {activeStep === 5 ? "登録" : "次へ"}
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
      <Dialog open={open} onClose={handleClose} maxWidth="sm" align="center">
        <DialogTitle>{"登録確認"}</DialogTitle>
        <DialogContent>
          <DialogContentText>登録しますか？</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
