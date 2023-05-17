import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
     Legend, ResponsiveContainer } from 'recharts';
const Deshboard = () => {

    const marksArray = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='mt-8 mx-12 md:grid-cols-1'>
            <LineChart
               width={500}
               height={300}
               data = {marksArray}
             >
                <Line dataKey={'pv'} ></Line>
                <Line stroke="#8884d8" dataKey={'amt'} ></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <CartesianGrid></CartesianGrid>
                <ResponsiveContainer></ResponsiveContainer>
            </LineChart>

        </div>
    );
};

export default Deshboard;