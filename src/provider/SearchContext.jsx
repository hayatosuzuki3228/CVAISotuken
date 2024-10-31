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
        filteredCompanies,
        setFilteredCompanies,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
