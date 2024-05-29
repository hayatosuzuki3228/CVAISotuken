import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { allPrefectures } from "../const/prefectures";
import "normalize.css";
export function Conditions2() {
  return (
    <Autocomplete
      multiple
      limitTags={3}
      id="prefectureselect"
      options={allPrefectures}
      renderInput={(params) => (
        <TextField
          {...params}
          label="希望勤務地"
          placeholder="選択してください"
        />
      )}
      sx={{ width: "500px" }}
    />
  );
}
