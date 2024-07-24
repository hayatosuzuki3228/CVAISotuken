import React, { createContext, useState, useEffect } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providerSaveEmail, setproviderSaveEmail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerSaveName, setproviderSaveName] = useState("");
  const [providerKName, setProviderKName] = useState("");
  const [providerSaveKName, setProviderSaveKName] = useState("");
  const [providerid, setproviderid] = useState(0);
  const initialBookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
  const [bookmark, setBookmark] = useState(initialBookmark);
  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const value = {
    provideremail,
    setprovidermail,
    providerSaveEmail,
    setproviderSaveEmail,
    providername,
    setprovidername,
    providerSaveName,
    setproviderSaveName,
    providerKName,
    setProviderKName,
    providerSaveKName,
    setProviderSaveKName,
    providerid,
    setproviderid,
    bookmark,
    setBookmark,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
