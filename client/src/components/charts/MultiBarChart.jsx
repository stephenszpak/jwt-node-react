import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Sales', net: 4000, gross: 5434, amt: 2400,
  },
  {
    name: 'Returns', net: 3000, gross: 3543, amt: 2210,
  },
];

export default class IqMultiBarChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="99%" height={275}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="gross" fill="#8884d8" />
          <Bar dataKey="net" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
