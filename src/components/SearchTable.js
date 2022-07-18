import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddSearchTable from "./AddSearchTable";

export default function SearchTable() {
  
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
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                데이터 검색일
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                전국 평균가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                전국 최저가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                전국 최고가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                전체 게시글 수
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray" }}
              >
                2022/7/18
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray" }}
              >
                330.000원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray" }}
              >
                56.000원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray" }}
              >
                4.500.000원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray" }}
              >
                356.844개
              </TableCell>
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
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                지역 / 동네
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                판매자/매너온도{/*할 것 매너온도 색변경 */}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                글 제목
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                분류
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                물품 가격
              </TableCell>

              <TableCell
                align="center"
                sx={{ borderRight: "dotted 2px lightgray", width: "9rem" }}
              >
                게시글 보기
              </TableCell>
            </TableRow>
          </TableHead>
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
          <AddSearchTable />
        </Table>
      </TableContainer>
    </>
  );
}
