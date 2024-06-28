import React, { createContext, useState, useEffect } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerid, setproviderid] = useState(0);
  const initialBookmark = JSON.parse(localStorage.getItem("bookmark")) || [
    1, 2, 3, 4, 5, 6,
  ];
  const [bookmark, setBookmark] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const value = {
    provideremail,
    setprovidermail,
    providername,
    setprovidername,
    providerid,
    setproviderid,
    bookmark,
    setBookmark,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
