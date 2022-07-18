import data from "../data";
import { useState, useMemo } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Paper, Button, InputBase } from "@mui/material";

export default function AddTable({children}) {
  const [currentCountry, setCurrentCountry] = useState("서울");
  const [currentCity, setCurrentCity] = useState(data[currentCountry][0]);
  const countries = useMemo(() => Object.keys(data), []);
  const cities = useMemo(() => data[currentCountry], [currentCountry]);
  const onChange = (e) => {
    const currentCountry = e.target.value;
    setCurrentCountry(currentCountry);
    setCurrentCity(data[currentCountry][0]);
  };
  const onChange2 = (e) => {
    setCurrentCity(e.target.value);
  };
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          <select
            name="selectId1"
            id="selectId1"
            onChange={onChange}
            value={currentCountry}
            style={{ padding: "0.4rem", border: "none", outline: "none" }}
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          <select
            name="selectId2"
            id="selectId2"
            value={currentCity}
            onChange={onChange2}
            style={{ padding: "0.4rem", border: "none", outline: "none" }}
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          <input
            placeholder="추적할 물품"
            style={{
              padding: "0.7rem",
              width: "5rem",
              border: "none",
              outline: "none",
            }}
          />
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          <input
            placeholder="최저가"
            style={{
              padding: "0.7rem",
              width: "5rem",
              border: "none",
              outline: "none",
            }}
          />
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          <input
            placeholder="최고가"
            style={{
              padding: "0.7rem",
              width: "5rem",
              border: "none",
              outline: "none",
            }}
          />
        </TableCell>
        <TableCell align="center">
          <Button variant="outlined">이동</Button>
          {children}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
