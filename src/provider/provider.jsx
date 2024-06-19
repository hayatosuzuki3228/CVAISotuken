import React, { createContext, useState } from "react";

// Contextを作成
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [provideremail, setprovidermail] = useState("");
  const [providername, setprovidername] = useState("");
  const [providerid, setproviderid] = useState(null);

  const value = {
    provideremail,
    setprovidermail,
    providername,
    setprovidername,
    providerid,
    setproviderid,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyContext;
