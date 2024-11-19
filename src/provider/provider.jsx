import { SettingsSharp } from "@mui/icons-material";
import React, { createContext, useState, useEffect } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerKName, setproviderKName] = useState("");
  const [providerMan, setproviderMan] = useState("");
  const [providerGak, setproviderGak] = useState("");
  const [providerYears, setproviderYears] = useState("");
  const [providerMonths, setproviderMonths] = useState("");
  const [providerDays, setproviderDays] = useState("");
  const [providerAge, setproviderAge] = useState("");
  const [providerHome, setproviderHome] = useState("");
  const [providerBye, setproviderBye] = useState("");
  const [providerJob, setproviderJob] = useState("");
  const [providerHobby, setproviderHobby] = useState("");
  const [providerSkill, setproviderSkill] = useState("");
  const [providerSSubject, setproviderSSubject] = useState("");
  const [providerKSubject, setproviderKSubject] = useState("");
  const [providerMyPower, setproviderMyPower] = useState("");
  // ↑↑↑User側の変数↑↑↑
  // ↓↓↓企業側の変数↓↓↓
  const [providerCname, setproviderCname] = useState("");
  const [providerCKName, setproviderCKname] = useState("");
  const [providerPlace, setproviderPlace] = useState("");
  const [providerTEL, setproviderTEL] = useState("");
  const [providerFAX, setproviderFAX] = useState("");
  const [providerInfo, setproviderInfo] = useState("");
  const [providerCOpen, setproviderCOpen] = useState("");
  const [providerCOpenM, setproviderCOpenM] = useState("");
  const [providerCapital, setproviderCapital] = useState("");
  const [providerPeople, setproviderPeople] = useState("");
  const [providerComePeople, setproviderComePeople] = useState("");
  const [providerHomepage, setproviderHomepage] = useState("");

  const [providerid, setproviderid] = useState(0);
  const initialBookmark = JSON.parse(localStorage.getItem("bookmark")) || [
    1, 2, 3, 4, 5, 6,
  ];
  const [bookmark, setBookmark] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); //useStateにinitialBookmarkを書く
  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const value = {
    provideremail,
    setprovidermail,
    providername,
    setprovidername,
    providerKName,
    setproviderKName,
    providerMan,
    setproviderMan,
    providerGak,
    setproviderGak,
    providerYears,
    setproviderYears,
    providerMonths,
    setproviderMonths,
    providerDays,
    setproviderDays,
    providerHome,
    setproviderHome,
    providerBye,
    setproviderBye,
    providerAge,
    setproviderAge,
    providerJob,
    setproviderJob,
    providerHobby,
    setproviderHobby,
    providerSkill,
    setproviderSkill,
    providerSSubject,
    setproviderSSubject,
    providerKSubject,
    setproviderKSubject,
    providerMyPower,
    setproviderMyPower,
    providerid,
    setproviderid,
    bookmark,
    setBookmark,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
