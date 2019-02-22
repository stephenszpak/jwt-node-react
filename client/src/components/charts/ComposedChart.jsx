import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'IBC', gross: 289742, net: 280434, returns: 21495,
  },
  {
    name: 'ILS', gross: 134646, net: 125084, returns: 25255,
  },
  {
    name: 'SA', gross: 325345, net: 27549, returns: 6666,
  },
  {
    name: 'INTL', gross: 375240, net: 300000, returns: 20543
  }
];

export default class IqComposedChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="99%" height={225}>

      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Area dataKey="gross" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="net" barSize={20} fill="#413ea0" />
        <Line dataKey="returns" stroke="#ff7300" />
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
