import React from "react";
import { Stack, Button, Box, TextField, Autocomplete } from "@mui/material";
const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
];
export function Matching() {
  return (
    <body>
      <Box bgcolor="#66aacc" p={2}>
        <Stack justifyContent="center" alignSelf="center">
          <h1>マッチング</h1>
        </Stack>
      </Box>
      <div class="gamen">
        <div class="menu">
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <div id="b1">
              <Button
                onClick={() =>
                  (window.location.href = "http://abehiroshi.la.coocan.jp/")
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
                  (window.location.href = "http://abehiroshi.la.coocan.jp/")
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
                  (window.location.href = "http://abehiroshi.la.coocan.jp/")
                }
                sx={{
                  width: 250,
                  height: 100,
                  fontSize: 20,
                  padding: 5,
                }}
                variant="contained"
              >
                会社名と事業内容一覧表
              </Button>
            </div>
            <div id="b4">
              <Button
                onClick={() =>
                  (window.location.href = "http://abehiroshi.la.coocan.jp/")
                }
                sx={{
                  width: 250,
                  height: 100,
                  fontSize: 30,
                  padding: 5,
                }}
                variant="contained"
              >
                マッチ度一覧表
              </Button>
            </div>
          </Stack>
        </div>

        <div class="main">
          <Autocomplete
            onChange
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="企業名入力" variant="outlined" />
            )}
          />
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
