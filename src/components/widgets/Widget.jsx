import React from 'react'
import "./widget.css"

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Widget = ({type}) => {
    let data = {
        title:"", isMoney:false, link:"", diff:0, amount: 0, sts: "", icon:'', 
    };
    // const amount = 100;
    // const diff = 20;
    switch (type) {
        case "user":
            data={
                title:"users", isMoney:false, link:"See All Users", diff:25, amount:1526, sts:"positive", icon:<PersonIcon className='icon' style={{backgroundColor: 'rgba(200, 0, 125, 0.35)'}}/>, 
            }
            break;
        case "orders":
            data={
                title:"Orders", isMoney:false, link:"See All Orders", diff:7, amount:265, sts:"negative", icon:<ShoppingCartIcon className='icon'style={{backgroundColor: 'orange'}}/>, 
            }
            break;
        case "earnings":
            data={
                title:"Earnings", isMoney:true, link:"See Net Income", diff:22, amount:560, sts:"positive", icon:<MonetizationOnIcon className='icon' style={{backgroundColor: 'green'}}/>, 
            }
            break;
        case "balance":
            data={
                title:"Balance", isMoney:false, link:"See Details", diff:18, amount:965, sts:"positive", icon:<AccountBalanceIcon className='icon'style={{backgroundColor: 'blue'}}/>, 
            }
            break;
    
        default:
            break;
    }


  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney&& "$ "} {data.amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className={"percentage "+ data.sts} >
               { 
                data.sts === 'positive' ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>
               }
                 {data.diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget