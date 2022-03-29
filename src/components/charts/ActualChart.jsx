import React from 'react'
import "./charts.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from "./data"

const ActualChart = ({aspect}) => {
  
  return (
    <ResponsiveContainer width="100%" aspect={aspect}>
       <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis /> 
          <Tooltip />
          {/* <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
          <Area type="monotone" dataKey="costing" stackId="0" stroke="#f00" fill="#82ca9d" />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#00F" fill="#ffc658" />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default ActualChart