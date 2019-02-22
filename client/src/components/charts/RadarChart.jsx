import React, { PureComponent } from 'react';
import {withTheme} from '@material-ui/core/styles';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const data = [
  {
    subject: 'Gross', cost: 120, units: 110, fullMark: 150,
  },
  {
    subject: 'Net', cost: 98, units: 130, fullMark: 150,
  },
  {
    subject: 'Returns', cost: 86, units: 130, fullMark: 150,
  }
];

class IqRadarChart extends PureComponent {

  render() {
    const {theme} = this.props;
    return (
      <ResponsiveContainer width="99%" height={275}>

      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Cost" dataKey="cost" stroke="#8884d8" fill={theme.palette.primary.main} fillOpacity={0.6} />
          <Radar name="Units" dataKey="units" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default withTheme()(IqRadarChart);