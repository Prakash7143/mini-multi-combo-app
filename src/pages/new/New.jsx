import React, { useState } from 'react'
import "./new.css"
import imgFile from "../../images/img.png"

import { Sidebar, Navbar } from "../../components"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  const [file, setFile] = useState('');
  return (
    <div className='new'>
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1 className="title">Add New User</h1>
          </div>
          <div className="bottom">
              <div className="left">
                <img src={file ? URL.createObjectURL(file) :imgFile} alt="New User" />
                <label></label>
              </div>
              <div className="right">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="formInput">
                    <label htmlFor="usernm">Username</label>
                    <input name='usernm' type="text" placeholder='Enter username' />
                  </div>
                  <div className="formInput">
                    <label htmlFor="file">Upload Pic: <DriveFolderUploadIcon className='icon'/></label>
                    <input id='file' onChange={e => setFile(e.target.files[0])} type="file" style={{display:"none"}} />
                    {file&&file.name}
                  </div>
                  
                  <div className="formInput">
                    <label htmlFor="emailid">EmailId</label>
                    <input name='emailid' type="email" placeholder='Enter email id' />
                  </div>
                  <div className="formInput">
                    <label htmlFor="password">Password</label>
                    <input name='password' type="password" placeholder='Enter password' />
                  </div>
                  <div className="formInput">
                    <label htmlFor="password2">Confirm password</label>
                    <input name='password2' type="password" placeholder='Enter password again' />
                  </div>
                  <div className="formInput">
                    <label htmlFor="contact">Contact</label>
                    <input name='contact' type="text" placeholder='Enter username' />
                  </div>
                  <div className="formInput">
                    <label htmlFor="address">Address</label>
                    <input name='address' type="text" placeholder='Enter username' />
                  </div>
                  <div className="formInput">
                    <label htmlFor="country">Country</label>
                    <input name='country' type="text" placeholder='Enter username' />
                  </div>
                  <button title='This is Just a Demo Form'>Send</button>
                </form>
              </div>
          </div>
        </div>
    </div>
  )
}

export default New