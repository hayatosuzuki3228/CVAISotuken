import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  Box,
  MenuItem,
  Autocomplete,
  TextField,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import "normalize.css";
import { selectBox2, options } from "./Data";

export function Addstudentuser() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const initialNamae = location.state?.namae || "";
  const initialKanamae = location.state?.kanamae || "";
  const initialBirthday = location.state?.birthday || "";
  const initialArea = location.state?.area || "";
  const initialSelectedOptions = location.state?.selectedOptions || "";

  const { email, pass, myVariable, myVariable1 } = location.state || {};
  const onClick = () => {
    navigate("/", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        birthday,
        area,
        selectedOptions,
        myVariable,
        myVariable1,
      },
    });
  };

  const onClick1 = () => {
    navigate("/addgakka", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        birthday,
        area,
        selectedOptions,
        myVariable,
        myVariable1,
      },
    });
  };

  const [namae, setnamae] = useState(initialNamae);
  const [kanamae, setkanamae] = useState(initialKanamae);
  const [birthday, setbirthday] = useState(initialBirthday);
  const [male, setmale] = useState("");
  const [other, setother] = useState("");

  const [area, setArea] = useState(initialArea);
  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  const enabledButtonStyle = { backgroundColor: "#bbdefb", color: "#000000" };
  const disabledButtonStyle = { backgroundColor: "#d3d3d3", color: "#808080" };

  return (
    <>
      <Box bgcolor="#66aacc" p={2}>
        <Stack justifyContent="center" alignItems="center">
          <h1>新規登録</h1>
        </Stack>
      </Box>
      <Stack
        direction="row"
        spacing={8}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          style={{
            border: "2px solid #e0ffff",
            padding: "16px",
          }}
        >
          ID・PS
        </Box>
        <Box bgcolor="#e0ffff" p={2}>
          <strong>利用者情報</strong>
        </Box>
        <Box
          style={{
            border: "2px solid #e0ffff",
            padding: "16px",
          }}
        >
          学科情報
        </Box>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <div>
          <p></p>
          <label>氏名</label>
          <p></p>
          <TextField
            required
            label="氏名"
            variant="outlined"
            value={namae}
            onChange={(e) => setnamae(e.target.value)}
          />
          <p></p>
          <label>カタカナ</label>
          <p></p>
          <TextField
            required
            label="カタカナ"
            variant="outlined"
            value={kanamae}
            onChange={(e) => setkanamae(e.target.value)}
          />
          <p></p>
          <RadioGroup required defaultValue="male">
            性別
            <Box
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={1}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="男"
                onChange={(e) => setmale(e.target.value)}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="女"
                onChange={(e) => setother(e.target.value)}
              />
            </Box>
          </RadioGroup>
          <label>生年月日</label>
          <p></p>
          <TextField
            required
            label="生年月日"
            variant="outlined"
            value={birthday}
            onChange={(e) => setbirthday(e.target.value)}
          />
          <p></p>
          <label>居住地域</label>
          <p></p>
          <TextField
            required
            id={selectBox2}
            label="居住地域"
            value={area}
            select
            fullWidth
            onChange={(e) => setArea(e.target.value)}
          >
            {selectBox2.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <p></p>
          <label>保有資格</label>
          <p></p>
        </div>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
        <Box width={230}>
          <Autocomplete
            fullWidth
            multiple
            id="tags-outlined"
            options={options}
            getOptionLabel={(option) => option.title}
            defaultValue={selectedOptions || []}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="保有資格" />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.title}
                  {...getTagProps({ index })}
                />
              ))
            }
            onChange={(event, newValue) => {
              setSelectedOptions(newValue);
            }}
          />
        </Box>
      </Stack>
      <p></p>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box textAlign="left">
          <Button
            variant="contained"
            style={{ backgroundColor: "#bbdefb", color: "#000000" }}
            onClick={onClick}
          >
            戻る
          </Button>
        </Box>
        <Box textAlign="right">
          <Button
            variant="contained"
            style={
              !area || namae === "" || kanamae === "" || birthday === ""
                ? disabledButtonStyle
                : enabledButtonStyle
            }
            disabled={
              !area || namae === "" || kanamae === "" || birthday === ""
            }
            onClick={onClick1}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
