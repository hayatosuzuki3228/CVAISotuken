import React, { createContext, useState } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerid, setproviderid] = useState(0);

  const value = {
    provideremail,
    setprovidermail,
    providername,
    setprovidername,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
