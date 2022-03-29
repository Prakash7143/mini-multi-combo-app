import React from 'react'
import "./list.css"
import { Sidebar, Navbar, DataTableComp } from "../../components"

const List = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <DataTableComp/>
        </div>
    </div>
  )
}

export default List