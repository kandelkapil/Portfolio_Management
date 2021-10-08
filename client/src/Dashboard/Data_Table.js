import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrentPrice from "./CurrentPrice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Nabil Debenture 2082", 1020.0),
  createData("Nepal SBI Bank Debenture 2086", 1025),
  createData("Prabhu Bank Debenture 2084", 1028),
  createData("NIC Asia Debenture 2083/84", 1024),
  createData("Agricultural Bank Debenture 2083", 1032),
  createData("SBL Debenture 2082", 1025),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper} sx={{ width: 300 }}>
      <Table sx={{ minWidth: 270 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Trading Companies</TableCell>
            <TableCell align="right">Price Per Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
