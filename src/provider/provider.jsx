import { PropaneOutlined, SettingsSharp } from "@mui/icons-material";
import React, { createContext, useState, useEffect } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [loginstats, setloginstats] = useState(false);
  const [provideremail, setprovidermail] = useState("@student.com");
  const [providername, setprovidername] = useState("佐藤太郎");
  const [providerKName, setproviderKName] = useState("サトウタロウ");
  const [providerMan, setproviderMan] = useState("男");
  const [providerGak, setproviderGak] = useState("情報総合学科");
  const [providerYears, setproviderYears] = useState("2004");
  const [providerMonths, setproviderMonths] = useState("9");
  const [providerDays, setproviderDays] = useState("1");
  const [providerAge, setproviderAge] = useState("20");
  const [providerHome, setproviderHome] = useState("愛知県");
  const [providerBye, setproviderBye] = useState("2027年");
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

  const [companyNotice, setcompanyNotice] = useState([
    //#region お知らせ初期データ
    {
      date: "2024/1/1",
      text: "(株)○○システム新卒採用開始しました",
      link: "https://www.nskint.co.jp/recruitment/",
      modalText: (
        <>
          現在の採用人数は【5】人です。主に【コンピューター・IT分野】から募集をしています。詳しくは
          <a
            href="https://www.nskint.co.jp/recruitment/"
            target="_blank"
            rel="noopener noreferrer"
          >
            弊社の採用ページ
          </a>
          をご覧ください。
        </>
      ),
    },
    {
      date: "20??/12/32",
      text: "採用サイトリニューアルのおしらせ",
    },
    {
      date: "2000/10/10",
      text: "システム(株)が企業一覧に追加されました",
      link: "/Matching",
    },
    {
      date: "2024/1/1",
      text: "(株)○○システム新卒採用開始しました",
      link: "/LoginPage",
    },
    {
      date: "20??/12/32",
      text: "採用サイトリニューアルのおしらせ",
    },
    {
      date: "2000/10/10",
      text: "システム(株)が企業一覧に追加されました",
      link: "/Matching",
    },
    //#endregion
  ]);

  // provider.jsx
  const addCompanyNotice = (notice) => {
    setcompanyNotice((prevNotices) => [notice, ...prevNotices]);
  };

  const [providerid, setproviderid] = useState(0);
  const initialBookmark = JSON.parse(localStorage.getItem("bookmark")) || [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  const [bookmark, setBookmark] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
    390,
  ]);
  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const value = {
    loginstats,
    setloginstats,
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

    providerCname,
    setproviderCname,
    providerCKName,
    setproviderCKname,
    providerPlace,
    setproviderPlace,
    providerTEL,
    setproviderTEL,
    providerFAX,
    setproviderFAX,
    providerInfo,
    setproviderInfo,
    providerCOpen,
    setproviderCOpen,
    providerCOpenM,
    setproviderCOpenM,
    providerCapital,
    setproviderCapital,
    providerPeople,
    setproviderPeople,
    providerComePeople,
    setproviderComePeople,
    providerHomepage,
    setproviderHomepage,

    companyNotice,
    addCompanyNotice,

    providerid,
    setproviderid,
    bookmark,
    setBookmark,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
