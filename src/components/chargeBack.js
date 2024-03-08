import React, { useEffect, useState } from 'react'
import style from './chargeBack.module.css'
import PreLoader1 from './loader'
import axios from './axios'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ChargeBack() {
    const [d, st] = useState({})
    const getData = async ()=>{
        let data = await axios.get("/chargeback")
        st(JSON.parse(data.data))
        console.log(JSON.parse(data.data));

    }
    useEffect(()=>{
getData()
    },[])
  return (
    <div className={style.wrapper}>
      <div className={style.input}>
        ChargeBack Data:
        {/* <input type='date' />
        <div className={style.submit}>Submit</div> */}
        {/* <PreLoader1 /> */}
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ borderBottom: "2px solid grey" }}>
                User Id
              </TableCell>
              <TableCell align="left" sx={{ borderBottom: "2px solid grey" }}>
                Transaction Id
              </TableCell>
              <TableCell align="left" sx={{ borderBottom: "2px solid grey" }}>
                RRN #
              </TableCell>
              <TableCell align="left" sx={{ borderBottom: "2px solid grey" }}>
                Chargeback Check (Predicted Data)
              </TableCell>
              <TableCell align="left" sx={{ borderBottom: "2px solid grey" }}>
                Confidence Value
              </TableCell>
            </TableRow>
          </TableHead>
          {Object.keys(d).length > 0 ? (
            <TableBody>
              {Array.from(Array(10).keys()).map((x) => (
                <TableRow
                  key={d["user_id"][x]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{d["user_id"][x]}</TableCell>
                  <TableCell align="left">{d["transaction_id"][x]}</TableCell>
                  <TableCell align="left">{d["rrn"][x]}</TableCell>
                  <TableCell align="left">{d["is_chargeback"][x]}</TableCell>
                  <TableCell align="left">
                    {d["is_chargeback_confidence"][x]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </div>
  );
}

export default ChargeBack