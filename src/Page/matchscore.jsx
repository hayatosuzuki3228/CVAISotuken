import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function Matchscore() {
  const location = useLocation();
  const { Prefectures, Salary, Holiday, Employees, Detail } =
    location.state || {};

  return (
    <div>
      <Typography variant="body1" color="initial">
        選択した都道府県: {Prefectures && Prefectures.join(", ")}
      </Typography>
      <Typography variant="body1" color="initial">
        Salary: {Salary}
      </Typography>
      <Typography variant="body1" color="initial">
        Holiday: {Holiday}
      </Typography>
      <Typography variant="body1" color="initial">
        Employees: {Employees}
      </Typography>
      <Typography variant="body1" color="initial">
        Detail: {Detail}
      </Typography>
    </div>
  );
}
