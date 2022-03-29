import React from 'react'
import "./single.css"

import Brad from "../../images/bard.jpg"

import { Sidebar, Navbar, Charts, TableComp } from "../../components"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editBtn">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src={Brad} alt="Profile" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Satya Praksah</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemVal">satyaprakash@gmail.com</span>
                  </div>
                  {/*  */}
                  <div className="detailItem">
                    <span className="itemKey">Contact:</span>
                    <span className="itemVal">+91 9876543210</span>
                  </div>
                  {/*  */}
                  <div className="detailItem">
                    <span className="itemKey">Profile:</span>
                    <span className="itemVal">Engineer</span>
                  </div>
                  {/*  */}
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemVal">India</span>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="right">
              <Charts aspect={3/1} title="User Active Status"/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <TableComp/>
          </div>
        </div>
    </div>
  )
}

export default Single