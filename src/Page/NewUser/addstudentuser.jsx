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
  Typography,
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
  const initialSikaku = location.state?.sikaku || null;
  const initialGender = location.state?.gender || "";

  const { email, pass, gakka, sotu } = location.state || {};
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
        },
      });
    } else {
      {
        !namaeRegex.test(namae)
          ? setMessage1(
              "2文字以上のひらがなカタカナ漢字を入力してください(スペースなし)"
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

  const enabledButtonStyle = { backgroundColor: "#bbdefb", color: "#000000" };
  const disabledButtonStyle = { backgroundColor: "#d3d3d3", color: "#808080" };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^[0-9]*$/.test(newValue)) {
      setbirthday(newValue);
    }
  };

  return (
    <>
      <Box bgcolor="#21a7dd" p={2}>
        <Stack justifyContent="center" alignItems="center">
          <Typography fontSize={30} color="white">
            新規登録
          </Typography>
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
        <Box width={260}>
          <div>
            <p></p>
            <label>氏名</label>
            <p></p>
            <TextField
              fullWidth
              required
              label="氏名"
              variant="outlined"
              value={namae}
              onChange={(e) => setnamae(e.target.value)}
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
            <label>カタカナ</label>
            <p></p>
            <TextField
              fullWidth
              required
              label="カタカナ"
              variant="outlined"
              value={kanamae}
              onChange={(e) => setkanamae(e.target.value)}
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
            <label>性別</label>
            <p></p>
            <RadioGroup
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              row
            >
              <FormControlLabel
                value="男性"
                control={<Radio />}
                label="男性"
              ></FormControlLabel>
              <FormControlLabel
                value="女性"
                control={<Radio />}
                label="女性"
              ></FormControlLabel>
              <FormControlLabel
                value="その他"
                control={<Radio />}
                label="その他"
              ></FormControlLabel>
            </RadioGroup>
            <p></p>
            <label>生年月日</label>
            <p></p>
            <TextField
              fullWidth
              required
              label="生年月日"
              variant="outlined"
              value={birthday}
              onChange={handleChange}
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
          <Autocomplete
            fullWidth
            multiple
            id="tags-outlined"
            options={options}
            getOptionLabel={(option) => option.title}
            defaultValue={sikaku || []}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                fullWidth
                {...params}
                variant="outlined"
                label="保有資格"
              />
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
              setSikaku(newValue);
            }}
          />
          <label style={{ fontSize: "9px", color: "#808080" }}>
            資格を持っていない人は無しを選んでください
          </label>
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
              !area ||
              namae === "" ||
              kanamae === "" ||
              birthday === "" ||
              gender === "" ||
              !sikaku
                ? disabledButtonStyle
                : enabledButtonStyle
            }
            disabled={
              !area ||
              namae === "" ||
              kanamae === "" ||
              birthday === "" ||
              gender === "" ||
              !sikaku
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
