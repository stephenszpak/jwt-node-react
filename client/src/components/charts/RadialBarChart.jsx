import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '0-30', eanCount: 2423, pv: 2400, fill: '#8884d8',
  },
  {
    name: '31-60', eanCount: 2124, pv: 4567, fill: '#83a6ed',
  },
  {
    name: '61-90', eanCount: 1254, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '91-120', eanCount: 1111, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '120+', eanCount: 593, pv: 3908, fill: '#a4de6c',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};


export default class IqRadialBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="99%" height={275}>
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="eanCount" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
