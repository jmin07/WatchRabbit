import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddTable from "./AddTable";

export default function TraceTable() {
  return (
    <TableContainer component={Paper} variant="outlined" sx={{background:""}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 2px lightgray", width: "12rem" }}
            >
              지역
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 2px lightgray", width: "12rem" }}
            >
              동네
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 2px lightgray", width: "12rem" }}
            >
              제품명
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 2px lightgray", width: "12rem" }}
            >
              최저가
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "dotted 2px lightgray", width: "12rem" }}
            >
              최고가
            </TableCell>
            <TableCell align="center">추적</TableCell>
          </TableRow>
        </TableHead>
        <AddTable />
        <AddTable />
      </Table>
    </TableContainer>
  );
}
