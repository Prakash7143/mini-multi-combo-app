import React  from "react";
import IncDec from "./pages/inc_dec";
import ToDoMain from "./pages/ToDoMain";

import store from './store';
import { Provider } from "react-redux";

import "../pages/home/home.css"
import { Sidebar, Navbar } from "../components"

function ReduxApp() {
 
  return (
    <Provider store={store}>
       <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                  <div className="App">
                    <IncDec/>
                    <ToDoMain/>
                  </div>
                </div>
            </div>
        </div>
    </Provider>
  );
}

export default ReduxApp;
