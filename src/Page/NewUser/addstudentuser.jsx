import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  Box,
  MenuItem,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import "normalize.css";
import { selectBox2, options } from "./Data";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { primarycolor } from "../../const/color";

export function Addstudentuser() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialNamae = location.state?.namae || "";
  const initialKanamae = location.state?.kanamae || "";
  const initialBirthday = location.state?.birthday || "";
  const initialArea = location.state?.area || "";
  const initialSikaku = location.state?.sikaku || [];
  const initialGender = location.state?.gender || "";

  const { email, pass, gakka, sotu, switchpage, hope } = location.state || {};
  const [namae, setnamae] = useState(initialNamae);
  const [kanamae, setkanamae] = useState(initialKanamae);
  const [birthday, setbirthday] = useState(initialBirthday);
  const [gender, setGender] = useState(initialGender);
  const [area, setArea] = useState(initialArea);
  const [sikaku, setSikaku] = useState(initialSikaku);

  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const namaeRegex = /^[一-龠あ-んァ-ヶー]{2,}$/;
  const kanamaeRegex = /^[ァ-ヴ]{2,}$/;
  const birthdayRegex = /^[0-9]{8}$/;

  const enabledButtonStyle = { color: primarycolor };
  const disabledButtonStyle = { color: "#b0b0b0" };

  const onClick = () => {
    return navigate("/addstudent", {
      state: {
        email,
        pass,
        namae,
        kanamae,
        gender,
        birthday,
        area,
        sikaku,
        gakka,
        sotu,
        switchpage,
        hope,
      },
    });
  };

  const onClick1 = () => {
    if (
      birthdayRegex.test(birthday) &&
      kanamaeRegex.test(kanamae) &&
      namaeRegex.test(namae)
    ) {
      return navigate("/addgakka", {
        state: {
          email,
          pass,
          namae,
          kanamae,
          gender,
          birthday,
          area,
          sikaku,
          gakka,
          sotu,
          switchpage,
          hope,
        },
      });
    } else {
      {
        !namaeRegex.test(namae)
          ? setMessage1(
              "2文字以上の全角ひらがなカタカナ漢字を入力してください(スペースなし)"
            )
          : "";
      }
      {
        !kanamaeRegex.test(kanamae)
          ? setMessage2(
              "2文字以上の全角カタカナを入力してください(スペースなし)"
            )
          : "";
      }
      {
        !birthdayRegex.test(birthday)
          ? setMessage3("数字のみ8文字で入力してください 例20041125")
          : "";
      }
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^[0-9]*$/.test(newValue)) {
      setbirthday(newValue);
    }
  };

  const handleChange1 = (event, newValue) => {
    if (newValue.some((option) => option.id === 0)) {
      setSikaku([options.find((option) => option.id === 0)]);
    } else {
      setSikaku(newValue);
    }
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          fontSize={35}
          style={{
            color: primarycolor,
          }}
        >
          新規登録
        </Typography>
        <p></p>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box fontSize={20} sx={{ borderBottom: "1px solid #D3D3D3" }}>
            ID・PS
          </Box>
          <Box
            fontSize={20}
            sx={{ borderBottom: "2px solid ", borderBottomColor: primarycolor }}
          >
            利用者情報
          </Box>
          <Box fontSize={20} sx={{ borderBottom: "1px solid #D3D3D3" }}>
            学科情報
          </Box>
        </Stack>
        <Stack justifyContent="center" alignItems="center" padding={1}>
          <Box width={310}>
            <div>
              <p></p>
              <TextField
                fullWidth
                required
                autoFocus
                label="氏名"
                variant="outlined"
                value={namae}
                onChange={(e) => setnamae(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              />
              <label style={{ fontSize: "9px", color: "#808080" }}>
                全角ひらがなカタカナ漢字2文字以上で入力※スペース無し
              </label>
              <p></p>
              {message1 && (
                <Typography
                  variant="h6"
                  color="red"
                  style={{ marginTop: "20px" }}
                >
                  {message1}
                </Typography>
              )}
              <p></p>
              <TextField
                fullWidth
                required
                label="フリガナ"
                variant="outlined"
                value={kanamae}
                onChange={(e) => setkanamae(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              />
              <label style={{ fontSize: "9px", color: "#808080" }}>
                全角カタカナ2文字以上で入力※スペース無し
              </label>
              <p></p>
              {message2 && (
                <Typography
                  variant="h6"
                  color="red"
                  style={{ marginTop: "20px" }}
                >
                  {message2}
                </Typography>
              )}
              <p></p>
              <RadioGroup
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                row
              >
                <FormControlLabel
                  value={0}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: primarycolor,
                        },
                      }}
                    />
                  }
                  label="男性"
                ></FormControlLabel>
                <FormControlLabel
                  value={1}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: primarycolor,
                        },
                      }}
                    />
                  }
                  label="女性"
                ></FormControlLabel>
                <FormControlLabel
                  value={9}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: primarycolor,
                        },
                      }}
                    />
                  }
                  label="その他"
                ></FormControlLabel>
              </RadioGroup>
              <p></p>
              <TextField
                fullWidth
                required
                label="生年月日"
                variant="outlined"
                value={birthday}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              />
              <label style={{ fontSize: "9px", color: "#808080" }}>
                半角数字8文字で入力 例2023年1月1日→20230101
              </label>
              <p></p>
              {message3 && (
                <Typography
                  variant="h6"
                  color="red"
                  style={{ marginTop: "20px" }}
                >
                  {message3}
                </Typography>
              )}
              <p></p>
              <TextField
                required
                id={selectBox2}
                label="居住地域"
                value={area}
                select
                fullWidth
                onChange={(e) => setArea(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: primarycolor,
                    },
                  },
                }}
              >
                {selectBox2.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
              <p></p>
            </div>
            <div>
              <Autocomplete
                multiple
                id="checkbox"
                options={options}
                disableCloseOnSelect
                isOptionEqualToValue={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.title}
                defaultValue={sikaku || []}
                defaultChecked={sikaku || []}
                value={sikaku}
                renderOption={(props, option, { selected }) => (
                  <li {...props} key={option.id}>
                    <Checkbox
                      key={"checkbox-${option.id}"}
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      disabled={
                        sikaku.some((selectOption) => selectOption.id === 0) &&
                        option.id !== 0
                      }
                    />
                    {option.title}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    required
                    {...params}
                    label="保有資格"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: primarycolor,
                        },
                      },
                    }}
                  />
                )}
                onChange={handleChange1}
              />
            </div>
          </Box>
        </Stack>
      </Box>
      <p></p>
      <Stack direction="row" spacing={20} justifyContent="center">
        <Box textAlign="left">
          <Button
            style={{
              color: primarycolor,
            }}
            onClick={onClick}
          >
            戻る
          </Button>
        </Box>
        <Box textAlign="right">
          <Button
            style={
              !area ||
              namae === "" ||
              kanamae === "" ||
              birthday === "" ||
              gender === "" ||
              sikaku.length < 1
                ? disabledButtonStyle
                : enabledButtonStyle
            }
            disabled={
              !area ||
              namae === "" ||
              kanamae === "" ||
              birthday === "" ||
              gender === "" ||
              sikaku.length < 1
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
