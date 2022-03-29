import React, { useContext } from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

import Img from "../../images/bard.jpg";
import { DarkModeContext } from '../../context/darkModeCtx';

const Navbar = () => {
  const {dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder='Search..'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon  className="icon"/>
            English
          </div>
          <div className="item" title='Toggle Modes' onClick={() => dispatch({type:"TOGGLE"}) }>
            <DarkModeIcon  className="icon"/>
          </div>
          <div className="item">
            <FullscreenIcon  className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon  className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon  className="icon"/>
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListIcon  className="icon"/>
          </div>
          <div className="item">
            <img src={Img} alt="Avatar" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar