import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Box, MenuItem } from "@mui/material";
import { Autocomplete, TextField, Chip } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "normalize.css";

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

  const { email, pass } = location.state || {};
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
      },
    });
  };

  const selectBox = [
    { label: "北海道", value: "北海道" },
    { label: "青森県", value: "青森県" },
    { label: "岩手県", value: "岩手県" },
    { label: "宮城県", value: "宮城県" },
    { label: "秋田県", value: "秋田県" },
    { label: "山形県", value: "山形県" },
    { label: "福島県", value: "福島県" },
    { label: "茨城県", value: "茨城県" },
    { label: "栃木県", value: "栃木県" },
    { label: "群馬県", value: "群馬県" },
    { label: "埼玉県", value: "埼玉県" },
    { label: "千葉県", value: "千葉県" },
    { label: "東京都", value: "東京都" },
    { label: "神奈川県", value: "神奈川県" },
    { label: "新潟県", value: "新潟県" },
    { label: "富山県", value: "富山県" },
    { label: "石川県", value: "石川県" },
    { label: "福井県", value: "福井県" },
    { label: "山梨県", value: "山梨県" },
    { label: "長野県", value: "長野県" },
    { label: "岐阜県", value: "岐阜県" },
    { label: "静岡県", value: "静岡県" },
    { label: "愛知県", value: "愛知県" },
    { label: "三重県", value: "三重県" },
    { label: "滋賀県", value: "滋賀県" },
    { label: "京都府", value: "京都府" },
    { label: "大阪府", value: "大阪府" },
    { label: "兵庫県", value: "兵庫県" },
    { label: "奈良県", value: "奈良県" },
    { label: "和歌山県", value: "和歌山県" },
    { label: "鳥取県", value: "鳥取県" },
    { label: "島根県", value: "島根県" },
    { label: "岡山県", value: "岡山県" },
    { label: "広島県", value: "広島県" },
    { label: "山口県", value: "山口県" },
    { label: "徳島県", value: "徳島県" },
    { label: "香川県", value: "香川県" },
    { label: "愛媛県", value: "愛媛県" },
    { label: "高知県", value: "高知県" },
    { label: "福岡県", value: "福岡県" },
    { label: "佐賀県", value: "佐賀県" },
    { label: "長崎県", value: "長崎県" },
    { label: "熊本県", value: "熊本県" },
    { label: "大分県", value: "大分県" },
    { label: "宮崎県", value: "宮崎県" },
    { label: "鹿児島県", value: "鹿児島県" },
    { label: "沖縄県", value: "沖縄県" },
  ];

  const options = [
    { title: "ITパスポート" },
    { title: "情報セキュリティマネジメント" },
    { title: "基本情報技術者" },
    { title: "応用情報技術者" },
    { title: "ITストラテジスト" },
    { title: "システムアーキテクト" },
    { title: "プロジェクトマネージャ" },
    { title: "ネットワークスペシャリスト" },
    { title: "データベーススペシャリスト" },
    { title: "エンベデッドシステムスペシャリスト" },
    { title: "ITサービスマネージャ" },
    { title: "システム監査技術者" },
    { title: "情報処理安全確保支援士" },
  ];

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
            id={selectBox}
            label="居住地域"
            value={area}
            select
            fullWidth
            onChange={(e) => setArea(e.target.value)}
          >
            {selectBox.map((item, index) => (
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
            defaultValue={selectedOptions} //最初選択されていないと真っ白になる
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
