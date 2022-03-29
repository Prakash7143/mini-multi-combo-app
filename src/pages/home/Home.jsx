import React from 'react'
import "./home.css"
import { Sidebar, Navbar, Widget, Charts, Featured, TableComp } from "../../components"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="orders"/>
            <Widget type="earnings"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Charts aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <TableComp/>
          </div>
        </div>
    </div>
   
  )
}

export default Home