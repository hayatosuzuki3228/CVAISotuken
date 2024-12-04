//#region import
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Autocomplete,
  Button,
  Box,
  Checkbox,
  Divider,
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
  InputLabel,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  IconButton,
  MobileStepper,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Input,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowDropupIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import {
  industry,
  occupation,
  person,
  qualification,
  area,
} from "../Companyadd/companydata";
import { AddAlarm } from "@mui/icons-material";

//#endregion

//#region リファクタリングで作った関数一時おきば
//case画面要素配置のためのボックス
const StepLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "10vh",
        width: "100%",
        gap: 2,
      }}
    >
      {children}
    </Box>
  );
};

//入力フィールド
const UnitAdornment = ({ unit }) => {
  return <InputAdornment position="end">{unit}</InputAdornment>;
};
const CustomField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = true,
  unit = null,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      value={value || ""}
      onChange={onChange}
      InputProps={{
        endAdornment: unit ? <UnitAdornment unit={unit} /> : null,
      }}
      var
      variant="standard"
      required={required}
      sx={{ width: "90%", maxWidth: "400px" }}
    />
  );
};

//case6選択項目listitem共通化
const InputItem = ({ primarytext }) => (
  <>
    <ListItem>
      <ListItemText primary={primarytext} />
    </ListItem>
    <Divider component="li" />
  </>
);
//#endregion

