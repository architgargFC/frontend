import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function BasicTable({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Name</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Ticket #</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Reported Date</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Replied Date</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>PG Name</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>CB Ref #</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Order id</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>PG Id/RRN</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Reported Amount</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Chargeback Reason</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Chargeback Accepted</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>Level</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>MID</TableCell>
            <TableCell align="right" sx={{borderBottom:"2px solid grey"}}>integration mode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row["Name"]}</TableCell>
              <TableCell align="right">{row["Ticket #"]}</TableCell>
              <TableCell align="right">{row["Reported Date"]}</TableCell>
              <TableCell align="right">{row["Replied Date"]}</TableCell>
              <TableCell align="right">{row["PG Name"]}</TableCell>
              <TableCell align="right">{row["CB Ref #"]}</TableCell>
              <TableCell align="right">{row["Order id"]}</TableCell>
              <TableCell align="right">{row["PG Id/RRN"]}</TableCell>
              <TableCell align="right">{row["Reported Amount"]}</TableCell>
              <TableCell align="right">{row["Chargeback Reason"]}</TableCell>
              <TableCell align="right">{row["Chargeback Accepted"]}</TableCell>
              <TableCell align="right">{row["Level"]}</TableCell>
              <TableCell align="right">{row["MID"]}</TableCell>
              <TableCell align="right">{row["integration mode"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
