import { useState, useEffect, useContext } from "react";
import {
  Button,
  TextField,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Card,
  CardContent,
  Link,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { postData } from "../../sever/api";
import { field } from "../NewUser/Data.jsx";
import { primarycolor } from "../../const/color.js";
import MyContext from "../../provider/provider.jsx";
import { useNavigate } from "react-router-dom";

export function Setcompanynotice() {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [modalText, setModalText] = useState("");
  const [template, setTemplate] = useState("");
  const [templateValues, setTemplateValues] = useState({});
  const [customNumber, setCustomNumber] = useState("");
  const { addCompanyNotice } = useContext(MyContext);
  const navigate = useNavigate();

  const templates = {
    template1:
      "現在の採用人数は【人数】です。主に【分野】から募集をしています。詳しくはリンク先をご覧ください。",
    template2:
      "現在、【職種】の募集を行っています。詳細についてはリンク先をご確認ください。",
    template3:
      "新しいプロジェクトのために【部門】の採用を開始しました。詳しくはリンクをご覧ください。",
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setDate(currentDate);
  }, []);

  const handlePublish = async () => {
    const noticeData = {
      date,
      text,
      link,
      modalText,
    };

    try {
      // サーバーにデータを送信
      //await postData("api/create-notice", noticeData);
      addCompanyNotice(noticeData);
      //alert("お知らせを発行しました！");
      navigate("/");
    } catch (error) {
      console.error("お知らせの発行に失敗しました:", error);
      alert("お知らせの発行に失敗しました。");
    }
  };

  const handleTemplateChange = (event) => {
    const selectedTemplate = event.target.value;
    setTemplate(selectedTemplate);
    const initialTemplateValues = extractTemplateValues(
      templates[selectedTemplate]
    );
    setTemplateValues(initialTemplateValues);
    setModalText(
      fillTemplate(templates[selectedTemplate], initialTemplateValues)
    );
  };

  const handleTemplateValueChange = (key, value) => {
    const updatedValues = { ...templateValues, [key]: value };
    setTemplateValues(updatedValues);
    setModalText(fillTemplate(templates[template], updatedValues));
  };

  const extractTemplateValues = (templateText) => {
    const matches = templateText.match(/【(.*?)】/g) || [];
    const values = {};
    matches.forEach((match) => {
      const key = match.replace(/【|】/g, "");
      values[key] = "";
    });
    return values;
  };

  const fillTemplate = (templateText, values) => {
    let filledText = templateText;
    Object.keys(values).forEach((key) => {
      let value;
      if (key === "人数") {
        value =
          values[key] === "不問"
            ? "不問"
            : values[key]
            ? `${values[key]}人`
            : "";
      } else {
        value = values[key];
      }
      const regex = new RegExp(`【${key}】`, "g");
      filledText = filledText.replace(regex, value);
    });
    return filledText;
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: primarycolor }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            名産会マッチングシステム
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" gap={4} mt={2}>
        {/* 左側の画面 */}
        <Box flex={1} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="作成日"
            value={date}
            fullWidth
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="タイトル"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <TextField
            label="リンク(採用URLなど)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="template-select-label">
              詳細テンプレートを選択
            </InputLabel>
            <Select
              labelId="template-select-label"
              value={template}
              label="詳細テンプレートを選択"
              onChange={handleTemplateChange}
            >
              <MenuItem value="template1">募集テンプレート 1</MenuItem>
              <MenuItem value="template2">募集テンプレート 2</MenuItem>
              <MenuItem value="template3">募集テンプレート 3</MenuItem>
            </Select>
          </FormControl>
          {Object.keys(templateValues).map((key) =>
            key === "人数" ? (
              <FormControl fullWidth key={key}>
                <InputLabel id="人数-select-label">【人数】を選択</InputLabel>
                <Select
                  labelId="人数-select-label"
                  value={templateValues[key]}
                  label="【人数】を選択"
                  onChange={(e) =>
                    handleTemplateValueChange(key, e.target.value)
                  }
                >
                  {[...Array(10).keys()].map((i) => (
                    <MenuItem key={i + 1} value={i + 1}>
                      {i + 1}
                    </MenuItem>
                  ))}
                  <MenuItem value="不問">不問</MenuItem>
                  <MenuItem value="入力">入力</MenuItem>
                </Select>
                {templateValues[key] === "入力" && (
                  <TextField
                    label="人数を入力"
                    value={customNumber}
                    onChange={(e) => {
                      setCustomNumber(e.target.value);
                      handleTemplateValueChange(key, e.target.value);
                    }}
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                )}
              </FormControl>
            ) : key === "分野" ? (
              <FormControl fullWidth key={key}>
                <InputLabel id="分野-select-label">【分野】を選択</InputLabel>
                <Select
                  labelId="分野-select-label"
                  value={templateValues[key]}
                  label="【分野】を選択"
                  onChange={(e) =>
                    handleTemplateValueChange(key, e.target.value)
                  }
                >
                  {field.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                key={key}
                label={`【${key}】を入力`}
                value={templateValues[key]}
                onChange={(e) => handleTemplateValueChange(key, e.target.value)}
                fullWidth
              />
            )
          )}
          <Button variant="contained" color="primary" onClick={handlePublish}>
            お知らせを発行
          </Button>
        </Box>
        {/* 右側の画面*/}
        <Box
          flex={1}
          p={2}
          border={1}
          borderColor="grey.300"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h5" gutterBottom>
            学生側が受け取るお知らせ
          </Typography>
          <Card variant="outlined" sx={{ width: "80%", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {text}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {modalText}
              </Typography>
              {link && (
                <Typography variant="body1" gutterBottom>
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    リンク
                  </Link>{" "}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}
