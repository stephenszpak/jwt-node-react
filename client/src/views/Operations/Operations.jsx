import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import homeStyle from '../../assets/jss/views/homeStyle.jsx';
import IqMultiBarChart from '../../components/charts/MultiBarChart.jsx';

class OperationsPage extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid md={4} container>
          <IqMultiBarChart />
        </Grid>
      </div>
    );
  }
}

export default withStyles(homeStyle)(OperationsPage);

