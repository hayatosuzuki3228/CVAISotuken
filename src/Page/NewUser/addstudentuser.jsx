import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Box, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import "normalize.css";

export function Addstudentuser() {
  useEffect(() => {
    document.title = "新規登録";
  }, []);

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const onClick1 = () => {
    navigate("/addgakka");
  };

  const selectBox = [
    { label: "北海道", value: "1" },
    { label: "青森県", value: "2" },
    { label: "岩手県", value: "3" },
    { label: "宮城県", value: "4" },
    { label: "秋田県", value: "5" },
    { label: "山形県", value: "6" },
    { label: "福島県", value: "7" },
    { label: "茨城県", value: "8" },
    { label: "栃木県", value: "9" },
    { label: "群馬県", value: "10" },
    { label: "埼玉県", value: "11" },
    { label: "千葉県", value: "12" },
    { label: "東京都", value: "13" },
    { label: "神奈川県", value: "14" },
    { label: "新潟県", value: "15" },
    { label: "富山県", value: "16" },
    { label: "石川県", value: "17" },
    { label: "福井県", value: "18" },
    { label: "山梨県", value: "19" },
    { label: "長野県", value: "20" },
    { label: "岐阜県", value: "21" },
    { label: "静岡県", value: "22" },
    { label: "愛知県", value: "23" },
    { label: "三重県", value: "24" },
    { label: "滋賀県", value: "25" },
    { label: "京都府", value: "26" },
    { label: "大阪府", value: "27" },
    { label: "兵庫県", value: "28" },
    { label: "奈良県", value: "29" },
    { label: "和歌山県", value: "30" },
    { label: "鳥取県", value: "31" },
    { label: "島根県", value: "32" },
    { label: "岡山県", value: "33" },
    { label: "広島県", value: "34" },
    { label: "山口県", value: "35" },
    { label: "徳島県", value: "36" },
    { label: "香川県", value: "37" },
    { label: "愛媛県", value: "38" },
    { label: "高知県", value: "39" },
    { label: "福岡県", value: "40" },
    { label: "佐賀県", value: "41" },
    { label: "長崎県", value: "42" },
    { label: "熊本県", value: "43" },
    { label: "大分県", value: "44" },
    { label: "宮崎県", value: "45" },
    { label: "鹿児島県", value: "46" },
    { label: "沖縄県", value: "47" },
  ];

  const [namae, setnamae] = useState("");
  const [kanamae, setkanamae] = useState("");
  const [birthday, setbirthday] = useState("");

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
        <Box>ID・PS</Box>
        <Box bgcolor="#e0ffff" p={2}>
          <strong>利用者情報</strong>
        </Box>
        <Box>学科情報</Box>
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
          <RadioGroup defaultValue="male">
            性別
            <Box
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={1}
            >
              <FormControlLabel value="male" control={<Radio />} label="男" />
              <FormControlLabel value="other" control={<Radio />} label="女" />
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
          <TextField required id={selectBox} label="居住地域" select fullWidth>
            {selectBox.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
          <p></p>
          <label>保有資格</label>
          <p></p>
          <TextField></TextField>
          <p></p>
        </div>
      </Stack>
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
            style={{ backgroundColor: "#bbdefb", color: "#000000" }}
            onClick={onClick1}
          >
            次へ
          </Button>
        </Box>
      </Stack>
    </>
  );
}
