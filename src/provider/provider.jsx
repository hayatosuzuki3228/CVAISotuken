import React, { createContext, useState } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerSaveName, setProviderSaveName] = useState("");

  const value = {
    provideremail,
    setprovidermail,
    providername,
    setprovidername,
    providerSaveName,
    setProviderSaveName,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
