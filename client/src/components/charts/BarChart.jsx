import React, { PureComponent } from 'react';
import { withTheme } from '@material-ui/core/styles';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const data = [
  {
    name: 'On Hand', Units: 24124, pv: 2400, Cost: 242524,
  },
  {
    name: 'On Order', Units: 14124, pv: 1398, Cost: 2556,
  },
  {
    name: 'Overstock', Units: 2000, pv: 9800, Cost: 252562,
  }
];

class IqBarChart extends PureComponent {
  render() {
    const { theme } = this.props;

    return (
      <ResponsiveContainer width="99%" height={225}>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
          <Bar dataKey="Units" stackId="a" fill={theme.palette.primary.main} />
          {/* <Bar dataKey="Cost" stackId="a" fill={theme.palette.primary.secondary} /> */}
        {/* <Bar dataKey="Units" fill="#ffc658" /> */}
      </BarChart>
    </ResponsiveContainer>
    );
  }
}
export default withTheme()(IqBarChart);
