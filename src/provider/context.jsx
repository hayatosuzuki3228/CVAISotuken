import React, { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  // 初期値をローカルストレージから取得
  const [jobData, setJobData] = useState(() => {
    const savedJobData = localStorage.getItem("jobData");
    return savedJobData
      ? JSON.parse(savedJobData)
      : {
          department: "",
          location: [],
          features: [],
          qualifications: [],
        };
  });

  // jobDataが変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem("jobData", JSON.stringify(jobData));
  }, [jobData]);

  return (
    <JobContext.Provider value={{ jobData, setJobData }}>
      {children}
    </JobContext.Provider>
  );
};
