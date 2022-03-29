import React, { useState } from 'react'
import "./dataTable.css"

import { DataGrid } from '@mui/x-data-grid';
import { columns, rows} from "./data"
import {  Link } from "react-router-dom"
import ReactTooltip from 'react-tooltip';

const DataTableComp = () => {
    const [ data, setData] = useState(rows)

    const deleteData = (id) =>{
        setData(data.filter((item) => item.id !== id))
    }
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width:200,
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                        <Link to="/users/userId" style={{textDecoration:"none"}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div data-tip='Delete Temporarily' data-place="right" onClick={() => deleteData(params.row.id)} className="deleteButton">Delete</div>
                        <ReactTooltip  />
                    </div>
                )
            }
        }
    ]
  return (
    <div className='dataTable'>
        <div className="dataTableTitle">
            Add New User 
            <Link to="/users/new" className='linkBtn' >
                Add New
            </Link>
        </div>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid className='datagrid'
                rows={data}
                columns={columns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </div>
  )
}

export default DataTableComp