import React from 'react'
import ActualChart from './ActualChart'
// import { data } from "./data"
import "./charts.css"
 
const Charts = ({aspect, title}) => {
  return (
    <div className='chart'>
        <div className="chartitle">{title ?  title : "Last 6-7 months (Revenue)" }</div>
        <ActualChart aspect={aspect} />
    </div>
  )
}

export default Charts