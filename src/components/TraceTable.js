import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddTable from "./AddTable";
import { Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function TraceTable() {
  // const [table, setTable] = useState([0]);

  // const AddTadbleBody = () => {
  //   if (table.length !== 6) {
  //     setTable((prevList) => [...prevList, 0]);

  //     console.log(table);
  //   }
  // };

  // const DeleteTableBody = (idx) => {
  //   setTable(table.filter((item) => table.length-1 !== idx));
  //   console.log(table.length -1);
  //   console.log(idx);


  // };
  return (
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
        <AddTable />
        <AddTable />
        <AddTable />
        <AddTable />
        <AddTable />
        <AddTable />
        {/* {table.map((item, idx) => (
          <>
            <AddTable key={idx} />
            <Button
              sx={{ position: "relative", left: "45%" }}
              onClick={() => DeleteTableBody(idx, item)}
            >
              <RemoveIcon />
            </Button>
          </>
        ))} */}
      </Table>
      {/* <Button
        sx={{ position: "relative", left: "45%" }}
        onClick={AddTadbleBody}
      >
        <AddIcon />
      </Button> */}
    </TableContainer>
  );
}
