import React from 'react'
import "./table.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { tableData } from "./tableData";

const TableComp = () => {
  return (
      <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            {/* <TableCell className='tableCell' >Product</TableCell> */}
            <TableCell className='tableCell' >Image</TableCell>
            <TableCell className='tableCell' >Customer</TableCell>
            <TableCell className='tableCell' >Date</TableCell>
            <TableCell className='tableCell' >Amount</TableCell>
            <TableCell className='tableCell' >Payment</TableCell>
            <TableCell className='tableCell' >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              {/* <TableCell className='tableCell'>{row.product}</TableCell> */}
              <TableCell className='tableCell'>
                  <div className="cellWrapper">
                      <img src={row.image} alt=" Product Image" className="image" />
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}> {row.status} </span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp