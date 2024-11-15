// src/provider/SearchContext.js
import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [descriptionTerm, setDescriptionTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [holidayFilter, setHolidayFilter] = useState("");
  const [overtimeFilter, setOvertimeFilter] = useState("");
  const [holidaysysFilter, setHolidaysysFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        descriptionTerm,
        setDescriptionTerm,
        industryFilter,
        setIndustryFilter,
        jobTypeFilter,
        setJobTypeFilter,
        locationFilter,
        setLocationFilter,
        sizeFilter,
        setSizeFilter,
        holidayFilter,
        setHolidayFilter,
        overtimeFilter,
        setOvertimeFilter,
        filteredCompanies,
        holidaysysFilter, // 追加
        setHolidaysysFilter, // 追加
        salaryFilter, // 追加
        setSalaryFilter,
        setFilteredCompanies,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
