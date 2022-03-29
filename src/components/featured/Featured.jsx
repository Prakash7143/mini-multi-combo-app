import React from 'react'
import "./featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
            </div>
            <p className="title">Total Sales Made Today</p>
            <p className="amount">$450</p>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla error quasi quia vitae in!</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Today</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resultAmount">$126.2k</div>
                    </div>
                </div>
                {/*  */}
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small' />
                        <div className="resultAmount">$126.2k</div>
                    </div>
                </div>
                {/*  */}
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resultAmount">$126.2k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured