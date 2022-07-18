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

  //props를 받아와서 props.지역,동네,판매자 등등 으로 동적으로 뿌리게 하기
  //   var data = [
  //     {
  //       IDX: 10568,
  //       URL: "https://www.daangn.com/articles/19980",
  //       Title: "LG 전자 울트라 PC 그램 노트북 팝니다~",
  //       Price: "850,000원",
  //       Classification: "디지털기기",
  //       Region: "서울",
  //       Province: "강남구",
  //       Local: "일원1동",
  //       Nickname: "당통통닭",
  //       Temperature: "40.5",
  //       UpdateTime: "20220718110559",
  //     },
  //     {
  //       IDX: 14236,
  //       URL: "https://www.daangn.com/articles/37561",
  //       Title: "2차 가격내림 5000원) 노트북 잠금장치 Delta3",
  //       Price: "10,000원",
  //       Classification: "디지털기기",
  //       Region: "서울",
  //       Province: "강남구",
  //       Local: "역삼2동",
  //       Nickname: "뮤즈맘",
  //       Temperature: "41.2",
  //       UpdateTime: "20220718131616",
  //     },
  //   ];
  return (
    <TableBody>
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
    </TableBody>
  );
}
