import React from 'react';
import Navbar from './Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import GridItem from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import apiService from '../services/apiService';
import IqBarChart from '../components/charts/BarChart';
import IqAreaChart from '../components/charts/AreaChart';
import IqPieChart from '../components/charts/PieChart';
class Home extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Grid md={12} container>
            <Card md={6} justify="center" className={classes.card}>
              <CardHeader title="Simple Bar Chart"></CardHeader>
              <CardContent >
                <IqBarChart />
              </CardContent>
            </Card>
            <Card md={6} className={classes.card}>
                <IqPieChart />
            </Card>
          </Grid>
          <Grid md={12}>
          <Card justify="center" className={classes.card}>
            <CardHeader title="Simple Area Chart"></CardHeader>
            <CardContent >
              <IqAreaChart />
            </CardContent>
          </Card>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  pie: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 10px)',
      marginLeft: 0,
      marginRight: 0
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
})

export default withRouter(withStyles(styles)(Home));
