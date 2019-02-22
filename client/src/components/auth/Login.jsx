import React from 'react';
import apiService from '../../services/apiService'
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Navbar from '../Navbar';

class Login extends React.Component {
  state = {
    fields: {
      email: '',
      password: ''
    }
  };

  onInputChange(userInput) {
    this.setState({
      fields: {
        ...this.state.fields,
        [userInput.target.name]: userInput.target.value
      }
    })
  }

  onFormSubmit(sub) {
    sub.preventDefault();

    apiService.login(this.state.fields).then(user => {
      this.setState({
        fields: {
          email: '',
          password: ''
        }
      })

      if (user) {
        this.props.onLoginSuccess(user);
        this.props.history.push('/');
      }
    });
  };


  render() {
    const { classes } = this.props;
    const { email, password } = this.state.fields
    return (
     <React.Fragment>
       <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <TextField type="text" placeholder="Email" className={classes.textField} name="email" value={email} />
                    <TextField type="password" placeholder="Password" className={classes.textField} name="password" value={password} />
                    <br></br>
                      <Button variant="contained" color="primary" className={classes.button} type="submit">Log In</Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
     </React.Fragment>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  },
  paper: {
    display: 'flex',
    padding: theme.spacing.unit * 3,
    color: theme.palette.text.secondary,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    paddingBottom: 15,
    width: 300
  },
  button: {
    margin: theme.spacing.unit,
    width: 300
  }
})

export default withRouter(withStyles(styles)(Login));
