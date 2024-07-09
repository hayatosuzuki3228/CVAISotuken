import React, { createContext, useState } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providerSaveEmail, setproviderSaveEmail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerSaveName, setproviderSaveName] = useState("");

  const value = {
    provideremail,
    setprovidermail,
    providerSaveEmail,
    setproviderSaveEmail,
    providername,
    setprovidername,
    providerSaveName,
    setproviderSaveName,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
