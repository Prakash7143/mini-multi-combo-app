import React, { useContext, useEffect, useState } from 'react'
import "./sidebar.css"

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

// import {DashboardIcon, GroupIcon, AddBusinessIcon, ShoppingCartCheckoutIcon, LocalShippingIcon, BarChartIcon, NotificationsNoneIcon, SystemSecurityUpdateWarningIcon, EngineeringIcon, SettingsIcon, PersonIcon,  LogoutIcon } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeCtx';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const {dispatch } = useContext(DarkModeContext)
  const [activeNav, setActiveNav] = useState('');
  
  const loc =  useLocation();
  const pathname = loc.pathname;
  // console.log('loc', loc.pathname);

  useEffect(() => {
    if(pathname === '/users' || pathname === '/users/new' || pathname === '/users/userId'){
      setActiveNav('users');
    }else if(pathname === '/products'){
      setActiveNav('products');
    }else if(pathname === '/wordle'){
      setActiveNav('wordle');
    }else if(pathname === '/todo'){
      setActiveNav('todo');
    }else if(pathname === '/pokemon-api'){
      setActiveNav('pokemon');
    }else if(pathname === '/posting-login'){
      setActiveNav('posting-login');
    }else if(pathname === '/posting-app'){
      setActiveNav('posting-app');
    }else{
      setActiveNav('');
      
    }
  }, [pathname])


  return (
    <div className='sidebar'>
      <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">DigitalBod </span>
          </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li  className={activeNav === '' ? "active" : ""}>
              <DashboardIcon  className="icon"/>
              <span>Dashboard <span style={{color:"red"}}>*</span></span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users"  style={{textDecoration:"none"}}>
            <li  className={activeNav === 'users' ? "active" : ""}>
              <GroupIcon className="icon"/>
              <span>Users <span style={{color:"red"}}>*</span></span>
            </li>
          </Link>
          {/* <Link to="/products" style={{textDecoration:"none"}}>
            <li  className={activeNav === 'products' ? "active" : ""}>
              <AddBusinessIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link> */}
          <li>
            <ShoppingCartCheckoutIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USES</p>
          <li>
            <BarChartIcon className="icon"/>
            <span>Stats</span>
          </li>
          
          <p className="title">STUFFS</p>
          <Link to="/wordle" style={{textDecoration:"none"}}>
            <li  className={activeNav === 'wordle' ? "active" : ""}>
              <SystemSecurityUpdateWarningIcon className="icon"/>
              <span>Wordle Game <span style={{color:"red"}}>*</span></span>
            </li>
          </Link>
          <Link to="/todo" style={{textDecoration:"none"}}>
            <li  className={activeNav === 'todo' ? "active" : ""}>
              <EngineeringIcon className="icon"/>
              <span>ToDo List <span style={{color:"red"}}>*</span></span>
            </li>
          </Link>
          <Link to="/pokemon-api" style={{textDecoration:"none"}}>
            <li  className={activeNav === 'pokemon' ? "active" : ""}>
              <SettingsIcon className="icon"/>
              <span>PokeMon API <span style={{color:"red"}}>*</span></span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <PersonIcon className="icon"/>
            <span>Login Auth</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Make Posts</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div title='Light (Default) Mode' className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
          <div title='Dark Mode' className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
          {/* <div className="colorOption"></div> */}
      </div>
    </div>
  )
}

export default Sidebar