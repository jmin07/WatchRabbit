import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddSearchTable from "./AddSearchTable";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { useContext } from "react";
import { SumDataContext } from "../contexts/SumDataContext";


export default function SearchTable() {
  const { searchData } = useContext(SearchDataContext);
  const { sumData } = useContext(SumDataContext);
  
  return (
    <>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ background: "" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                데이터 검색일
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                {searchData.userCity} 평균가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                {searchData.userCity} 최저가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                {searchData.userCity} 최고가격
              </TableCell>
              <TableCell align="center" sx={{ width: "9rem" }}>
                {searchData.userCity} 게시글 수
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[0]}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[1]}원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[2]}원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[3]}원
              </TableCell>
              <TableCell align="center">{sumData[4]}개</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p />
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ background: "" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                지역 / 동네
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                판매자/매너온도{/*할 것 매너온도 색변경 */}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                글 제목
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                분류
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                물품 가격
              </TableCell>

              <TableCell align="center" sx={{ width: "9rem" }}>
                게시글 보기
              </TableCell>
            </TableRow>
          </TableHead>
          <AddSearchTable />
        </Table>
      </TableContainer>
    </>
  );
}
