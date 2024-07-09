import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { prefectures, cities } from "../../const/locations"; // locations.js から都道府県と市町村のデータをインポート

export function LocationSelector({ onChange }) {
  const [selectedPrefectures, setSelectedPrefectures] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const handlePrefectureChange = (event) => {
    const selectedPrefecturesIds = event.target.value;
    setSelectedPrefectures(selectedPrefecturesIds);
    setSelectedCities([]);
    onChange(selectedPrefecturesIds, "prefecture");
  };

  const handleCityChange = (event) => {
    const selectedCities = event.target.value;
    setSelectedCities(selectedCities);
    onChange(selectedCities, "city");
  };

  return (
    <Box mb={2}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="location-label">都道府県と市町村</InputLabel>
        <Select
          labelId="location-label"
          multiple
          value={[...selectedPrefectures, ...selectedCities]}
          onChange={(event) => {
            const { value } = event.target;
            const prefecturesSelected = value.filter((v) =>
              prefectures.some((p) => p.id === v)
            );
            const citiesSelected = value.filter(
              (v) => !prefecturesSelected.includes(v)
            );
            setSelectedPrefectures(prefecturesSelected);
            setSelectedCities(citiesSelected);
            onChange(prefecturesSelected, "prefecture");
            onChange(citiesSelected, "city");
          }}
          renderValue={(selected) => {
            const prefectureNames = selectedPrefectures.map(
              (id) => prefectures.find((p) => p.id === id).name
            );
            const cityNames = selectedCities;
            return [...prefectureNames, ...cityNames].join(", ");
          }}
        >
          {prefectures.map((prefecture) => (
            <MenuItem key={prefecture.id} value={prefecture.id}>
              <Checkbox checked={selectedPrefectures.includes(prefecture.id)} />
              <ListItemText primary={prefecture.name} />
            </MenuItem>
          ))}
          {selectedPrefectures.flatMap((prefectureId) =>
            cities[prefectureId].map((city) => (
              <MenuItem key={city} value={city}>
                <Checkbox checked={selectedCities.includes(city)} />
                <ListItemText primary={city} />
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
