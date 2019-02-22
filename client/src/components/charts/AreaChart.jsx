import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'On Hand', Units: 24124, pv: 2400, Net: 2400,
  },
  {
    name: 'On Order', Units: 14124, pv: 1398, Net: 2210,
  },
  {
    name: 'Overstock', Units: 2000, pv: 9800, Net: 2290,
  }
];

export default class IqAreaChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="99%" height={225}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Units" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </ResponsiveContainer>
    );
  }
}