export function Addcompany() {
  const navigate = useNavigate();

  const theme = useTheme();

  //#region 定数

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [selectindustry, setSelectIndustry] = useState("");
  const [selectoccupation, setSelectOccupation] = useState("");
  const [capital, setCapital] = useState("");
  const [sales, setSales] = useState("");
  const [employees, setEmployees] = useState("");

  const [selectarea, setSelectArea] = useState([]);
  const [worktime, setWorktime] = useState("");
  const [holiday, setHoliday] = useState("");
  const [holidaysystem, setHolidaysystem] = useState("");
  const [selectqualification, setSelectQualification] = useState([]);

  const [FourYearSalary, setFourYearSalary] = useState(0);
  const [ThreeYearSalary, setThreeYearSalary] = useState(0);
  const [TwoYearSalary, setTwoYearSalary] = useState(0);
  const [OneYearSalary, setOneYearSalary] = useState(0);
  const [FourYearAllowances, setFourYearAllowances] = useState(0);
  const [ThreeYearAllowances, setThreeYearAllowances] = useState(0);
  const [TwoYearAllowances, setTwoYearAllowances] = useState(0);
  const [OneYearAllowances, setOneYearAllowances] = useState(0);

  const [selectperson, setSelectPerson] = useState([]);
  //#endregion

  //#region ステッパー
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    if (activeStep === 7) {
      setOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  /*
  const valid0 = () => {
    return (
      name !== "" &&
      selectindustry !== null &&
      selectoccupation !== null &&
      sales !== "" &&
      employees !== ""
    );
  };

  const valid1 = () => {
    return (
      selectarea.length > 0 &&
      worktime !== "" &&
      holiday !== "" &&
      holidaysystem !== "" &&
      selectqualification.length >= 0
    );
  };

  const valid2 = () => {
    return (
      itcheck.includes(true) ||
      gamecheck.includes(true) ||
      eizocheck.includes(true) ||
      denkicheck.includes(true) ||
      tsusincheck.includes(true) ||
      kikaicheck.includes(true)
    );
  };

  const valid4 = () => {
    return selectperson.length === 3;
  };

  const nextdisabled = () => {
    switch (activeStep) {
      case 0:
        return !valid0();
      case 1:
        return !valid1();
      case 2:
        return !valid2();
      case 4:
        return !valid4();
      default:
        return false;
    }
  };
*/
  //#endregion

  //登録→トップページ（仮）へ
  const handleConfirm = () => {
    setOpen(false);
    navigate("/");
  };

  const handleClose = () => {
    setOpen(false);
  };

  //#region 数値入力制約
  const valuechange = (event, setValue) => {
    let inputValue = event.target.value;

    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
    }

    // inputValue = inputValue.replace(/[０-９]/g, (s) => {
    //   return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    // });

    // const numericValue = inputValue.replace(/[^0-9]/g, "");

    // const formattedValue = addCommas(numericValue);

    // setValue(formattedValue);
  };

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  //#endregion

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

  //#region picture
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
      setZoom(1);
      setPositionX(0);
      setPositionY(0);
      setPreviousPosition({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  //#region  画像調整
  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(0.5, prevZoom - 0.1));
  };

  const handleMoveUp = () => {
    setPositionY((prevY) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, y: prevPos.y - 10 }));
      return prevY - 10;
    });
  };

  const handleMoveDown = () => {
    setPositionY((prevY) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, y: prevPos.y + 10 }));
      return prevY + 10;
    });
  };

  const handleMoveLeft = () => {
    setPositionX((prevX) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, x: prevPos.x - 10 }));
      return prevX - 10;
    });
  };

  const handleMoveRight = () => {
    setPositionX((prevX) => {
      setPreviousPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 10 }));
      return prevX + 10;
    });
  };
  //#endregion

  //#region 画像up
  const handleUpload = () => {
    if (!previewUrl) {
      return;
    }

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = containerWidth;
      canvas.height = containerHeight;

      const scaledWidth = img.width * zoom;
      const scaledHeight = img.height * zoom;

      const drawX = (containerWidth - scaledWidth) / 2 + positionX;
      const drawY = (containerHeight - scaledHeight) / 2 + positionY;

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        drawX,
        drawY,
        scaledWidth,
        scaledHeight
      );

      const dataUrl = canvas.toDataURL("image/png");
      const fileName = `${name}.png`;
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = fileName;
      a.click();
    };
    img.src = previewUrl;
  };
  //#endregion

  //#endregion

  //#region 学科チェック連動
  const [itcheck, setItCheck] = React.useState([false, false, false, false]);

  const it = (event) => {
    setItCheck([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const it4 = (event) => {
    setItCheck([event.target.checked, itcheck[1], itcheck[2], itcheck[3]]);
  };

  const it3 = (event) => {
    setItCheck([itcheck[0], itcheck[1], event.target.checked, itcheck[3]]);
  };

  const it2 = (event) => {
    setItCheck([itcheck[0], event.target.checked, itcheck[2], itcheck[3]]);
  };

  const it321 = (event) => {
    setItCheck([itcheck[0], itcheck[1], itcheck[2], event.target.checked]);
  };

  const [gamecheck, setGameCheck] = React.useState([false, false, false]);

  const game = (event) => {
    setGameCheck([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const game4 = (event) => {
    setGameCheck([event.target.checked, gamecheck[1], gamecheck[2]]);
  };
  const game2 = (event) => {
    setGameCheck([gamecheck[0], event.target.checked, gamecheck[2]]);
  };
  const game21 = (event) => {
    setGameCheck([gamecheck[0], gamecheck[1], event.target.checked]);
  };

  const [eizocheck, setEizoCheck] = React.useState([false, false]);

  const eizo = (event) => {
    setEizoCheck([event.target.checked, event.target.checked]);
  };
  const eizo3 = (event) => {
    setEizoCheck([event.target.checked, eizocheck[1]]);
  };
  const eizo2 = (event) => {
    setEizoCheck([eizocheck[0], event.target.checked]);
  };

  const [denkicheck, setDenkiCheck] = React.useState([false, false]);

  const denki = (event) => {
    setDenkiCheck([event.target.checked, event.target.checked]);
  };
  const denki3 = (event) => {
    setDenkiCheck([event.target.checked, denkicheck[1]]);
  };
  const denki2 = (event) => {
    setDenkiCheck([denkicheck[0], event.target.checked]);
  };

  const [tsusincheck, setTsusinCheck] = React.useState([false, false]);

  const tsusin = (event) => {
    setTsusinCheck([event.target.checked, event.target.checked]);
  };
  const tsusin3 = (event) => {
    setTsusinCheck([event.target.checked, tsusincheck[1]]);
  };
  const tsusin2 = (event) => {
    setTsusinCheck([tsusincheck[0], event.target.checked]);
  };

  const [kikaicheck, setKikaiCheck] = React.useState([false, false]);

  const kikai = (event) => {
    setKikaiCheck([event.target.checked, event.target.checked]);
  };
  const kikai3 = (event) => {
    setKikaiCheck([event.target.checked, kikaicheck[1]]);
  };
  const kikai2 = (event) => {
    setKikaiCheck([kikaicheck[0], event.target.checked]);
  };

  const all = (event) => {
    setItCheck([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    setGameCheck([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    setEizoCheck([event.target.checked, event.target.checked]);
    setDenkiCheck([event.target.checked, event.target.checked]);
    setTsusinCheck([event.target.checked, event.target.checked]);
    setKikaiCheck([event.target.checked, event.target.checked]);
  };
  //#endregion

  //確認画面で選択学科を表示する
  const generateSelectedCoursesText = (
    itcheck,
    gamecheck,
    eizocheck,
    denkicheck,
    tsusincheck,
    kikaicheck
  ) => {
    const allChecked =
      itcheck.every(Boolean) &&
      gamecheck.every(Boolean) &&
      eizocheck.every(Boolean) &&
      denkicheck.every(Boolean) &&
      tsusincheck.every(Boolean) &&
      kikaicheck.every(Boolean);

    if (allChecked) {
      return "不問";
    }

    const courses = [];
    const sendcourses = [];

    if (itcheck.every(Boolean)) {
      courses.push("コンピューター・IT");
      sendcourses.push("it4", "it3", "it2", "it1");
    } else {
      const subCourses = [];
      if (itcheck[0]) {
        subCourses.push("4年");
        sendcourses.push("it4");
      }
      if (itcheck[1]) {
        subCourses.push("2年");
        sendcourses.push("it2");
      }
      if (itcheck[2]) {
        subCourses.push("3年");
        sendcourses.push("it3");
      }
      if (itcheck[3]) {
        subCourses.push("3年・2年＋1年");
        sendcourses.push("it1");
      }
      if (subCourses.length > 0)
        courses.push(`コンピューター・IT(${subCourses.join("、")})`);
    }

    if (gamecheck.every(Boolean)) {
      courses.push("ゲーム・CG");
      sendcourses.push("game4", "game2", "game1");
    } else {
      const subCourses = [];
      if (gamecheck[0]) {
        subCourses.push("4年");
        sendcourses.push("game4");
      }
      if (gamecheck[1]) {
        subCourses.push("2年");
        sendcourses.push("game2");
      }
      if (gamecheck[2]) {
        subCourses.push("2年+1年");
        sendcourses.push("game1");
      }
      if (subCourses.length > 0)
        courses.push(`ゲーム・CG(${subCourses.join("、")})`);
    }

    if (eizocheck.every(Boolean)) {
      courses.push("映像・音響");
      sendcourses.push("eizo2", "eizo1");
    } else {
      const subCourses = [];
      if (eizocheck[0]) {
        subCourses.push("2年+1年");
        sendcourses.push("eizo1");
      }
      if (eizocheck[1]) {
        subCourses.push("2年");
        sendcourses.push("eizo2");
      }
      if (subCourses.length > 0)
        courses.push(`映像・音響(${subCourses.join("、")})`);
    }

    if (denkicheck.every(Boolean)) {
      courses.push("電気");
      sendcourses.push("denki2", "denki1");
    } else {
      const subCourses = [];
      if (denkicheck[0]) {
        subCourses.push("2年+1年");
        sendcourses.push("denki1");
      }
      if (denkicheck[1]) {
        subCourses.push("2年");
        sendcourses.push("denki2");
      }
      if (subCourses.length > 0) courses.push(`電気(${subCourses.join("、")})`);
    }

    if (tsusincheck.every(Boolean)) {
      courses.push("情報通信");
      sendcourses.push("tsusin2", "tsusin1");
    } else {
      const subCourses = [];
      if (tsusincheck[0]) {
        subCourses.push("2年+1年");
        sendcourses.push("tsusin1");
      }
      if (tsusincheck[1]) {
        subCourses.push("2年");
        sendcourses.push("tsusin2");
      }
      if (subCourses.length > 0)
        courses.push(`情報通信(${subCourses.join("、")})`);
    }

    if (kikaicheck.every(Boolean)) {
      courses.push("機械・CADデザイン");
      sendcourses.push("kikai2", "kikai1");
    } else {
      const subCourses = [];
      if (kikaicheck[0]) {
        subCourses.push("2年+1年");
        sendcourses.push("kikai1");
      }
      if (kikaicheck[1]) {
        subCourses.push("2年");
        sendcourses.push("kikai2");
      }
      if (subCourses.length > 0)
        courses.push(`機械・CADデザイン(${subCourses.join("、")})`);
    }

    console.log(sendcourses);
    return courses.length > 0 ? courses.join("、") : "不問";
  };

  //ステップごとのコンテンツ
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        //入力制約と確認内容との比較処理　未完成
        const isDifferentEmail = email !== email2;
        const isDifferentPass = password !== password2;
        return (
          <StepLayout>
            <Typography variant="h5" align="center">
              基本情報入力
            </Typography>
            <CustomField
              id="companyname"
              label="会社名"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomField
              id="companyemail"
              label="メールアドレス"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomField
              id="companyemail2"
              label="メールアドレス（確認用）"
              value={email2}
              type="email"
              onChange={(e) => setEmail2(e.target.value)}
            />
            <CustomField
              id="companypass"
              label="パスワード"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <CustomField
              id="companypass2"
              label="パスワード (確認用)"
              value={password2}
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </StepLayout>
        );
      case 1:
        return (
          <StepLayout>
            <Typography variant="h5" align="center">
              企業情報入力
            </Typography>

            <FormControl sx={{ width: "90%", maxWidth: "400px" }} required>
              <InputLabel sx={{ ml: -2 }}>業種</InputLabel>
              <Select
                id="industry"
                variant="standard"
                value={selectindustry}
                onChange={(event) => setSelectIndustry(event.target.value)}
              >
                {industry.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "90%", maxWidth: "400px" }} required>
              <InputLabel sx={{ ml: -2 }}>職種</InputLabel>
              <Select
                id="occupation"
                variant="standard"
                value={selectoccupation}
                onChange={(event) => setSelectOccupation(event.target.value)}
              >
                {occupation.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <CustomField
              id="capital"
              label="資本金"
              value={capital}
              onChange={(e) => valuechange(e, setCapital)}
              unit="百万円"
            />
            <CustomField
              id="sales"
              label="売上高"
              value={sales}
              onChange={(e) => valuechange(e, setSales)}
              unit="百万円"
            />
            <CustomField
              id="employees"
              label="従業員数"
              value={employees}
              onChange={(e) => valuechange(e, setEmployees)}
              unit="人"
            />
          </StepLayout>
        );
      case 2:
        return (
          <StepLayout>
            <Typography variant="h5">求人条件</Typography>
            <Autocomplete
              id="area"
              multiple
              limitTags={3}
              sx={{ width: "90%", maxWidth: "400px" }}
              value={selectarea}
              onChange={(event, newValue) => setSelectArea(newValue)}
              options={area}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="勤務地"
                  variant="standard"
                  required
                />
              )}
            />
            <FormGroup sx={{ width: "90%", maxWidth: "400px" }}>
              <FormLabel required>勤務体系</FormLabel>
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
            </FormGroup>
            <CustomField
              id="holiday"
              label="年間休日"
              value={holiday}
              onChange={(e) => valuechange(e, setHoliday)}
              unit="日"
            />
            <FormGroup sx={{ width: "90%", maxWidth: "400px" }}>
              <FormLabel required>休日制度</FormLabel>
              <RadioGroup
                row
                value={holidaysystem}
                onChange={(event, newValue) => setHolidaysystem(newValue)}
              >
                <FormControlLabel
                  value="完全週休二日制"
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
            </FormGroup>
            <Autocomplete
              multiple
              limitTags={2}
              sx={{ width: "90%", maxWidth: "400px" }}
              value={selectqualification}
              onChange={(event, newValue) => setSelectQualification(newValue)}
              options={qualification}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} label="必須資格" variant="standard" />
              )}
            />
          </StepLayout>
        );
      case 3:
        return (
          <StepLayout>
            <Typography variant="h5">募集学科</Typography>
            <FormGroup sx={{ width: "90%", maxWidth: "400px" }}>
              <Stack direction="row" spacing={0.1} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        itcheck.every(Boolean) &&
                        gamecheck.every(Boolean) &&
                        eizocheck[0] &&
                        eizocheck[1] &&
                        denkicheck[0] &&
                        denkicheck[1] &&
                        tsusincheck[0] &&
                        tsusincheck[1] &&
                        kikaicheck[0] &&
                        kikaicheck[1]
                      }
                      onChange={all}
                    />
                  }
                />
                <Typography variant="h6" p={1} pl={2}>
                  不問
                </Typography>
              </Stack>

              {/* IT 学科のスタック */}
              <Stack direction="row" spacing={0.1} p={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={itcheck.every(Boolean)}
                      indeterminate={
                        itcheck.some(Boolean) && !itcheck.every(Boolean)
                      }
                      onChange={it}
                    />
                  }
                />
                <Accordion
                  sx={{
                    width: "100%", // 幅を100%に設定
                    boxShadow: "none",
                    border: "none",
                  }}
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
                      control={<Checkbox checked={itcheck[0]} onChange={it4} />}
                      label="4年"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={itcheck[2]} onChange={it3} />}
                      label="3年"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={itcheck[1]} onChange={it2} />}
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={itcheck[3]} onChange={it321} />
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
                      checked={gamecheck.every(Boolean)}
                      indeterminate={
                        gamecheck.some(Boolean) && !gamecheck.every(Boolean)
                      }
                      onChange={game}
                    />
                  }
                />
                <Accordion
                  sx={{
                    width: "90%",
                    maxWidth: "400px",
                    boxShadow: "none",
                    border: "none",
                  }}
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
                        <Checkbox checked={gamecheck[0]} onChange={game4} />
                      }
                      label="4年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={gamecheck[1]} onChange={game2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={gamecheck[2]} onChange={game21} />
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
                      checked={eizocheck[0] && eizocheck[1]}
                      indeterminate={eizocheck[0] !== eizocheck[1]}
                      onChange={eizo}
                    />
                  }
                />
                <Accordion
                  sx={{
                    width: "90%",
                    maxWidth: "400px",
                    boxShadow: "none",
                    border: "none",
                  }}
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
                        <Checkbox checked={eizocheck[1]} onChange={eizo2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={eizocheck[0]} onChange={eizo3} />
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
                      checked={denkicheck[0] && denkicheck[1]}
                      indeterminate={denkicheck[0] !== denkicheck[1]}
                      onChange={denki}
                    />
                  }
                />
                <Accordion
                  sx={{
                    width: "90%",
                    maxWidth: "400px",
                    boxShadow: "none",
                    border: "none",
                  }}
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
                        <Checkbox checked={denkicheck[1]} onChange={denki2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={denkicheck[0]} onChange={denki3} />
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
                      checked={tsusincheck[0] && tsusincheck[1]}
                      indeterminate={tsusincheck[0] !== tsusincheck[1]}
                      onChange={tsusin}
                    />
                  }
                />
                <Accordion
                  sx={{
                    width: "90%",
                    maxWidth: "400px",
                    boxShadow: "none",
                    border: "none",
                  }}
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
                        <Checkbox checked={tsusincheck[1]} onChange={tsusin2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={tsusincheck[0]} onChange={tsusin3} />
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
                      checked={kikaicheck[0] && kikaicheck[1]}
                      indeterminate={kikaicheck[0] !== kikaicheck[1]}
                      onChange={kikai}
                    />
                  }
                />
                <Accordion
                  sx={{
                    width: "90%",
                    maxWidth: "400px",
                    boxShadow: "none",
                    border: "none",
                  }}
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
                        <Checkbox checked={kikaicheck[1]} onChange={kikai2} />
                      }
                      label="2年"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={kikaicheck[0]} onChange={kikai3} />
                      }
                      label="2年+1年"
                    />
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </FormGroup>
          </StepLayout>
        );
      case 4:
        //4年のチェック
        const isFourYearSelected = itcheck[0] || gamecheck[0];
        //3年のチェック
        const isThreeYearSelected = itcheck[2];
        //2年のチェック
        const isTwoYearSelected =
          itcheck[1] ||
          gamecheck[1] ||
          eizocheck[1] ||
          denkicheck[1] ||
          tsusincheck[1] ||
          kikaicheck[1];
        //研究科（1年）のチェック
        const isOneYearSelected =
          itcheck[3] ||
          gamecheck[2] ||
          eizocheck[0] ||
          denkicheck[0] ||
          tsusincheck[0] ||
          kikaicheck[0];

        return (
          <StepLayout>
            <Typography variant="h5">給与情報</Typography>

            {isFourYearSelected && (
              <>
                <CustomField
                  id="salary-4"
                  label="4年課程基本給"
                  value={FourYearSalary}
                  onChange={(e) => valuechange(e, setFourYearSalary)}
                  required={false}
                />
                <CustomField
                  id="allowances-4"
                  label="4年課程諸手当"
                  value={FourYearAllowances}
                  onChange={(e) => valuechange(e, setFourYearAllowances)}
                  required={false}
                />
              </>
            )}
            {isThreeYearSelected && (
              <>
                <CustomField
                  id="salary-3"
                  label="3年課程基本給"
                  value={ThreeYearSalary}
                  onChange={(e) => valuechange(e, setThreeYearSalary)}
                  required={false}
                />
                <CustomField
                  id="allowances-3"
                  label="3年課程諸手当"
                  value={ThreeYearAllowances}
                  onChange={(e) => valuechange(e, setThreeYearAllowances)}
                  required={false}
                />
              </>
            )}
            {isTwoYearSelected && (
              <>
                <CustomField
                  id="salary-2"
                  label="2年課程基本給"
                  value={TwoYearSalary}
                  onChange={(e) => valuechange(e, setTwoYearSalary)}
                  required={false}
                />
                <CustomField
                  id="allowances-2"
                  label="2年課程諸手当"
                  value={TwoYearAllowances}
                  onChange={(e) => valuechange(e, setTwoYearAllowances)}
                  required={false}
                />
              </>
            )}
            {isOneYearSelected && (
              <>
                <CustomField
                  id="salary-1"
                  label="1年課程基本給"
                  value={OneYearSalary}
                  onChange={(e) => valuechange(e, setOneYearSalary)}
                  required={false}
                />
                <CustomField
                  id="allowances-1"
                  label="1年課程諸手当"
                  value={OneYearAllowances}
                  onChange={(e) => valuechange(e, setOneYearAllowances)}
                  required={false}
                />
              </>
            )}
          </StepLayout>
        );
      case 5:
        return (
          <StepLayout>
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
          </StepLayout>
        );
      case 6:
        return (
          <StepLayout>
            <Typography variant="h5">画像のアップロード（任意）</Typography>
            <Typography variant="body1">
              企業一覧に表示する画像として使用します
              <br />
              プロフィールで変更することも可能です
            </Typography>
            <Typography variant="body2" color="textSecondary">
              画像ファイル（.jpg, .jpeg, .png）のみ
              <br />
              アップロードできます
            </Typography>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
            />

            {previewUrl && (
              <Box
                ref={containerRef}
                sx={{
                  border: "2px solid black",
                  padding: "10px",
                  width: 300,
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <IconButton
                  onClick={handleMoveUp}
                  style={{
                    position: "absolute",
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <ArrowDropupIcon />
                </IconButton>
                <IconButton
                  onClick={handleMoveDown}
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                  }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
                <IconButton
                  onClick={handleMoveLeft}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    zIndex: 1,
                  }}
                >
                  <ArrowLeftIcon />
                </IconButton>
                <IconButton
                  onClick={handleMoveRight}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    zIndex: 1,
                  }}
                >
                  <ArrowRightIcon />
                </IconButton>
                <IconButton
                  onClick={handleZoomIn}
                  disabled={zoom >= 2}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 2,
                  }}
                >
                  <ZoomInIcon />
                </IconButton>
                <IconButton
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  style={{
                    position: "absolute",
                    top: 40,
                    right: 10,
                    zIndex: 2,
                  }}
                >
                  <ZoomOutIcon />
                </IconButton>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transformOrigin: "center",
                    transform: `scale(${zoom})`,
                  }}
                >
                  <img
                    ref={imageRef}
                    src={previewUrl}
                    alt="Preview"
                    style={{
                      objectFit: "contain",
                      transform: `translate(${positionX}px, ${positionY}px)`,
                    }}
                  />
                </div>
              </Box>
            )}
            {/* <Button variant="contained" color="primary" onClick={handleUpload}>
              アップロード
          </Button> */}
          </StepLayout>
        );
      case 7:
        const selectedCoursesText = generateSelectedCoursesText(
          itcheck,
          gamecheck,
          eizocheck,
          denkicheck,
          tsusincheck,
          kikaicheck
        );

        return (
          <StepLayout>
            <Typography variant="h5">登録確認</Typography>
            <List
              sx={{
                maxWidth: "500px",
                width: "90%",
                margin: "auto",
              }}
            >
              <InputItem primarytext={`会社名　　：　${name}`} />
              <InputItem primarytext={`業種　　　：　${selectindustry}`} />
              <InputItem primarytext={`職種　　　：　${selectoccupation}`} />
              <InputItem primarytext={`資本金　　：　${capital}百万円`} />
              <InputItem primarytext={`売上高　　：　${sales}百万円`} />
              <InputItem primarytext={`従業員数　：　${employees}人`} />
              <InputItem
                primarytext={`勤務地　　：　${selectarea
                  .map((area) => area.title)
                  .join(", ")}`}
              />
              <InputItem
                primarytext={
                  selectqualification.length === 0
                    ? `必須資格　：　なし`
                    : `必須資格　：　${selectqualification
                        .map((qualification) => qualification.title)
                        .join(", ")}`
                }
              />
              <InputItem primarytext={`勤務体系　：　${worktime}`} />
              <InputItem primarytext={`年間休日　：　${holiday}日`} />
              <InputItem primarytext={`休日体系　：　${holidaysystem}`} />
              <InputItem primarytext={`募集学科　：　${selectedCoursesText}`} />
              <List>
                <ListItem>
                  <ListItemText
                    primary="　※募集しない学科がある場合、0円と表示されます"
                    primaryTypographyProps={{
                      sx: {
                        color: "rgba(0, 0, 0, 0.54)",
                        fontSize: "0.8rem",
                        lineHeight: "0.6",
                      },
                    }}
                  />
                </ListItem>
              </List>
              <InputItem
                primarytext={`4年過程基本給 ： ${FourYearSalary}円 / 諸手当 ： ${FourYearAllowances}円`}
              />
              <InputItem
                primarytext={`3年過程基本給 ： ${ThreeYearSalary}円 / 諸手当 ： ${ThreeYearAllowances}円`}
              />
              <InputItem
                primarytext={`2年過程基本給 ： ${TwoYearSalary}円 / 諸手当 ： ${TwoYearAllowances}円`}
              />
              <InputItem
                primarytext={`研究科基本給　： ${OneYearSalary}円 / 諸手当 ： ${OneYearAllowances}円`}
              />
              <InputItem
                primarytext={`求める人物像： ${selectperson.join(", ")}`}
              />
              <ListItem>
                <ListItemText primary={"画像　　　　："} />
                <Box
                  ref={containerRef}
                  sx={{
                    border: "2px solid gray",
                    padding: "10px",
                    width: "150px",
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                    mr: "20%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transformOrigin: "center",
                      transform: `scale(${zoom / 2})`,
                    }}
                  >
                    <img
                      ref={imageRef}
                      src={previewUrl}
                      alt="デフォルト画像が使用されます"
                      style={{
                        objectFit: "contain",
                        transform: `translate(${positionX}px, ${positionY}px)`,
                      }}
                    />
                  </div>
                </Box>
              </ListItem>
            </List>
          </StepLayout>
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
      <div style={{ minHeight: "10vh" }}>{getStepContent(activeStep)}</div>
      <MobileStepper
        variant="dots"
        steps={8}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: "400px", flexGrow: 1, margin: "0 auto" }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            //  disabled={nextdisabled()}
            sx={{ mt: 2 }}
          >
            {activeStep === 7 ? "登録" : "次へ"}
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
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "60%",
            maxWidth: "400px",
            height: "200px",
          },
        }}
      >
        <DialogTitle style={{ textAlign: "center", fontSize: "2rem" }}>
          登録確認
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ textAlign: "center", fontSize: "1.2rem" }}
          >
            登録しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "gray" }}>
            キャンセル
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

/*
作業memo
[済]研究科が常に表示される問題
[済]必須入力チェック
[済]企業情報の業種職種をセレクトボックス
登録完了を知らせるもの
マッチ度のための学科選択データ送信
デザイン（色）ほしいかも
開始前の画面
管理のため次へボタンの制約をコメントアウトしている
最後のほうに１行だけあるのも忘れないように
*/

/*
テキスト入力
数字入力＋単位
オートコンプリート（1つのみ選択）
セレクトボックス（複数選択可）
ラジオボタン
チェックボックス
 */
