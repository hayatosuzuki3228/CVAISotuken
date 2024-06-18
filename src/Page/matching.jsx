import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Button,
  Box,
  TextField,
  Autocomplete,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import companies from "../const/companies";

const options = companies.map((company) => ({
  label: company.name,
  id: company.id, // 企業IDを追加
}));

export function Matching() {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyChange = (event, value) => {
    setSelectedCompany(value);
  };

  const handleCompanyInfoClick = () => {
    if (selectedCompany && selectedCompany.id) {
      navigate(`/companyinformation`);
    }
  };

  const onClick = () => {
    navigate("/Matchtable");
  };

  return (
    <body>
      <Box bgcolor="#6495ed" p={2}>
        <Stack direction="row" justifyContent="flex-start" alignSelf="center">
          <h1>名産会マッチング</h1>
          <div id="hart">
            <IconButton
              aria-label="ハート"
              onClick={() => navigate("/Matchdo")}
            >
              <FavoriteIcon sx={{ color: "#ff1493", fontSize: 60 }} />
            </IconButton>
          </div>
          <div id="mylist">
            <IconButton
              aria-label="マイリスト"
              onClick={() => navigate("/mylist")}
            >
              <PersonIcon sx={{ color: "black", fontSize: 60 }} />
            </IconButton>
          </div>
          <div id="setting">
            <IconButton aria-label="設定" onClick={() => navigate("/Setting")}>
              <SettingsIcon sx={{ color: "gray", fontSize: 60 }} />
            </IconButton>
          </div>
        </Stack>
      </Box>

      <div className="gamen">
        <div className="menu">
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <div id="b1">
              <Button
                onClick={() =>
                  (window.location.href =
                    "http://career-center.nkc.internal/kyujin-kensaku.html")
                }
                sx={{
                  width: 250,
                  height: 100,
                  fontSize: 40,
                  padding: 5,
                }}
                variant="contained"
              >
                企業検索
              </Button>
            </div>
            <div id="b2">
              <Button
                onClick={() =>
                  (window.location.href = "http://intra2.denpa.ac.jp/job/2024/")
                }
                sx={{
                  width: 250,
                  height: 100,
                  fontSize: 40,
                  padding: 5,
                }}
                variant="contained"
              >
                求人票
              </Button>
            </div>

            <div id="b3">
              <Button
                onClick={() =>
                  (window.location.href =
                    "http://intra2.denpa.ac.jp/e-learning/job/")
                }
                sx={{
                  width: 250,
                  height: 100,
                  fontSize: 23,
                  padding: 5,
                }}
                variant="contained"
              >
                就職ガイダンス
              </Button>
            </div>
            <div id="b4">
              <Button
                onClick={onClick}
                sx={{
                  width: 250,
                  height: 100,
                  fontSize: 30,
                  padding: 5,
                }}
                variant="contained"
              >
                マッチ度表
              </Button>
            </div>
          </Stack>
        </div>

        <div className="main">
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            onChange={handleCompanyChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="企業名入力"
                variant="outlined"
                sx={{
                  width: 500,
                  backgroundColor: "lightgray",
                }}
              />
            )}
            className="field"
          />
          <div id="b5">
            <Button
              onClick={handleCompanyInfoClick}
              sx={{
                width: 700,
                height: 150,
                fontSize: 50,
                padding: 5,
              }}
              variant="contained"
            >
              企業情報
            </Button>
          </div>
          <div id="b6">
            <Button
              onClick={onClick}
              sx={{
                width: 400,
                height: 150,
                fontSize: 50,
                padding: 5,
              }}
              variant="contained"
            >
              先輩情報
            </Button>
          </div>
          <div id="b7">
            <Button
              onClick={onClick}
              sx={{
                width: 400,
                height: 150,
                fontSize: 50,
                padding: 5,
              }}
              variant="contained"
            >
              AI
            </Button>
          </div>
        </div>
      </div>
      <head>
        <link
          href="matching.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    </body>
  );
}

export default Matching;
