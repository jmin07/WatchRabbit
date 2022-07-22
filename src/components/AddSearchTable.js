import data from "../data";
import { useState, useMemo } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Paper, Button, InputBase } from "@mui/material";
import { DBdataContext } from "../contexts/DBdataContext";
import { useContext } from "react";

export default function AddSearchTable({ children, props }) {
  const { DBdata } = useContext(DBdataContext);

  return (
    <>
      {DBdata.map((DBdata) => (
        <TableRow>
          <TableCell
            align="center"
            sx={{ borderRight: "dotted 1px lightgray" }}
          >
            {DBdata.Region} / {DBdata.Province}
          </TableCell>
          <TableCell
            align="center"
            sx={{ borderRight: "dotted 1px lightgray" }}
          >
            {DBdata.Nickname} / {DBdata.Temperature}
          </TableCell>
          <TableCell
            align="center"
            sx={{ borderRight: "dotted 1px lightgray" }}
          >
            {DBdata.Title}
          </TableCell>
          <TableCell
            align="center"
            sx={{ borderRight: "dotted 1px lightgray" }}
          >
            {DBdata.Classification}
          </TableCell>
          <TableCell
            align="center"
            sx={{ borderRight: "dotted 1px lightgray" }}
          >
            {DBdata.Price}
          </TableCell>
          <TableCell align="center">
            <a href={DBdata.URL}>
              <Button variant="outlined">이동</Button>
            </a>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
