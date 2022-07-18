import data from "../data";
import { useState, useMemo } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Paper, Button, InputBase } from "@mui/material";

export default function AddSearchTable({ children, props }) {
  //props를 받아와서 props.지역,동네,판매자 등등 으로 동적으로 뿌리게 하기
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          서울 / 가산동
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          박경준 / 36.5
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          삼성 노트북 팝니다
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          노트북
        </TableCell>
        <TableCell align="center" sx={{ borderRight: "dotted 2px lightgray" }}>
          450.000원
        </TableCell>
        <TableCell align="center">
          <Button variant="outlined">이동</Button>
          {children}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
