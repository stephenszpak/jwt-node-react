import React from 'react';
import apiService from '../../apiService'
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
       <Navbar />
        <div className={classes.root}>

        <Grid container justify="center">
          <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
            <TextField type="text" placeholder="Email" name="email" value={email} />
            <TextField type="password" placeholder="Password" name="password" value={password} />
              <Button color="primary" className={classes.button} type="submit">Log In</Button>
          </form>
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
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
})

export default withRouter(withStyles(styles)(Login));
